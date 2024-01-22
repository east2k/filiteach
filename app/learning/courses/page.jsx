import { CourseCard } from "@/components/CourseCard";
import { CoursesContainer } from "@/components/CoursesContainer";
import { useRetrieveCourses } from "@/hooks/useRetrieveCourses";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

const Courses = async () => {
    const { getAllCourses, getLimitedCourses } = await useRetrieveCourses();
    const data = await getAllCourses();
    const featuredCourses = await getLimitedCourses(5);
    return (
        <div className="p-5">
            <div className="mb-3">
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
            </div>
            <div className="flex flex-col border p-3">
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
                        <div className="text-white bg-mantis-400 px-10 py-2 rounded-sm shadow-md cursor-pointer">
                            Filter
                        </div>
                    </div>
                </div>
                <CoursesContainer courses={data} />
            </div>
        </div>
    );
};

export default Courses;
