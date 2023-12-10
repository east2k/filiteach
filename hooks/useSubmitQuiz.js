import { supabase } from "@/lib/supabase-client";

const useSubmitQuiz = () => {
    const insertData = async (studentId, quizID, score) => {
        const { data } = await supabase
            .from("users")
            .select(`first_name, last_name`)
            .eq("id", studentId);
        const studentName = `${data[0].first_name} ${data[0].last_name}`;
        await supabase.from("quiz-enrollment").insert([
            {
                student_id: studentId,
                student_name: studentName,
                quiz_id: quizID,
                score: score,
                status: true,
            },
        ]);
    };

    const getQuizData = async (quizID, studentID) => {
        const { data } = await supabase
            .from("quiz-enrollment")
            .select("*")
            .eq("quiz_id", quizID)
            .eq("student_id", studentID);
        return data;
    };

    const getAllStudentScores = async (id) => {
        const { data } = await supabase
            .from("quiz-enrollment")
            .select("*")
            .eq("quiz_id", id);
        let teacherDetails;
        if (data.length) {
            const quizID = data[0].quiz_id;

            const { data: quizData } = await supabase
                .from("course-quizes")
                .select("course_id")
                .eq("id", quizID);

            const courseID = quizData[0].course_id;

            const { data: teacher } = await supabase
                .from("courses")
                .select(`teacher_id, instructor`)
                .eq("id", courseID);

            teacherDetails = teacher[0];
        }

        return { data, teacherDetails };
    };

    return { insertData, getQuizData, getAllStudentScores };
};

export default useSubmitQuiz;
