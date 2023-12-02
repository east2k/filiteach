import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="absolute flex flex-row justify-between w-full m-auto py-5 px-12 top-0 left-1/2 -translate-x-1/2">
            <h1 className="text-purple-700 font-extrabold text-4xl">
                FiliTeach
            </h1>
            <Navigation />
            <div className="flex flex-row gap-5">
                <Link
                    href="/login"
                    className="flex justify-center items-center p-5 bg-purple-500 hover:bg-purple-400 h-5 text-lg text-white rounded-lg"
                >
                    Login
                </Link>
                <Link
                    href="/register"
                    className="flex justify-center items-center p-5 bg-purple-500 hover:bg-purple-400 h-5 text-lg text-white rounded-lg"
                >
                    Sign Up
                </Link>
                <Link
                    href="/learning"
                    className="flex justify-center items-center p-5 bg-purple-500 hover:bg-purple-400 h-5 text-lg text-white rounded-lg"
                >
                    Dev Log
                </Link>
            </div>
        </header>
    );
};
