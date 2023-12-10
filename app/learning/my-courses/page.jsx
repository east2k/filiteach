import { CourseCard } from "@/components/CourseCard";
import { Stats } from "@/components/TeacherSide/Stats";
import { useGetUser } from "@/hooks/useGetUser";
import { useRetrieveCourses } from "@/hooks/useRetrieveCourses";
import Link from "next/link";
import React from "react";

const MyCourses = async () => {
    const user = await useGetUser();
    const { getOwnCourses } = await useRetrieveCourses();
    const courses = await getOwnCourses(user.id);
    return (
        <div className="p-5 flex flex-col h-full">
            <div>
                <h1 className="text-2xl my-2">My Courses</h1>
            </div>
            <div className="grid grid-cols-4 gap 4">
                {courses.length !== 0 ? <>
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
                })}</>:<h1 className="text-2xl text-center col-span-4">You have no courses</h1>}
            </div>
            <Link
                className="w-full py-2 px-5 text-white rounded-md text-center bg-flush-orange-500 mt-auto"
                href="/learning/create-course"
            >
                Add More
            </Link>
        </div>
    );
};

export default MyCourses;
