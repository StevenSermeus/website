import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(10)
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s]).*$/),
});

function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    alert(data.email);
    alert(data.password);
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="md:text-right md:mb-0 mb-1 block pr-4 font-bold text-gray-500"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            id="email"
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            type="email"
            placeholder="John Doe"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <span className="text-red-500">Email must be a valid email</span>
        )}
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="md:text-right md:mb-0 mb-1 block pr-4 font-bold text-gray-500"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            id="password"
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            type="password"
            placeholder="******************"
            {...register("password")}
          />
        </div>
        {errors.password && (
          <span className="text-red-500">
            Password must contain at least 10 characters, 1 uppercase letter, 1
            number, and 1 special character
          </span>
        )}
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="focus:shadow-outline rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormDemo;
