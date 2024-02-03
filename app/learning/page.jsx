import Dashboard from "@/components/Dashboard/Dashboard";
import { Stats } from "@/components/TeacherSide/Stats";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { useRetrieveCourses } from "@/hooks/retrieve/useRetrieveCourses";

export default async function Learning() {
    const user = await useGetUser();
    const { getOwnCourses, getLimitedCourses } = await useRetrieveCourses();
    let courses;
    if (user.role === "teacher") {
        courses = await getOwnCourses(user.id);
    }else {
      courses = await getLimitedCourses(3);
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
                        <Stats coursesMade = {courses.length} />
                    </div>
                )}
                <div className="flex flex-row px-7 py-3">
                    <Dashboard user={user} courses={courses} />
                </div>
            </div>
        </div>
    );
}
