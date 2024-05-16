"use client";

import { supabase } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useInsertUser = () => {
    const router = useRouter();
    const [isInserting, setIsInserting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const insert = async (studID, name, contact) => {
        setIsInserting(true);
        if (!studID || !name || !contact) {
            alert("Input some values first");
            setIsInserting(false);
            return;
        }

        const { data: qualified_users } = await supabase
            .from("qualified-users")
            .select("school_id")
            .eq("school_id", studID);

        if (qualified_users.length >= 1) {
            alert("ID Already Exists");
            setIsInserting(false);
            return;
        }

        const data = await supabase.from("qualified-users").insert([
            {
                school_id: studID,
                student_name: name,
                contact_no: contact,
            },
        ]);

        if (data) {
            setIsSuccess(true);
            router.refresh();
        }

        setIsInserting(false);
    };
    return { insert, isInserting, isSuccess };
};
