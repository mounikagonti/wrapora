"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User } from "lucide-react";
import { registerWithEmail } from "@/lib/firebase/auth";

import InputField from "./InputField";
import { registerSchema, RegisterFormData } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const user = await registerWithEmail(
        data.name,
        data.email,
        data.password,
      );

      console.log("Registered user:", user);

      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          }),
        );

        router.replace("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3"
    >
      <InputField
        label="Full Name"
        placeholder="Enter your full name"
        icon={User}
        registration={register("name")}
        error={errors.name?.message}
      />

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
        type="password"
        placeholder="Create a password"
        icon={Lock}
        registration={register("password")}
        error={errors.password?.message}
      />

      <InputField
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        icon={Lock}
        registration={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 w-full rounded-lg bg-(--color-primary) px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-(--color-primary-hover) disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterForm;
