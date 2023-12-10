import React from "react";
import { CourseCard } from "./CourseCard";

export const CoursesContainer = ({ courses }) => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {courses.map((item, index) => {
                return (
                    <CourseCard
                        key={index}
                        name={item.subject}
                        image={item.thumbnail}
                        title={item.title}
                        instructor={item.instructor}
                        score={item.score}
                        courseID={item.id}
                        description={item.description}
                    />
                );
            })}
        </div>
    );
};
