import DataSet from "@/components/DataSet";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { redirect } from "next/navigation";
import React from "react";

const Dataset = async () => {
    const user = await useGetUser();
    if (user.role !== "admin") {
        return redirect("/learning");
    }
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="flex flex-col gap-4 border rounded-md p-7 w-3/4">
                <h1>Bonjour Admin</h1>
                <DataSet />
            </div>
        </div>
    );
};

export default Dataset;
