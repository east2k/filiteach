import { supabase } from "@/lib/supabase-client";

const useGrabUserProgress = async (studentId, materialId) => {
    const { data } = await supabase
        .from("user-enrollment")
        .select("course_content")
        .eq("student_id", studentId)
        .eq("material_id", materialId);
    console.log(data);
    return { data };
};

export default useGrabUserProgress;
