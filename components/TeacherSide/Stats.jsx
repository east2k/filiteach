const {
    BookOpenIcon,
    FolderIcon,
    PaperClipIcon,
} = require("@heroicons/react/20/solid");

export const Stats = ({ coursesMade, ownData }) => {

    const statList = [
        {
            label: "Subject Assigned",
            amount: ownData.subject_assigned,
            icon: <BookOpenIcon width={20} />,
        },
        {
            label: "Active Learning Materials Made",
            amount: coursesMade,
            icon: <PaperClipIcon width={20} />,
        },
        {
            label: "Archived Learning Materials",
            amount: 0,
            icon: <FolderIcon width={20} />,
        },
    ];
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
                        <p className="text-lg font-bold capitalize">
                            {item.amount}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
