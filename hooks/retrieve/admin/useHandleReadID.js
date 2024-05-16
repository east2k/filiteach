import { supabase } from "@/lib/supabase-client";

export const useHandleReadID = () => {
    const check = async (currentID) => {
        if (!currentID) return;
        const { data: schoolID } = await supabase
            .from("qualified-users")
            .select("school_id")
            .eq("school_id", currentID);
        return !schoolID.length;
    };

    return { check };
};
