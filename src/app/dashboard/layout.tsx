"use client";

import { useState } from "react";
import Header from "@/components/ui/dashboard/header";
import SideNav from "@/components/ui/dashboard/sidenav";
import { ChevronsRight, ChevronsLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="flex min-h-full flex-row w-full">
      <div
        className={cn("w-16 min-h-full md:w-64 relative transition-width duration-300 ease-in-out", {
          "w-0": !isSideNavOpen,
          "w-16": isSideNavOpen,
        })}
      >
        <SideNav />
        {isSideNavOpen ? (
          <ChevronsLeft
            className="text-input my-4 cursor-pointer absolute right-[-25px] top-[50px] z-[9999] w-12 h-12 md:hidden"
            onClick={handleSideNav}
          />
        ) : (
          <ChevronsRight
            className="text-input my-4 cursor-pointer absolute right-[-25px] top-[50px] z-[9999] w-12 h-12 md:hidden"
            onClick={handleSideNav}
          />
        )}
      </div>
      <div className="min-h-full w-full md:overflow-x-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
}
