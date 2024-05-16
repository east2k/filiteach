import OwnMaterials from "@/components/TeacherSide/OwnMaterials";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { useRetrieveCourses } from "@/hooks/retrieve/useRetrieveCourses";
import React from "react";

const MyCourses = async () => {
    const user = await useGetUser();
    const { getOwnCourses } = await useRetrieveCourses();
    const courses = await getOwnCourses(user.id);
    if (user.role !== "teacher") {
        return redirect("/learning");
    }
    return <OwnMaterials courses={courses} />;
};

export default MyCourses;
