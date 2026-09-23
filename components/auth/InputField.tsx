"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type?: string;
  rightLabel?: string;
  placeholder?: string;
  icon?: LucideIcon;
  error?: string;
  registration: UseFormRegisterReturn;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  error,
  registration,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-(--color-text-primary)">
        {label}
      </label>

      <div
        className={`flex items-center rounded-lg border bg-(--color-input-background) transition-colors ${
          error
            ? "border-(--color-error)"
            : "border-(--color-input-border) focus-within:border-(--color-input-focus)"
        }`}
      >
        {Icon && (
          <Icon
            size={20}
            strokeWidth={1.8}
            className="ml-3 shrink-0 text-(--color-text-secondary)"
          />
        )}

        <input
          {...registration}
          type={inputType}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-3 text-sm text-(--color-text-primary) outline-none placeholder:text-(--color-text-placeholder)"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="mr-3 shrink-0 text-(--color-text-secondary) hover:text-(--color-primary)"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff size={20} strokeWidth={1.8} />
            ) : (
              <Eye size={20} strokeWidth={1.8} />
            )}
          </button>
        )}
      </div>

      {error && <p className="text-xs text-(--color-error)">{error}</p>}
    </div>
  );
};

export default InputField;
