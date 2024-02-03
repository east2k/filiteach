import createSupabaseServerClient from "@/lib/server";
const CDNURL =
    "https://hiarkpmgwdryrbozaxfo.supabase.co/storage/v1/object/public/courses/";

export const useGetSectionData = async () => {
    const supabase = await createSupabaseServerClient();

    const { data } = await supabase
        .from("video-presentations")
        .select("*")
        .eq("course_id", id);

    const newData = `${CDNURL}${teacherID}/${data[0].course_id}/videos/${data[0].id}/${data[0].video}`;

    return { newData };
};
