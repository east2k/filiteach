"use client";

import QuizSection from "@/components/StartCourse/PartContent/QuizSection/QuizSection";
import VideoContent from "@/components/StartCourse/PartContent/VideoContent";
import useEnrollCourse from "@/hooks/useEnrollCourse";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import NextChapterLink from "./NextChapterLink";

export const PartContent = ({
    finalData,
    user,
    title,
    courseID,
    part,
    teacher,
}) => {
    const { grabUserProgress, updateUserProgress, updating } =
        useEnrollCourse();
    const [currentProgress, setCurrentProgress] = useState({});
    const [objectData, setObjectData] = useState([]);
    const [finished, setFinished] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const data = await grabUserProgress(user.id, courseID);
            const foundProgress = data[0].course_content.find(
                (item) => item.part === parseInt(part)
            );
            const nextProgressIndex =
                data[0]?.course_content.indexOf(foundProgress) + 1;

            setNextIndex(nextProgressIndex);
            setCurrentProgress(foundProgress);
            setFinished(foundProgress.finishedChapter);
            setObjectData(data);
        };
        if (!objectData.length && user.role !== "teacher") {
            loadData();
        }
    }, [
        courseID,
        currentProgress,
        grabUserProgress,
        objectData,
        part,
        user.id,
        user.role,
    ]);

    const handleFinishChapter = async () => {
        setFinished(true);
        const currentData = objectData[0].course_content.map((oldData) => {
            if (oldData.part === parseInt(part)) {
                return { ...oldData, finishedChapter: true };
            } else {
                return { ...oldData };
            }
        });
        if (updating) {
            return;
        }
        updateUserProgress(user.id, courseID, currentData);
    };
    return (
        <div className="relative p-5">
            {user.role !== "teacher" && (
                <>
                    {(updating || !objectData.length) && (
                        <div className="fixed w-full h-full z-10 left-0 top-0 bg-gray-400 bg-opacity-50 flex items-center justify-center">
                            <div className="flex flex-row bg-green-500 px-4 py-2 rounded-md item-center justify-center">
                                <p className="text-white mr-5">Checking</p>
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
                </>
            )}
            <div className="">
                <div className="flex flex-row justify-between border-b pb-2 mb-5">
                    <h1 className="text-xl">Chapter {part}</h1>
                    {user.role !== "teacher" && (
                        <div
                            className={`flex items-center justify-center px-2 py-1 rounded-md ${
                                finished ? "bg-mantis-200" : "bg-red-200"
                            }`}
                        >
                            <p>{finished ? "Finished" : "Not yet finished"}</p>
                        </div>
                    )}
                </div>
                {finalData && finalData.type === "video" ? (
                    <VideoContent
                        video={finalData.video}
                        summary={finalData.summary}
                        videoId={finalData.id}
                        userId={user.id}
                        handleFinishChapter={handleFinishChapter}
                    />
                ) : finalData && finalData.type === "quiz" ? (
                    <QuizSection
                        user={user}
                        instructor={`${user.first_name} ${user.last_name}`}
                        finalData={finalData}
                        teacher={teacher}
                        handleFinishChapter={handleFinishChapter}
                    />
                ) : (
                    <h1>Preview Sections</h1>
                )}
            </div>
            <div className="flex flex-col fixed right-5 bottom-5">
                {user.role !== "teacher" &&
                    finished &&
                    currentProgress.part !==
                        objectData[0].course_content.length && (
                        <NextChapterLink
                            title={title}
                            courseID={courseID}
                            part={part}
                            teacher={teacher}
                            type={objectData[0].course_content[nextIndex].type}
                        />
                    )}
                <Link
                    href={{
                        pathname: `/learning/courses/${title}/start/`,
                        query: {
                            title: title,
                            courseID: courseID,
                            teacher: teacher,
                        },
                    }}
                    className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm text-center"
                >
                    Back to main Course Page
                </Link>
            </div>
        </div>
    );
};
