import {
    BookOpenIcon,
    CalendarIcon,
    CheckBadgeIcon,
    DocumentChartBarIcon,
    FolderIcon,
    FolderPlusIcon,
    MapIcon,
    PlusCircleIcon,
    QuestionMarkCircleIcon,
    Squares2X2Icon,
    UserGroupIcon,
    UserIcon,
    UserPlusIcon,
    UsersIcon,
} from "@heroicons/react/20/solid";

export const studentLinks = [
    {
        name: "Dashboard",
        link: "/learning",
        icon: Squares2X2Icon,
    },
    {
        name: "Learning Materials",
        link: "/learning/courses",
        icon: BookOpenIcon,
    },
    // {
    //   name: "Events",
    //   link: "#",
    //   icon: CalendarIcon,
    // },
    // {
    //   name: "Assigned to me",
    //   link: "#",
    //   icon: UserIcon,
    // },
    // {
    //   name: "Roadmap",
    //   link: "#",
    //   icon: MapIcon,
    // },
    // {
    //     name: "Help (Work in Progress)",
    //     link: "#",
    //     icon: QuestionMarkCircleIcon,
    // },
];
export const teachLinks = [
    {
        name: "Dashboard",
        link: "/learning",
        icon: Squares2X2Icon,
    },
    {
        name: "All Learning Materials",
        link: "/learning/courses",
        icon: BookOpenIcon,
    },
    {
        name: "My Learning Materials",
        link: "/learning/my-courses",
        icon: FolderIcon,
    },
    {
        name: "Create a Learning Materials",
        link: "/learning/create-course",
        icon: FolderPlusIcon,
    },
    // {
    //     name: "Help (Work in Progress)",
    //     link: "#",
    //     icon: QuestionMarkCircleIcon,
    // },
];

export const adminLinks = [
    {
        name: "Dashboard",
        link: "/learning",
        icon: Squares2X2Icon,
    },
    {
        name: "Users List",
        link: "/learning/users-list",
        icon: UserGroupIcon,
    },
    // {
    //   name: "Teachers List",
    //   link: "/learning/teachers-list",
    //   icon: UsersIcon,
    // },
    {
        name: "Teachers Management",
        link: "/learning/assign-teachers",
        icon: UserPlusIcon,
    },
    {
        name: "Add Users",
        link: "/learning/add-users",
        icon: PlusCircleIcon,
    },
    {
        name: "Publish Materials",
        link: "/learning/publish",
        icon: CheckBadgeIcon,
    },
    {
        name: "All Learning Materials",
        link: "/learning/courses",
        icon: BookOpenIcon,
    },
    {
        name: "Reports",
        link: "/learning/data-report",
        icon: DocumentChartBarIcon,
    },
    // {
    //     name: "Help (Work in Progress)",
    //     link: "#",
    //     icon: QuestionMarkCircleIcon,
    // },
];
