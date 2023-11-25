import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const CourseName = ({searchParams}) => {
    return (
        <div className="relative flex flex-row px-7 py-5 w-full h-full">
            <div className="w-2/3">
                <div className="flex justify-center items-center w-full h-full max-h-96 overflow-hidden pr-5">
                    <Image
                        className="w-full h-auto object-cover"
                        src={searchParams.image}
                        alt="Course"
                        width={750}
                        height={500}
                    />
                </div>
                <div className="mt-10 pr-5">
                    <div className="border p-4 mb-7">
                        <h1 className="text-2xl font-medium mb-2">
                            What to expect in this course
                        </h1>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex flex-row items-start">
                                <div className="min-h-fit flex items-center py-1">
                                    <CheckIcon className="w-5 h-5" />
                                </div>
                                <p className="flex items-center justify-center">
                                    Apple bottom jeans mix with the fur
                                </p>
                            </li>
                            <li className="flex flex-row items-start">
                                <CheckIcon className="w-5 h-5" />s
                                <p>Apple bottom jeans mix with the fur</p>
                            </li>
                            <li className="flex flex-row items-center">
                                <CheckIcon className="w-5 h-5" />
                                <p>Apple bottom jeans mix with the fur</p>
                            </li>
                            <li className="flex flex-row items-center">
                                <CheckIcon className="w-5 h-5" />
                                <p>Apple bottom jeans mix with the fur</p>
                            </li>
                        </ul>
                    </div>
                    <div className="border p-4 mb-7">
                        This course is assigned to me!
                    </div>
                    <div className="border p-4">
                        This course is part of your roadmap!
                    </div>
                </div>
            </div>
            <div className="w-1/3">
                <div className="flex flex-col border shadow-md px-4 py-2 h-full">
                    <h1 className="text-2xl mb-3">{searchParams.name}</h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt, tempora. Odit excepturi libero hic sapiente
                        facere, quae enim quo sed. Iusto alias assumenda
                        voluptas quibusdam nulla est mollitia! Cum,
                        consequuntur!
                    </p>
                    <p className="mt-5 text-sm">Instructor: {searchParams.instructor}</p>
                    <p className="text-sm">Score: {searchParams.score}</p>
                    <p className="mt-5 text-sm">
                        You can finish this course in: 1 hour 30 minutes
                    </p>
                    <p className="mt-5 text-sm">
                        Upload date: November 1, 2023
                    </p>
                    <div className="mt-auto">
                        <p>Possible badge to earn: </p>
                        <div className="flex flex-row gap-3">
                            <div className="w-10 h-10 bg-blue-200 border rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col fixed right-5 bottom-5">
                <Link href="/learning/courses/anything/start" className="bg-purple-400 text-white px-16 py-2 mt-2 rounded-sm">
                    Start
                </Link>
                <button className="bg-purple-400 text-white px-16 py-2 mt-2 rounded-sm">
                    Back
                </button>
            </div>
        </div>
    );
};

export default CourseName;
