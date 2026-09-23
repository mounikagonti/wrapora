"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  ChevronRight,
  Pencil,
  Gift,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/config";

const quickAccess = [
  {
    title: "My Orders",
    description: "3 Orders",
    href: "/orders",
    icon: Package,
    iconBg: "bg-[#fde1e7]",
    iconColor: "text-[#b8325a]",
    cardBg: "bg-[#fff7f8]",
    border: "border-[#f5d9df]",
  },
  {
    title: "Wishlist",
    description: "8 Items",
    href: "/wishlist",
    icon: Heart,
    iconBg: "bg-[#eadcf8]",
    iconColor: "text-[#55308c]",
    cardBg: "bg-[#fbf8ff]",
    border: "border-[#e5d9f5]",
  },
  {
    title: "Saved Addresses",
    description: "2 Addresses",
    href: "/addresses",
    icon: MapPin,
    iconBg: "bg-[#d9f1e7]",
    iconColor: "text-[#20805b]",
    cardBg: "bg-[#f5fcf8]",
    border: "border-[#d7eee2]",
  },
  {
    title: "Account Settings",
    description: "Manage account",
    href: "/account-settings",
    icon: Settings,
    iconBg: "bg-[#dceaff]",
    iconColor: "text-[#17477c]",
    cardBg: "bg-[#f5f9ff]",
    border: "border-[#d8e6f8]",
  },
];

export default function UserProfile() {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  const displayName = user?.displayName || "User";
  const email = user?.email || "";

  const firstLetter = (
    user?.displayName?.trim()?.charAt(0) ||
    user?.email?.trim()?.charAt(0) ||
    "U"
  ).toUpperCase();

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-linear-to-r from-[#fff8f9] via-[#fffafb] to-[#fff4f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 h-[4] w-14 rounded-full bg-[#df667d]" />

            <h1 className="text-5xl font-semibold tracking-tight text-[#10233f]">
              My Account
            </h1>

            <p className="mt-5 text-xl text-[#52647b]">
              Manage your account and preferences
            </p>
          </div>

          <div className="absolute right-20 top-16 hidden lg:block">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[#fff0f3]">
              <Gift className="h-20 w-20 text-[#df667d]" strokeWidth={1.3} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-2xl border border-[#f0dadd] bg-white px-8 py-10 shadow-sm">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-8">
              <div className="flex h-34 w-34 shrink-0 items-center justify-center rounded-full bg-[#f7e7e9]">
                {loading ? (
                  <div className="h-12 w-12 animate-pulse rounded-full bg-[#f1d5da]" />
                ) : (
                  <span className="text-5xl font-semibold text-[#b8325a]">
                    {firstLetter}
                  </span>
                )}
              </div>

              {loading ? (
                <div className="space-y-3">
                  <div className="h-8 w-48 animate-pulse rounded-md bg-[#f3e8ea]" />
                  <div className="h-6 w-64 animate-pulse rounded-md bg-[#f3e8ea]" />
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-semibold text-[#10233f]">
                    {displayName}
                  </h2>

                  <p className="mt-3 text-xl text-[#52647b]">{email}</p>
                </div>
              )}
            </div>

            <Link
              href="/profile/edit"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#ed8294] px-7 py-3 text-base font-medium text-[#c93652] transition hover:bg-[#fff1f4]"
            >
              <Pencil className="h-5 w-5" strokeWidth={1.8} />
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-semibold text-[#10233f]">
            Quick Access
          </h2>

          <div className="mt-7 grid gap-7 md:grid-cols-2">
            {quickAccess.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group relative min-h-[230] rounded-2xl border ${item.border} ${item.cardBg} p-8 transition duration-200 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full ${item.iconBg}`}
                  >
                    <Icon
                      className={`h-10 w-10 ${item.iconColor}`}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-[#10233f]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-lg text-[#52647b]">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight
                    className="absolute right-8 top-1/2 h-7 w-7 -translate-y-1/2 text-[#10233f] transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center py-20">
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex min-w-[290] items-center justify-center gap-4 rounded-xl border border-[#ef7088] px-8 py-4 text-lg font-medium text-[#c93652] transition hover:bg-[#fff1f4]"
          >
            <LogOut className="h-6 w-6" strokeWidth={1.7} />
            Logout
          </button>
        </div>
      </section>
    </main>
  );
}
