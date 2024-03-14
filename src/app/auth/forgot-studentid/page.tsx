"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { forgotStudentIdSchema } from "@/schema";
import AppInput from "@/components/ui/app-input";

export default function Page() {
  const formHook = useForm<{ email: string }>({
    resolver: yupResolver(forgotStudentIdSchema),
    defaultValues: {
      email: "",
    },
  } as { resolver: Resolver<{ email: string }> });

  const { handleSubmit, control } = formHook;

  const submit = async (data: { email: string }) => {
    console.log("data", data);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Form {...formHook}>
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white my-2 py-2 sm:py-6 px-4 sm:px-16 md:px-24 rounded-2xl shadow-xl w-[95%] max-w-[600px] mx-auto"
        >
          <p className="text-[2rem] mb-4 text-primary-gray font-bold text-center">Recover Student ID</p>

          <p className="mb-4">
            Insert the email address you used to register in the field below. You will receive an email with your
            student ID.
          </p>

          <div className="mb-4">
            <AppInput
              label="Email"
              type="email"
              control={control}
              name="email"
              placeholder="Email (Required)"
              isRequired
            />

            <div>
              <Link href="/auth/login" style={{ fontWeight: 600 }}>
                Back to Login?
              </Link>
            </div>

            <Button type="submit" className="w-full mt-8">
              Send my student ID
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
