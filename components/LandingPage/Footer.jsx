import React from "react";
import LinkComponent from "../LinkComponent";

export const Footer = () => {
    const pricing = [
        { name: "Free", link: "/pricing#Free" },
        { name: "Pro", link: "/pricing#Pro" },
        { name: "Premium", link: "/pricing#Premium" },
    ];
    const about = [
        { name: "Features", link: "/about-us" },
        { name: "Solution", link: "/about-us" },
    ];
    const social = [
        { name: "Facebook", link: "https://www.facebook.com/filiteach/" },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/christian-estoque/",
        },
    ];
    return (
        <footer className="bg-mantis-600 mt-auto md:max-h-60">
            <div className="flex flex-col md:flex-row justify-between max-w-screen-2xl w-full m-auto pt-7 px-12 pb-3">
                <div>
                    <h1 className="text-mantis-50 font-extrabold text-4xl mb-3">
                        FiliTeach
                    </h1>
                    <p className="text-mantis-50 text-xs">
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
