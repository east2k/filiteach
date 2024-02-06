"use client";

import React, { useState } from "react";
import { CourseCard } from "../LearningMaterial/CourseCard";
import Link from "next/link";

const OwnMaterials = ({ courses }) => {
    const [showArchived, setShowArchived] = useState(false);

    const handleShowArchived = () => {
        setShowArchived(!showArchived);
    };

    return (
        <div className="p-5 flex flex-col h-full">
            <div className="flex justify-between mb-5">
                <h1 className="text-2xl my-2">
                    My {!showArchived ? "Active" : "Archived"} Learning
                    Materials
                </h1>
                <button
                    onClick={handleShowArchived}
                    className={`px-3 py-1 rounded-md border ${
                        !showArchived
                            ? "bg-mantis-400 text-white"
                            : "border-mantis-400 bg-white text-black"
                    }`}
                >
                    {
                        !showArchived
                            ? "Check archived Materials"
                            : "Back"
                    }
                </button>
            </div>
            <div className="grid grid-cols-4 gap 4">
                {courses.length !== 0 ? (
                    <>
                        {courses.map((item, index) => {
                            if (!showArchived) {
                                if (item.archived) return;
                            } else {
                                if (!item.archived) return;
                            }
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
                    <h1 className="text-2xl text-center col-span-4">
                        You have no courses
                    </h1>
                )}
            </div>
            <Link
                className="w-full py-2 px-5 text-white rounded-md text-center bg-mantis-500 mt-auto"
                href="/learning/create-course"
            >
                Add More
            </Link>
        </div>
    );
};

export default OwnMaterials;
