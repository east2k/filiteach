"use client";

import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import AssignModal from "./AssignModal";
import useHandleUpdateTeacher from "@/hooks/handlers/useHandleUpdateTeacher";

const subjectList = ["english", "filipino", "math", "science"];

const AssignTeacher = ({ teachers }) => {
    const [showModal, setShowModal] = useState(false);
    const [activeSubject, setActiveSubject] = useState("");
    const [chosenUser, setChosenUser] = useState();
    const [teachersList, setTeachersList] = useState([]);
    const [totalList, setTotalList] = useState([]);

    const { updateSubject, updating, updatedTeachers, totalUpdatedTeachers } =
        useHandleUpdateTeacher();

    useEffect(() => {
        const handleUpdateSubject = async () => {
            const teachers = await updatedTeachers();
            const allTeachers = await totalUpdatedTeachers();
            setTeachersList(teachers);
            setTotalList(allTeachers);
        };
        if ((!teachersList.length && !totalList.length) || updating) {
            handleUpdateSubject();
        }
    }, [
        teachersList,
        updatedTeachers,
        totalUpdatedTeachers,
        updating,
        totalList,
    ]);

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
            <div className="h-1/3 flex flex-col">
                <h1 className="text-3xl mb-5">
                    List of Teacher with no Subjects assigned
                </h1>
                <div className="grid grid-cols-10 border border-mantis-400  px-5 py-2">
                    <p className="text-lg col-span-1">#</p>
                    <p className="text-lg col-span-3">Name</p>
                    <p className="text-lg col-span-3">Registration Date</p>
                    <p className="text-lg col-span-3 ml-auto">Assign</p>
                </div>
                <div className="max-h-[80%] overflow-auto">
                    {!teachersList.length ? (
                        <p className="cols-span-3 text-center text-xl my-2 py-5 w-full border-b border-b-mantis-200">
                            None
                        </p>
                    ) : (
                        teachersList.map((items, index) => {
                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-10 px-5 py-2 border-b border-mantis-200"
                                >
                                    <p className="text-left col-span-1 text-sm">
                                        {index + 1}
                                    </p>
                                    <p className="text-left col-span-3 text-sm">
                                        {items.first_name} {items.last_name}
                                    </p>
                                    <p className="text-left col-span-3 text-sm">
                                        {items.registration_date}
                                    </p>
                                    <button
                                        onClick={() =>
                                            handleShowModal(items.user_id)
                                        }
                                        className="flex justify-end col-span-3 text-mantis-400"
                                    >
                                        <PlusCircleIcon width={25} />
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
            <div className="h-2/3 flex flex-col">
                <h1 className="text-3xl mb-5">Re-assign teachers</h1>
                <div className="grid grid-cols-12 border border-mantis-400  px-5 py-2">
                    <p className="text-lg col-span-1">#</p>
                    <p className="text-lg col-span-3">Name</p>
                    <p className="text-lg col-span-3">
                        Currently Assigned Subject
                    </p>
                    <p className="text-lg col-span-3">Registration Date</p>
                    <p className="text-lg col-span-2 ml-auto">Assign</p>
                </div>
                <div className="max-h-[80%] overflow-auto">
                    {totalList.map((items, index) => {
                        if (items.subject_assigned === null) return;
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-12 px-5 py-2 border-b border-mantis-200"
                            >
                                <p className="text-left col-span-1 text-sm">
                                    {index + 1}
                                </p>
                                <p className="text-left col-span-3 text-sm">
                                    {items.first_name} {items.last_name}
                                </p>
                                <p className="text-left col-span-3 text-sm capitalize">
                                    {items.subject_assigned}
                                </p>
                                <p className="text-left col-span-3 text-sm">
                                    {items.registration_date}
                                </p>
                                <button
                                    onClick={() =>
                                        handleShowModal(items.user_id)
                                    }
                                    className="flex justify-end col-span-2 text-mantis-400"
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
