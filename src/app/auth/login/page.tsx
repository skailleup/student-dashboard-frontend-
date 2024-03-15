"use client";

import React, { useState } from "react";
import { Form } from "@/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { LoginInType } from "@/types/auth";
import { loginInSchema } from "@/schema";
import AppInput from "@/components/ui/app-input";

export default function Page() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const formHook = useForm<LoginInType>({
    resolver: yupResolver(loginInSchema),
    defaultValues: {
      studentId: "",
      password: "",
    },
  } as { resolver: Resolver<LoginInType> });

  const { handleSubmit, control } = formHook;

  const submit = async (data: LoginInType) => {
    // console.log("data", data);
    router.push("/dashboard");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Form {...formHook}>
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white my-2 py-2 sm:py-6 px-4 sm:px-16 md:px-24 rounded-2xl shadow-xl w-[95%] max-w-[600px] mx-auto"
        >
          <div className="flex justify-center mb-0">
            <Image src="/images/logo.jpg" alt="Skailleup Logo" width={100} height={100} />
          </div>
          <p className="text-[2rem] mb-4 text-primary-black font-bold text-center">Welcome back</p>

          <div className="mb-4">
            <AppInput
              label="Student ID"
              type="text"
              control={control}
              name="studentId"
              placeholder="Student ID (Required)"
              isRequired
            />

            <AppInput
              label="Password"
              type="password"
              control={control}
              name="password"
              placeholder="Password (Required)"
              isRequired
            />

            <div className="flex flex-col md:flex-row items-center mt-8 justify-between">
              <Link href="/auth/forgot-studentid" style={{ fontWeight: 600 }}>
                Forgot your student ID?
              </Link>

              <Link href="/auth/forgot-password" style={{ fontWeight: 600 }}>
                Forgot your password?
              </Link>
            </div>

            <div className="flex items-center space-x-2 mt-8">
              <Checkbox id="remember-me" checked={checked} onCheckedChange={setChecked as any} />
              <label
                htmlFor="remember-me"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Button type="submit" className="w-full mt-8" disabled={!checked}>
              Log In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
