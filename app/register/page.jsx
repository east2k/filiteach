import readUserSession from "@/auth-actions/readUserSession";
import { RegisterForm } from "@/components/CredentialComponents/RegisterForm";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Register = async () => {
    const { data } = await readUserSession();
    if (data.session) {
        return redirect("/learning");
    }

    return (
        <section className="bg-gradient-to-t from-white via-mantis-200 to-white">
            <div className="max-w-screen-2xl m-auto flex justify-center items-center px-12 py-52 mt-auto">
                <div className="w-full md:w-2/3 flex flex-col">
                    <div className="w-full md:w-2/3 m-auto px-10 py-7 bg-white rounded-lg shadow-lg">
                        <h1 className="text-5xl md:text-2xl mb-5 text-center font-semibold uppercase tracking-widest">
                            Register
                        </h1>
                        <RegisterForm />
                        <div className="text-3xl md:text-xs mt-5 flex flex-row justify-center">
                            <p className="">
                                Already have an account?
                                <Link
                                    className="ml-1 text-mantis-500 text-xl"
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

export default Register;
