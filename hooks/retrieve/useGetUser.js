import readUserSession from "@/auth-actions/readUserSession";
import createSupabaseServerClient from "@/lib/server";
const CDNURL =
    "https://hiarkpmgwdryrbozaxfo.supabase.co/storage/v1/object/public/users/";
// https://hiarkpmgwdryrbozaxfo.supabase.co/storage/v1/object/public/users/85e0c44e-aeae-4401-893f-b1bdddb08721/profile_image/hotudogu.png

export const useGetUser = async () => {
    const supabase = await createSupabaseServerClient();
    const { data } = await readUserSession();

    if (!data.session) return;

    const { user } = data.session;
    const { data: userData } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id);
    const newData = userData.map(mapData);
    return newData[0];
};

const mapData = (item) => {
    if (!item.profile_image) return { ...item };
    return {
        ...item,
        profile_image: `${CDNURL}${item.id}/profile_image/${item.profile_image}`,
    };
};
