import Publish from "@/components/Admin/Publish";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { useRetrieveCourses } from "@/hooks/retrieve/useRetrieveCourses";
import { redirect } from "next/navigation";

export default async function StudentsList() {
    const user = await useGetUser();
    const { getUnpublishedItems } = await useRetrieveCourses();
    const courses = await getUnpublishedItems();
    if (user.role !== "admin") {
        return redirect("/learning");
    }

    return <Publish  courses={courses} />;
}
