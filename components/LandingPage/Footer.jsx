import React from "react";
import LinkComponent from "../LinkComponent";

export const Footer = () => {
    const pricing = [
        { name: "Free", link: "/pricing#Free" },
        { name: "Pro", link: "/pricing#Pro" },
        { name: "Premium", link: "/pricing#Premium" },
    ];
    const about = [
        { name: "Features", link: "#" },
        { name: "Solution", link: "#" },
        { name: "Tutorial", link: "#" },
    ];
    const social = [
        { name: "Facebook", link: "#" },
        { name: "Twitter", link: "#" },
        { name: "LinkedIn", link: "#" },
        { name: "Instagram", link: "#" },
    ];
    return (
        <footer className=" bg-indigo-950 mt-auto max-h-60">
            <div className="flex flex-row justify-between max-w-screen-2xl w-full m-auto pt-7 px-12 pb-3">
                <div>
                    <h1 className="text-purple-50 font-extrabold text-4xl mb-3">
                        FiliTeach
                    </h1>
                    <p className="text-zinc-200 text-xs">
                        Learn in the comfort of your home.
                    </p>
                </div>
                <LinkComponent title="Pricing" content={pricing} />
                <LinkComponent title="About Us" content={about} />
                <LinkComponent title="Social" content={social} />
            </div>
            <p className="text-white text-xs mt-7 text-right">
                &copy; FiliTeach All rights reserved.
            </p>
        </footer>
    );
};
