import { CourseCard } from "@/components/CourseCard";
import Image from "next/image";
import Link from "next/link";

const placeholderCourses = [
    {
        name: "Math Essentials",
        image: "/assets/images/placeholder-course-images/math.jpg",
        subtitle: "This is math for me",
        instructor: "Michael Adriano",
        score: 150,
    },
    {
        name: "Filipino Essentials",
        image: "/assets/images/placeholder-course-images/filipino.jpeg",
        subtitle: "Tayo ay matuto!",
        instructor: "John Doe",
        score: 250,
    },
    {
        name: "English Essentials",
        image: "/assets/images/placeholder-course-images/english.jpg",
        subtitle: "Good to learn English",
        instructor: "Glenn Ford",
        score: 350,
    },
];

export default function Learning() {
    return (
        <div className="flex flex-col">
            <div className="py-3 px-7 bg-blue-50">
                <div className="flex flex-row items-center justify-between mb-7">
                    <div className="flex flex-row gap-3">
                        <div className="w-10 h-10 bg-blue-200 border rounded-full"></div>
                        <div className="w-10 h-10 bg-blue-200 border rounded-full"></div>
                        <div className="w-10 h-10 bg-blue-200 border rounded-full"></div>
                        <div className="w-10 h-10 bg-blue-200 border rounded-full"></div>
                    </div>
                    <div>
                        <p>Score: 500</p>
                    </div>
                </div>
                <h1 className="text-xl font-medium">Special Events:</h1>
                <div className="flex flex-row">
                    <div className="grid grid-cols-4 auto-rows-fr gap-5 p-5 w-2/3">
                        <div className="shadow-sm bg-white rounded-lg py-5 px-3">
                            Special Event
                        </div>
                        <div className="cursor-pointer shadow-sm bg-white rounded-lg py-5 px-3">
                            Special Event
                        </div>
                        <div className="cursor-pointer shadow-sm bg-white rounded-lg py-5 px-3">
                            Special Event
                        </div>
                        <div className="cursor-pointer shadow-sm bg-white rounded-lg py-5 px-3">
                            Special Event
                        </div>
                    </div>
                    <div className="w-1/3 bg-purple-600 text-white rounded-lg py-5 px-3">
                        <h2 className="text-center text-xl mb-3">
                            Event Title
                        </h2>
                        <p className="mb-5">
                            Description Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Deserunt dignissimos quaerat dicta
                            atque beatae, alias consequatur nostrum possimus
                            reiciendis fuga consequuntur iusto. Debitis,
                            consequatur officiis ea quam earum architecto
                            corporis?
                        </p>
                        <p>Estimate time Finish: 5 mins</p>
                        <p>Score Reward: 500</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row px-7 py-3">
                <div className="w-4/5 px-7 py-6">
                    <h1 className="text-xl mb-3 font-medium">
                        Start Studying now!
                    </h1>
                    <div className="flex flex-col">
                        <p>Recommended for you</p>
                        <div className="flex flex-col border rounded-lg px-3 py-5">
                            <div className="grid grid-cols-3 gap-5">
                                {placeholderCourses.map((item,index)=>{
                                    return(
                                        <CourseCard
                                         key={index}
                                         name={item.name}
                                         image={item.image}
                                         subtitle={item.subtitle}
                                         instructor={item.instructor}
                                         score={item.score}
                                        />
                                    )
                                })}
                            </div>
                            <Link
                                className="px-5 py-4 text-white bg-purple-500 text-center mt-5 ml-auto w-56 rounded-md"
                                href="/learning/courses"
                            >
                                Click here for more!
                            </Link>
                        </div>
                        <div className="mt-5 border px-5 py-3">
                            <h1>Continue where you left of before</h1>
                            <div className="grid grid-cols-3 bg-white rounded-lg ">
                                <div className="py-5 px-3">
                                    <div className="w-full h-48 overflow-hidden rounded-lg">
                                        <Image
                                            className="object-cover w-full h-full"
                                            src="/assets/images/feature-placeholder.jpeg"
                                            alt="Subject for given topic"
                                            height={450}
                                            width={450}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col p-3 col-span-2">
                                    <h1 className="text-xl mb-2">Title</h1>
                                    <p className="mb-4 text-sm">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci accusamus
                                        consequuntur velit perferendis ad qui
                                        quasi fuga ducimus impedit minima soluta
                                        quisquam error enim amet hic odio ut,
                                        ratione beatae.
                                    </p>
                                    <p className="text-sm">
                                        Instructor: Michael Adriano
                                    </p>
                                    <p className="text-sm">Points: 500</p>
                                    <p className="text-sm">
                                        Estimate time to Finish: 10 mins
                                    </p>
                                    <Link href="/learning/courses/test2" className="ml-auto px-4 py-2 text-white bg-purple-400 rounded-sm">
                                        Continue
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/5 bg-purple-50 px-4 py-2 pb-4">
                    <h1 className="text-center mb-2 text-xl">Leaderboard</h1>
                    <ul>
                        <li className="flex justify-between">
                            <p className="text-lg">Name</p>
                            <span className="text-lg">Score</span>
                        </li>
                        <li className="flex justify-between">
                            <p>1. Edward</p>
                            <span>100000</span>
                        </li>
                        <li className="flex justify-between">
                            <p>2. George</p>
                            <span>50000</span>
                        </li>
                        <li className="flex justify-between">
                            <p>3. William</p>
                            <span>10000</span>
                        </li>
                        <li className="flex justify-between">
                            <p>4. Norman</p>
                            <span>5000</span>
                        </li>
                        <li className="flex justify-between">
                            <p>5. Peter</p>
                            <span>1000</span>
                        </li>
                    </ul>
                    <button className="w-full rounded-full px-3 py-2 hover:bg-purple-50">
                        Show more...   
                    </button>
                </div>
            </div>
        </div>
    );
}
