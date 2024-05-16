"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ExpandCourseButton from "./ExpandCourseButton";
import Image from "next/image";
import useEnrollCourse from "@/hooks/handlers/useHandleEnroll";

const ExpandCourse = ({ user, data, newData }) => {
    const { enrollCourse, checkIfEnrolled, enrolling } = useEnrollCourse();
    const [enrolled, setEnrolled] = useState(false);

    useEffect(() => {
        const checkEnrollment = async () => {
            const test = await checkIfEnrolled(user.id, data.id);
            if (test) {
                setEnrolled(true);
            } else {
                setEnrolled(false);
            }
        };

        checkEnrollment();
    }, [user.id, data.id, checkIfEnrolled]);

    return (
        <div className="relative flex flex-row px-7 py-5 w-full h-full md:my-auto my-16">
            {enrolling && (
                <div className="fixed z-10 flex justify-center items-center bg-slate-400 w-full h-full top-0 left-0 bg-opacity-50">
                    <div className="flex flex-row bg-green-500 px-4 py-2 rounded-md item-center justify-center">
                        <p className="text-white mr-5">Enrolling</p>
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
            <div className="w-2/3">
                <div className="flex justify-center items-center w-full h-full max-h-96 overflow-hidden pr-5 mt-10">
                    <Image
                        className="w-full h-auto object-cover"
                        src={data.thumbnail}
                        alt="Course"
                        width={750}
                        height={500}
                    />
                </div>
            </div>
            <div className="w-1/3">
                <div className="flex flex-col border shadow-md px-4 py-2 h-full mt-10">
                    <h1 className="text-2xl mb-3">{data.title}</h1>
                    <p className="text-sm">{data.description}</p>
                    <p className="mt-5 text-sm">
                        Instructor: {data.instructor}
                    </p>
                    <p className="text-sm">
                        You can finish this course in: {data.score} minutes
                    </p>
                    <p className="mt-5 text-sm">
                        Upload date: {data.upload_date}
                    </p>
                </div>
            </div>
            <div className="flex flex-col fixed right-5 bottom-5">
                {!enrolled &&
                    user.role !== "teacher" &&
                    user.role !== "admin" && (
                        <ExpandCourseButton
                            enrollCourse={enrollCourse}
                            newData={newData}
                            materialId={data.id}
                            role={user.role}
                            userId={user.id}
                        />
                    )}
                {(enrolled ||
                    user.role === "teacher" ||
                    user.role === "admin") && (
                    <Link
                        href={{
                            pathname: `/learning/courses/${data.title}/start`,
                            query: {
                                title: data.title,
                                courseID: data.id,
                                teacher: data.instructor,
                            },
                        }}
                        className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm text-center"
                    >
                        {user.role === "teacher" ? "Check out" : "Start"}
                    </Link>
                )}
                <Link
                    href="/learning/courses/"
                    className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm text-center"
                >
                    Back
                </Link>
            </div>
        </div>
    );
};

export default ExpandCourse;
