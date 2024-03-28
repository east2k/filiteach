"use client";

import Link from "next/link";
import Logo from "./Logo";
import { studentLinks, teachLinks, adminLinks } from "@/constants/side-bar";
import LogoutButton from "./CredentialComponents/LogoutButton";
import {
    ArrowLeftOnRectangleIcon,
    ArrowRightCircleIcon,
    ArrowRightOnRectangleIcon,
    RectangleStackIcon,
} from "@heroicons/react/20/solid";
import { GPTModal } from "./GPTModal";
import ChatBotButton from "./ChatBotButton";
import ChangeProfile from "./ChangeProfile";
import { useState } from "react";

const SideBarToggle = ({ user }) => {
    const [toggleBar, setToggleBar] = useState(false);

    const handleToggleSidebar = () => {
        setToggleBar(!toggleBar);
    };

    return (
        <>
            <button
                onClick={handleToggleSidebar}
                className={`${
                    !toggleBar && "hidden"
                }  flex flex-row justify-center items-center md:hidden fixed w-auto h-10 top-5 right-8 z-30 px-5 py-2 rounded-lg bg-mantis-200`}
            >
                Open Navigation Here
                <ArrowRightOnRectangleIcon className="w-10 h-10 rounded" />
            </button>
            <button
                onClick={handleToggleSidebar}
                className={`${
                    toggleBar && "hidden"
                }  flex flex-row justify-center items-center md:hidden fixed w-auto h-10 top-5 right-8 z-30 px-5 py-2 rounded-lg bg-mantis-200`}
            >
                Close Navigation
                <ArrowRightOnRectangleIcon className="w-10 h-10 rounded" />
            </button>
            <div
                className={`${
                    !toggleBar ? "-left-full md:left-0" : "left-0 md:left-0"
                } transition-all flex flex-col h-screen md:w-auto md:min-w-[300px] w-screen py-3 px-3 border-r md:relative fixed bg-white z-20`}
            >
                <div className="px-1">
                    <Logo />
                </div>
                <ChangeProfile
                    userID={user.id}
                    profileImage={user.profile_image}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    role={user.role}
                />
                <Links
                    handleToggleSidebar={handleToggleSidebar}
                    links={
                        user.role === "student"
                            ? studentLinks
                            : user.role === "teacher"
                            ? teachLinks
                            : adminLinks
                    }
                />
                <div className="mt-auto flex flex-col ">
                    {user.role === "admin" && (
                        <Link
                            className="flex flex-row gap-3 items-center p-2 rounded text-shark-900 hover:bg-mantis-400 hover:text-white"
                            href={"/learning/dataset"}
                        >
                            <RectangleStackIcon width={24} />
                            Add Data to LoakanBot
                        </Link>
                    )}
                    <GPTModal />
                    <ChatBotButton />
                    <LogoutButton />
                </div>
            </div>
        </>
    );
};
const Links = ({ links, handleToggleSidebar }) => {
    return (
        <ul
            className="mt-10 flex flex-col gap-2 text-3xl md:text-base"
            onClick={handleToggleSidebar}
        >
            {links.map((item, index) => {
                const Icon = item.icon;
                return (
                    <li key={index}>
                        <Link
                            className="flex flex-row gap-3 items-center p-2 rounded text-shark-900 hover:bg-mantis-400 hover:text-white"
                            href={item.link}
                        >
                            <Icon width={24} />
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default SideBarToggle;
