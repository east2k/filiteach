import Link from "next/link";
import React from "react";

const headerNavLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Pricing",
        link: "/pricing",
    },
    {
        name: "About Us",
        link: "/about-us",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

const Navigation = () => {
    return (
        <nav className="flex items-center justify-center">
            <ul className="flex flex-row gap-2">
                {headerNavLinks.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className="px-5 py-2 hover:bg-purple-100 transition-colors rounded-lg" href={item.link}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
