export const CreateCourseHeader = ({ activePart }) => {
    return (
        <div className="py-5">
            <div className="mx-auto bg-zinc-300 w-1/2 h-1 rounded-full">
                <div
                    className={`transition-all duration-500 bg-mantis-500 h-full ${
                        activePart === 0
                            ? "w-1/4"
                            : activePart === 1
                            ? "w-2/4"
                            : "w-3/4"
                    }`}
                ></div>
            </div>
            <div className="mx-auto w-1/2">
                <div className="relative w-full">
                    <div className="absolute flex flex-col justify-center items-center left-1/4">
                        <div
                            className={`relative -top-2 p-1.5 w-1 h-1 rounded-full ${
                                activePart >= 0
                                    ? "bg-mantis-500"
                                    : "bg-zinc-500"
                            }`}
                        ></div>
                        <p className="absolute text-xs whitespace-nowrap top-1">
                            Details
                        </p>
                    </div>
                    <div className="absolute flex flex-col justify-center items-center left-2/4">
                        <div
                            className={`relative -top-2 p-1.5 w-1 h-1 rounded-full ${
                                activePart >= 1
                                    ? "bg-mantis-500"
                                    : "bg-zinc-500"
                            }`}
                        ></div>
                        <p className="absolute text-xs whitespace-nowrap top-1">
                            Sections
                        </p>
                    </div>
                    <div className="absolute flex flex-col justify-center items-center left-3/4">
                        <div
                            className={`relative -top-2 p-1.5 w-1 h-1 rounded-full ${
                                activePart >= 2
                                    ? "bg-mantis-500"
                                    : "bg-zinc-500"
                            }`}
                        ></div>
                        <p className="absolute text-xs whitespace-nowrap top-1">
                            Review
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
