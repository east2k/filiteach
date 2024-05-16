import PublishButton from "@/components/Admin/PublishButton";
import { CourseParts } from "@/components/StartCourse/CourseParts";
import { useGetCourseSections } from "@/hooks/retrieve/useGetCourseSections";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { useRetrieveCourses } from "@/hooks/retrieve/useRetrieveCourses";
const Start = async ({ searchParams }) => {
    const { newData } = await useGetCourseSections(searchParams.courseID);
    const { getOneCourse } = await useRetrieveCourses();
    const user = await useGetUser();
    const data = await getOneCourse(searchParams.courseID);

    return (
        <div>
            {!data.published && <PublishButton materialID={data.id} />}
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
