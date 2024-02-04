import Dashboard from "@/components/Dashboard/Dashboard";
import { Stats } from "@/components/TeacherSide/Stats";
import { useHandleRetrieveUsers } from "@/hooks/retrieve/admin/useHandleRetrieveUsers";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { useRetrieveCourses } from "@/hooks/retrieve/useRetrieveCourses";

export default async function Learning() {
    const user = await useGetUser();
    const {
        getOwnCourses,
        getOwnCoursesLimited,
        getLimitedCourses,
        getAllCourses,
    } = await useRetrieveCourses();
    const {
        retrieveRecentStudents,
        retrieveRecentTeachers,
        retrieveAllTeachers,
        retrieveAllStudents,
    } = await useHandleRetrieveUsers();

    let courses, coursesMade;
    if (user.role === "teacher") {
        coursesMade = await getOwnCourses(user.id);
        courses = await getOwnCoursesLimited(user.id);
    } else {
        courses = await getLimitedCourses(3);
    }

    let recentStudents, recentTeacher, allCourses, allStudents, allTeachers;
    if (user.role === "admin") {
        recentTeacher = await retrieveRecentTeachers();
        recentStudents = await retrieveRecentStudents();
        allStudents = await retrieveAllStudents();
        allTeachers = await retrieveAllTeachers();
        allCourses = await getAllCourses();
    }
    return (
        <div>
            <div className="bg-mantis-50 shadow-sm">
                <div className="flex flex-row items-center py-3 px-7">
                    <h1 className="text-4xl font-medium text-mantis-600 tracking-wide">
                        Dashboard
                    </h1>
                </div>
            </div>
            <div className="flex flex-col">
                {user.role === "teacher" && (
                    <div className="flex flex-col px-7 py-3">
                        <h1 className="text-xl mb-3 font-medium">Statistics</h1>
                        <Stats coursesMade={coursesMade.length} />
                    </div>
                )}
                <div className="flex flex-row px-7 py-3">
                    <Dashboard
                        user={user}
                        courses={courses}
                        recentTeacher={recentTeacher}
                        recentStudents={recentStudents}
                        allStudents={allStudents}
                        allTeachers={allTeachers}
                        allCourses={allCourses}
                    />
                </div>
            </div>
        </div>
    );
}
