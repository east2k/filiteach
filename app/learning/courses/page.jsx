
import MaterialsPage from "@/components/MaterialsPage/MaterialsPage";
import { useRetrieveCourses } from "@/hooks/retrieve/useRetrieveCourses";
import React from "react";

const Courses = async () => {
    const { getAllCourses, getLimitedCourses } = await useRetrieveCourses();
    const data = await getAllCourses();
    const featuredCourses = await getLimitedCourses(5);
    return <MaterialsPage data={data} featuredCourses={featuredCourses} />;
};

export default Courses;
