import ExpandCourse from "@/components/ExpandCourse/ExpandCourse";
import { useGetCourseSections } from "@/hooks/retrieve/useGetCourseSections";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import { useRetrieveCourses } from "@/hooks/retrieve/useRetrieveCourses";

const CourseName = async ({ searchParams }) => {
    const user = await useGetUser();
    const { getOneCourse } = await useRetrieveCourses();
    const data = await getOneCourse(searchParams.courseID);
    const { newData } = await useGetCourseSections(searchParams.courseID);

    return <ExpandCourse user={user} data={data} newData={newData} />;
};

export default CourseName;
