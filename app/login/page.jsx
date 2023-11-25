import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <section className="bg-gradient-to-t from-white via-purple-200 to-white">
            <div className="max-w-screen-2xl m-auto flex justify-center items-center px-12 py-52 mt-auto">
                <div className="w-1/2">
                    <h1 className="text-5xl tracking-wider text-center px-1 py-5 bg-white rounded-md">
                        Start Learning Now!
                    </h1>
                </div>
                <div className="w-1/2 flex flex-col">
                    <div className="w-2/3 m-auto px-10 py-7 bg-white rounded-lg shadow-sm">
                        <h1 className="text-2xl mb-5 text-center font-semibold uppercase tracking-widest">
                            Login
                        </h1>
                        <LoginForm />
                        <div className="text-xs mt-5 flex flex-row justify-center">
                            <p>
                                Do not have an account yet?
                                <Link
                                    className="ml-1 text-purple-500"
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

export default Login;
