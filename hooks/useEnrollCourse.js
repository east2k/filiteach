import { supabase } from "@/lib/supabase-client";
import { useState } from "react";

const useEnrollCourse = () => {
    const [enrolling, setEnrolling] = useState(false);
    const [updating, setUpdating] = useState(false);

    const enrollCourse = async (studentId, materialId, courseContent) => {
        setEnrolling(true);
        const { data: userData } = await supabase
            .from("user-enrollment")
            .select("*")
            .eq("student_id", studentId)
            .eq("material_id", materialId);
        if (!userData.length) {
            const { data } = await supabase
                .from("users")
                .select(`first_name, last_name`)
                .eq("id", studentId);
            const studentName = `${data[0].first_name} ${data[0].last_name}`;
            await supabase.from("user-enrollment").insert([
                {
                    student_id: studentId,
                    material_id: materialId,
                    student_name: studentName,
                    course_content: courseContent,
                    finished: false,
                },
            ]);
        }
        setEnrolling(false);
    };

    const checkIfEnrolled = async (studentId, materialId) => {
        const { data: userData } = await supabase
            .from("user-enrollment")
            .select("*")
            .eq("student_id", studentId)
            .eq("material_id", materialId);
        if (!userData) return 0;
        return userData.length;
    };

    const grabUserProgress = async (studentId, materialId) => {
        const { data: userData } = await supabase
            .from("user-enrollment")
            .select("course_content")
            .eq("student_id", studentId)
            .eq("material_id", materialId);
        return userData;
    };

    const updateUserProgress = async (studentId, materialId, newData) => {
        setUpdating(true);
        await supabase
            .from("user-enrollment")
            .update({ course_content: newData })
            .eq("student_id", studentId)
            .eq("material_id", materialId)
            .select();
        setUpdating(false);
    };
    return {
        enrollCourse,
        checkIfEnrolled,
        enrolling,
        grabUserProgress,
        updateUserProgress,
        updating,
    };
};

export default useEnrollCourse;
