import { supabase } from "@/lib/supabase-client";

export const useInsertCourse = (teacherId) => {
    const insert = async (form) => {
        const { data: user } = await supabase
            .from("users")
            .select(`first_name, last_name`)
            .eq("id", teacherId);
        const response = await supabase
            .from("courses")
            .insert([
                {
                    teacher_id: teacherId,
                    instructor: `${user[0].first_name} ${user[0].last_name}`,
                    title: form.title,
                    subject: form.subject,
                    score: form.score,
                    description: form.description,
                    thumbnail: `/${form.thumbnail.name}`,
                },
            ])
            .select("id");

        const id = response.data.at(0).id;

        await supabase.storage
            .from("courses")
            .upload(
                `${teacherId}/${id}/${form.thumbnail.name}`,
                form.thumbnail,
                {
                    cacheControl: "3600",
                    upsert: false,
                }
            );

        for (const [index, section] of form.currentSections.entries()) {
            if (section.type === "quiz") {
                await supabase.from("course-quizes").insert([
                    {
                        course_id: id,
                        quiz_content: { ...section.items },
                        part: index + 1,
                    },
                ]);
            } else if (section.type === "video") {
                const response = await supabase
                    .from("video-presentations")
                    .insert([
                        {
                            course_id: id,
                            summary: section.summary,
                            video: section.video.name,
                            thumbnail: section.thumbnail?.name,
                            part: index + 1,
                        },
                    ])
                    .select("id");
                const video_id = response.data.at(0).id;

                await supabase.storage
                    .from("courses")
                    .upload(
                        `${teacherId}/${id}/videos/${video_id}/${section.video.name}`,
                        section.video,
                        {
                            cacheControl: "3600",
                            upsert: false,
                        }
                    );

                await supabase.storage
                    .from("courses")
                    .upload(
                        `${teacherId}/${id}/videos/${video_id}/${section.thumbnail?.name}`,
                        section.thumbnail,
                        {
                            cacheControl: "3600",
                            upsert: false,
                        }
                    );
            }
        }
    };
    return { insert };
};
