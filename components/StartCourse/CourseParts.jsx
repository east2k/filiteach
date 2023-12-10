"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PreviewSection } from "./PreviewSection";
import Link from "next/link";

const courseParts = [
    {
        id: 1,
        summary:
            "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni.",
        runtime: 5,
        thumbnail: "/assets/images/placeholder-course-parts/part-1.svg",
        status: true,
    },
    {
        id: 2,
        summary:
            "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
        runtime: 4,
        thumbnail: "/assets/images/placeholder-course-parts/part-2.svg",
        status: true,
    },
    {
        id: 3,
        summary:
            "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
        runtime: 2,
        thumbnail: "/assets/images/placeholder-course-parts/part-3.svg",
        status: false,
    },
    {
        id: 4,
        summary:
            "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
        runtime: 7,
        thumbnail: "/assets/images/placeholder-course-parts/part-4.svg",
        status: false,
    },
    {
        id: 5,
        summary:
            "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
        runtime: 4,
        thumbnail: "/assets/images/placeholder-course-parts/part-5.svg",
        status: false,
    },
    {
        id: 6,
        summary:
            "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
        runtime: 2,
        thumbnail: "/assets/images/placeholder-course-parts/part-6.svg",
        status: false,
    },
    {
        id: 7,
        summary:
            "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
        runtime: 3,
        thumbnail: "/assets/images/placeholder-course-parts/part-7.svg",
        status: false,
    },
];

export const CourseParts = ({ newData, title, courseID, role, teacher }) => {
    const [preview, setPreview] = useState();
    const handleChangePreview = (previewID) => {
        const selectedPart = newData.find((part) => {
            return part.part === previewID;
        });
        setPreview(selectedPart);
    };
    return (
        <>
            <div className="border p-5 m-2">
                <h1 className="text-2xl text-center mb-5 font-medium">
                    {title}
                </h1>
                <div className="grid grid-cols-6 gap-5 items-center mb-10">
                    {newData.map((item, index) => {
                        return (
                            <div
                                onClick={() => handleChangePreview(item.part)}
                                key={index}
                                className="flex flex-col cursor-pointer rounded-md text-white justify-center bg-flush-orange-400 border border-white px-3 py-2 w-full h-32"
                            >
                                <h3 className="text-center">
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
                            </div>
                        );
                    })}
                </div>
                <div className="border-t py-5">
                    <h1 className="text-2xl font-medium">Current Progress</h1>
                    <p className="text-center text-sm">50%</p>
                    <div className="relative w-full border border-flush-orange-500">
                        <div className="relative w-1/2 bg-flush-orange-500 py-2"></div>
                    </div>
                </div>
                {preview && (
                    <PreviewSection
                        thumbnail={preview.thumbnail}
                        summary={preview.summary}
                        runtime={preview.runtime}
                        status={preview.status}
                    />
                )}
            </div>
            <div className="flex flex-row justify-end gap-5">
                {!preview ? (
                    <Link
                        href="#"
                        className="bg-flush-orange-400 text-white px-16 py-2 mt-2 rounded-sm"
                    >
                        Start
                    </Link>
                ) : (
                    <Link
                        href={{
                            pathname: `/learning/courses/${title}/start/${preview?.part}`,
                            query: {
                                title: title,
                                courseID: courseID,
                                part: preview.part,
                                teacher: teacher
                            },
                        }}
                        className="bg-flush-orange-400 text-white px-16 py-2 mt-2 rounded-sm"
                    >
                        Start
                    </Link>
                )}
                <Link
                    href={{
                        pathname: `/learning/courses/${title}`,
                        query: {
                            courseID: courseID,
                            teacher: teacher
                        },
                    }}
                    className="bg-flush-orange-400 text-white px-16 py-2 mt-2 rounded-sm"
                >
                    Back
                </Link>
            </div>
        </>
    );
};
