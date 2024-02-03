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
            <div className="grid mx-24 mt-5">
                {!listOfStudents ? (
                    <p className="text-2xl">None</p>
                ) : (
                    <>
                        {currentTeacher !== instructor ? (
                            <h1>No one currently did this quiz</h1>
                        ) : (
                            <div className="grid grid-cols-1">
                                <div className="flex flex-row border-b pb-3 mb-3">
                                    <div>Names</div>
                                    <div className="ml-auto">Scores</div>
                                </div>
                                {listOfStudents.map((item, index) => {
                                    console.log(item);
                                    return (
                                        <div className="flex flex-row border-b" key={index}>
                                            <div>
                                                {item.student_name}
                                            </div>
                                            <div className="ml-auto">
                                                {item.score}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
