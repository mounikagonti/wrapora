"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";

import InputField from "./InputField";
import { loginSchema, LoginFormData } from "@/lib/validations/loginSchema";
import { useRouter } from "next/navigation";
import { loginWithEmail } from "@/lib/firebase/auth";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const user = await loginWithEmail(data.email, data.password);

      console.log("Logged in user:", user);

      if (user) {
        router.replace("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
    >
      <InputField
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        icon={Mail}
        registration={register("email")}
        error={errors.email?.message}
      />

      <InputField
        label="Password"
        rightLabel="Forgot Password?"
        type="password"
        placeholder="Enter your password"
        icon={Lock}
        registration={register("password")}
        error={errors.password?.message}
      />

      <div className="flex items-center gap-2">
        <input
          id="rememberMe"
          type="checkbox"
          {...register("rememberMe")}
          className="
            h-4
            w-4
            cursor-pointer
            rounded
            border-gray-300
            accent-(--color-primary)
          "
        />

        <label
          htmlFor="rememberMe"
          className="
            cursor-pointer
            text-sm
            text-(--color-text-primary)
          "
        >
          Remember me
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          mt-1
          w-full
          cursor-pointer
          rounded-lg
          bg-(--color-primary)
          px-4
          py-3
          text-sm
          font-medium
          text-white
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:bg-(--color-primary-hover)
          hover:shadow-md
          active:translate-y-0
          active:scale-[0.98]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
