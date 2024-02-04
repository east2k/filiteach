import React from "react";

const subjectList = [
    {
        label: "Math",
        value: "math",
    },
    {
        label: "English",
        value: "english",
    },
    {
        label: "Filipino",
        value: "filipino",
    },
    {
        label: "Science",
        value: "science",
    },
    // {
    //     label: "Others",
    //     value: "others",
    // },
];

export const SubjectRadio = ({ values, handleDetailsFormChange }) => {
    return (
        <div className="flex flex-row items-center justify-evenly">
            {subjectList.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-row items-center hover:bg-zinc-100 px-2 py-1 rounded-full"
                    >
                        <input
                            id={item.value}
                            value={item.value}
                            name="subject"
                            checked={item.value === values.subject}
                            onChange={handleDetailsFormChange}
                            type="radio"
                        />
                        <label htmlFor={item.value} className="ml-1 text-sm">
                            {item.label}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};
