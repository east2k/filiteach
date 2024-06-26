import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const pricingPageContent = [
    {
        title: "Basic",
        price: "Free",
        features: [
            {
                active: true,
                name: "Access to free learning materials",
            },
            {
                active: true,
                name: "Access to all subjects",
            },
            {
                active: true,
                name: "Access to the Custom Loakan AI ChatBot",
            },
            {
                active: false,
                name: "Access to the ChatGPT AI",
            },
            {
                active: false,
                name: "Lifetime access to all the features",
            },
        ],
        image: "/assets/svg/pricing-basic.svg",
        description:
            "For dedicated learners who wants to have access to basic learning For dedicated learners who wants to have access to basic learning",
    },
    {
        title: "Pro",
        price: "P250",
        features: [
            {
                active: true,
                name: "Access to free learning materials",
            },
            {
                active: true,
                name: "Access to all subjects",
            },
            {
                active: true,
                name: "Access to the Custom Loakan AI ChatBot",
            },
            {
                active: true,
                name: "Access to the ChatGPT AI",
            },
            {
                active: false,
                name: "Lifetime access to all the features",
            },
        ],
        image: "/assets/svg/pricing-pro.svg",
        description:
            "Suitable for learners who just wants to have access to most features while learning monthly.",
    },
    {
        title: "Premium",
        price: "P1000",
        features: [
            {
                active: true,
                name: "Access to free learning materials",
            },
            {
                active: true,
                name: "Access to all subjects",
            },
            {
                active: true,
                name: "Access to the Custom Loakan AI ChatBot",
            },
            {
                active: true,
                name: "Access to the ChatGPT AI",
            },
            {
                active: true,
                name: "Lifetime access to all the features",
            },
        ],
        image: "/assets/svg/pricing-premium.svg",
        description:
            "Suitable for learners who just wants to have access to most features while learning lifetime.",
    },
];

export default function Pricing() {
    return (
        <div className="pt-28 scroll-smooth">
            {pricingPageContent.map((item, index) => {
                return (
                    <section
                        id={item.title}
                        key={index}
                        className="flex mb-12 px-7"
                    >
                        <div className="flex flex-col items-center max-w-screen-2xl m-auto">
                            <h1 className="text-6xl text-left w-full font-bold border-b border-b-mantis-500 mb-7">
                                {item.title}
                            </h1>
                            <div className="flex flex-row flex-nowrap w-full items-center">
                                <div className="basis-2/3 bg-mantis-50 border border-mantis-100 shadow-xl mx-5 rounded-md overflow-hidden">
                                    <h1 className="text-3xl font-medium tracking-wider text-center w-full text-white bg-mantis-500 py-3 relative z-10 before:absolute before:-bottom-2 before:rotate-45 before:left-1/2 before:-translate-x-1/2 before:bg-mantis-500 before:z-0 before:w-5 before:h-5">
                                        {item.price}
                                    </h1>
                                    <ul className="px-7 py-5 ">
                                        {item.features.map((feature, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className={`flex flex-row items-center text-gray-700 ${feature.active ? "opacity-100" : "opacity-50"}`}
                                                >
                                                    {feature.active ? (
                                                        <CheckCircleIcon className="w-5 h-5 min-w-max text-mantis-500 mr-2" />
                                                    ) : (
                                                        <XCircleIcon className="w-5 h-5 min-w-max mr-2" />
                                                    )}
                                                    <p className="text-base text-zinc-700 leading-3">
                                                        {feature.name}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <p className="p-3 text-sm">
                                        {item.description}
                                    </p>
                                    <button className="text-white bg-mantis-700 hover:bg-mantis-500 w-full py-3 uppercase font-bold tracking-widest">
                                        Start now!
                                    </button>
                                </div>
                                <div className="basis-1/3  mx-5">
                                    <Image
                                        width={500}
                                        height={500}
                                        alt="Hero"
                                        src={item.image}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
