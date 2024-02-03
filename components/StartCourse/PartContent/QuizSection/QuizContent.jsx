"use client";

const QuizContent = ({
    quizContent,
    selectedAnswers,
    isAllQuestionsAnswered,
    handleAnswerSelect,
    submitted,
    handleSubmit
}) => {
    return (
        <>
            {quizContent.map((item, questionIndex) => {
                const selectedAnswerIndex = selectedAnswers[questionIndex];

                return (
                    <div key={questionIndex} className="flex flex-col my-2">
                        <p>
                            {questionIndex + 1}. {item.question}
                        </p>
                        <div className="flex flex-col gap-1">
                            {item.answers.map((answer, answerIndex) => {
                                const isSelected =
                                    selectedAnswerIndex === answerIndex;

                                return (
                                    <div
                                        key={answerIndex}
                                        className={`cursor-pointer py-1 px-2 border rounded-md w-full ${
                                            isSelected
                                                ? submitted
                                                    ? answerIndex ===
                                                      item.correctAnswerIndex
                                                        ? "bg-green-300" 
                                                        : "bg-red-300" 
                                                    : "bg-orange-300"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleAnswerSelect(
                                                questionIndex,
                                                answerIndex
                                            )
                                        }
                                    >
                                        {answer.option}. {answer.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <button
                className="mt-4 p-2 bg-blue-500 text-white rounded-md cursor-pointer"
                onClick={handleSubmit}
                disabled={!isAllQuestionsAnswered() || submitted}
            >
                Submit
            </button>
        </>
    );
};

export default QuizContent;
