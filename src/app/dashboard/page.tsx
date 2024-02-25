"use client";

import AppInput from "@/components/ui/app-input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function Page() {
  const formHook = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control } = formHook;

  const submit = async (data: any) => {
    console.log("data", data);
  };

  return (
    <div className={`p-4 md:p-8`}>
      <p>DASHBOARD PAGE!</p>

      <Form {...formHook}>
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white my-6 py-6 sm:py-12 px-8 sm:px-16 md:px-24 rounded-2xl shadow-lg w-[95%] max-w-[600px] mx-auto"
        >
          <div className="mb-4">
            <AppInput
              label="Email"
              type="email"
              control={control}
              name="email"
              placeholder="Kindly Enter your email"
              isRequired
            />

            <AppInput
              label="Password"
              type="password"
              control={control}
              name="password"
              placeholder="********"
              isRequired
            />

            {/* <AppInput label="Email" type="email" control={null} name="email" placeholder="Enter your email" isRequired /> */}
          </div>
        </form>
      </Form>
    </div>
  );
}
