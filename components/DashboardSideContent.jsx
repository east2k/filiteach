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
export const DashboardSideContent = ({ role }) => {
    return (
        <div className="w-4/5 px-7 py-6">
            <h1 className="text-xl mb-3 font-medium">
                {role === "student"
                    ? "Start Studying now!"
                    : "Courses You Made"}
            </h1>
            <div className="flex flex-col">
                {role === "student" && <p>Recommended for you</p>}
                <div className="flex flex-col border  border-purple-500 rounded-lg px-3 py-5">
                    <div className="grid grid-cols-3 gap-5">
                        {placeholderCourses.map((item, index) => {
                            return (
                                <CourseCard
                                    key={index}
                                    name={item.name}
                                    image={item.image}
                                    subtitle={item.subtitle}
                                    instructor={item.instructor}
                                    score={item.score}
                                />
                            );
                        })}
                    </div>
                    <Link
                        className="px-5 py-4 text-white bg-purple-500 text-center mt-5 ml-auto w-56 rounded-md"
                        href="/learning/courses"
                    >
                        Click here for more!
                    </Link>
                </div>
                <div className="mt-5 border border-purple-500 px-5 py-3">
                    <h1>{role==="student"?"Continue where you left of before":"Latest course you made"}</h1>
                    <div className="grid grid-cols-3 bg-white rounded-lg ">
                        <div className="py-5 px-3">
                            <div className="w-full h-48 overflow-hidden rounded-lg">
                                <Image
                                    className="object-cover w-full h-full"
                                    src="/assets/images/feature-placeholder.jpeg"
                                    alt="Subject for given topic"
                                    height={450}
                                    width={450}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col p-3 col-span-2">
                            <h1 className="text-xl mb-2">Title</h1>
                            <p className="mb-4 text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Adipisci accusamus
                                consequuntur velit perferendis ad qui quasi fuga
                                ducimus impedit minima soluta quisquam error
                                enim amet hic odio ut, ratione beatae.
                            </p>
                            <p className="text-sm">
                                Instructor: Michael Adriano
                            </p>
                            <p className="text-sm">Points: 500</p>
                            <p className="text-sm">
                                Estimate time to Finish: 10 mins
                            </p>
                            <Link
                                href="/learning/courses/test2"
                                className="ml-auto px-4 py-2 text-white bg-purple-400 rounded-sm"
                            >
                                Continue
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
