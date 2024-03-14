"use client";

import { useDetailsFormValidation } from "@/hooks/validations/useDetailsFormValidation";
import { DetailsPart } from "./DetailsPart/DetailsPart";
import { SectionsPart } from "./SectionsPart/SectionsPart";
import { useSectionHandler } from "@/hooks/useSectionHandler";
import { ReviewPart } from "./ReviewPart";
import { useInsertCourse } from "@/hooks/insertion/useInsertCourse";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

export const CreateCourseForm = ({
    teacherId,
    handleChangeActivePart,
    activePart,
    assignedSubject,
}) => {
    const {
        values: detailValues,
        errors: detailErrors,
        status,
        handleDetailsFormChange,
        handleDetailsFormSubmit,
    } = useDetailsFormValidation({
        title: "",
        description: "",
        score: "",
        subject: assignedSubject,
        thumbnail: "",
    });

    const {
        showOptions,
        activeSection,
        currentSections,
        handleShowOptions,
        handleActiveSection,
        handleSubmitVideoForm,
        handleSubmitQuizForm,
    } = useSectionHandler();

    const { insert, isInserting, isSubmitting } = useInsertCourse(teacherId);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const finalData = {
            ...detailValues,
            currentSections,
        };
        insert(finalData);
    };

    return (
        <form onSubmit={handleSubmitForm} className="flex flex-col relative">
            {isInserting && (
                <div className="fixed w-full h-full left-0 top-0 bg-gray-400 bg-opacity-50 flex items-center justify-center">
                    <div className="flex flex-row bg-green-500 px-4 py-2 rounded-md item-center justify-center">
                        <p className="text-white mr-5">Creating</p>
                        <Image
                            className="animate-spin"
                            src="/assets/svg/loading.svg"
                            alt="Loading"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            )}
            {isSubmitting && (
                <div className="fixed w-full h-full left-0 top-0 bg-gray-400 bg-opacity-50 flex items-center justify-center">
                    <div className="flex flex-row bg-green-500 px-4 py-2 rounded-md item-center justify-center">
                        <p className="text-white mr-2">Created!</p>
                        <CheckIcon className="text-white w-4 h-4 m-auto" />
                    </div>
                </div>
            )}
            {activePart === 0 ? (
                <DetailsPart
                    values={detailValues}
                    errors={detailErrors}
                    handleDetailsFormChange={handleDetailsFormChange}
                    handleDetailsFormSubmit={handleDetailsFormSubmit}
                    assignedSubject={assignedSubject}
                />
            ) : activePart === 1 ? (
                <SectionsPart
                    showOptions={showOptions}
                    activeSection={activeSection}
                    currentSections={currentSections}
                    handleShowOptions={handleShowOptions}
                    handleActiveSection={handleActiveSection}
                    handleSubmitVideoForm={handleSubmitVideoForm}
                    handleSubmitQuizForm={handleSubmitQuizForm}
                />
            ) : (
                <ReviewPart
                    values={detailValues}
                    currentSections={currentSections}
                    handleChangeActivePart={handleChangeActivePart}
                />
            )}

            {!showOptions && (
                <div className="flex flex-row gap-3 ml-auto">
                    {activePart !== 0 && (
                        <button
                            onClick={() => handleChangeActivePart("previous")}
                            className="hover:bg-mantis-200 md:w-28 w-auto py-1 rounded-sm border border-mantis-400 md:text-base text-4xl "
                            type="button"
                        >
                            Previous
                        </button>
                    )}
                    {activePart === 0 && (
                        <>
                            <button
                                onClick={() => handleChangeActivePart("next")}
                                className={` text-white hover:bg-mantis-200 hover:text-black w-28 py-1 rounded-sm md:text-base text-4xl ${
                                    status ? "bg-mantis-400" : "bg-mantis-200"
                                }`}
                                type="button"
                                disabled={!status}
                            >
                                Next
                            </button>
                        </>
                    )}
                    {activePart === 1 && (
                        <>
                            <button
                                onClick={() => handleChangeActivePart("next")}
                                className={` text-white hover:bg-mantis-200 hover:text-black w-28 py-1 rounded-sm md:text-base text-4xl ${
                                    currentSections.length
                                        ? "bg-mantis-400"
                                        : "bg-mantis-200"
                                }`}
                                type="button"
                                disabled={!currentSections.length}
                            >
                                Next
                            </button>
                        </>
                    )}
                    {activePart === 2 && (
                        <button
                            className="bg-mantis-400 text-white hover:bg-mantis-200 hover:text-black w-auto md:w-28 py-1 px-2 rounded-sm  md:text-base text-4xl "
                            type="submit"
                        >
                            Submit
                        </button>
                    )}
                </div>
            )}
            {!status && (
                <p className="ml-auto flex items-center justify-center text-sm mt-1">
                    Fill up the form first
                </p>
            )}
            {activePart === 1 && !currentSections.length && (
                <p className="ml-auto flex items-center justify-center text-sm mt-1">
                    Add some chapters first
                </p>
            )}
        </form>
    );
};
