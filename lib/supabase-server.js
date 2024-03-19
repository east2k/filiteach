"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
const cookieStore = cookies();

export const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
        cookies: {
            get(name) {
                return cookieStore.get(name)?.value;
            },
        },
    }
);
