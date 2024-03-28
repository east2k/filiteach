import Link from "next/link";
import React from "react";

const LinkComponent = ({ title, content }) => {
    return (
        <div>
            <p className="text-xs text-mantis-100 font-bold border-b mt-3 mb-2">{title}</p>
            <ul>
                {content.map((item, index) => {
                    return (
                        <li className="my-1" key={index}>
                            <Link
                                className="text-base text-white hover:text-zinc-200"
                                href={item.link}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LinkComponent;
