import { CreateCourseContainer } from "@/components/CreateCourseComponents/CreateCourseContainer";
import { useGetUser } from "@/hooks/useGetUser";
import { redirect } from "next/navigation";
import React from "react";

const CreateCourse = async () => {
    const user = await useGetUser();
    if (user.role !== "teacher") {
      return redirect("/learning");
    }

    return (
        <div className="p-5">
            <div className="pb-5 border-b">
                <h1 className="text-2xl"> Create a Learning Material</h1>
            </div>
            <CreateCourseContainer teacherId = {user.id} />
        </div>
    );
};

export default CreateCourse;
