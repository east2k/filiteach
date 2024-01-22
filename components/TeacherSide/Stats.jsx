
const statList = [
    {
        label: "Total Learning Materials Made",
        amount: 10,
        icon: "Icon",
    },
    {
        label: "Total Students Enrolled",
        amount: 100,
        icon: "Icon",
    },
    {
        label: "Total Assigned Learning Materials",
        amount: 10,
        icon: "Icon",
    },
];

export const Stats = ({ coursesMade }) => {
    const courseStats= [coursesMade,0,0]
    return (
        <div className="grid grid-cols-3 gap-5">
            {statList.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col items-center px-3 py-5 bg-mantis-200 rounded-xl"
                    >
                        <div className="flex justify-center items-center bg-mantis-500 text-white border rounded-full w-8 h-8 text-xs mb-5">
                            {item.icon}
                        </div>
                        <h1 className="text-sm font-medium">{item.label}</h1>
                        <p className="text-lg font-bold">{courseStats[index]}</p>
                    </div>
                );
            })}
        </div>
    );
};
