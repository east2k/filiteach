"use server";

import createSupabaseServerClient from "@/lib/server";

export const loginUser = async (form) => {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
    });
    return JSON.stringify(result);
};
