import AssignTeacher from "@/components/Admin/AssignTeacher";
import { useHandleRetrieveUsers } from "@/hooks/retrieve/admin/useHandleRetrieveUsers";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { redirect } from "next/navigation";

export default async function AssignTeachers() {
    const user = await useGetUser();
    const { retrieveTeachersWithNoSubject, refetchData } = await useHandleRetrieveUsers();
    if (user.role !== "admin") {
        return redirect("/learning");
    }
    const action = refetchData(true);
    
    const teachers = await retrieveTeachersWithNoSubject();

    return <AssignTeacher teachers={teachers} />;
}
