"use client";

import React, { useState } from "react";

const UsersList = ({ allStudents, allTeachers }) => {
    const [usersList, setUsersList] = useState([]);

    const [changeTable, setChangeTable] = useState("students");

    const handleChangeTable = (table) => {
        console.log(table);
        setChangeTable(table);
    };

    return (
        <div className="px-5 py-2 h-full">
            <h1 className="text-3xl mb-5">List of Users</h1>
            <div className="flex flex-row gap-2">
                <button
                    onClick={() => handleChangeTable("students")}
                    className={`px-5 py-1 border-b hover:border-mantis-400 ${
                        changeTable === "students"
                            ? "border-mantis-500"
                            : "border-mantis-200"
                    }`}
                >
                    Students
                </button>
                <button
                    onClick={() => handleChangeTable("teachers")}
                    className={`px-5 py-1 border-b hover:border-mantis-400 ${
                        changeTable === "teachers"
                            ? "border-mantis-500"
                            : "border-mantis-200"
                    }`}
                >
                    Teachers
                </button>
            </div>
            <div className="my-2 h-4/5 flex flex-col">
                <div className="grid grid-cols-4 border border-mantis-400  px-5 py-2">
                    <p className="text-lg">Name</p>
                    <p className="text-lg">
                        {changeTable === "students"
                            ? "Learning Materials Enrolled"
                            : "Subject Assigned"}
                    </p>
                    <p className="text-lg">
                        {changeTable === "students"
                            ? "Learning Materials Finished"
                            : "Learning Materials Made"}
                    </p>
                    <p className="text-lg">Registration Date</p>
                </div>
                <div className="max-h-[90%] overflow-auto">
                    {changeTable === "students" &&
                        allStudents.map((items, index) => {
                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-4 px-5 py-2 border-b border-mantis-200"
                                >
                                    <p className="text-left text-sm">
                                        {items.first_name} {items.last_name}
                                    </p>
                                    <p className="text-left text-sm">5</p>
                                    <p className="text-left text-sm">5</p>
                                    <p className="text-left text-sm">
                                        {items.registration_date}
                                    </p>
                                </div>
                            );
                        })}
                    {changeTable === "teachers" &&
                        allTeachers.map((items, index) => {
                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-4 px-5 py-2 border-b border-mantis-200"
                                >
                                    <p className="text-left text-sm">
                                        {items.first_name} {items.last_name}
                                    </p>
                                    <p className={`text-left text-sm capitalize ${!items.subject_assigned && "text-red-800"}`}>{!items.subject_assigned ? "None" : items.subject_assigned}</p>
                                    <p className="text-left text-sm">{items.courses_made}</p>
                                    <p className="text-left text-sm">
                                        {items.registration_date}
                                    </p>
                                </div>
                            );
                        })}
                </div>
                <div className="flex flex-row justify-between items-center gap-2 w-full mt-auto border-t border-mantis-400">
                    {/* <div className="flex flex-row gap-1">
                        <p className="w-5 h-5 text-sm text-center rounded-sm bg-mantis-500 text-white">
                            1
                        </p>
                        <p className="w-5 h-5 text-sm text-center rounded-sm bg-mantis-300 text-white">
                            2
                        </p>
                    </div>
                    <div>
                        <button className="my-2 bg-mantis-500 text-white px-4 py-1">
                            Back
                        </button>
                        <button className="my-2 bg-mantis-500 text-white px-4 py-1">
                            Next
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default UsersList;
