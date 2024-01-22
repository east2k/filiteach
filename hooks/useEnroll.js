import { supabase } from "@/lib/supabase-client";

const useEnroll = () => {
    const upsertVideoData = async (studentId, videoId) => {
        const { data } = await supabase
            .from("users")
            .select(`first_name, last_name`)
            .eq("id", studentId);
        const studentName = `${data[0].first_name} ${data[0].last_name}`;
        await supabase.from("video-enrollment").upsert([
            {
                video_id: videoId,
                student_id: studentId,
                student_name: studentName,
                status: false,
            },
        ]);
    };
    const upsertQuizData = async (studentId, quizID) => {
        const { data } = await supabase
            .from("users")
            .select(`first_name, last_name`)
            .eq("id", studentId);
        const studentName = `${data[0].first_name} ${data[0].last_name}`;
        await supabase.from("quiz-enrollment").upsert([
            {
                quiz_id: quizID,
                student_id: studentId,
                student_name: studentName,
                status: false,
            },
        ]);
    };

    return { upsertVideoData, upsertQuizData };
};

export default useEnroll;
