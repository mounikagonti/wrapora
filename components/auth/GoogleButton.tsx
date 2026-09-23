"use client";

import Image from "next/image";
import { useState } from "react";
import { loginWithGoogle } from "@/lib/firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface GoogleButtonProps {
  text?: string;
  linkText?: string;
  linkHref?: string;
}

const GoogleButton = ({
  text = "Already have an account?",
  linkText = "Login",
  linkHref = "/login",
}: GoogleButtonProps) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const user = await loginWithGoogle();

      console.log("Google user:", user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading}
        className="
          flex
          w-full
          cursor-pointer
          items-center
          justify-center
          gap-3
          rounded-lg
          border
          border-(--color-border-light)
          bg-(--color-surface)
          px-4
          py-3
          text-sm
          font-medium
          text-(--color-text-primary)
          transition
          hover:bg-(--color-surface-pink)
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        <Image
          src="/images/google-lo.jpg"
          alt="Google"
          width={20}
          height={20}
          className="shrink-0"
        />

        <span>{loading ? "Connecting..." : "Continue with Google"}</span>
      </button>

      <p className="mt-3 text-center text-sm text-(--color-text-secondary)">
        {text}{" "}
        <Link
          href={linkHref}
          className="
            cursor-pointer
            font-medium
            text-(--color-primary)
            hover:underline
          "
        >
          {linkText}
        </Link>
      </p>
    </>
  );
};

export default GoogleButton;
