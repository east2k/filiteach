"use client";

import {
    QuestionMarkCircleIcon,
    RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import { useRef, useState } from "react";

export const GPTClient = () => {
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
            await generateAnswer(searchText);
        }
        inputRef.current.value = "";
        setLoading(false);
    };
    const generateAnswer = async (prompt) => {
        try {
            const res = await fetch(location.origin + "/gpt", {
                method: "POST",
                body: JSON.stringify({ prompt }),
            });

            if (!res.ok) {
                const errorMessage = await res.text();
                console.error(`Error: ${res.status} - ${errorMessage}`);
                toastError();
                return;
            }

            const data = await res.json();
            console.log(data);
            setAnswers((currentAnswer) => [
                ...currentAnswer,
                data.choices[0].message.content,
            ]);
        } catch (error) {
            console.error("Unexpected error:", error);
            toastError();
        }
    };

    return (
        <>
            <div className="flex-1 h-2/3 overflow-y-auto">
                <div className="flex flex-row gap-1 item-center border-b p-5">
                    <RocketLaunchIcon className="w-5 text-flush-orange-500" />
                    <h1>FiliTeach Chatbot</h1>
                </div>
                {questions.map((question, index) => {
                    const answer = answers[index];

                    const isLoading = loading && !answer;

                    return (
                        <div key={index} className="p-5 space-y-2">
                            <div className="flex flex-row items-center text-flush-orange-500 opacity-70">
                                <QuestionMarkCircleIcon className="w-4" />
                                <h1 className="text-sm font-semibold">
                                    {question}
                                </h1>
                            </div>
                            {isLoading ? <h1>Loading...</h1> : <p>{answer}</p>}
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
