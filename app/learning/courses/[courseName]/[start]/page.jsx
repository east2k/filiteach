"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const courseParts = [
  {
    id: 1,
    summary:
      "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni.",
    runtime: 5,
    thumbnail: "/assets/images/placeholder-course-parts/part-1.svg",
    status: true,
  },
  {
    id: 2,
    summary:
      "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
    runtime: 4,
    thumbnail: "/assets/images/placeholder-course-parts/part-2.svg",
    status: true,
  },
  {
    id: 3,
    summary:
      "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
    runtime: 2,
    thumbnail: "/assets/images/placeholder-course-parts/part-3.svg",
    status: false,
  },
  {
    id: 4,
    summary:
      "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
    runtime: 7,
    thumbnail: "/assets/images/placeholder-course-parts/part-4.svg",
    status: false,
  },
  {
    id: 5,
    summary:
      "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
    runtime: 4,
    thumbnail: "/assets/images/placeholder-course-parts/part-5.svg",
    status: false,
  },
  {
    id: 6,
    summary:
      "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
    runtime: 2,
    thumbnail: "/assets/images/placeholder-course-parts/part-6.svg",
    status: false,
  },
  {
    id: 7,
    summary:
      "Summary for part 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in officiis debitis totam? Illum exercitationem modi nesciunt itaque, architecto fugiat maxime, doloribus repellat laboriosam vel voluptates voluptatem optio eum magni",
    runtime: 3,
    thumbnail: "/assets/images/placeholder-course-parts/part-7.svg",
    status: false,
  },
];

const Start = () => {
  const [preview, setPreview] = useState();
  console.log(preview);
  const handleChangePreview = (previewID) => {
    const selectedPart = courseParts.find((part) => part.id === previewID);

    console.log(selectedPart);
    setPreview(selectedPart);
  };
  return (
    <div>
      <div className="border p-5 m-2">
        <h1 className="text-2xl text-center mb-5 font-medium">
          Title for the chosen course
        </h1>
        <div className="grid grid-cols-6 gap-5 items-center mb-10">
          {courseParts.map((item, index) => {
            return (
              <div
                onClick={() => handleChangePreview(item.id)}
                key={index}
                className="flex flex-col cursor-pointer rounded-md text-white justify-center bg-flush-orange-400 border border-white px-3 py-2 w-full h-32"
              >
                <h3 className="text-center">Part {index + 1}</h3>
                <div className="flex align-center justify-center w-full h-20 min-h-min border bg-white rounded-full opacity-90">
                  <Image
                    className="w-full h-full object-contain"
                    src={item.thumbnail}
                    alt="Preview Thumbnail"
                    width={200}
                    height={150}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t py-5">
          <h1 className="text-2xl font-medium">Current Progress</h1>
          <p className="text-center text-sm">50%</p>
          <div className="relative w-full border border-flush-orange-500">
            <div className="relative w-1/2 bg-flush-orange-500 py-2"></div>
          </div>
        </div>
        {preview && (
          <div className="w-full py-5 border-t mb-10">
            <h1 className="text-2xl mb-5 font-medium">Preview</h1>
            <div className="flex flex-row gap-10">
              <div className="flex items-center justify-center w-96 h-56 min-w-min overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={preview.thumbnail}
                  alt="Thumbnail"
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-medium">Summary</h2>
                <p className="mb-5">{preview.summary}</p>
                <p className="mt-auto">Runtime: {preview.runtime} mins</p>
                <p>Current Status</p>
                <div
                  className={`rounded-full w-28 border border-flush-orange-200 ${
                    preview.status ? "bg-green-500" : "bg-red-400"
                  }`}
                >
                  <p className="text-center text-sm py-2 px-3 text-white">
                    {preview.status ? "Finished" : "Not Finished"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-end gap-5">
          <Link
            href="/learning/courses/anything/start/part-1"
            className="bg-flush-orange-400 text-white px-16 py-2 mt-2 rounded-sm"
          >
            Start
          </Link>
          <Link
            href="/learning/courses/anything/"
            className="bg-flush-orange-400 text-white px-16 py-2 mt-2 rounded-sm"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
