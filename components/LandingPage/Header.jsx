import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import Logo from "../Logo";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

export const Header = () => {
  return (
    <header className="absolute flex flex-row gap-20 w-full m-auto py-5 px-12 top-0 left-1/2 -translate-x-1/2 max-w-screen-2xl ">
      <Logo />
      <Navigation />
      <div className="flex flex-row gap-5 ml-auto">
        <Link
          href="/login"
          className="flex justify-center gap-1 items-center hover:text-600 hover:text-mantis-500"
        >
          Login
          <ArrowRightOnRectangleIcon height={20} />
        </Link>
        <Link
          href="/register"
          className="flex justify-center items-center  bg-shark-900 hover:bg-mantis-500 text-lg text-white rounded-full h-9.5 px-4"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};
