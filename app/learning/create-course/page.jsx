import { CreateCourseContainer } from "@/components/CreateCourseComponents/CreateCourseContainer";
import { useHandleRetrieveUsers } from "@/hooks/retrieve/admin/useHandleRetrieveUsers";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { redirect } from "next/navigation";
import React from "react";

const CreateCourse = async () => {
    const user = await useGetUser();
    const { retrieveOwnData } = await useHandleRetrieveUsers();
    if (user.role !== "teacher") {
        return redirect("/learning");
    }
    const ownData = await retrieveOwnData(user.id);

    return (
        <div className="p-5">
            <div className="pb-5 border-b">
                <h1 className="text-2xl"> Create a Learning Material</h1>
            </div>
            <CreateCourseContainer
                teacherId={user.id}
                assignedSubject={ownData[0].subject_assigned}
            />
        </div>
    );
};

export default CreateCourse;
