"use client";

import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import AssignModal from "./AssignModal";
import useHandleUpdateTeacher from "@/hooks/handlers/useHandleUpdateTeacher";

const subjectList = ["english", "filipino", "math", "science"];

const AssignTeacher = ({ teachers }) => {
    const [showModal, setShowModal] = useState(false);
    const [activeSubject, setActiveSubject] = useState("");
    const [chosenUser, setChosenUser] = useState();

    const { updateSubject, updating } = useHandleUpdateTeacher();

    const handleShowModal = (userID) => {
        if (!userID) {
            setShowModal(false);
            return;
        }
        setShowModal(true);
        setChosenUser(userID);
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setActiveSubject(value);
    };

    const handleAssignSubject = (subject) => {
        setActiveSubject("");
        handleShowModal();
        if (updating) return;
        updateSubject(chosenUser, subject);
        window.location.reload();
    };

    return (
        <div className="relative px-5 py-2 h-full w-full">
            {updating && <h1>Updating</h1>}
            {showModal && (
                <AssignModal
                    activeSubject={activeSubject}
                    subjectList={subjectList}
                    handleAssignSubject={handleAssignSubject}
                    handleRadioChange={handleRadioChange}
                    handleShowModal={handleShowModal}
                />
            )}
            <h1 className="text-3xl mb-5">
                List of Teacher with no Subjects assigned
            </h1>
            <div className="my-2 h-4/5 flex flex-col">
                <div className="grid grid-cols-3 border border-mantis-400  px-5 py-2">
                    <p className="text-lg">Name</p>
                    <p className="text-lg">Registration Date</p>
                    <p className="text-lg ml-auto">Assign</p>
                </div>
                <div className="max-h-[90%] overflow-auto">
                    {teachers.map((items, index) => {
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-3 px-5 py-2 border-b border-mantis-200"
                            >
                                <p className="text-left text-sm">
                                    {items.first_name} {items.last_name}
                                </p>
                                <p className="text-left text-sm">
                                    {items.registration_date}
                                </p>
                                <button
                                    onClick={() =>
                                        handleShowModal(items.user_id)
                                    }
                                    className="flex justify-end text-mantis-400"
                                >
                                    <PlusCircleIcon width={25} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AssignTeacher;
