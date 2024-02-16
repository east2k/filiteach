import DataVisual from "@/components/DataVisual/DataVisual";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { redirect } from "next/navigation";

export default async function StudentsList() {
    const user = await useGetUser();
    if (user.role !== "admin") {
        return redirect("/learning");
    }

    return <DataVisual />;
}
