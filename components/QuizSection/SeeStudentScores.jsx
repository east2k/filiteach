import useSubmitQuiz from "@/hooks/useSubmitQuiz";
import React, { useEffect, useState } from "react";

export const SeeStudentScores = ({ teacher, id, instructor }) => {
    console.log(instructor);
    const { getAllStudentScores } = useSubmitQuiz();
    const [listOfStudents, setListOfStudents] = useState();
    const [currentTeacher, setCurrentTeacher] = useState();

    useEffect(() => {
        const getData = async () => {
            const students = await getAllStudentScores(id);
            setListOfStudents(students.data);
            setCurrentTeacher(students.teacherDetails?.instructor);
        };
        getData();
    }, []);
    console.log(listOfStudents);
    return (
        <div>
            <h1 className="text-xl my-2">List of students who had the quiz</h1>
            <div className="grid grid-cols-2">
                {!listOfStudents ? (
                    <p className="text-2xl">None</p>
                ) : (
                    <>
                        {currentTeacher !== instructor ? (
                            <h1>
                                No one currently did this quiz
                            </h1>
                        ) : (
                            <>
                                {listOfStudents.map((item, index) => {
                                    console.log(item);
                                    return (
                                        <>
                                            <div key={index} className="border">
                                                Name: {item.student_name}
                                            </div>
                                            <div className="border">
                                                Score: {item.score}
                                            </div>
                                        </>
                                    );
                                })}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
