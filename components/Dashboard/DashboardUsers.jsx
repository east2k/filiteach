import React from "react";
import { CourseCard } from "../LearningMaterial/CourseCard";
import Link from "next/link";
import Image from "next/image";

const DashboardUsers = ({ user, courses }) => {
    const latestCourse = courses[courses.length - 1];
    return (
        <div className="w-full px-7 py-6">
            <h1 className="text-xl mb-3 font-medium">
                {user?.role === "student"
                    ? "Start Studying now!"
                    : "Learning Materials You Made"}
            </h1>
            <div className="flex flex-col">
                {user?.role === "student" && <p>Recommended for you</p>}
                <div className="flex flex-col border  border-mantis-500 rounded-lg px-3 py-5">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                        {courses.length !== 0 ? (
                            <>
                                {courses.map((item, index) => {
                                    return (
                                        <CourseCard
                                            key={index}
                                            name={item.subject}
                                            image={item.thumbnail}
                                            title={item.title}
                                            instructor={item.instructor}
                                            score={item.score}
                                            courseID={item.id}
                                            description={item.description}
                                        />
                                    );
                                })}
                            </>
                        ) : (
                            <h1>
                                {user?.role === "student"
                                    ? "None yet"
                                    : "You have no Learning Materials"}
                            </h1>
                        )}
                    </div>
                    {user?.role === "student" ? (
                        <Link
                            className="px-5 py-4 text-white bg-mantis-500 text-center mt-5 ml-auto w-56 rounded-md"
                            href="/learning/courses"
                        >
                            Click here for more!
                        </Link>
                    ) : (
                        <Link
                            className="px-5 py-4 text-white bg-mantis-500 text-center mt-5 ml-auto w-56 rounded-md"
                            href="/learning/my-courses"
                        >
                            Click here for more!
                        </Link>
                    )}
                </div>
                <div className="mt-5 border border-mantis-500 px-5 py-3">
                    <h1>
                        {user?.role === "student"
                            ? "Latest learning material made"
                            : "Latest learning material you made"}
                    </h1>
                    {courses.length !== 0 ? (
                        <div className="grid grid-cols-3 bg-white rounded-lg ">
                            <div className="py-5 px-3">
                                <div className="w-full h-48 overflow-hidden rounded-lg">
                                    <Image
                                        className="object-cover w-full h-full"
                                        src={latestCourse.thumbnail}
                                        alt="Subject for given topic"
                                        height={450}
                                        width={450}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-3 col-span-2">
                                <h1 className="text-xl mb-2">
                                    {latestCourse.title}
                                </h1>
                                <p className="mb-4 text-sm">
                                    {latestCourse.description}
                                </p>
                                <p className="text-sm">
                                    Instructor: {latestCourse.instructor}
                                </p>
                                {/* <p className="text-sm">
                                    Points: {latestCourse.score}
                                </p> */}
                                <p className="text-sm">
                                    Estimate time to Finish:{" "}
                                    {latestCourse.score} mins
                                </p>
                                {/* <Link
                                    href="/learning/courses/test2"
                                    className="ml-auto px-4 py-2 text-white bg-mantis-400 rounded-sm"
                                >
                                    Continue
                                </Link> */}
                            </div>
                        </div>
                    ) : (
                        <h1 className="text-center text-2xl">
                            {user?.role === "student"
                                ? "None"
                                : "Make some Learning Materials first"}
                        </h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardUsers;
