import Image from "next/image";

export const PreviewSection = ({ thumbnail, summary, runtime, status }) => {
    return (
        <div className="w-full py-5 border-t mb-10">
            <h1 className="text-2xl mb-5 font-medium">Preview</h1>
            <div className="flex flex-row gap-10">
                <div className="flex items-center justify-center w-96 h-56 min-w-min overflow-hidden">
                    <Image
                        className="object-cover w-full h-full"
                        src={thumbnail}
                        alt="Thumbnail"
                        width={300}
                        height={200}
                    />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-medium">Summary</h2>
                    <p className="mb-5">{summary}</p>
                    <p className="mt-auto">Runtime: {runtime} mins</p>
                    <p>Current Status</p>
                    <div
                        className={`rounded-full w-28 border border-flush-orange-200 ${
                            status ? "bg-green-500" : "bg-red-400"
                        }`}
                    >
                        <p className="text-center text-sm py-2 px-3 text-white">
                            {status ? "Finished" : "Not Finished"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
