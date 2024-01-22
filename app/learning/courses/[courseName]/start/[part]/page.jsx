import QuizSection from "@/components/QuizSection/QuizSection";
import VideoContent from "@/components/VideoContent";
import { useGetCourseSections } from "@/hooks/useGetCourseSections";
import { useGetUser } from "@/hooks/useGetUser";
import Link from "next/link";
import React from "react";

const Part = async ({ searchParams }) => {
    const { newData } = await useGetCourseSections(searchParams.courseID);
    const finalData = newData[searchParams.part - 1];
    console.log(finalData);
    const user = await useGetUser();
    return (
        <div className="relative p-5">
            <div className="">
                <div className="flex flex-row justify-between border-b pb-2 mb-5">
                    <h1 className="text-xl">Chapter {searchParams.part}</h1>
                    <div
                        className={`flex items-center justify-center bg-red-200 px-2 py-1 rounded-md`}
                    >
                        <p>Not yet finished</p>
                    </div>
                </div>
                {finalData && finalData.type === "video" ? (
                    <VideoContent
                        video={finalData.video}
                        summary={finalData.summary}
                        videoId={finalData.id}
                        userId={user.id}
                    />
                ) : finalData && finalData.type === "quiz" ? (
                    <QuizSection
                        user={user}
                        instructor={`${user.first_name} ${user.last_name}`}
                        finalData={finalData}
                        teacher={searchParams.teacher}
                    />
                ) : (
                    <h1>Preview Sections</h1>
                )}
            </div>
            <div className="flex flex-col fixed right-5 bottom-5">
                <Link
                    href={{
                        pathname: `/learning/courses/${
                            searchParams.title
                        }/start/${searchParams.part++}`,
                        query: {
                            title: searchParams.title,
                            courseID: searchParams.courseID,
                            part: searchParams.part,
                            teacher: searchParams.teacher,
                        },
                    }}
                    className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm text-center"
                >
                    Next
                </Link>
                <Link
                    href={{
                        pathname: `/learning/courses/${searchParams.title}/start/`,
                        query: {
                            title: searchParams.title,
                            courseID: searchParams.courseID,
                            teacher: searchParams.teacher,
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

export default Part;
