import "./globals.css";
import { Rubik } from "next/font/google";
import Link from "next/link";

import Navigation from "@/components/Navigation";
import LinkComponent from "@/components/LinkComponent";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
    title: "FiliTeach",
    description: "Main Page",
};

export default function RootLayout({ children }) {
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

    const isLogged = true;

    return (
        <html lang="en">
            <body className={rubik.className}>
                <div className="min-h-screen flex flex-col">
                    {!isLogged && (
                        <header className="absolute flex flex-row justify-between w-full m-auto py-5 px-12 top-0 left-1/2 -translate-x-1/2">
                            <h1 className="text-purple-700 font-extrabold text-4xl">
                                FiliTeach
                            </h1>
                            <Navigation />
                            <div className="flex flex-row gap-5">
                                <Link
                                    href="/login"
                                    className="flex justify-center items-center p-5 bg-purple-500 hover:bg-purple-400 h-5 text-lg text-white rounded-lg"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex justify-center items-center p-5 bg-purple-500 hover:bg-purple-400 h-5 text-lg text-white rounded-lg"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    href="/learning"
                                    className="flex justify-center items-center p-5 bg-purple-500 hover:bg-purple-400 h-5 text-lg text-white rounded-lg"
                                >
                                    Dev Log
                                </Link>
                            </div>
                        </header>
                    )}
                    <main>{children}</main>

                    {!isLogged && (
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
                                <LinkComponent
                                    title="Pricing"
                                    content={pricing}
                                />
                                <LinkComponent
                                    title="About Us"
                                    content={about}
                                />
                                <LinkComponent
                                    title="Social"
                                    content={social}
                                />
                            </div>
                            <p className="text-white text-xs mt-7 text-right">
                                &copy; FiliTeach All rights reserved.
                            </p>
                        </footer>
                    )}
                </div>
            </body>
        </html>
    );
}
