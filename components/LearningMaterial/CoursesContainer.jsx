import React from "react";
import { CourseCard } from "./CourseCard";

export const CoursesContainer = ({ currentDisplayed, courses }) => {
    const filterCoursesBySubject = () => {
        return courses.filter(
            (course) =>
                course.subject.toLowerCase() === currentDisplayed.toLowerCase()
        );
    };

    return (
        <div className="grid grid-cols-4 gap-5">
            {filterCoursesBySubject().map((item, index) => {
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
