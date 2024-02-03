"use client";

import React, { useState } from "react";
import { CoursesContainer } from "../CoursesContainer";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { CourseCard } from "../CourseCard";

const MaterialsPage = ({ data, featuredCourses }) => {
    const [currentDisplayed, setCurrentDisplayed] = useState("none");

    const handleChangeCourseDisplay = (category) => {
        setCurrentDisplayed(category);
    };

    return (
        <div className="p-5">
            {/* <div className="mb-3">
                <h1 className="text-2xl font-medium tracking-wide">
                    Start Learning now!
                </h1>
                <p className="py-2 text-lg">Most popular right now!</p>
                <div className="grid grid-cols-5 gap-5 px-5">
                    {featuredCourses.map((item, index) => {
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
                </div>
            </div> */}
            <div className="flex flex-col border p-3">
                {currentDisplayed !== "none" ? (
                    <>
                        <div className="flex flex-row justify-between mb-3">
                            <div className="relative w-1/3">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="text-sm px-4 w-full py-3 border border-zinc-400 rounded-full"
                                />
                                <MagnifyingGlassIcon className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2  w-5 h-5" />
                            </div>
                            <div className="">
                                <div onClick={()=>handleChangeCourseDisplay("none")} className="text-white bg-mantis-400 px-10 py-2 rounded-sm shadow-md cursor-pointer">
                                    Back
                                </div>
                            </div>
                        </div>
                        <CoursesContainer
                            currentDisplayed={currentDisplayed}
                            courses={data}
                        />
                    </>
                ) : (
                    <div className="grid grid-cols-4 gap-5 mb-5">
                        <div
                            onClick={() => handleChangeCourseDisplay("english")}
                            className="cursor-pointer flex items-center justify-center border border-mantis-400 hover:bg-mantis-100 h-64 px-7 py-5 rounded-lg"
                        >
                            <p className="text-3xl tracking-wider">English</p>
                        </div>
                        <div
                            onClick={() =>
                                handleChangeCourseDisplay("filipino")
                            }
                            className="cursor-pointer flex items-center justify-center border border-mantis-400 hover:bg-mantis-100 h-64 px-7 py-5 rounded-lg"
                        >
                            <p className="text-3xl tracking-wider">Filipino</p>
                        </div>
                        <div
                            onClick={() => handleChangeCourseDisplay("math")}
                            className="cursor-pointer flex items-center justify-center border border-mantis-400 hover:bg-mantis-100 h-64 px-7 py-5 rounded-lg"
                        >
                            <p className="text-3xl tracking-wider">Math</p>
                        </div>
                        <div
                            onClick={() => handleChangeCourseDisplay("science")}
                            className="cursor-pointer flex items-center justify-center border border-mantis-400 hover:bg-mantis-100 h-64 px-7 py-5 rounded-lg"
                        >
                            <p className="text-3xl tracking-wider">Science</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MaterialsPage;
