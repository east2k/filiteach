"use client";

import { useFormValidation } from "@/hooks/useFormValidation";

export const LoginForm = () => {
    const { values, errors, isSubmitting, handleFormChange, handleFormSubmit } =
        useFormValidation(
            {
                username: "",
                password: "",
            },
            "login"
        );
    return (
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
            <div className="flex flex-col mb-4">
                <h2 className="mb-1 text-sm text-zinc-500 font-medium">
                    Username
                </h2>
                <input
                    className={`border rounded-md px-2 py-1 ${
                        errors.username && "border-red-300"
                    }`}
                    id="username"
                    name="username"
                    placeholder="Enter here"
                    type="text"
                    onChange={handleFormChange}
                />
                {errors.username && (
                    <p className="text-sm text-red-400 px-2">
                        {errors.username}
                    </p>
                )}
            </div>
            <div className="flex flex-col mb-4">
                <h2 className="mb-1 text-sm text-zinc-500 font-medium">
                    Password
                </h2>
                <input
                    className={`border rounded-md px-2 py-1 ${
                        errors.password && "border-red-300"
                    }`}
                    id="password"
                    name="password"
                    placeholder="Enter 5 characters or more"
                    type="password"
                    onChange={handleFormChange}
                />
                {errors.password && (
                    <p className="text-sm text-red-400 px-2">
                        {errors.password}
                    </p>
                )}
            </div>
            <div className="flex flex-row items-center ml-auto text-zinc-500 mb-5">
                <label htmlFor="remember" className="mr-2 text-sm">
                    Remember Me
                </label>
                <input id="remember" type="checkbox" name="remember" />
            </div>
            {errors.matchingUser && (
                <p className="text-center text-red-400">
                    {errors.matchingUser}
                </p>
            )}
            <button className="bg-purple-400 text-white px-5 py-2 rounded-md">
                Login
            </button>
        </form>
    );
};
