"use client";

import {
    PlayIcon,
    QuestionMarkCircleIcon,
    RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import { useRef, useState } from "react";

import { stripIndent, oneLine } from "common-tags";
import { supabase } from "@/lib/supabase-client";

export const ChatSearch = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const toastError = () => {
        alert("error");
    };

    const handleSearch = async () => {
        setLoading(true);
        const searchText = inputRef.current.value;

        if (searchText && searchText.trim()) {
            setQuestions((currentQuestions) => [
                ...currentQuestions,
                searchText,
            ]);
            const res = await fetch(location.origin + "/embedding", {
                method: "POST",
                body: JSON.stringify({ text: searchText.replace(/\n/g, " ") }),
            });

            if (res.status !== 200) {
                toastError();
            } else {
                const data = await res.json();

                const { data: documents } = await supabase.rpc(
                    "match_documents",
                    {
                        query_embedding: data.embedding,
                        match_threshold: 0.8,
                        match_count: 10,
                    }
                );

                let tokenCount = 0;
                let contextText = "";
                for (let i = 0; i < documents.length; i++) {
                    const document = documents[i];
                    const content = document.content;
                    tokenCount += document.token;

                    if (tokenCount > 1500) {
                        break;
                    }
                    contextText += `${content.trim()}\n--\n`;
                }
                if (contextText) {
                    const prompt = generatePrompt(contextText, searchText);
                    await generateAnswer(prompt);
                } else {
                    setAnswers((currentAnswer) => [
                        ...currentAnswer,
                        "Sorry there's no context related to this question. Please ask something else.",
                    ]);
                }
            }
        }
        inputRef.current.value = "";
        setLoading(false);
    };
    const generateAnswer = async (prompt) => {
        const res = await fetch(location.origin + "/chat", {
            method: "POST",
            body: JSON.stringify({ prompt }),
        });
        console.log(res);

        if (res.status !== 200) {
            toastError();
        } else {
            const data = await res.json();
            setAnswers((currentAnswer) => [
                ...currentAnswer,
                data.choices[0].text,
            ]);
        }
    };

    const generatePrompt = (contextText, searchText) => {
        const prompt = stripIndent`${oneLine`
        You are a very enthusiastic Filiteach representative who loves
        to help people! Given the following sections from the Filiteach
        documentation, answer the question using only that information,
        outputted in markdown format. If you are unsure and the answer
        is not explicitly written in the documentation, say
        "Sorry, I don't know how to help with that."`}
    
        Context sections:
        ${contextText}
    
        Question: """
        ${searchText}
        """
    
        Answer as markdown (including related code snippets if available):
      `;
        return prompt;
    };

    return (
        <>
            <div className="flex-1 h-2/3 overflow-y-auto">
                <div className="flex flex-row gap-1 item-center border-b p-5">
                    <RocketLaunchIcon className="w-5 text-mantis-500" />
                    <h1>FiliTeach Chatbot</h1>
                </div>
                {questions.map((question, index) => {
                    const answer = answers[index];

                    const isLoading = loading && !answer;

                    return (
                        <div key={index} className="p-5 space-y-2">
                            <div className="flex flex-row items-center text-mantis-500 opacity-70">
                                <QuestionMarkCircleIcon className="w-4" />
                                <h1 className="text-sm font-semibold">
                                    {question}
                                </h1>
                            </div>
                            {isLoading ? (
                                <div className="flex flex-row items-center">
                                    <PlayIcon className="w-3 h-3 animate-spin" />
                                    <h1>Loading...</h1>
                                </div>
                            ) : (
                                <p>{answer}</p>
                            )}
                        </div>
                    );
                })}
            </div>
            <input
                ref={inputRef}
                className="px-5 py-2 w-full mt-top border"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
                type="text"
                placeholder="Enter here..."
            />
        </>
    );
};
