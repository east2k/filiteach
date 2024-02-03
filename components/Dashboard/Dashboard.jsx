import React from "react";
import DashboardUsers from "./DashboardUsers";
import DashboardAdmin from "./DashboardAdmin";

const Dashboard = ({ user, courses }) => {
    return (
        <>
            {user.role === "admin" ? (
                <DashboardAdmin />
            ) : (
                <DashboardUsers user={user} courses={courses} />
            )}
        </>
    );
};

export default Dashboard;
