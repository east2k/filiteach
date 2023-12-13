import Image from "next/image";
import React from "react";

export const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Image className="animate-spin" src="/assets/svg/loading.svg" alt="Loading" width={25} height={25}/>
            <p>Loading...</p>
        </div>
    );
};
