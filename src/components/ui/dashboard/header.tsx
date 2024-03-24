"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

import Notificationbell from "@/icons/notificationbell";
import Pen from "@/icons/Pen";
import Learning from "@/icons/learning";
import Module from "@/icons/module";
import LearningTrack from "@/icons/learning-track.svg";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import CircularProgressBar from "../circularprogressbar";
import { Form } from "@/components/ui/form";
import AppInput from "@/components/ui/app-input";
import { languageList } from "@/lib/languages";

const Header = () => {
  const formHook = useForm({});
  const { control } = formHook;

  const progress = 40;

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden px-8 py-6">
      <div className="flex justify-between pb-5">
        <div className="text-[18px] font-bold uppercase">Dashboard</div>
        <div className="flex gap-5 w-[60%]">
          <div className="flex relative pr-12">
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
          <div className="flex pr-12">
            <Notificationbell />
            <span className="px-4">Profile</span>
          </div>
          <div className="pl-12">
            <Pen />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between pr-20">
        <div className="bg-primary text-white rounded-md w-full md:w-[60%] h-[20%] px-4 py-2 my-2 md:my-0 md:mr-2">
          <h3 className="text-[22px] tracking-widest">Hello Skailler, Welcome to your Dashboard</h3>
          <p className="text-[14px]">You have learned 40% of your goal this week!</p>
          <p className="text-[14px]">Keep it up and improve your result!</p>
        </div>
        <div className="text-center pr-10">
          <Avatar className="w-20 h-20 ml-6">
            <AvatarImage src="./images/abiola.jpg" alt="image of abiola nnamdi" />
            <AvatarFallback>ANM</AvatarFallback>
          </Avatar>
          <p>Abiola Nnamdi Musa</p>
          <p>Student</p>
        </div>
      </div>

      <div className="bg-[#5C58006B] rounded-full mt-4 px-6 py-2 text-primary mr-10 mb-8 font-semibold">
        <p>Protect your privacy: Please be careful not to share your personal information with anyone.</p>
      </div>

      <div className="flex flex-wrap justify-between text-center mr-10">
        <div className="bg-[#000E5C47] rounded-md px-8 pt-8 pb-6 flex flex-col items-center w-full md:w-[23%] h-[160px] md:mr-2 md:mb-0">
          <Learning />
          <p className="font-bold text-[18px] mt-6">Learning Hours</p>
          <p className="text-[14px]">10hrs per week</p>
        </div>
        <div className="bg-[#04ED8D73] rounded-md px-8 pt-8 pb-6 flex flex-col items-center w-full md:w-[23%] h-[160px] md:mr-2 md:mb-0">
          <Module />
          <p className="font-bold text-[18px] mt-6">Module Assessment</p>
          <p className="text-[14px]">0 Assessment completed</p>
        </div>
        <div className="bg-[#FFA500] rounded-md px-8 py-6 flex flex-col items-center w-full md:w-[23%] h-[160px] md:mr-2 md:mb-0">
          <CircularProgressBar percent={progress} />
          <p className="font-bold text-[18px] mt-3">Course Progress</p>
          <p className="text-[14px]">UI/UX</p>
        </div>
        <div className="bg-[#008080] rounded-md px-8 pt-8 pb-6 flex flex-col items-center w-full md:w-[23%] h-[160px]">
          <Image src={LearningTrack} alt="image of learning track" />
          <p className="font-bold text-[18px] mt-6">Learning Track</p>
          <p className="text-[14px]">Design - UI/UX</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
