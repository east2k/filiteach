import Link from "next/link";
import { useGetUser } from "@/hooks/retrieve/useGetUser";
import SideBarToggle from "./SidebarToggle";

const SideBar = async () => {
    const user = await useGetUser();
    if (!user) return;

    return (
        <>
            <SideBarToggle user={user} />
        </>
    );
};

export default SideBar;
