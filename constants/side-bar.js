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
