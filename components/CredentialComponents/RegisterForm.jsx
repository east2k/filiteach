"use client";

import { useFormValidation } from "@/hooks/validations/useFormValidation";

export const RegisterForm = () => {
    const { values, errors, submit, handleFormChange, handleFormSubmit } =
        useFormValidation(
            {
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                confirmPassword: "",
                role: "student",
                schoolID: "",
            },
            "register"
        );

    return (
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
            {errors.formError && (
                <p className="text-red-400 mb-4 text-center">
                    {errors.formError}
                </p>
            )}
            {!errors.formError && submit && (
                <p className="text-green-500 mb-4 text-center">
                    Register Successful
                </p>
            )}
            <div className="flex flex-col mb-4">
                <h2 className="mb-1 md:text-base text-2xl text-zinc-500 font-medium">
                    Email
                </h2>
                <input
                    className={`border rounded-md px-2 py-1 ${
                        errors.email && "border-red-300"
                    }`}
                    id="email"
                    name="email"
                    placeholder="Enter your email here"
                    type="email"
                    minLength="6"
                    value={values.email}
                    onChange={handleFormChange}
                />
                {errors.email && (
                    <p className="text-sm text-red-400 px-2">{errors.email}</p>
                )}
            </div>
            <div className="flex flex-wrap flex-row justify-between">
                <div className="flex flex-col mb-4">
                    <h2 className="mb-1 md:text-base text-2xl text-zinc-500 font-medium">
                        First Name
                    </h2>
                    <input
                        className={`border rounded-md px-2 py-1 ${
                            errors.firstName && "border-red-300"
                        }`}
                        id="firstName"
                        name="firstName"
                        placeholder="Enter here"
                        type="text"
                        value={values.firstName}
                        onChange={handleFormChange}
                    />
                    {errors.firstName && (
                        <p className="text-sm text-red-400 px-2">
                            {errors.firstName}
                        </p>
                    )}
                </div>

                <div className="flex flex-col mb-4">
                    <h2 className="mb-1 md:text-base text-2xl text-zinc-500 font-medium">
                        Last Name
                    </h2>
                    <input
                        className={`border rounded-md px-2 py-1 ${
                            errors.lastName && "border-red-300"
                        }`}
                        id="lastName"
                        name="lastName"
                        placeholder="Enter here"
                        type="text"
                        value={values.lastName}
                        onChange={handleFormChange}
                    />
                    {errors.lastName && (
                        <p className="text-sm text-red-400 px-2">
                            {errors.lastName}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex flex-col mb-4">
                <h2 className="mb-1 md:text-base text-2xl text-zinc-500 font-medium">
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
                    value={values.password}
                    onChange={handleFormChange}
                />
                {errors.password && (
                    <p className="text-sm text-red-400 px-2">
                        {errors.password}
                    </p>
                )}
            </div>
            <div className="flex flex-col mb-4">
                <h2 className="mb-1 md:text-base text-2xl text-zinc-500 font-medium">
                    Confirm Password
                </h2>
                <input
                    className={`border rounded-md px-2 py-1 ${
                        errors.confirmPassword && "border-red-300"
                    }`}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter 5 characters or more"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleFormChange}
                />
                {errors.confirmPassword && (
                    <p className="text-sm text-red-400 px-2">
                        {errors.confirmPassword}
                    </p>
                )}
            </div>
            {values.role === "student" && (
                <div className="flex flex-col mb-4">
                    <h2 className="mb-1 md:text-base text-2xl text-zinc-500 font-medium">
                        School ID / LRN
                    </h2>
                    <input
                        className={`border rounded-md px-2 py-1 ${
                            errors.schoolID && "border-red-300"
                        }`}
                        id="schoolID"
                        name="schoolID"
                        placeholder="Enter LRN here"
                        type="number"
                        value={values.schoolID}
                        onChange={handleFormChange}
                    />
                    {errors.schoolID && (
                        <p className="text-sm text-red-400 px-2">
                            {errors.schoolID}
                        </p>
                    )}
                </div>
            )}
            <div className="flex flex-col mb-4">
                <h2 className="mb-1 md:text-base text-2xl text-zinc-500 font-medium">
                    Role:
                </h2>
                <div className="flex justify-evenly">
                    <div className="flex flex-row items-center">
                        <input
                            className="w-5 h-5"
                            id="student"
                            name="role"
                            type="radio"
                            value="student"
                            checked={values.role === "student"}
                            onChange={handleFormChange}
                        />
                        <label className="text-xl ml-2" htmlFor="student">
                            Student
                        </label>
                    </div>
                    <div className="flex flex-row items-center">
                        <input
                            className="w-5 h-5"
                            id="teacher"
                            name="role"
                            type="radio"
                            value="teacher"
                            checked={values.role === "teacher"}
                            onChange={handleFormChange}
                        />
                        <label className="text-xl ml-2" htmlFor="teacher">
                            Teacher
                        </label>
                    </div>
                </div>
            </div>
            {errors.matchingUser && (
                <p className="text-center text-red-400">
                    {errors.matchingUser}
                </p>
            )}
            <button className="bg-mantis-400 text-white px-5 py-2 rounded-md text-xl">
                Register
            </button>
        </form>
    );
};
