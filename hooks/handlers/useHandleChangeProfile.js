import { supabase } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useHandleChangeProfile = () => {
    const router = useRouter();
    const [changingProfile, setChangingProfile] = useState();
    const [changingError, setChangingError] = useState(false);

    const changeProfile = async (userId, profileImage) => {
        const refreshData = () => {
            router.refresh();
        };
        setChangingProfile(true);
        await supabase
            .from("users")
            .update({ profile_image: profileImage?.name })
            .eq("id", userId);

        const { data, error } = await supabase.storage
            .from("users")
            .upload(
                `${userId}/profile_image/${profileImage?.name}`,
                profileImage,
                {
                    cacheControl: "3600",
                    upsert: true,
                }
            );
        if (data) {
            setChangingProfile(false);
            refreshData();
        }
        if (error) setChangingError(true);
    };
    return { changeProfile, changingProfile, changingError };
};

export default useHandleChangeProfile;
