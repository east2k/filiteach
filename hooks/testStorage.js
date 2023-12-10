import { supabase } from "@/lib/supabase-client";

const testStorage = async (finalData) => {
    // const file = finalData.thumbnail;
    // await supabase.storage
    //     .from("course-thumbnails")
    //     .upload("public/thumbnail.png", file, {
    //         cacheControl: "3600",
    //         upsert: false,
    //     });
    const { data, error } = await supabase.storage
        .from("course-thumbnails")
        .list("public", {
            limit: 100,
            offset: 0,
            sortBy: { column: "name", order: "asc" },
        });

    console.log(data, error);
};

export default testStorage;
