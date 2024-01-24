import React, { useState } from "react";
import { SectionCard } from "./SectionsPart/SectionCard";
import Image from "next/image";

export const ReviewPart = ({ values, currentSections,handleChangeActivePart }) => {
    const [displaySection, setDisplaySection] = useState();
    const handleClickSection = (section) => {
        console.log("hello, clicked on", displaySection, section.items);
        if (section.type === "video") {
            setDisplaySection({ type: "video", contents: section.video });
        } else {
            setDisplaySection({ type: "quiz", contents: section.items });
        }
    };
    return (
        <div className="w-full">
            <h1 className="text-2xl mb-5">Review before submitting</h1>
            <div className="flex flex-col border-b  pb-5">
                <p className="text-lg">Title:</p>
                <p className="text-sm ml-5">{values.title}</p>
            </div>
            <div className="flex flex-col border-b  pb-5">
                <p className="text-lg">Description:</p>
                <p className="text-sm ml-5">{values.description}</p>
            </div>
            <div className="flex flex-col border-b  pb-5">
                <p className="text-lg">Estimated time to Finish:</p>
                <p className="text-sm ml-5">{values.score}</p>
            </div>
            <div className="flex flex-col border-b  pb-5">
                <p className="text-lg ">Subject:</p>
                <p className="text-sm ml-5 capitalize">{values.subject}</p>
            </div>
            <div className="flex flex-col border-b pb-5 items-center justify-center">
                <p className="text-lg">Thumbnail:</p>
                <div className="border flex items-center justify-center w-96 h-60 overflow-hidden">
                    <Image
                        className="object-cover w-full h-full"
                        src={URL.createObjectURL(values.thumbnail)}
                        alt="Thumbnail"
                        width={300}
                        height={200}
                    />
                </div>
                {/* <p className="text-sm ml-5">{values.thumbnail.name}</p> */}
            </div>
            <button
                onClick={() => handleChangeActivePart("edit")}
                className="hover:bg-mantis-200 w-28 py-1 rounded-sm border border-mantis-400"
                type="button"
            >
                Edit
            </button>
            <h2 className="text-xl mt-5">Chapters</h2>
            <div className="grid grid-cols-5 gap-5 mb-7 border-b pb-5">
                {currentSections.map((item, index) => {
                    let displayThumbnail;
                    if (item.thumbnail === "/assets/images/quiz-thumbnail.jpg")
                        displayThumbnail = item.thumbnail;
                    else if (!item.thumbnail)
                        displayThumbnail =
                            "/assets/images/video-thumbnail.avif";
                    else displayThumbnail = URL.createObjectURL(item.thumbnail);
                    return (
                        <div
                            className="cursor-pointer"
                            key={index}
                            onClick={() => handleClickSection(item)}
                        >
                            <SectionCard
                                part={index + 1}
                                thumbnail={displayThumbnail}
                            />
                        </div>
                    );
                })}
            </div>
            {displaySection && displaySection.type === "video" ? (
                <div className="my-5">
                    <video
                        controls
                        src={URL.createObjectURL(displaySection.contents)}
                    />
                </div>
            ) : displaySection && displaySection.type === "quiz" ? (
                <div className="my-5">
                    {displaySection.contents.length !== 0 && (
                        <p>
                            Total Number of Questions:{" "}
                            {displaySection.contents.length}
                        </p>
                    )}
                    {displaySection.contents.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col my-2">
                                <p>
                                    {index + 1}. {item.question}
                                </p>
                                <div className="flex flex-col gap-1">
                                    {item.answers.map((answer, answerIndex) => {
                                        return (
                                            <div
                                                key={answerIndex}
                                                className={`py-1 px-2 w-32 border ${
                                                    answer.correct
                                                        ? "border-green-200"
                                                        : "border-red-200"
                                                }`}
                                            >
                                                {answer.option}. {answer.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h1>Preview Chapters</h1>
            )}
        </div>
    );
};
