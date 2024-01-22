// import { supabase } from "@/lib/";

import createSupabaseServerClient from "@/lib/server";

const CDNURL =
    "https://hiarkpmgwdryrbozaxfo.supabase.co/storage/v1/object/public/courses/";

export const useGetCourseSections = async (id) => {
    const supabase = await createSupabaseServerClient();

    const { data: quizSections } = await supabase
        .from("course-quizes")
        .select("*")
        .eq("course_id", id);

    const { data: vidSections } = await supabase
        .from("video-presentations")
        .select("*")
        .eq("course_id", id);

    const { data: teacherID } = await supabase
        .from("courses")
        .select("teacher_id")
        .eq("id", id);

    let newData = [];

    if (quizSections.length === 0 && vidSections.length > 0) {
        newData = vidSections.map((item) =>
            mapData(item, "video", teacherID[0].teacher_id)
        );
    } else if (vidSections.length === 0 && quizSections.length > 0) {
        newData = quizSections.map((item) =>
            mapData(item, "quiz", teacherID[0].teacher_id)
        );
    } else if (quizSections.length > 0 && vidSections.length > 0) {
        newData = [
            ...quizSections.map((item) =>
                mapData(item, "quiz", teacherID[0].teacher_id)
            ),
            ...vidSections.map((item) =>
                mapData(item, "video", teacherID[0].teacher_id)
            ),
        ];
    }

    newData.sort((a, b) => a.part - b.part);

    return { newData };
};

const mapData = (data, type, teacherID) => {
    let finalThumbnail;
    if (!data.thumbnail) finalThumbnail = "/assets/images/video-thumbnail.avif";
    else
        finalThumbnail = `${CDNURL}${teacherID}/${data.course_id}/videos/${data.id}/${data.thumbnail}`;
    const video = `${CDNURL}${teacherID}/${data.course_id}/videos/${data.id}/${data.video}`;
    let quizArray = [];

    if (data.quiz_content && typeof data.quiz_content === "object") {
        quizArray = Object.values(data.quiz_content);
    }
    
    if (type === "video") {
        return {
            id: data.id,
            thumbnail: finalThumbnail,
            summary: data.summary,
            video: video,
            part: data.part,
            runtime: 5,
            type: "video",
        };
    } else if (type === "quiz") {
        return {
            id: data.id,
            thumbnail: "/assets/images/quiz-thumbnail.jpg",
            summary: "This is a quiz",
            part: data.part,
            quizContent: quizArray,
            runtime: 2,
            type: "quiz",
        };
    }

    return null;
};
