"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

import Notificationbell from "@/icons/notificationbell";
import Pen from "@/icons/Pen";
import { Form } from "@/components/ui/form";
import AppInput from "@/components/ui/app-input";
import { languageList } from "@/lib/languages";

const Header = () => {
  const formHook = useForm({});
  const { control } = formHook;
  const pathname = usePathname();

  return (
    <header className="min-w-[320px] sm:w-full p-2 md:p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-[18px] font-bold uppercase mb-4 sm:0">
          {pathname === "/dashboard" ? "Dashboard" : `${pathname.split("/")[2]}`}
        </div>
        <div className="flex gap-8 sm:gap-16 w-full sm:w-auto items-center">
          <Form {...formHook}>
            <AppInput
              type="text"
              control={control}
              name="language"
              placeholder="Language"
              isSelect
              options={languageList}
            />
          </Form>
          <div className="flex items-center gap-0 sm:gap-8">
            <div className="flex">
              <Notificationbell />
              <span className="px-2 sm:px-4">Profile</span>
            </div>
            <div>
              <Pen />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
