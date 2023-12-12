import { GPTClient } from "@/components/GPTClient";
import React from "react";

const ChatGPT = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col border w-2/3 h-2/3">
                <GPTClient />
            </div>
        </div>
    );
};

export default ChatGPT;
