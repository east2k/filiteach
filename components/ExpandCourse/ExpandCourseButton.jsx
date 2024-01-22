"use client";

import useEnrollCourse from "@/hooks/useEnrollCourse";

const ExpandCourseButton = ({ role, userId, newData }) => {
    const { enrollCourse } = useEnrollCourse();

    const handleEnrollment = () => {
        if (role === "student") {
            const enrollData = newData.map((item) => {
                return { finishedChapter: false, ...item };
            });
            enrollCourse(userId, enrollData);
        }
    };
    return (
        <button onClick={handleEnrollment} className="py-1 px-2 bg-pink-300">
            Start
        </button>
    );
};

export default ExpandCourseButton;
