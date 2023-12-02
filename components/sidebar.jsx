import Link from "next/link";
import Logo from "./Logo";
import { useGetUser } from "@/hooks/useGetUser";
import { studentLinks, teachLinks } from "@/constants/side-bar";
import LogoutButton from "./LogoutButton";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/20/solid";

const SideBar = async () => {
  const user = await useGetUser();
  if (!user) return;

  return (
    <div className="flex flex-col h-screen min-w-[200px] py-3 px-3 border-r">
      <div className="px-1">
        <Logo />
      </div>
      <Links links={user.role === "student" ? studentLinks : teachLinks} />
      <div className="mt-auto flex flex-col ">
        <Link
          className="flex flex-row gap-3 items-center p-2 rounded text-shark-900 hover:bg-flush-orange-400 hover:text-white"
          href={"#"}
        >
          <ChatBubbleOvalLeftIcon width={24} />
          Chatbot
        </Link>
        <LogoutButton />
      </div>
    </div>
  );
};
const Links = ({ links }) => {
  return (
    <ul className="mt-10 flex flex-col gap-2">
      {links.map((item, index) => {
        const Icon = item.icon;
        return (
          <li key={index}>
            <Link
              className="flex flex-row gap-3 items-center p-2 rounded text-shark-900 hover:bg-flush-orange-400 hover:text-white"
              href={item.link}
            >
              <Icon width={24} />
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;