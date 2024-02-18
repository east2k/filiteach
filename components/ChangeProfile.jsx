"use client";

import useHandleChangeProfile from "@/hooks/handlers/useHandleChangeProfile";
import { UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState } from "react";

const ChangeProfile = ({ userID, profileImage, firstName, lastName, role }) => {
    const { changeProfile, changingProfile, changingError } =
        useHandleChangeProfile();

    const handleChangeProfile = async (e) => {
        changeProfile(userID, e.target.files[0]);
    };

    return (
        <div className="flex flex-col justify-center items-center text-center mt-10 relative">
            {changingProfile && (
                <div className="fixed w-full h-full z-10 left-0 top-0 bg-gray-400 bg-opacity-50 flex items-center justify-center">
                    <div className="flex flex-row bg-green-500 px-4 py-2 rounded-md item-center justify-center">
                        <p className="text-white mr-5">Uploading Picture</p>
                        <Image
                            className="animate-spin"
                            src="/assets/svg/loading.svg"
                            alt="Loading"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            )}
            <input
                className="hidden"
                id="profile"
                name="profile"
                onChange={handleChangeProfile}
                type="file"
                accept="image/*"
            />
            <label
                htmlFor="profile"
                className="cursor-pointer flex w-10 h-10 max-w-[50px] max-h-[50px] justify-center items-center border hover:outline outline-1 outline-mantis-400 rounded-full overflow-hidden"
            >
                {profileImage ? (
                    <Image
                        className="object-cover w-full h-full"
                        alt="Users Profile"
                        src={profileImage}
                        width={24}
                        height={24}
                    />
                ) : (
                    <UserIcon
                        width={24}
                        className="bg-mantis-500 text-white w-full h-full object-cover p-2"
                    />
                )}
            </label>
            <p className="text-2xl">
                {firstName} {lastName}
            </p>
            <p className="text-xl capitalize font-extrabold">{role}</p>
        </div>
    );
};

export default ChangeProfile;
