"use client";

import { useInsertUser } from "@/hooks/insertion/useInsertUser";
import { PlayIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";

const AddID = ({ idList }) => {
    const studentID = useRef();
    const studentName = useRef();
    const studentContact = useRef();
    const { insert, isInserting, isSuccess } = useInsertUser();

    const handleSubmit = async () => {
        await insert(
            studentID.current.value,
            studentName.current.value,
            studentContact.current.value
        );
        studentID.current.value = "";
        studentName.current.value = "";
        studentContact.current.value = "";
    };

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl mb-5 p-6">List of Added School IDs</h1>
            <div className="grid grid-cols-5 border border-mantis-400  px-5 py-2 p-6">
                <p className="text-lg col-span-1">ID Number</p>
                <p className="text-lg col-span-2">Name</p>
                <p className="text-lg col-span-2">Contact Number</p>
            </div>
            <div className="max-h-[80%] overflow-auto pb-6">
                {idList.map((items, index) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-5 px-0 py-2 border-b border-mantis-200"
                        >
                            <p className="text-left text-sm w-full border-b pb-2 px-6 col-span-1">
                                {items.school_id}
                            </p>
                            <p className="text-left text-sm w-full border-b pb-2 px-6 col-span-2">
                                {items.student_name}
                            </p>
                            <p className="text-left text-sm w-full border-b pb-2 px-6 col-span-2">
                                {items.contact_no}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-col mt-auto p-6 border-t w-full">
                <label
                    className="w-full  flex flex-row items-center mb-5 border-b py-2"
                    htmlFor="student_id"
                >
                    <p className="w-2/12">Student ID</p>
                    <input
                        id="student_id"
                        type="number"
                        placeholder="Enter here"
                        className="resize-none px-3 py-2 shadow-md w-10/12"
                        ref={studentID}
                    />
                </label>
                <label
                    className="w-full flex flex-row items-center mb-5 border-b py-2"
                    htmlFor="student_name"
                >
                    <p className="w-2/12">Full Name</p>
                    <input
                        id="student_name"
                        type="text"
                        placeholder="Enter here"
                        className="resize-none px-3 py-2 shadow-md w-10/12"
                        ref={studentName}
                    />
                </label>
                <label
                    className="w-full flex flex-row items-center mb-5 border-b py-2"
                    htmlFor="student_contact"
                >
                    <p className="w-2/12">Contact Number</p>
                    <input
                        id="student_contact"
                        type="number"
                        placeholder="Enter here"
                        className="resize-none px-3 py-2 shadow-md w-10/12"
                        ref={studentContact}
                    />
                </label>
                <button
                    onClick={handleSubmit}
                    className="flex items-center justify-center gap-2 bg-mantis-400 hover:bg-mantis-300 text-white px-7 py-1 rounded-md w-3/12"
                >
                    {isInserting && <PlayIcon className="w-5 animate-spin" />}
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AddID;
