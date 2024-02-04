import UsersList from "@/components/Admin/UsersList";
import { useHandleRetrieveUsers } from "@/hooks/retrieve/admin/useHandleRetrieveUsers";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { redirect } from "next/navigation";

export default async function StudentsList() {
    const user = await useGetUser();
    const { retrieveAllStudents, retrieveAllTeachers } =
        await useHandleRetrieveUsers();
    if (user.role !== "admin") {
        return redirect("/learning");
    }
    const allStudents = await retrieveAllStudents();
    const allTeachers = await retrieveAllTeachers();

    return <UsersList allStudents={allStudents} allTeachers={allTeachers} />;
}
