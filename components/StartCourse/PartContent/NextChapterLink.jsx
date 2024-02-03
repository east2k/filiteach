import Link from "next/link";

const NextChapterLink = ({ title, courseID, part, teacher, type}) => {
    return (
        <>
            <Link
                href={{
                    pathname: `/learning/courses/${title}/start/${parseInt(part)+1}-${type}`,
                    query: {
                        title: title,
                        courseID: courseID,
                        part: parseInt(part)+1,
                        teacher: teacher,
                    },
                }}
                className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm text-center"
            >
                Next Chapter
            </Link>
        </>
    );
};

export default NextChapterLink;
