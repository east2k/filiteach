import readUserSession from "@/auth-actions/readUserSession";
import { DashboardNav } from "@/components/DashboardNav";
import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
export const metadata = {
    title: "FiliTeach - Learning",
    description: "Application",
};

export default async function LearningLayout({ children }) {
    const { data } = await readUserSession();
    if (!data.session) {
        return redirect("/");
    }
    return (
        <section className="flex flex-row w-full m-auto">
            <div className="fixed left-0 top-0 flex flex-col h-screen pt-4 shadow-2xl bg-white-600 items-center w-2/12">
                <div className="flex items-center justify-center border border-purple-600 rounded-full w-32 h-auto">
                    <Image
                        className="object-cover w-full h-full"
                        src="/assets/images/filiteach-logo-light.png"
                        alt="Logo"
                        width={325}
                        height={325}
                    />
                </div>
                <DashboardNav />
                <Link
                    href="#"
                    className="mt-auto text-white bg-purple-500 hover:bg-purple-400 w-full  px-3 py-14 text-center"
                >
                    ChatBot
                </Link>
                <LogoutButton />
            </div>
            <div className="w-10/12 ml-auto">{children}</div>
        </section>
    );
}
