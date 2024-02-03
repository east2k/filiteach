import readUserSession from "@/auth-actions/readUserSession";
import createSupabaseServerClient from "@/lib/server";

export const useGetUser = async () => {
    const supabase = await createSupabaseServerClient();
    const { data } = await readUserSession();

    if (!data.session) return;
    
    const { user } = data.session;
    const { data: userData } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id);
    return userData[0];
};
