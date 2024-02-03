import { useGetCourseSections } from "@/hooks/useGetCourseSections";
import { useGetUser } from "@/hooks/useGetUser";
import { PartContent } from "@/components/StartCourse/PartContent/PartContent";

const Part = async ({ searchParams }) => {
    const user = await useGetUser();
    const { newData } = await useGetCourseSections(searchParams.courseID);
    const finalData = newData[searchParams.part - 1];
    return (
        <>
            <PartContent
                finalData={finalData}
                user={user}
                title={searchParams.title}
                courseID={searchParams.courseID}
                part={searchParams.part}
                teacher={searchParams.teacher}
            />
        </>
    );
};

export default Part;
