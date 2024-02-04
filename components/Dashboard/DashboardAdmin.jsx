import {
    BookOpenIcon,
    ExclamationCircleIcon,
    PencilIcon,
    UserIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
const DashboardAdmin = ({
    recentTeacher,
    recentStudents,
    allCourses,
    allStudents,
    allTeachers,
}) => {
    const withSub = allTeachers.filter(
        (item) => item.subject_assigned !== null
    ).length;
    const noSub = allTeachers.filter(
        (item) => item.subject_assigned === null
    ).length;
    const statList = [
        {
            label: "Total Teacher",
            amount: allTeachers.length,
            icon: <PencilIcon width={20} />,
        },
        {
            label: "Total Students",
            amount: allStudents.length,
            icon: <UserIcon width={20} />,
        },
        {
            label: "Total Learning Materials Made",
            amount: allCourses.length,
            icon: <BookOpenIcon width={20} />,
        },
        {
            label: "Total Teacher with subject assigned",
            amount: withSub,
            icon: <UsersIcon width={20} />,
        },
        {
            label: "Total Teacher with no subjects assigned",
            amount: noSub,
            icon: <XMarkIcon width={20} />,
        },
    ];
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-5 justify-center border-b pb-2">
                {statList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col basis-1/4 items-center px-3 py-5 bg-mantis-200 rounded-xl"
                        >
                            <div className="flex justify-center items-center bg-mantis-500 text-white border rounded-full w-8 h-8 text-xs mb-5">
                                {item.icon}
                            </div>
                            <h1 className="text-sm font-medium text-center">
                                {item.label}
                            </h1>
                            <p className="text-lg font-bold">{item.amount}</p>
                        </div>
                    );
                })}
            </div>
            {noSub !== 0 && (
                <div className="w-full flex flex-row justify-between items-center bg-red-100 px-2 py-3 mb-5">
                    <div className="flex flex-row">
                        <ExclamationCircleIcon width={20} />
                        <h1 className="text-lg">
                            Note: {noSub} Teachers are waiting to be assigned a
                            subject
                        </h1>
                    </div>
                    <Link
                        href="/learning/assign-teachers"
                        className="text-md bg-mantis-500 text-white px-5 py-2 rounded-lg"
                    >
                        Assign now
                    </Link>
                </div>
            )}
            <div className="border border-mantis-500 px-2 py-3 mb-5">
                <h1 className="text-2xl">Latest teacher registered</h1>
                <div className="grid grid-cols-2 border-b pb-3 mx-10">
                    <p>Name</p>
                    <p className="ml-auto">Register Date</p>
                </div>
                {recentTeacher.map((items, index) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-2 border-b mx-10"
                        >
                            <p>
                                {items.first_name} {items.last_name}
                            </p>
                            <p className="ml-auto">{items.registration_date}</p>
                        </div>
                    );
                })}
            </div>
            <div className="border border-mantis-500 px-2 py-3">
                <h1 className="text-2xl">Latest students registered</h1>
                <div className="grid grid-cols-2 border-b mb-1 mx-10">
                    <p>Name</p>
                    <p className="ml-auto">Register Date</p>
                </div>
                {recentStudents.map((items, index) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-2 border-b mx-10"
                        >
                            <p>
                                {items.first_name} {items.last_name}
                            </p>
                            <p className="ml-auto">{items.registration_date}</p>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center items-center mt-5">
                <Link
                    href="/learning/users-list"
                    className="border border-mantis-200 hover:border-mantis-300 my-auto px-4 py-1 rounded-lg"
                >
                    See all users...
                </Link>
            </div>
        </div>
    );
};

export default DashboardAdmin;
