import { CreateCourseContainer } from "@/components/CreateCourseComponents/CreateCourseContainer";
import { useGetUser } from "@/hooks/useGetUser";
import React from "react";

const CreateCourse = async () => {
    const user = await useGetUser();
    return (
        <div className="p-5">
            <div className="pb-5 border-b">
                <h1 className="text-2xl"> Create a course</h1>
            </div>
            <CreateCourseContainer teacherId = {user.id} />
        </div>
    );
};

export default CreateCourse;
