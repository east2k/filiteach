import { supabase } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useHandlePublish = () => {
    const router = useRouter();
    const [isPublishing, setIsPublishing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const insert = async (courseID) => {
        setIsPublishing(true);

        const { data: teacherID } = await supabase
            .from("courses")
            .update({ published: true })
            .eq("id", courseID)
            .select();
        console.log(teacherID);

        const { data: materials_published } = await supabase
            .from("teachers")
            .select("materials_published")
            .eq("user_id", teacherID[0].teacher_id);

        const totalAmount =
            parseInt(materials_published[0].materials_published) + 1;

        await supabase
            .from("teachers")
            .update({ materials_published: totalAmount })
            .eq("user_id", teacherID[0].teacher_id);

        if (!isPublishing) {
            setIsSubmitting(true);
            router.push("/learning/publish");
        }
        setIsPublishing(false);
    };
    return { insert, isPublishing, isSubmitting };
};
