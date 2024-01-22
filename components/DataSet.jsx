"use client";

import { supabase } from "@/lib/supabase-client";
import { PlayIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";

const DataSet = () => {
    const inputRef = useRef();
    const [loading, setLoading] = useState(false);

    const toastError = () => {
        alert("error");
    };

    const handleSubmit = async () => {
        setLoading(true);
        const content = inputRef.current.value;

        if (content && content.trim()) {
            const res = await fetch(location.origin + "/embedding", {
                method: "POST",
                body: JSON.stringify({ text: content.replace(/\n/g, " ") }),
            });
            if (res.status !== 200) {
                toastError();
            } else {
                const result = await res.json();
                const embedding = result.embedding;
                const token = result.token;
                const { error } = await supabase.from("documents").insert({
                    content,
                    embedding,
                    token,
                });

                if (error) {
                    toastError();
                } else {
                    alert("Successfully inserted");
                    inputRef.current.value = "";
                }

            }
        }
        setLoading(false);
    };

    return (
        <>
            <textarea
                placeholder="Enter here"
                className="resize-none px-3 py-2 w-full shadow-md"
                ref={inputRef}
            />
            <button
                onClick={handleSubmit}
                className="flex items-center justify-center gap-2 bg-mantis-400 hover:bg-mantis-300 text-white px-7 py-1 rounded-md"
            >
                {loading && <PlayIcon className="w-5 animate-spin" />}
                Submit
            </button>
        </>
    );
};

export default DataSet;
