import { RegisterForm } from "@/components/RegisterForm";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <section className="bg-gradient-to-t from-white via-purple-200 to-white">
            <div className="max-w-screen-2xl m-auto flex justify-center items-center px-12 py-52 mt-auto">
                <div className="w-2/3 flex flex-col">
                    <div className="w-2/3 m-auto px-10 py-7 bg-white rounded-lg shadow-lg">
                        <h1 className="text-2xl mb-5 text-center font-semibold uppercase tracking-widest">
                            Register
                        </h1>
                        <RegisterForm />
                        <div className="text-xs mt-5 flex flex-row justify-center">
                            <p>
                                Already have an account?
                                <Link
                                    className="ml-1 text-purple-500"
                                    href="/login"
                                >
                                    Login
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
