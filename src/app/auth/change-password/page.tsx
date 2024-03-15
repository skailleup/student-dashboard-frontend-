"use client";

import React, { useState } from "react";
import { Form } from "@/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChangePasswordType } from "@/types/auth";
import { changePasswordSchema } from "@/schema";
import AppInput from "@/components/ui/app-input";
import PasswordChangeSuccessModal from "@/components/ui/dialog/pwd-change-success-modal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export default function Page() {
  const [open, setOpen] = useState(false);

  const formHook = useForm<ChangePasswordType>({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  } as { resolver: Resolver<ChangePasswordType> });

  const { handleSubmit, control } = formHook;

  const submit = async (data: ChangePasswordType) => {
    // console.log("data", data);
    setOpen(true);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Form {...formHook}>
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white my-2 py-2 sm:py-6 px-4 sm:px-16 md:px-24 rounded-2xl shadow-xl w-[95%] max-w-[600px] mx-auto"
        >
          <p className="text-[2rem] mb-4 text-primary-black font-bold text-center">Change Password</p>

          <div className="mb-4">
            <AppInput
              label="New Password"
              type="password"
              control={control}
              name="password"
              placeholder="Password (Required)"
              isRequired
            />

            <AppInput
              label="Confirm Password"
              type="password"
              control={control}
              name="confirmPassword"
              placeholder="Password (Required)"
              isRequired
            />

            <div>
              <Link href="/auth/login" style={{ fontWeight: 600 }}>
                Back to Login?
              </Link>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button type="submit" className="w-full mt-8">
                  Change Password
                </Button>
              </DialogTrigger>

              <PasswordChangeSuccessModal open={open} onOpenChange={setOpen} />
            </Dialog>
          </div>
        </form>
      </Form>
    </div>
  );
}
