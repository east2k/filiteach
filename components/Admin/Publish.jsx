
import { CourseCard } from "../LearningMaterial/CourseCard";

const Publish = ({ courses }) => {
    return (
        <div className="p-5 flex flex-col h-full md:mt-0 mt-16">
            <div className="flex justify-between mb-5">
                <h1 className="text-2xl my-2">
                    Publish Learning Materials
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {courses.length !== 0 ? (
                    <>
                        {courses.map((item, index) => {
                            return (
                                <CourseCard
                                    key={index}
                                    name={item.subject}
                                    image={item.thumbnail}
                                    title={item.title}
                                    instructor={item.instructor}
                                    score={item.score}
                                    courseID={item.id}
                                    description={item.description}
                                />
                            );
                        })}
                    </>
                ) : (
                    <h1 className="text-2xl text-center col-span-4">
                        You have no courses
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Publish;
