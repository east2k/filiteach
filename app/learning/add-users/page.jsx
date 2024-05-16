import AddID from "@/components/Admin/AddID";
import { useHandleRetrieveUsers } from "@/hooks/retrieve/admin/useHandleRetrieveUsers";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { redirect } from "next/navigation";

export default async function AddUsers() {
    const user = await useGetUser();
    const { retrieveAddedIDs } = await useHandleRetrieveUsers();

    if (user.role !== "admin") {
        return redirect("/learning");
    }

    const idList = await retrieveAddedIDs();

    return <AddID idList={idList} />;
}
