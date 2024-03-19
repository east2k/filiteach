"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import Logo from "../Logo";
import {
    ArrowRightOnRectangleIcon,
    EllipsisHorizontalIcon,
    XMarkIcon,
} from "@heroicons/react/20/solid";

export const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggleNav = () => {
        console.log(toggle);
        setToggle(!toggle);
    };

    return (
        <>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-screen">
                <header className="relative flex md:flex-row flex-col justify-between items-center gap-20 w-full m-auto py-5 md:px-12 px-7 max-w-screen-2xl z-20 bg-white">
                    <Logo />
                    <button
                        onClick={handleToggleNav}
                        className={`${
                            toggle ? "hidden" : "flex md:hidden"
                        }  flex md:flex-row justify-between fixed top-5 right-5`}
                    >
                        <EllipsisHorizontalIcon className="w-12 h-12" />
                    </button>
                    <div
                        className={`${
                            toggle ? "flex" : "hidden md:flex"
                        } md:flex md:flex-row flex-col justify-beweten w-screen h-screen md:w-auto md:h-auto bg-mantis-400 md:bg-transparent fixed top-0 md:relative ml-auto z-50`}
                    >
                        <button
                            onClick={handleToggleNav}
                            className="block md:hidden fixed top-5 right-5"
                        >
                            <XMarkIcon className="w-12 h-12" />
                        </button>
                        <Navigation handleToggleNav={handleToggleNav} />
                        <div className="flex flex-col md:flex-row gap-5 md:ml-auto my-2 h-10">
                            <Link
                                href="/login"
                                className="flex justify-center gap-1 items-center hover:text-600 hover:text-mantis-500 md:text-black text-white"
                                onClick={() => setToggle(false)}
                            >
                                Login
                                <ArrowRightOnRectangleIcon height={20} />
                            </Link>
                            <Link
                                href="/register"
                                className="flex justify-center items-center bg-shark-700 md:py-auto py-5  md:bg-mantis-400 hover:bg-mantis-500 text-lg md:text-black text-white rounded-full h-9.5 px-4"
                                onClick={() => setToggle(false)}
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};
