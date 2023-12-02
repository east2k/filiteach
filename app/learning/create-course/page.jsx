import { SubjectRadio } from "@/components/CreateCourseForm/SubjectRadio";
import React from "react";

const CreateCourse = () => {
    return (
        <div className="p-5">
            <div className="pb-5 border-b">
                <h1 className="text-2xl"> Create a course</h1>
            </div>
            <div className="py-5">
                <div className="mx-auto bg-zinc-300 w-1/2 h-1 rounded-full">
                    <div className="bg-purple-500 h-full w-1/4"></div>
                </div>
                <div className="mx-auto w-1/2">
                    <div className="relative w-full">
                        <div className="absolute flex flex-col justify-center items-center left-1/4">
                            <div className="relative -top-2 bg-purple-500 p-1.5 w-1 h-1 rounded-full"></div>
                            <p className="absolute text-xs whitespace-nowrap top-1">
                                Details
                            </p>
                        </div>
                        <div className="absolute flex flex-col justify-center items-center left-2/4">
                            <div className="relative -top-2 bg-purple-500 p-1.5 w-1 h-1 rounded-full"></div>
                            <p className="absolute text-xs whitespace-nowrap top-1">
                                Sections
                            </p>
                        </div>
                        <div className="absolute flex flex-col justify-center items-center left-3/4">
                            <div className="relative -top-2 bg-purple-500 p-1.5 w-1 h-1 rounded-full"></div>
                            <p className="absolute text-xs whitespace-nowrap top-1">
                                Review
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-10">
                <form className="flex flex-col">
                    <div className="flex flex-col py-5 border-b">
                        <h2 className="pb-1">Title:</h2>
                        <input
                            className="border outline-none py-2 px-3 rounded-md"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter here..."
                        />
                    </div>
                    <div className="flex flex-col py-5 border-b">
                        <h2 className="pb-1">Description:</h2>
                        <textarea
                            className="resize-none border outline-none h-32 py-2 px-3 rounded-md"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter here..."
                        />
                    </div>
                    <div className="flex flex-col py-5 border-b">
                        <h2 className="pb-1">Score:</h2>
                        <input
                            className="border outline-none py-2 px-3 rounded-md"
                            id="title"
                            name="title"
                            type="number"
                            placeholder="Enter here..."
                        />
                    </div>
                    <div className="flex flex-col py-5 border-b">
                        <h2 className="pb-1">Subject:</h2>
                        <SubjectRadio />
                    </div>
                    <div>
                        <h2 className="pb-1">Thumbnail:</h2>
                        <input
                            className="border outline-none py-2 px-3 rounded-md fu"
                            id="thumbnail"
                            name="thumbnail"
                            type="file"
                            accept="image/*"
                            placeholder="Enter here..."
                        />
                    </div>
                    <p>Thumbnail</p>
                    <p>Add a section</p>
                    <div>
                        <p>Section 1</p>
                        <p>summary</p>
                        <p>upload vid</p>
                        <p>Thumbnail</p>
                    </div>
                    <div>
                        <p>Section 1</p>
                        <p>summary</p>
                        <p>quiz</p>
                        <p>scores</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
