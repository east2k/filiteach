const ExpandCourseButton = ({
    role,
    userId,
    materialId,
    newData,
    enrollCourse,
}) => {
    const handleEnrollment = () => {
        if (role === "student") {
            const enrollData = newData.map((item) => {
                return { finishedChapter: false, ...item };
            });
            enrollCourse(userId, materialId, enrollData);
        }
    };
    return (
        <button
            onClick={handleEnrollment}
            className="bg-mantis-400 text-white px-16 py-2 mt-2 rounded-sm text-center"
        >
            Enroll Now!
        </button>
    );
};

export default ExpandCourseButton;
