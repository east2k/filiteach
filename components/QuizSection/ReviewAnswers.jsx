import React from "react";

export const ReviewAnswers = ({ quizContent, selectedAnswers, score }) => {
    console.log(score);
    return (
        <div className="">
            {quizContent.map((item, questionIndex) => {
                const correctAnswerIndex = item.answers.findIndex(
                    (answer) => answer.correct
                );

                return (
                    <div key={questionIndex} className="flex flex-col my-2">
                        <p>
                            {questionIndex + 1}. {item.question}
                        </p>
                        <div className="flex flex-col gap-1">
                            {item.answers.map((answer, answerIndex) => {
                                const isCorrect =
                                    answerIndex === correctAnswerIndex;
                                const isSelected =
                                    selectedAnswers[questionIndex] ===
                                    answerIndex;

                                return (
                                    <div
                                        key={answerIndex}
                                        className={`py-1 px-2 border rounded-md w-full ${
                                            isCorrect ? "bg-green-300" : ""
                                        } ${
                                            isSelected && !isCorrect
                                                ? "bg-red-300"
                                                : ""
                                        }`}
                                    >
                                        {answer.option}. {answer.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <div className="mt-4">
                <p>Total Score: {score}</p>
            </div>
        </div>
    );
};
