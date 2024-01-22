"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PreviewSection } from "./PreviewSection";
import Link from "next/link";
import useEnrollCourse from "@/hooks/useEnrollCourse";

export const CourseParts = ({
    newData,
    title,
    courseID,
    userId,
    role,
    teacher,
}) => {
    const [preview, setPreview] = useState();
    const { enrollCourse } = useEnrollCourse();

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
                                className={`flex flex-col cursor-pointer rounded-md text-white justify-center bg-mantis-700 border border-white px-3 py-2 w-full h-32 ${
                                    false ? "opacity-50" : "opacity-100"
                                }`}
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
                    <p className="text-center text-sm">{50}%</p>
                    <div className="relative w-full border border-mantis-500 bg-white">
                        <div
                            className={`relative ${
                                "w-[" + 50 + "%]"
                            } bg-mantis-500 py-2`}
                        ></div>
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
                        className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm"
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
    );
};
