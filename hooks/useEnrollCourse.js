import { supabase } from "@/lib/supabase-client";

const useEnrollCourse = () => {
    const enrollCourse = async (studentId, courseContent) => {
        const { data: userData } = await supabase
            .from("user-enrollment")
            .select("*")
            .eq("student_id", studentId);
        if (!userData.length) {
            const { data } = await supabase
                .from("users")
                .select(`first_name, last_name`)
                .eq("id", studentId);
            const studentName = `${data[0].first_name} ${data[0].last_name}`;
            await supabase.from("user-enrollment").insert([
                {
                    student_id: studentId,
                    student_name: studentName,
                    course_content: courseContent,
                    finished: false,
                },
            ]);
        } 
    };
    return { enrollCourse };
};

export default useEnrollCourse;
