import { useDetailsFormValidation } from "@/hooks/validations/useDetailsFormValidation";
import { useEffect } from "react";

export const VideoSection = ({ handleSubmitVideoForm, handleShowOptions }) => {
    const {
        values,
        errors,
        status,
        handleDetailsFormChange,
        handleDetailsFormSubmit,
    } = useDetailsFormValidation(
        {
            summary: "",
            video: "",
        },
        "video"
    );

    useEffect(() => {
        if (status) {
            handleSubmitVideoForm(values);
        }
    }, [status, handleSubmitVideoForm, values]);

    const handleDoneClick = (e) => {
        handleDetailsFormSubmit(e);
    };

    return (
        <>
            <h1 className="my-5 text-lg">
                Give your video presentation some details
            </h1>
            <div className="flex flex-col py-5">
                {errors.summary && (
                    <p className="text-sm text-red-400">{errors.summary}</p>
                )}
                <h2 className="pb-1">Summary:</h2>
                <input
                    className="border outline-none py-2 px-3 rounded-md"
                    id="summary"
                    name="summary"
                    value={values.summary}
                    onChange={handleDetailsFormChange}
                    type="text"
                    placeholder="Enter here..."
                />
            </div>
            <div className="flex flex-col py-5">
                {errors.video && (
                    <p className="text-sm text-red-400">{errors.video}</p>
                )}
                <h2 className="pb-1">Upload your vid here:</h2>
                <input
                    className="border outline-none py-2 px-3 rounded-md fu"
                    id="video"
                    name="video"
                    onChange={handleDetailsFormChange}
                    type="file"
                    accept="video/*"
                />
            </div>
            <div className="flex flex-col py-5">
                <h2 className="pb-1">Choose a thumbnail (optional):</h2>
                <input
                    className="border outline-none py-2 px-3 rounded-md fu"
                    id="thumbnail"
                    name="thumbnail"
                    onChange={handleDetailsFormChange}
                    type="file"
                    accept="image/*"
                />
            </div>
            <button
                onClick={handleDoneClick}
                className="text-white hover:bg-mantis-200 bg-mantis-400 w-28 py-1 rounded-sm"
            >
                Done
            </button>
        </>
    );
};
