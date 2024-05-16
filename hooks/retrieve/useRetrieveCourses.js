// import { supabase } from "@/lib/";

import createSupabaseServerClient from "@/lib/server";

const CDNURL =
    "https://hiarkpmgwdryrbozaxfo.supabase.co/storage/v1/object/public/courses/";

export const useRetrieveCourses = async () => {
    const supabase = await createSupabaseServerClient();

    const getAllCourses = async () => {
        const { data: courses } = await supabase
            .from("courses")
            .select("*")
            .order("id", { ascending: false });

        const coursesWithCDN = courses.map(mapData);
        return coursesWithCDN;
    };

    const getOneCourse = async (id) => {
        const { data: course } = await supabase
            .from("courses")
            .select("*")
            .eq("id", id);

        const courseWithCDN = course.map(mapData);
        return courseWithCDN[0];
    };

    const getOwnCourses = async (id) => {
        const { data: courses } = await supabase
            .from("courses")
            .select("*")
            .eq("teacher_id", id)
            .order("id", { ascending: false });

        const coursesWithCDN = courses.map(mapData);
        return coursesWithCDN;
    };

    const getOwnCoursesLimited = async (id) => {
        const { data: courses } = await supabase
            .from("courses")
            .select("*")
            .eq("teacher_id", id)
            .range(0, 2)
            .order("id", { ascending: false });

        const coursesWithCDN = courses.map(mapData);
        return coursesWithCDN;
    };

    const getLimitedCourses = async (amount) => {
        const { data: courses } = await supabase
            .from("courses")
            .select("*")
            .range(0, amount - 1)
            .order("id", { ascending: false });

        const coursesWithCDN = courses.map(mapData);
        return coursesWithCDN;
    };

    const getUnpublishedItems = async () => {
        const { data: courses } = await supabase
            .from("courses")
            .select("*")
            .eq("published", false)
            .order("id", { ascending: false });

        const coursesWithCDN = courses.map(mapData);
        return coursesWithCDN;
    };

    return {
        getAllCourses,
        getOneCourse,
        getOwnCourses,
        getLimitedCourses,
        getOwnCoursesLimited,
        getUnpublishedItems
    };
};

const formatUploadDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

const mapData = (data) => {
    const formattedDate = formatUploadDate(data.upload_date);
    return {
        ...data,
        thumbnail: `${CDNURL}${data.teacher_id}/${data.id}/${data.thumbnail}`,
        upload_date: formattedDate,
    };
};
