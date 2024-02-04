import {
  BookOpenIcon,
  CalendarIcon,
  FolderIcon,
  FolderPlusIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
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
  {
    name: "Help",
    link: "#",
    icon: QuestionMarkCircleIcon,
  },
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
  //   name: "Assign Learning Materials",
  //   link: "#",
  //   icon: UserPlusIcon,
  // },
  {
    name: "Help",
    link: "#",
    icon: QuestionMarkCircleIcon,
  },
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
    icon: UserIcon,
  },
  // {
  //   name: "Teachers List",
  //   link: "/learning/teachers-list",
  //   icon: UsersIcon,
  // },
  {
    name: "Assign Teachers",
    link: "/learning/assign-teachers",
    icon: UserPlusIcon,
  },
  {
    name: "All Learning Materials",
    link: "/learning/courses",
    icon: BookOpenIcon,
  },
  {
    name: "Help",
    link: "#",
    icon: QuestionMarkCircleIcon,
  },
];
