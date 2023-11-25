import React from "react";
import Image from "next/image";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { homeTeachList } from "@/public/assets/data/homeTeachList";

const DiscoverComponent = () => {
    return (
        <section className="bg-gradient-to-b from-purple-50 to-white">
            <div className="flex flex-col items-center max-w-screen-2xl m-auto p-12">
                <h1 className="text-6xl text-center font-bold border-b border-b-purple-500 w-fit mb-7">
                    What do we teach?
                </h1>
                <div className="flex flex-row gap-10">
                    {homeTeachList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="w-1/3 rounded-xl shadow-lg border px-7 py-5"
                            >
                                <div className="flex flex-row items-center mb-5">
                                    <Image
                                        className="bg-purple-500 w-9 h-9 rounded-lg"
                                        src={item.image}
                                        alt="icon"
                                        width={50}
                                        height={50}
                                    />
                                    <h2 className="ml-5 text-xl font-semibold">
                                        {item.name}
                                    </h2>
                                </div>
                                <p className="mb-2">{item.content}</p>
                                <button className="flex flex-row justify-center items-center p-4 py-2 ml-auto rounded-xl text-purple-500 hover:bg-purple-500 hover:text-white">
                                    Learn More
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DiscoverComponent;
