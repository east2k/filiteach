import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import { pricingList } from "@/public/assets/data/pricingList";

const PricingComponent = () => {
    return (
        <section className="bg-gradient-to-b from-purple-50 to-white">
            <div className="flex flex-col items-center max-w-screen-2xl m-auto p-12">
                <h1 className="text-6xl text-center font-bold border-b border-b-purple-500 w-fit mb-7">
                    Pricing
                </h1>
                <div className="flex flex-row gap-10">
                    {pricingList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-start card w-1/3 border border-zinc-300 rounded-xl p-10 shadow-lg"
                            >
                                <h2 className="text-xl uppercase tracking-widest mb-5 text-center w-full">
                                    {item.name}
                                </h2>
                                <p className="text-sm text-zinc-400 mb-3">
                                    {item.subtitle}
                                </p>
                                <span className="text-3xl text-purple-500 mb-3 text-center w-full">
                                    {item.price}
                                </span>
                                <h3 className="text-xl bg-purple-500 text-white rounded-lg w-full text-center py-2 mb-5">
                                    {item.label}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {item.featuring.map((list, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex flex-row items-center"
                                            >
                                                <CheckCircleIcon className="w-5 h-5 min-w-max text-purple-500 mr-2" />
                                                <p className="text-sm text-zinc-500 leading-3">
                                                    {list}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <button className="flex flex-row justify-center items-center p-4 py-2 mx-auto mt-5 rounded-xl text-purple-500 hover:bg-purple-500 hover:text-white">
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

export default PricingComponent;
