import { BellIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
    title: "FiliTeach - Learning",
    description: "Application",
};

export default function LearningLayout({ children }) {
    return (
        <section className="flex flex-row w-full m-auto">
            <div className="fixed left-0 top-0 flex flex-col h-screen pt-4 shadow-2xl bg-purple-600 items-center w-2/12">
                <div className="flex items-center justify-center bg-white rounded-full w-32 h-auto">
                    <Image
                        className="object-cover w-full h-full"
                        src="/assets/images/filiteach-logo-light.png"
                        alt="Logo"
                        width={325}
                        height={325}
                    />
                </div>
                <nav className="w-full mt-10">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link
                                className="text-center block text-black bg-purple-50 w-full px-5 py-3 rounded-sm hover:bg-purple-200"
                                href="/learning"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-center block text-black bg-purple-50 w-full px-5 py-3 rounded-sm hover:bg-purple-200"
                                href="/learning/courses"
                            >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-center block text-black bg-purple-50 w-full px-5 py-3 rounded-sm hover:bg-purple-200"
                                href="#"
                            >
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-center block text-black bg-purple-50 w-full px-5 py-3 rounded-sm hover:bg-purple-200"
                                href="#"
                            >
                                Asigned to me
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-center block text-black bg-purple-50 w-full px-5 py-3 rounded-sm hover:bg-purple-200"
                                href="#"
                            >
                                Roadmap
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-center block text-black bg-purple-50 w-full px-5 py-3 rounded-sm hover:bg-purple-200"
                                href="#"
                            >
                                Help
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link
                    href="#"
                    className="mt-auto bg-purple-50 w-full  px-3 py-14 text-center"
                >
                    ChatBot
                </Link>
                <button className="mt-auto text-white bg-red-400 text-xl w-full px-3 py-5">
                    Log Out
                </button>
            </div>
            <div className="w-10/12 ml-auto">
                <div className="w-full">
                    <div className="bg-purple-50 shadow-sm">
                        <div className="flex flex-row items-center py-3 px-7">
                            <h1 className="text-4xl font-medium">Dashboard</h1>
                            <div className="flex flex-row ml-auto">
                                <button className="mr-3">
                                    <BellIcon className="w-7 text-zinc-500" />
                                </button>
                                <div className="flex flex-row items-center gap-4 hover:bg-purple-100 px-4 py-1 rounded-full cursor-pointer">
                                    <p className="">Junior</p>
                                    <div className="flex justify-center items-center w-14 h-14 rounded-full overflow-hidden">
                                        <Image
                                            className="object-cover w-auto h-full"
                                            src="/assets/images/feature-placeholder.jpeg"
                                            alt="Profile"
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </section>
    );
}
