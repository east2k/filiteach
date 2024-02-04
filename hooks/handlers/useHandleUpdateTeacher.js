import { supabase } from "@/lib/supabase-client";
import { useState } from "react";

const useHandleUpdateTeacher = () => {
    const [updating, setUpdating] = useState(false);
    const updateSubject = async (userID, subject) => {
        setUpdating(true);
        if (updating) return;
        await supabase
            .from("teachers")
            .update({ subject_assigned: subject })
            .eq("user_id", userID);
        setUpdating(false);
    };

    return { updateSubject, updating };
};

export default useHandleUpdateTeacher;
