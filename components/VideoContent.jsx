"use client";

import useEnroll from "@/hooks/useEnroll";
import React, { useEffect } from "react";

const VideoContent = ({ videoId, video, summary, userId }) => {
    console.log(videoId);
    console.log(userId);

    // const { upsertVideoData } = useEnroll();

    // useEffect(() => {
    //     const upsertData = async () => {
    //         upsertVideoData(userId, videoId);
    //     };
    //     upsertData();
    // }, [upsertVideoData, userId, videoId]);

    return (
        <div className="my-5 flex flex-col">
            <video className="w-full h-2/3 max-h-96" controls src={video} />
            <h1 className="text-2xl">
                What will you learn in this part of the course?
            </h1>
            <p className="text-sm">{summary}</p>
        </div>
    );
};

export default VideoContent;
