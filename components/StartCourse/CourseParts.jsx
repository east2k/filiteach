"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PreviewSection } from "./PreviewSection";
import Link from "next/link";
import useEnrollCourse from "@/hooks/useEnrollCourse";
import { Progress } from "@material-tailwind/react";

export const CourseParts = ({
    newData,
    title,
    courseID,
    userId,
    role,
    teacher,
}) => {
    const [preview, setPreview] = useState();
    const [userProgress, setUserProgress] = useState([]);
    const { grabUserProgress } = useEnrollCourse();

    const [progressPercentage, setProgressPercentage] = useState(0);

    useEffect(() => {
        const grabData = async () => {
            if (role === "teacher") {
                setUserProgress(newData);
                return;
            }
            const data = await grabUserProgress(userId, courseID);
            const courseContent = data[0].course_content;
            const trueCount = courseContent.filter(
                (item) => item.finishedChapter === true
            ).length;
            const totalCount = courseContent.length;

            const percentage = Math.round((trueCount / totalCount) * 100);
            setProgressPercentage(percentage);
            setUserProgress(data[0].course_content);
        };
        if (!userProgress.length) {
            grabData();
        }
    }, [userId, courseID, grabUserProgress, userProgress, newData, role]);

    const handleChangePreview = (previewID) => {
        const selectedPart = userProgress.find((part) => {
            return part.part === previewID;
        });
        setPreview(selectedPart);
    };

    const handleChapterAvailability = (chapterIndex) => {
        if (role === "teacher") {
            return false;
        }
        const check = userProgress[chapterIndex - 1];
        if (chapterIndex === 0) return false;
        if (!check?.finishedChapter) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            {!userProgress.length ? (
                <div className="fixed w-full h-full z-10 left-0 top-0 bg-gray-400 bg-opacity-50 flex items-center justify-center">
                    <div className="flex flex-row bg-green-500 px-4 py-2 rounded-md item-center justify-center">
                        <p className="text-white mr-5">Checking Progress</p>
                        <Image
                            className="animate-spin"
                            src="/assets/svg/loading.svg"
                            alt="Loading"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            ) : (
                <>
                    <div className="border p-5 m-2">
                        <h1 className="text-2xl text-center mb-5 font-medium">
                            {title}
                        </h1>
                        <div className="grid grid-cols-6 gap-5 items-center mb-10">
                            {userProgress.map((item, index) => {
                                return (
                                    <button
                                        onClick={() =>
                                            handleChangePreview(item.part)
                                        }
                                        key={index}
                                        className={`flex flex-col cursor-pointer rounded-md text-white justify-center bg-mantis-700 border border-white px-3 py-2 w-full h-32 ${
                                            item.finishedChapter ||
                                            role === "teacher"
                                                ? "opacity-100"
                                                : "opacity-50"
                                        } ${
                                            handleChapterAvailability(index)
                                                ? ""
                                                : "hover:opacity-75"
                                        }`}
                                        disabled={handleChapterAvailability(
                                            index
                                        )}
                                    >
                                        <h3 className="w-full text-center">
                                            Chapter {index + 1}
                                        </h3>
                                        <div className="flex align-center justify-center w-full h-20 min-h-min border border-black bg-white rounded-md opacity-90 overflow-hidden">
                                            <Image
                                                className="w-full h-full object-cover"
                                                src={item.thumbnail}
                                                alt="Preview Thumbnail"
                                                width={200}
                                                height={150}
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                        {role !== "teacher" && (
                            <div className="border-t py-5">
                                <h1 className="text-2xl font-medium">
                                    Current Progress
                                </h1>
                                <p className="text-center text-sm">
                                    {progressPercentage}%
                                </p>
                                <Progress
                                    value={progressPercentage}
                                    size="lg"
                                    color="green"
                                />
                            </div>
                        )}
                        {preview && (
                            <PreviewSection
                                thumbnail={preview.thumbnail}
                                summary={preview.summary}
                                runtime={preview.runtime}
                                status={preview.finishedChapter}
                                role={role}
                            />
                        )}
                    </div>
                    <div className="flex flex-row justify-end gap-5">
                        {!preview ? (
                            <Link
                                href="#"
                                className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm"
                            >
                                Start
                            </Link>
                        ) : (
                            <Link
                                href={{
                                    pathname: `/learning/courses/${title}/start/${preview?.part}-${preview?.type}`,
                                    query: {
                                        title: title,
                                        courseID: courseID,
                                        part: preview.part,
                                        teacher: teacher,
                                    },
                                }}
                                className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm"
                            >
                                Start
                            </Link>
                        )}
                        <Link
                            href={{
                                pathname: `/learning/courses/${title}`,
                                query: {
                                    courseID: courseID,
                                    teacher: teacher,
                                },
                            }}
                            className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm"
                        >
                            Back
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};
