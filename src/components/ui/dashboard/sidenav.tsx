import Link from "next/link";
import NavLinks from "./nav-links";
import SkailleupLogo from "../../../../public/icons/LogoWhite";
import MobileLogo from "../../../../public/icons/logo-mobile.svg";
import { LogOut, Github } from "lucide-react";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-primary">
      <Link className="flex h-20 items-end justify-start bg-primary p-4 md:h-40" href="/">
        <div className="hidden md:block w-32 text-white md:w-40">
          <SkailleupLogo />
        </div>

        <div className="block md:hidden w-32 text-white md:w-40">
          <Image src={MobileLogo} alt="Skailleup Logo" />
        </div>
      </Link>

      <div className="flex flex-col grow md:h-auto justify-between space-x-2 md:space-x-0">
        <div>
          <NavLinks />
        </div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:py-8 md:px-3">
            <LogOut className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
