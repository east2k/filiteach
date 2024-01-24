import {
    BookOpenIcon,
    PlusCircleIcon,
    VideoCameraIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { QuizSection } from "./QuizSection";
import { VideoSection } from "./VideoSection";
import { SectionCard } from "./SectionCard";

export const SectionsPart = ({
    showOptions,
    activeSection,
    currentSections,
    handleShowOptions,
    handleActiveSection,
    handleSubmitVideoForm,
    handleSubmitQuizForm,
}) => {
    return (
        <>
            <h1 className="text-2xl mb-5">
                Adding chapters to your learning material
            </h1>
            {!showOptions && (
                <div className="grid grid-cols-5 gap-5 mb-7">
                    {currentSections.map((item, index) => {
                        let displayThumbnail;
                        if (
                            item.thumbnail ===
                            "/assets/images/quiz-thumbnail.jpg"
                        )
                            displayThumbnail = item.thumbnail;
                        else if (!item.thumbnail)
                            displayThumbnail =
                                "/assets/images/video-thumbnail.avif";
                        else
                            displayThumbnail = URL.createObjectURL(
                                item.thumbnail
                            );
                        return (
                            <SectionCard
                                key={index}
                                part={index + 1}
                                thumbnail={displayThumbnail}
                            />
                        );
                    })}
                    <div
                        onClick={handleShowOptions}
                        className="cursor-pointer flex flex-col items-center justify-center border border-mantis-500 px-2 py-4 rounded-lg"
                    >
                        <PlusCircleIcon className="text-mantis-500 w-5" />
                        <p>Add chapter</p>
                    </div>
                </div>
            )}
            {showOptions && (
                <>
                    <button
                        onClick={handleShowOptions}
                        className="text-black ml-auto hover:bg-mantis-200 bg-transparent border border-red-400 w-28 py-1 rounded-sm"
                    >
                        Back
                    </button>
                    <h1 className="my-5 text-lg">
                        Choose what format you would like to use
                    </h1>
                    <div className="flex flex-row justify-center gap-7">
                        <div
                            onClick={() => handleActiveSection("video")}
                            className="cursor-pointer border border-mantis-500 hover:opacity-80 rounded-lg px-2 py-4 w-1/4"
                        >
                            <div className="flex flex-col justify-center items-center">
                                <VideoCameraIcon className="w-7 text-mantis-500" />
                                <h2 className="text-center">
                                    Video Presentation
                                </h2>
                            </div>
                        </div>
                        <div
                            onClick={() => handleActiveSection("quiz")}
                            className="cursor-pointer border border-mantis-500 hover:opacity-80 rounded-lg px-2 py-4 w-1/4"
                        >
                            <div className="flex flex-col justify-center items-center">
                                <BookOpenIcon className="w-7 text-mantis-500" />
                                <h2 className="text-center">Quiz</h2>
                            </div>
                        </div>
                    </div>
                    {activeSection === "video" ? (
                        <VideoSection
                            handleSubmitVideoForm={handleSubmitVideoForm}
                            handleShowOptions={handleShowOptions}
                        />
                    ) : activeSection === "quiz" ? (
                        <QuizSection
                            handleSubmitQuizForm={handleSubmitQuizForm}
                            handleShowOptions={handleShowOptions}
                        />
                    ) : (
                        <></>
                    )}
                </>
            )}
        </>
    );
};
