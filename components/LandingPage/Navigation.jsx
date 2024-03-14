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
      <ul className="flex flex-col md:flex-row md:gap-2 gap-10 p-6 my-16 md:my-auto items-center">
        {headerNavLinks.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="hover:text-mantis-600 transition-colors md:rounded-lg mr-6 w-screen md:w-auto md:text-base text-3xl text-white md:text-black border-b"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
