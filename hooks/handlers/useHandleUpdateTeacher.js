import { supabase } from "@/lib/supabase-client";
import { useState } from "react";

const useHandleUpdateTeacher = () => {
    const [updating, setUpdating] = useState(false);
    const updateSubject = async (userID, subject) => {
        setUpdating(true);
        if (updating) return;
        const { data } = await supabase
            .from("teachers")
            .select(`subject_assigned,previous_subjects`)
            .eq("user_id", userID);
        let newArr =
            data[0]?.previous_subjects === null
                ? []
                : data[0]?.previous_subjects;
        newArr.unshift(data[0]?.subject_assigned);

        await supabase
            .from("teachers")
            .update([
                {
                    subject_assigned: subject,
                    previous_subjects: newArr,
                },
            ])
            .eq("user_id", userID)
            .select();
        await supabase
            .from("courses")
            .update({ archived: true })
            .eq("teacher_id", userID)
            .neq("subject", subject)
            .select();
        await supabase
            .from("courses")
            .update({ archived: false })
            .eq("teacher_id", userID)
            .eq("subject", subject)
            .select();

        setUpdating(false);
    };

    const updatedTeachers = async () => {
        const { data: teachers, error } = await supabase
            .from("teachers")
            .select("*")
            .is("subject_assigned", null);
        const formatData = teachers.map(mapData);
        return formatData;
    };

    const totalUpdatedTeachers = async () => {
        const { data: teachers, error } = await supabase
            .from("teachers")
            .select("*")
            .order("id", { ascending: false });
        const formatData = teachers.map(mapData);
        return formatData;
    };

    const retrievePreviousSubjects = async (userID) => {
        const { data } = await supabase
            .from("teachers")
            .select("previous_subjects")
            .eq("user_id", userID);
        return data[0].previous_subjects;
    };

    return {
        updateSubject,
        updating,
        updatedTeachers,
        totalUpdatedTeachers,
        retrievePreviousSubjects,
    };
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

const mapData = (data) => {
    const formattedDate = formatDate(data.registration_date);
    return {
        ...data,
        registration_date: formattedDate,
    };
};

export default useHandleUpdateTeacher;
