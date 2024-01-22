"use client";

import { useDetailsFormValidation } from "@/hooks/useDetailsFormValidation";
import { DetailsPart } from "./DetailsPart/DetailsPart";
import { SectionsPart } from "./SectionsPart/SectionsPart";
import { useSectionHandler } from "@/hooks/useSectionHandler";
import { ReviewPart } from "./ReviewPart";
import { useInsertCourse } from "@/hooks/useInsertCourse";
import { useRouter } from "next/navigation";

export const CreateCourseForm = ({
    teacherId,
    handleChangeActivePart,
    activePart,
}) => {
    const router = useRouter();

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
        subject: "",
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

    const { insert } = useInsertCourse(teacherId);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const finalData = {
            ...detailValues,
            currentSections,
        };
        // console.log(finalData);
        // await testStorage(finalData);
        insert(finalData);
        // router.push("/learning/courses")
    };

    return (
        <form onSubmit={handleSubmitForm} className="flex flex-col">
            {activePart === 0 ? (
                <DetailsPart
                    values={detailValues}
                    errors={detailErrors}
                    handleDetailsFormChange={handleDetailsFormChange}
                    handleDetailsFormSubmit={handleDetailsFormSubmit}
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
                />
            )}

            <div className="flex flex-row gap-3 ml-auto">
                {activePart !== 0 && (
                    <button
                        onClick={() => handleChangeActivePart("previous")}
                        className="hover:bg-mantis-200 w-28 py-1 rounded-sm border border-mantis-400"
                        type="button"
                    >
                        Previous
                    </button>
                )}
                {activePart === 0 && (
                    <>
                        <button
                            onClick={() => handleChangeActivePart("next")}
                            className={` text-white hover:bg-mantis-200 hover:text-black w-28 py-1 rounded-sm ${
                                status
                                    ? "bg-mantis-400"
                                    : "bg-mantis-200"
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
                            className={` text-white hover:bg-mantis-200 hover:text-black w-28 py-1 rounded-sm ${
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
                        className="bg-mantis-400 text-white hover:bg-mantis-200 hover:text-black w-28 py-1 rounded-sm"
                        type="submit"
                    >
                        Submit
                    </button>
                )}
            </div>
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
