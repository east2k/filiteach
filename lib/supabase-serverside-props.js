"use server";

import { createServerClient, serialize } from "@supabase/ssr";

export const getServerSideProps = async (context) => {
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name) {
                    return context.req.cookies[name];
                },
                set(name, value, options) {
                    context.res.appendHeader(
                        "Set-Cookie",
                        serialize(name, value, options)
                    );
                },
                remove(name, options) {
                    context.res.appendHeader(
                        "Set-Cookie",
                        serialize(name, "", options)
                    );
                },
            },
        }
    );

    return { supabase };
};
