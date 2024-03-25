"use client";

import React from "react";
import { useForm } from "react-hook-form";

import Notificationbell from "@/icons/notificationbell";
import Pen from "@/icons/Pen";

import { Form } from "@/components/ui/form";
import AppInput from "@/components/ui/app-input";
import { languageList } from "@/lib/languages";

const Header = () => {
  const formHook = useForm({});
  const { control } = formHook;

  return (
    <header className="min-w-[320px] sm:w-full p-2 md:p-4">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="text-[18px] font-bold uppercase flex-1 mb-4 sm:0">Dashboard</div>
        <div className="flex gap-2 flex-3">
          <div className="flex relative pr-4">
            <Form {...formHook}>
              <AppInput
                type="text"
                control={control}
                name="language"
                placeholder="Language"
                isSelect
                options={languageList}
                className="border-none outline-none"
              />
            </Form>
          </div>
          <div className="flex pr-4">
            <Notificationbell />
            <span className="px-4">Profile</span>
          </div>
          <div className="pl-4 sm:pl-12">
            <Pen />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
