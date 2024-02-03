"use client";

import {
    ChatBubbleOvalLeftIcon,
    ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ChatBotButton = () => {
    const pathname = usePathname();
    console.log(pathname.includes("quiz"));
    return (
        <>
            {pathname.includes("quiz") ? (
                <h1 className="flex flex-row gap-3 items-center text-center p-2 rounded text-red-300">
                    <ExclamationCircleIcon width={24} />
                    Chatbot disabled during quiz
                </h1>
            ) : (
                <Link
                    className="flex flex-row gap-3 items-center p-2 rounded text-shark-900 hover:bg-mantis-400 hover:text-white"
                    href={"/learning/chatbot"}
                >
                    <ChatBubbleOvalLeftIcon width={24} />
                    Chatbot
                </Link>
            )}
        </>
    );
};

export default ChatBotButton;
