import React from "react";
import { CourseCard } from "./CourseCard";
import Link from "next/link";
import Image from "next/image";

const placeholderCourses = [
    {
        name: "Math Essentials",
        image: "/assets/images/placeholder-course-images/math.jpg",
        subtitle: "This is math for me",
        instructor: "Michael Adriano",
        score: 150,
    },
    {
        name: "Filipino Essentials",
        image: "/assets/images/placeholder-course-images/filipino.jpeg",
        subtitle: "Tayo ay matuto!",
        instructor: "John Doe",
        score: 250,
    },
    {
        name: "English Essentials",
        image: "/assets/images/placeholder-course-images/english.jpg",
        subtitle: "Good to learn English",
        instructor: "Glenn Ford",
        score: 350,
    },
];
export const DashboardSideContent = ({ user, courses }) => {
    const latestCourse = courses[courses.length - 1];
    return (
        <div className="w-4/5 px-7 py-6">
            <h1 className="text-xl mb-3 font-medium">
                {user.role === "student"
                    ? "Start Studying now!"
                    : "Courses You Made"}
            </h1>
            <div className="flex flex-col">
                {user.role === "student" && <p>Recommended for you</p>}
                <div className="flex flex-col border  border-flush-orange-500 rounded-lg px-3 py-5">
                    <div className="grid grid-cols-3 gap-5">
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
                                You have no course
                            </h1>
                        )}
                    </div>
                    <Link
                        className="px-5 py-4 text-white bg-flush-orange-500 text-center mt-5 ml-auto w-56 rounded-md"
                        href="/learning/my-courses"
                    >
                        Click here for more!
                    </Link>
                </div>
                <div className="mt-5 border border-flush-orange-500 px-5 py-3">
                    <h1>
                        {user.role === "student"
                            ? "Continue where you left of before"
                            : "Latest course you made"}
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
                                <p className="text-sm">
                                    Points: {latestCourse.score}
                                </p>
                                <p className="text-sm">
                                    Estimate time to Finish: 10 mins
                                </p>
                                <Link
                                    href="/learning/courses/test2"
                                    className="ml-auto px-4 py-2 text-white bg-flush-orange-400 rounded-sm"
                                >
                                    Continue
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <h1 className="text-center text-2xl">
                            Make some courses first
                        </h1>
                    )}
                </div>
            </div>
        </div>
    );
};
