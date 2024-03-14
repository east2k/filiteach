"use client";

import React from "react";
import { LoginForm } from "./LoginForm";
import Link from "next/link";

const LoginPage = () => {
    return (
        <section className="bg-gradient-to-t from-white via-mantis-200 to-white">
            <div className="max-w-screen-2xl m-auto flex justify-center items-center px-12 py-52 mt-auto flex-row">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="w-full lg:w-2/3 m-auto px-10 py-7 bg-white rounded-lg shadow-sm">
                        <LoginForm />
                        <div className="text-xs mt-5 flex flex-row justify-center">
                            <p className="text-2xl md:text-base">
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
