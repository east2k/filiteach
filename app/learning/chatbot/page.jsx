import { ChatSearch } from "@/components/ChatSearch";
import React from "react";

const ChatBot = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col border w-2/3 h-2/3">
                <ChatSearch />
            </div>
        </div>
    );
};

export default ChatBot;
