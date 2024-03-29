"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import CoursesIcon from "@/icons/Courses.svg";
import DashboardIcon from "@/icons/home-alt.svg";
import PostsIcon from "@/icons/Post.svg";
import ResourcesIcon from "@/icons/Resources.svg";
import ScheduleIcon from "@/icons/Schedule.svg";
import SettingsIcon from "@/icons/setting.svg";
import TaskIcon from "@/icons/Task.svg";
import AccountIcon from "@/icons/user.svg";
import PeertoPeerIcon from "@/icons/Vector.svg";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { name: "My Courses", href: "/dashboard/my-courses", icon: CoursesIcon },
  { name: "Resources", href: "/dashboard/resources", icon: ResourcesIcon },
  { name: "My Task", href: "/dashboard/my-task", icon: TaskIcon },
  { name: "Post", href: "/dashboard/posts", icon: PostsIcon },
  { name: "My Schedule", href: "/dashboard/my-schedule", icon: ScheduleIcon },
  { name: "Peer - to - Peer Support", href: "/dashboard/peer-to-peer-support", icon: PeertoPeerIcon },
  { name: "My Account", href: "/dashboard/my-account", icon: AccountIcon },
  { name: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 bg-primary px-3 py-8 text-sm font-medium hover:border-l-4 hover:border-white md:flex-none md:justify-start md:py-8 md:px-3",
              {
                "border-l-4 border-white": pathname === link.href,
              }
            )}
          >
            <Image src={link.icon} alt={link.name} />
            <p className="hidden md:block text-white ml-4">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
