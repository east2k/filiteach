"use client";

import { useFormValidation } from "@/hooks/validations/useFormValidation";

export const LoginForm = () => {
  const { values, errors, submit, handleFormChange, handleFormSubmit } =
    useFormValidation(
      {
        email: "",
        password: "",
      },
      "login",
    );

  return (
    <form className="flex flex-col" onSubmit={handleFormSubmit}>
      {errors.formError && (
        <p className="text-red-400 mb-4 text-center">{errors.formError}</p>
      )}
      {!errors.formError && submit && (
        <p className="text-green-500 mb-4 text-center">Register Successful</p>
      )}
      <div className="flex flex-col mb-4">
        <h2 className="mb-1 text-sm text-zinc-500 font-medium">Email</h2>
        <input
          className={`border rounded-md px-2 py-1 ${
            errors.email && "border-red-300"
          }`}
          id="email"
          name="email"
          placeholder="Enter here"
          type="email"
          value={values.email}
          onChange={handleFormChange}
        />
        {errors.email && (
          <p className="text-sm text-red-400 px-2">{errors.email}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <h2 className="mb-1 text-sm text-zinc-500 font-medium">Password</h2>
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
          <p className="text-sm text-red-400 px-2">{errors.password}</p>
        )}
      </div>
      <div className="flex flex-row items-center ml-auto text-zinc-500 mb-5">
        <label htmlFor="remember" className="mr-2 text-sm">
          Remember Me
        </label>
        <input id="remember" type="checkbox" name="remember" />
      </div>
      {errors.matchingUser && (
        <p className="text-center text-red-400">{errors.matchingUser}</p>
      )}
      <button className="bg-mantis-400 mb-1 text-white px-5 py-2 rounded-md">
        Login as a Student
      </button>
      <button className="bg-mantis-400 mb-1 text-white px-5 py-2 rounded-md">
        Login as a Teacher
      </button>
    </form>
  );
};
