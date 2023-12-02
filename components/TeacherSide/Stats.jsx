import React from "react";

const statList = [
  {
    label: "Total Courses Made",
    amount: 10,
    icon: "Icon",
  },
  {
    label: "Total Students Enrolled",
    amount: 100,
    icon: "Icon",
  },
  {
    label: "Total Assigned Courses",
    amount: 10,
    icon: "Icon",
  },
];

export const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {statList.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center px-3 py-5 bg-flush-orange-200 rounded-xl"
          >
            <div className="flex justify-center items-center bg-flush-orange-500 text-white border rounded-full w-8 h-8 text-xs mb-5">
              {item.icon}
            </div>
            <h1 className="text-sm font-medium">{item.label}</h1>
            <p className="text-lg font-bold">{item.amount}</p>
          </div>
        );
      })}
    </div>
  );
};
