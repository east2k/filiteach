import "./globals.css";
import { Rubik } from "next/font/google";

import { Header } from "@/components/LandingPage/Header";
import { Footer } from "@/components/LandingPage/Footer";

import readUserSession from "@/auth-actions/readUserSession";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
    title: "FiliTeach",
    description: "Main Page",
};

export default async function RootLayout({ children }) {
    let isLogged;

    const { data } = await readUserSession();
    if (data.session) isLogged = true;
    else isLogged = false;

    return (
        <html lang="en">
            <body className={rubik.className}>
                <div className="min-h-screen flex flex-col">
                    {!isLogged && <Header />}
                    <main>{children}</main>
                    {!isLogged && <Footer />}
                </div>
            </body>
        </html>
    );
}
