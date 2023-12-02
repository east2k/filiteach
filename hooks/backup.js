"use client";

import { supabase } from "@/lib/supabase-client";
import { useEffect, useState } from "react";

const userTeacher = {
    role: "teacher",
    name: "Adam Sandler",
    profilePic: "/assets/svg/teacher-2.svg",
};

const userStudent = {
    role: "student",
    name: "Adam Sandler",
    profilePic: "/assets/images/feature-placeholder.jpeg",
    score: 500,
};

export const useGetUser = () => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const retrieveUser = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                setCurrentUser(data.session.user);
            } catch (error) {}
        };

        retrieveUser();
    }, []);
    console.log(currentUser);

    if (currentUser) {
        return {
            user: {
                role: "student",
                name: `${currentUser.user_metadata.firstName} ${currentUser.user_metadata.lastName}`,
                profilePic: currentUser.user_metadata.profileImage,
                score: 500,
            },
        };
    } else {
        return false;
    }
};
