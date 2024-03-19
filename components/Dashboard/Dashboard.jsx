import React from "react";
import DashboardUsers from "./DashboardUsers";
import DashboardAdmin from "./DashboardAdmin";

const Dashboard = ({
    user,
    courses,
    recentTeacher,
    recentStudents,
    allCourses,
    allStudents,
    allTeachers,
}) => {
    return (
        <>
            {user?.role === "admin" ? (
                <DashboardAdmin
                    recentTeacher={recentTeacher}
                    recentStudents={recentStudents}
                    allStudents={allStudents}
                    allTeachers={allTeachers}
                    allCourses={allCourses}
                />
            ) : (
                <DashboardUsers user={user} courses={courses} />
            )}
        </>
    );
};

export default Dashboard;
