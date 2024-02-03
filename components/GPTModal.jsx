"use client";

const { useState, useRef } = require("react");
import {
    RocketLaunchIcon,
    PlayIcon,
    QuestionMarkCircleIcon,
    ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

export const GPTModal = () => {
    const pathname = usePathname();
    const [show, setShow] = useState(false);

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const logRef = useRef();

    const toastError = () => {
        alert("error");
    };

    const handleSearch = async () => {
        setLoading(true);
        const searchText = inputRef.current.value;
        inputRef.current.value = "";

        if (searchText && searchText.trim()) {
            setQuestions((currentQuestions) => [
                ...currentQuestions,
                searchText,
            ]);
            await generateAnswer(searchText);
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
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
            {pathname.includes("quiz") ? (
                <h1 className="flex flex-row gap-3 items-center text-center p-2 rounded text-red-300">
                    <ExclamationCircleIcon width={24} />
                    ChatGPT  disabled during quiz
                </h1>
            ) : (
                <>
                    <button
                        onClick={() => setShow(true)}
                        className="flex flex-row gap-3 items-center p-2 rounded text-shark-900 hover:bg-mantis-400 hover:text-white"
                    >
                        <RocketLaunchIcon width={24} />
                        ChatGPT
                    </button>
                    {show && (
                        <div
                            class="relative z-10"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div class="flex items-center">
                                                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <RocketLaunchIcon
                                                        width={24}
                                                    />
                                                </div>
                                                <h3
                                                    class="text-base font-semibold leading-6 text-gray-900 ml-2"
                                                    id="modal-title"
                                                >
                                                    FiliTeach Chatbot
                                                </h3>
                                                <button
                                                    onClick={() =>
                                                        setShow(false)
                                                    }
                                                    type="button"
                                                    class="ml-auto inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                                                >
                                                    X
                                                </button>
                                            </div>
                                            <div class="mt-2">
                                                <div className="flex items-center justify-center w-[60VW] h-[60VH]">
                                                    <div className="flex flex-col border w-full h-full  ">
                                                        <div
                                                            className="flex-1 h-2/3 overflow-y-auto"
                                                            ref={logRef}
                                                        >
                                                            {questions.map(
                                                                (
                                                                    question,
                                                                    index
                                                                ) => {
                                                                    const answer =
                                                                        answers[
                                                                            index
                                                                        ];

                                                                    const isLoading =
                                                                        loading &&
                                                                        !answer;

                                                                    return (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="p-5 space-y-2"
                                                                        >
                                                                            <div className="flex flex-row items-center text-mantis-500 opacity-70">
                                                                                <QuestionMarkCircleIcon className="w-4" />
                                                                                <h1 className="text-sm font-semibold">
                                                                                    {
                                                                                        question
                                                                                    }
                                                                                </h1>
                                                                            </div>
                                                                            {isLoading ? (
                                                                                <div className="flex flex-row items-center">
                                                                                    <PlayIcon className="w-3 h-3 animate-spin" />
                                                                                    <h1>
                                                                                        Loading...
                                                                                    </h1>
                                                                                </div>
                                                                            ) : (
                                                                                <p>
                                                                                    {
                                                                                        answer
                                                                                    }
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-3 flex items-center">
                                            <input
                                                ref={inputRef}
                                                className="px-5 py-2 flex-1 mt-top border"
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        handleSearch();
                                                    }
                                                }}
                                                type="text"
                                                placeholder="Enter here..."
                                                disabled={loading}
                                            />
                                            <button
                                                disabled={loading}
                                                onClick={handleSearch}
                                                type="button"
                                                class="inline-flex ml-3 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 "
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};
