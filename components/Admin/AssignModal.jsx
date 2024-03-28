import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

const AssignModal = ({
    activeSubject,
    subjectList,
    handleAssignSubject,
    handleRadioChange,
    handleShowModal,
}) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 bg-gray-400 bg-opacity-50 z-10">
            <div className="flex flex-col shadow-md absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 px-5 py-3 w-3/5 bg-white border border-mantis-200">
                <button
                    onClick={()=>handleShowModal()}
                    className="absolute right-4 rounded-full hover:bg-red-50"
                >
                    <XMarkIcon width={20} />
                </button>
                <h1 className="text-2xl">Assign</h1>
                <p>Subjects:</p>
                <div className="flex md:flex-row flex-col justify-between px-5">
                    {subjectList.map((items, index) => {
                        return (
                            <label
                                key={index}
                                className="capitalize flex flex-row gap-1 items-center"
                                htmlFor={items}
                            >
                                <input
                                    className="w-3 h-3"
                                    type="radio"
                                    id={items}
                                    name="subject"
                                    value={items}
                                    checked={items === activeSubject}
                                    onChange={handleRadioChange}
                                />
                                {items}
                            </label>
                        );
                    })}
                </div>
                <button
                    disabled={!activeSubject}
                    onClick={() => handleAssignSubject(activeSubject)}
                    className={`ml-auto px-4 py-1 text-white mt-5 ${
                        !activeSubject ? "bg-mantis-200 cursor-not-allowed" : "bg-mantis-400 cursor-pointer"
                    }`}
                >
                    Assign
                </button>
            </div>
        </div>
    );
};

export default AssignModal;
