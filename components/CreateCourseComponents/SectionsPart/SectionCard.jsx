import Image from "next/image";
import React from "react";

export const SectionCard = ({ part, thumbnail }) => {
    return (
        <div className="flex flex-col items-center justify-center border border-mantis-500 px-2 py-4 rounded-lg">
            <p>Chapter {part}</p>
            <div className="overflow-hidden flex align-center justify-center w-full h-28 min-h-min border bg-white rounded-md opacity-90">
                <Image
                    className="w-full h-full object-cover"
                    src={thumbnail}
                    alt="Preview Thumbnail"
                    width={200}
                    height={150}
                />
            </div>
        </div>
    );
};
