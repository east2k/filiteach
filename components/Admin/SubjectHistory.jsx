import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

const SubjectHistory = ({ handleCheckHistory, displaySubjects }) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 bg-gray-400 bg-opacity-50 z-50">
            <div className="flex flex-col shadow-md absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 px-5 py-3 w-3/5 bg-white border border-mantis-200">
                <button
                    onClick={() => handleCheckHistory()}
                    className="absolute right-4 rounded-full hover:bg-red-50"
                >
                    <XMarkIcon width={20} />
                </button>
                <h1 className="text-2xl">Previous Subjects</h1>
                <p className="border-b">Latest to Oldest:</p>
                <ul className="flex flex-col justify-between px-5">
                    {!displaySubjects ? (
                        <p>No subjects</p>
                    ) : (
                        displaySubjects.map((item, index) => {
                            return (
                                <li key={index} className="capitalize">
                                    {index+1}. {item} 
                                </li>
                            );
                        })
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SubjectHistory;
