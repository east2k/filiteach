"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SubjectChecker = ({ assignedSubject }) => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(3); // Initial countdown value

    useEffect(() => {
        if (!assignedSubject) {
            const timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1); // Decrease countdown by 1 every second
            }, 1000); // Update countdown every second

            // Redirect to "/learning" after 3 seconds
            const redirectTimer = setTimeout(() => {
                router.push("/learning");
            }, 3000);

            // Clear intervals when component unmounts
            return () => {
                clearInterval(timer);
                clearTimeout(redirectTimer);
            };
        }
    }, [assignedSubject, router]);
    return (
        <>
            {!assignedSubject && (
                <div className="fixed flex items-center justify-center top-0 left-0 z-10 w-full h-full bg-shark-500 bg-opacity-50">
                    <p className="text-2xl text-center bg-white p-2 rounded-md">
                        Must have a subject Assigned. Wait for admin to assign
                        subject. <br />
                        Redirecting back to dashboard in {countdown} seconds...
                    </p>
                </div>
            )}
        </>
    );
};

export default SubjectChecker;
