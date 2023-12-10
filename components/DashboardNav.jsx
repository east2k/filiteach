import Image from "next/image";
import Link from "next/link";

const linkList = [
    {
        name: "Dashboard",
        link: "/learning",
    },
    {
        name: "All Courses",
        link: "/learning/courses",
    },
    {
        name: "Events",
        link: "#",
    },
    {
        name: "Assigned to me",
        link: "#",
    },
    {
        name: "Roadmap",
        link: "#",
    },
    {
        name: "Help",
        link: "#",
    },
];
const teacherLinkList = [
    {
        name: "Dashboard",
        link: "/learning",
    },
    {
        name: "All Courses",
        link: "/learning/courses",
    },
    {
        name: "My Courses",
        link: "/learning/courses",
    },
    {
        name: "Create a Course",
        link: "/learning/create-course",
    },
    {
        name: "Assign courses",
        link: "#",
    },
    {
        name: "Help",
        link: "#",
    },
];

export const DashboardNav = ({ user }) => {
    return (
        <nav className="w-full mt-10">
            <div className="cursor-pointer text-center block text-white w-full px-5 py-3 group hover:bg-flush-orange-500 mb-3">
                <div className="flex flex-row items-center justify-center">
                    {/* <p className="">{user.name}</p> */}
                    <div className=" w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            className="object-cover w-auto h-full"
                            src={user.profile_image}
                            alt="Profile"
                            height={300}
                            width={300}
                        />
                    </div>
                    <p className="group-hover:text-flush-orange-50 text-flush-orange-500 block text-center ml-5">
                        {user.first_name} {user.last_name}
                    </p>
                </div>
            </div>
            {/* <button className="">
                    <BellIcon className="w-7 text-zinc-500" />
                </button> */}
            <ul className="flex flex-col gap-3">
                {user.role === "student"
                    ? linkList.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link
                                      className="text-center block text-white bg-flush-orange-500 w-full px-5 py-3 hover:bg-flush-orange-400"
                                      href={item.link}
                                  >
                                      {item.name}
                                  </Link>
                              </li>
                          );
                      })
                    : teacherLinkList.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link
                                      className="text-center block text-white bg-flush-orange-500 w-full px-5 py-3 hover:bg-flush-orange-400"
                                      href={item.link}
                                  >
                                      {item.name}
                                  </Link>
                              </li>
                          );
                      })}
            </ul>
        </nav>
    );
};
