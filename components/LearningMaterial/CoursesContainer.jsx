import React from "react";
import { CourseCard } from "./CourseCard";

export const CoursesContainer = ({ currentDisplayed, courses }) => {
    const filterCoursesBySubject = () => {
        return courses.filter(
            (course) =>
                course.subject.toLowerCase() === currentDisplayed.toLowerCase() && !course.archived
        );
    };
    
    return (
        <div className="grid grid-cols-4 gap-5">
            {!filterCoursesBySubject().length
                ? <p className="text-xl col-span-4 text-center my-5">No available learning material</p>
                : filterCoursesBySubject().map((item, index) => {
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
