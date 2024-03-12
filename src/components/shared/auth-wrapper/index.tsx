"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import Image from "next/image";

import AppInput from "@/components/ui/app-input";
import { languageList } from "@/lib/languages";

type WrapperPropType = {
  children: React.ReactNode;
};

function Index({ children }: WrapperPropType) {
  const formHook = useForm({});

  const { control } = formHook;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center w-[90%] mx-auto mb-[-4rem]">
        <div className="cursor-pointer">
          <Image src="/images/auth-layout-logo.svg" alt="Skailleup Logo" width={200} height={200} />
        </div>

        <div className="w-[15rem]">
          <Form {...formHook}>
            <AppInput
              type="text"
              control={control}
              name="language"
              placeholder="Select your prefered language"
              isSelect
              options={languageList}
            />
          </Form>
        </div>
      </div>

      <div className="mx-0 mt-24 md:m-12" style={{ boxShadow: "inset 0 2px 10px 0 rgba(0, 0, 0, 0.3)" }}>
        {children}
      </div>
    </div>
  );
}

export default Index;
