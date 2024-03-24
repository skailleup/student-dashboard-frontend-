import Link from "next/link";
import NavLinks from "./nav-links";
import Image from "next/image";
import { LogOut, Github } from "lucide-react";
import SkailleupLogo from "@/icons/LogoWhite";
import MobileLogo from "@/icons/logo-mobile.svg";
import LiveClass from "@/icons/LiveClass";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-primary overflow-y-auto overflow-x-hidden">
      <Link className="flex h-20 items-end justify-start bg-primary p-4 md:h-40" href="/">
        <div className="hidden md:block w-32 text-white md:w-40">
          <SkailleupLogo />
        </div>

        <div className="block md:hidden w-32 text-white md:w-40">
          <Image src={MobileLogo} alt="Skailleup Logo" />
        </div>
      </Link>

      <div className="flex flex-col grow md:h-auto justify-between items-center">
        <div className="w-full md:w-auto">
          <NavLinks />
        </div>

        <div className="bg-destructive text-white flex items-center gap-8 md:w-[80%] py-2 px-4 mx-auto cursor-pointer rounded-sm mb-8">
          <LiveClass />
          <p className="hidden md:block">Live Class</p>
        </div>

        <div className="w-full flex justify-between items-center border-white border-t-2 mb-4">
          <div className="hidden md:block">
            <Avatar className="h-10 w-10">
              <AvatarImage src="./images/zara.jpg" alt="image of zara chima" />
              <AvatarFallback>ZC</AvatarFallback>
            </Avatar>
          </div>

          <div className="text-white hidden md:block ml-4">
            <p>Zara Chima</p>
            <p>zara@skailleup.com</p>
          </div>

          <LogOut className="w-6 text-white cursor-pointer mx-auto" />
        </div>
      </div>
    </div>
  );
}
