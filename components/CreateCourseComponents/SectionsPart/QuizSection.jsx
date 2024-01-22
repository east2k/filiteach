import React, { useState } from "react";

const defaultQuestionFormValue = {
    question: "",
    answers: [
        { option: "a", name: "", correct: false },
        { option: "b", name: "", correct: false },
        { option: "c", name: "", correct: false },
        { option: "d", name: "", correct: false },
    ],
};

export const QuizSection = ({ handleSubmitQuizForm }) => {
    const [toggleAddQuestion, setToggleAddQuestion] = useState(false);
    const [questionList, setQuestionList] = useState([]);

    const [errors, setErrors] = useState({});

    const [controlQuestionForm, setControlQuestionForm] = useState(
        defaultQuestionFormValue
    );

    const handleToggleAddQuestion = (action) => {
        if (action === "open") setToggleAddQuestion(true);
        else setToggleAddQuestion(false);
    };

    const handleAddToQuestions = () => {
        const check = validateQuestions();
        if (check) {
            setToggleAddQuestion(false);
            setControlQuestionForm(defaultQuestionFormValue);
            setQuestionList((prevState) => [...prevState, controlQuestionForm]);
        } else return;
    };

    const validateQuestions = () => {
        let error = {};

        if (!controlQuestionForm.question) {
            error.question = "Question is empty";
        }

        let isAnyAnswerCorrect = false;

        controlQuestionForm.answers.forEach((answer) => {
            if (!answer.name.trim()) {
                error.answer = "One answer is empty";
            }

            if (answer.correct) {
                isAnyAnswerCorrect = true;
            }
        });

        if (!isAnyAnswerCorrect) {
            error.correct = "Must choose correct answer";
        }

        setErrors(error);
        if (Object.keys(error).length === 0) {
            return true;
        } else {
            return false;
        }
    };

    const handleControlForm = (e) => {
        const { name, value } = e.target;
        if (name === "answer") {
            setControlQuestionForm((prevState) => {
                const updatedAnswers = prevState.answers.map((item) => {
                    if (item.option === value) {
                        return {
                            option: item.option,
                            name: item.name,
                            correct: true,
                        };
                    } else {
                        return { ...item, correct: false };
                    }
                });
                return {
                    ...prevState,
                    answers: updatedAnswers,
                };
            });
        }
        if (name !== "question" && name !== "answer") {
            setControlQuestionForm((prevState) => {
                const updatedAnswers = prevState.answers.map((item) => {
                    if (item.option === name) {
                        return {
                            option: item.option,
                            name: value,
                            correct: item.correct,
                        };
                    } else {
                        return { ...item };
                    }
                });
                return {
                    ...prevState,
                    answers: updatedAnswers,
                };
            });
        }
        if (name === "question") {
            setControlQuestionForm((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    return (
        <div className="">
            <button
                type="button"
                onClick={() => handleToggleAddQuestion("open")}
                className="border py-1 px-3 mb-2 bg-mantis-500 hover:bg-mantis-400 text-white rounded-sm"
            >
                Add Question
            </button>
            {toggleAddQuestion && (
                <>
                    {errors.question && (
                        <p className="text-sm text-red-400">
                            {errors.question}
                        </p>
                    )}
                    <div className="flex flex-col my-2">
                        <h2 className="pb-1">Question:</h2>
                        <input
                            className="border outline-none py-2 px-3 rounded-md"
                            id="question"
                            name="question"
                            value={controlQuestionForm.question}
                            onChange={handleControlForm}
                            type="text"
                            placeholder="Enter here..."
                        />
                    </div>
                    <div className="flex flex-col mb-3">
                        {errors.answer && (
                            <p className="text-sm text-red-400">
                                {errors.answer}
                            </p>
                        )}
                        {controlQuestionForm.answers.map((item, index) => {
                            return (
                                <QuizTextInputForm
                                    key={index}
                                    handleControlForm={handleControlForm}
                                    option={item.option}
                                    value={item.name}
                                    correct={item.correct}
                                />
                            );
                        })}
                        <p>Choose the right answer for the question</p>
                        {errors.correct && (
                            <p className="text-sm text-red-400">
                                {errors.correct}
                            </p>
                        )}
                        <div className="flex flex-row gap-7">
                            {controlQuestionForm.answers.map((item, index) => {
                                return (
                                    <QuizRadioInputForm
                                        key={index}
                                        handleControlForm={handleControlForm}
                                        option={item.option}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 mb-3">
                        <button
                            type="button"
                            onClick={handleAddToQuestions}
                            className="border py-0.5 px-3 border-green-300 hover:border-green-200 rounded-sm"
                        >
                            Add
                        </button>
                        <button
                            type="button"
                            onClick={() => handleToggleAddQuestion("close")}
                            className="border py-0.5 px-3 bg-red-400 hover:bg-red-300 text-white rounded-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </>
            )}
            <div className="border-t mb-2">
                {questionList.length !== 0 && (
                    <p>Total Number of Questions: {questionList.length}</p>
                )}
                {questionList.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col my-2">
                            <p>
                                {index + 1}. {item.question}
                            </p>
                            <div className="flex flex-col gap-1">
                                {item.answers.map((answer, answerIndex) => {
                                    return (
                                        <div
                                            key={answerIndex}
                                            className={`py-1 px-2 w-32 border ${
                                                answer.correct
                                                    ? "border-green-200"
                                                    : "border-red-200"
                                            }`}
                                        >
                                            {answer.option}. {answer.name}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-row gap-2 my-2">
                                <button
                                    type="button"
                                    className="border hover:border-zinc-400 border-zinc-500 rounded-sm py-1 px-3"
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-400 hover:bg-red-300 text-white rounded-sm py-1 px-3"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            {questionList.length !== 0 && (
                <div className="flex border-t w-full mb-5">
                    <button
                        onClick={() => handleSubmitQuizForm(questionList)}
                        className="ml-auto mt-2 border bg-green-300 hover:bg-green-200 text-black py-1 px-10 rounded-sm"
                    >
                        Add Quiz Section
                    </button>
                </div>
            )}
        </div>
    );
};

const QuizRadioInputForm = ({ option, handleControlForm }) => {
    return (
        <label
            htmlFor={option}
            className="flex flex-row cursor-pointer items-center border px-2 rounded-full"
        >
            <input
                id={option}
                value={option}
                onChange={handleControlForm}
                className="mr-1"
                name="answer"
                type="radio"
            />
            {option}
        </label>
    );
};

const QuizTextInputForm = ({ option, value, handleControlForm, correct }) => {
    return (
        <div className="flex flex-row items-center my-0.5">
            <p className="mr-2 w-5">{option}.</p>
            <input
                type="text"
                name={option}
                value={value}
                onChange={handleControlForm}
                className={`w-full border outline-none py-1 px-3 ${
                    correct ? "border-green-300" : ""
                }`}
                checked={correct}
                placeholder="Enter option here"
            />
        </div>
    );
};
