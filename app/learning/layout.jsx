import readUserSession from "@/auth-actions/readUserSession";
import SideBar from "@/components/sidebar";
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
    <section className="flex flex-row w-full m-auto h-screen">
      <SideBar />

      <div className="h-100 overflow-auto">{children}</div>
    </section>
  );
}
