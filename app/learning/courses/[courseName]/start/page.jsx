import { CourseParts } from "@/components/StartCourse/CourseParts";
import { useGetCourseSections } from "@/hooks/useGetCourseSections";
import { useGetUser } from "@/hooks/useGetUser";
const Start = async ({ searchParams }) => {
    const { newData } = await useGetCourseSections(searchParams.courseID);
    const user = await useGetUser();

    return (
        <div>
            <CourseParts
                title={searchParams.title}
                courseID={searchParams.courseID}
                newData={newData}
                userId={user.id}
                role={user.role}
                teacher={searchParams.teacher}
            />
        </div>
    );
};

export default Start;
