import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CourseCard = ({ name, image, subtitle, instructor, score }) => {
    return (
        <Link
            href={{
                pathname: "/learning/courses/test",
                query: {
                    name: name,
                    image: image,
                    subtitle: subtitle,
                    instructor: instructor,
                    score: score,
                },
            }}
            className="cursor-pointer flex flex-col shadow-sm hover:shadow-md bg-white rounded-lg p-3"
        >
            <h1 className="text-lg text-center h-14">{name}</h1>
            <div className="w-auto h-28 overflow-hidden border">
                <Image
                    className="object-cover w-full h-full"
                    src={image}
                    alt="Subject for given topic"
                    height={450}
                    width={450}
                />
            </div>
            <h2 className="text-zinc-600 my-2 font-medium">{subtitle}</h2>
            <p className="text-zinc-500 mt-auto text-sm">
                Instructor: {instructor}
            </p>
            <p className="text-sm">Score: {score}</p>
        </Link>
    );
};
