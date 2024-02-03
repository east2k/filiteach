import { DashboardSideContent } from "@/components/DashboardSideContent";
import { Stats } from "@/components/TeacherSide/Stats";
import { useGetUser } from "@/hooks/useGetUser";
import { useRetrieveCourses } from "@/hooks/useRetrieveCourses";

export default async function Learning() {
    const user = await useGetUser();
    const { getOwnCourses, getLimitedCourses } = await useRetrieveCourses();
    let courses;
    if (user.role === "teacher") {
        courses = await getOwnCourses(user.id);
    }else {
      courses = await getLimitedCourses(3);
  }

    return (
        <div>
            <div className="bg-mantis-50 shadow-sm">
                <div className="flex flex-row items-center py-3 px-7">
                    <h1 className="text-4xl font-medium text-mantis-600 tracking-wide">
                        Dashboard
                    </h1>
                </div>
            </div>
            <div className="flex flex-col">
                {/* {user.role === "student" && (
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
                            <div className="w-1/3 bg-zinc-100 border border-mantis-500 text-black rounded-lg py-5 px-3">
                                <h2 className="text-center text-xl mb-3">
                                    Event Title
                                </h2>
                                <p className="mb-5">
                                    Description Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Deserunt
                                    dignissimos quaerat dicta atque beatae,
                                    alias consequatur nostrum possimus
                                    reiciendis fuga consequuntur iusto. Debitis,
                                    consequatur officiis ea quam earum
                                    architecto corporis?
                                </p>
                                <p>Estimate time Finish: 5 mins</p>
                                <p>Score Reward: 500</p>
                            </div>
                        </div>
                    </div>
                )} */}
                {user.role === "teacher" && (
                    <div className="flex flex-col px-7 py-3">
                        <h1 className="text-xl mb-3 font-medium">Statistics</h1>
                        <Stats coursesMade = {courses.length} />
                    </div>
                )}
                <div className="flex flex-row px-7 py-3">
                    <DashboardSideContent user={user} courses={courses} />
                    {/* <div className="w-1/5 bg-mantis-50 px-4 py-2 pb-4">
                        <h1 className="text-center mb-2 text-xl">
                            Leaderboard
                        </h1>
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
                        <button className="w-full rounded-full px-3 py-2 hover:bg-mantis-50">
                            Show more...
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
