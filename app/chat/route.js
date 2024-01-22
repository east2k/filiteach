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
        const res = await openai.completions.create({
            prompt,
            model: "gpt-3.5-turbo-instruct",
            max_tokens: 512,
            temperature: 0,
        });
        return NextResponse.json({ choices: res.choices });
    } catch (error){
        return NextResponse.json(
            {
                message: "Something went wrong: " +error,
            },
            { status: 400 }
        );
    }
}
