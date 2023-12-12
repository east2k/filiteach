import { NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
});

export const dynamic = "force-dynamic";

export async function POST(req) {
    const { prompt } = await req.json();

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });
        return NextResponse.json({ choices: response.choices });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Something went wrong",
                error: error,
            },
            { status: 400 }
        );
    }
}
