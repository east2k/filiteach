"use client";

import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import Link from "next/link";
import { BookOpenIcon, PencilIcon } from "@heroicons/react/20/solid";

const LoginPage = () => {
    const [changeUser, setChangeUser] = useState("Student");

    const handleChangeUser = (currentUser) => {
        if (currentUser === "Student") {
            setChangeUser("Teacher");
        } else {
            setChangeUser("Student");
        }
    };

    return (
        <section className="bg-gradient-to-t from-white via-mantis-200 to-white">
            <div
                className={`max-w-screen-2xl m-auto flex justify-center items-center px-12 py-52 mt-auto ${
                    changeUser === "Student" ? "flex-row" : "flex-row-reverse"
                }`}
            >
                <div className="w-1/2 p-5 bg-white flex flex-col justify-center items-center">
                    {changeUser === "Student" ? (
                        <>
                            <div>
                                <BookOpenIcon width={50} />
                            </div>
                            <h1 className="text-5xl tracking-wider text-center px-1 py-5 bg-white rounded-md">
                                Start Learning Now!
                            </h1>
                        </>
                    ) : (
                        <>
                            <div>
                                <PencilIcon width={50} />
                            </div>
                            <h1 className="text-5xl tracking-wider text-center px-1 py-5 bg-white rounded-md">
                                Start Teaching Now!
                            </h1>
                        </>
                    )}
                </div>
                <div className="w-1/2 flex flex-col">
                    <button
                        onClick={() => handleChangeUser(changeUser)}
                        className="border border-mantis-500 bg-mantis-200 text-black hover:bg-mantis-300 hover:text-white px-5 py-2 rounded-md mb-5 tracking-wider"
                    >
                        Login as a{" "}
                        {changeUser === "Teacher" ? "Student" : "Teacher"}?
                    </button>
                    <div className="w-2/3 m-auto px-10 py-7 bg-white rounded-lg shadow-sm">
                        <h1 className="text-2xl mb-5 text-center font-semibold uppercase tracking-widest">
                            Login as a {changeUser}
                        </h1>
                        <LoginForm />
                        <div className="text-xs mt-5 flex flex-row justify-center">
                            <p>
                                Do not have an account yet?
                                <Link
                                    className="ml-1 text-mantis-500"
                                    href="/register"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
