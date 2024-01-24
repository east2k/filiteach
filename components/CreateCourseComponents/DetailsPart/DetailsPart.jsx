import React from "react";
import { SubjectRadio } from "./SubjectRadio";

export const DetailsPart = ({
    values,
    errors,
    handleDetailsFormChange,
    handleDetailsFormSubmit,
}) => {
    return (
        <>
            <h1 className="text-2xl">Learning Material Details</h1>
            <DetailsInputForm
                label="Title"
                name="title"
                type="text"
                value={values.title}
                handleDetailsFormChange={handleDetailsFormChange}
                error={errors.title}
            />
            <DetailsTextareaForm
                label="Description"
                name="description"
                type="textarea"
                value={values.description}
                handleDetailsFormChange={handleDetailsFormChange}
                error={errors.description}
            />
            <DetailsInputForm
                label="Estimated Time to Finish"
                name="score"
                type="number"
                value={values.score}
                handleDetailsFormChange={handleDetailsFormChange}
                error={errors.score}
            />
            <div className="flex flex-col py-5 border-b">
                {errors.subject && (
                    <p className="text-sm text-red-400">{errors.subject}</p>
                )}
                <h2 className="pb-1">Subject:</h2>
                <SubjectRadio
                    values={values}
                    handleDetailsFormChange={handleDetailsFormChange}
                />
            </div>
            <div>
                {errors.thumbnail && (
                    <p className="text-sm text-red-400">{errors.thumbnail}</p>
                )}
                <h2 className="pb-1">Thumbnail:</h2>
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
                className="bg-mantis-400 w-44 py-1 mt-5 text-white"
                onClick={handleDetailsFormSubmit}
            >
                Submit
            </button>
        </>
    );
};

const DetailsInputForm = ({
    label,
    name,
    value,
    error,
    type,
    handleDetailsFormChange,
}) => {
    return (
        <div className="flex flex-col py-5 border-b">
            {error && <p className="text-sm text-red-400">{error}</p>}
            <h2 className="pb-1">{label}:</h2>
            <input
                className="border outline-none py-2 px-3 rounded-md"
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleDetailsFormChange}
                placeholder="Enter here..."
            />
        </div>
    );
};

const DetailsTextareaForm = ({
    label,
    name,
    value,
    error,
    handleDetailsFormChange,
}) => {
    return (
        <div className="flex flex-col py-5 border-b">
            {error && <p className="text-sm text-red-400">{error}</p>}
            <h2 className="pb-1">{label}:</h2>
            <textarea
                className="border outline-none py-2 px-3 rounded-md"
                id={name}
                name={name}
                value={value}
                onChange={handleDetailsFormChange}
                placeholder="Enter here..."
            />
        </div>
    );
};
