"use server";

import createSupabaseServerClient from "@/lib/server";

export const insert = async (form) => {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
            data: {
                username: form.username,
                first_name: form.firstName,
                last_name: form.lastName,
                profile_image: "/assets/images/feature-placeholder.jpeg",
                role: form.role,
            },
        },
    });

    return JSON.stringify(result);
};