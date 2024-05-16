"use client";

import { useHandlePublish } from "@/hooks/retrieve/admin/useHandlePublish";
import React from "react";

const PublishButton = ({ materialID}) => {
    const { insert, isPublishing, isSubmitting } = useHandlePublish();
    const handlePublishButton = () => {
        console.log(isPublishing, isSubmitting);
        insert(materialID);
    };

    return (
        <>
            {isPublishing && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-shark-50 bg-opacity-50 z-40 flex justify-center items-center">
                    <p className="px-5 py-2 bg-mantis-500 text-white z-50">
                        Publishing
                    </p>
                </div>
            )}
            <button
                onClick={handlePublishButton}
                className="fixed border outline-offset-4 outline outline-mantis-500 bg-mantis-500 text-white px-16 py-2 mt-2 rounded-sm text-center shadow-lg z-50 top-0 right-[1%]"
            >
                Publish Learning Material
            </button>
        </>
    );
};

export default PublishButton;
