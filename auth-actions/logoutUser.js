"use server";

import createSupabaseServerClient from "@/lib/server";

export const logoutUser = async () => {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
};
