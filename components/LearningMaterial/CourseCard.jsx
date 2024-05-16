import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CourseCard = ({
    name,
    image,
    title,
    instructor,
    score,
    courseID,
    description,
    published,
}) => {
    return (
        <Link
            href={{
                pathname: `/learning/courses/${title}`,
                query: {
                    name: name,
                    image: image,
                    title: title,
                    instructor: instructor,
                    score: score,
                    courseID: courseID,
                },
            }}
            className={`cursor-pointer flex flex-col shadow-sm hover:shadow-md rounded-lg p-3 ${
                published ? "bg-white" : "bg-red-50"
            }`}
        >
            <h1 className="text-xl text-center capitalize font-semibold">
                {title}
            </h1>
            <div className="w-auto h-36 overflow-hidden border">
                <Image
                    className="object-cover w-full h-full"
                    src={image}
                    alt="Subject for given topic"
                    height={450}
                    width={450}
                />
            </div>
            <h2 className="text-zinc-600 mt-1 font-medium capitalize">
                {name}
            </h2>
            <p className="text-sm mt-1 truncate">{description}</p>
            <p className="text-zinc-500 mt-auto text-sm">
                Instructor: {instructor}
            </p>
            {/* <p className="text-sm">Score: {score}</p> */}
        </Link>
    );
};
