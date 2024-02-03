"use client";

import { useEffect, useState } from "react";
import QuizContent from "./QuizContent";
import { ReviewAnswers } from "./ReviewAnswers";
import useHandleQuiz from "@/hooks/handlers/useHandleQuiz";
import { SeeStudentScores } from "./SeeStudentScores";

const QuizSection = ({
    finalData,
    user,
    teacher,
    instructor,
    handleFinishChapter,
}) => {
    const { insertData, getQuizData } = useHandleQuiz();

    const [score, setScore] = useState();

    const [gotData, setGotData] = useState();

    const [selectedAnswers, setSelectedAnswers] = useState(
        Array(finalData.quizContent.length).fill(null)
    );
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const quizData = await getQuizData(finalData.id, user.id);
            if (quizData[0]?.status) {
                setScore(quizData[0].score);
                setSubmitted(true);
                setGotData(true);
            }
        };
        getData();
    }, [getQuizData, finalData.id, user.id]);

    const handleSubmit = () => {
        const score = selectedAnswers.reduce(
            (score, answerIndex, questionIndex) => {
                const isCorrect =
                    answerIndex !== null &&
                    finalData.quizContent[questionIndex].answers[answerIndex]
                        .correct;
                return score + (isCorrect ? 1 : 0);
            },
            0
        );
        setScore(score);
        insertData(user.id, finalData.id, score);
        setSubmitted(true);
        handleFinishChapter();
    };

    const handleAnswerSelect = (questionIndex, answerIndex) => {
        if (!submitted) {
            const newSelectedAnswers = [...selectedAnswers];
            newSelectedAnswers[questionIndex] = answerIndex;
            setSelectedAnswers(newSelectedAnswers);
        }
    };

    const isAllQuestionsAnswered = () => {
        return !selectedAnswers.includes(null);
    };

    return (
        <>
            {user.role === "student" ? (
                <div className="my-5">
                    {finalData.quizContent.length !== 0 && (
                        <p>
                            Total Number of Questions:{" "}
                            {finalData.quizContent.length}
                        </p>
                    )}
                    {gotData ? (
                        <p>Total Score: {score}</p>
                    ) : (
                        <>
                            {submitted ? (
                                <ReviewAnswers
                                    quizContent={finalData.quizContent}
                                    selectedAnswers={selectedAnswers}
                                    score={score}
                                />
                            ) : (
                                <QuizContent
                                    quizContent={finalData.quizContent}
                                    selectedAnswers={selectedAnswers}
                                    isAllQuestionsAnswered={
                                        isAllQuestionsAnswered
                                    }
                                    handleAnswerSelect={handleAnswerSelect}
                                    submitted={submitted}
                                    handleSubmit={handleSubmit}
                                />
                            )}
                        </>
                    )}
                </div>
            ) : (
                <SeeStudentScores
                    instructor={instructor}
                    teacher={teacher}
                    id={finalData.id}
                />
            )}
        </>
    );
};

export default QuizSection;
