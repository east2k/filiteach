import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/public/assets/data/courses";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

const placeholderCourses = [
    {
        name: "Math Essentials",
        image: "/assets/images/placeholder-course-images/math.jpg",
        subtitle: "It's mathing time.",
        instructor: "Michael Adriano",
        score: 250,
    },
    {
        name: "Filipino Essentials",
        image: "/assets/images/placeholder-course-images/filipino.jpeg",
        subtitle: "Matututo ako yey",
        instructor: "Edwardo Ricardo",
        score: 100,
    },
    {
        name: "English Essentials",
        image: "/assets/images/placeholder-course-images/english.jpg",
        subtitle: "Subtitle for the given title",
        instructor: "Glenn Ford",
        score: 200,
    },
    {
        name: "Science Essentials",
        image: "/assets/images/placeholder-course-images/science.jpg",
        subtitle: "Subtitle for the given title",
        instructor: "Albert Einstein",
        score: 50,
    },
    {
        name: "History Essentials",
        image: "/assets/images/placeholder-course-images/history.jpg",
        subtitle: "Subtitle for the given title",
        instructor: "George Washington",
        score: 150,
    },
];

const Courses = () => {
    return (
        <div className="p-5">
            <div className="mb-3">
                <h1 className="text-2xl font-medium tracking-wide">
                    Start Learning now!
                </h1>
                <p className="py-2 text-lg">Most popular courses right now!</p>
                <div className="flex flex-row flex-nowrap gap-5 px-5">
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
                        <div className="text-white bg-purple-400 px-10 py-2 rounded-sm shadow-md cursor-pointer">
                            Filter
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {courses.map((item, index) => {
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
            </div>
        </div>
    );
};

export default Courses;
