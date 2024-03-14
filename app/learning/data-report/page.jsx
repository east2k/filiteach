import DataVisual from "@/components/DataVisual/DataVisual";
import { useHandleRetrieveUsers } from "@/hooks/retrieve/admin/useHandleRetrieveUsers";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { useRetrieveCourses } from "@/hooks/retrieve/useRetrieveCourses";
import { redirect } from "next/navigation";

export default async function StudentsList() {
    const user = await useGetUser();
    const { retrieveAllStudents, retrieveAllTeachers } =
        await useHandleRetrieveUsers();
    const { getAllCourses } = await useRetrieveCourses();

    if (user.role !== "admin") {
        return redirect("/learning");
    }
    const allCourses = await getAllCourses();

    const totalStudents = await retrieveAllStudents();
    const totalTeachers = await retrieveAllTeachers();
    return (
        <DataVisual
            allCourses={allCourses}
            totalStudents={totalStudents.length}
            totalTeachers={totalTeachers.length}
        />
    );
}
