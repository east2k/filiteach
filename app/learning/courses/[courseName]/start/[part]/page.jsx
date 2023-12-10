import QuizSection from "@/components/QuizSection/QuizSection";
import VideoContent from "@/components/VideoContent";
import { useGetCourseSections } from "@/hooks/useGetCourseSections";
import { useGetUser } from "@/hooks/useGetUser";
import Link from "next/link";
import React from "react";

const Part = async ({ searchParams }) => {
    const { newData } = await useGetCourseSections(searchParams.courseID);
    const finalData = newData[searchParams.part - 1];
    const user = await useGetUser();
    return (
        <div className="relative p-5">
            <div className="">
                <h1 className="text-xl border-b">
                    Chapter {searchParams.part}
                </h1>
                {finalData && finalData.type === "video" ? (
                    <VideoContent video={finalData.video} />
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
                    className="bg-flush-orange-400 text-white px-16 py-2 mt-2 rounded-sm text-center"
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
                    className="bg-flush-orange-400 text-white px-16 py-2 mt-2 rounded-sm text-center"
                >
                    Back to main Course Page
                </Link>
            </div>
        </div>
    );
};

export default Part;
