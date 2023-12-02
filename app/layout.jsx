import "./globals.css";
import { Nunito_Sans } from "next/font/google";

import { Header } from "@/components/LandingPage/Header";
import { Footer } from "@/components/LandingPage/Footer";

import readUserSession from "@/auth-actions/readUserSession";

const font = Nunito_Sans({ subsets: ["latin"] });

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
      <body className={font.className}>
        <div className="min-h-screen flex flex-col text-shark-950">
          {!isLogged && <Header />}
          <main>{children}</main>
          {!isLogged && <Footer />}
        </div>
      </body>
    </html>
  );
}
