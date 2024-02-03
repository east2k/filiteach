"use client";

import React from "react";

const VideoContent = ({ video, summary, handleFinishChapter }) => {
    return (
        <div className="my-5 flex flex-col">
            <video
                onEnded={handleFinishChapter}
                className="w-full h-2/3 max-h-96"
                controls
                src={video}
            />
            <h1 className="text-2xl">What will you learn in this chapter?</h1>
            <p className="text-sm">{summary}</p>
        </div>
    );
};

export default VideoContent;
