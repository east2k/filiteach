"use client";

import { useState } from "react";
import { CreateCourseForm } from "./CreateCourseForm";
import { CreateCourseHeader } from "./CreateCourseHeader";

export const CreateCourseContainer = ({ teacherId }) => {
    const [activePart, setActivePart] = useState(0);

    const handleChangeActivePart = (action) => {
        if (action === "previous") {
            if (activePart === 0) return;
            setActivePart((prevState) => --prevState);
        } else {
            if (activePart === 3) return;
            setActivePart((prevState) => ++prevState);
        }
    };

    return (
        <>
            <CreateCourseHeader activePart={activePart} />
            <div className="p-10">
                <CreateCourseForm
                    teacherId={teacherId}
                    handleChangeActivePart={handleChangeActivePart}
                    activePart={activePart}
                />
            </div>
        </>
    );
};
