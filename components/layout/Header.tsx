"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  UserRound,
} from "lucide-react";
import SearchModal from "../SearchModal";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

const occasionItems = [
  {
    label: "Birthday",
    href: "/occasions/birthday",
  },
  {
    label: "Anniversary",
    href: "/occasions/anniversary",
  },
  {
    label: "Diwali",
    href: "/occasions/diwali",
  },
  {
    label: "Rakhi",
    href: "/occasions/rakhi",
  },
  {
    label: "Thank You Gifts",
    href: "/occasions/thank-you",
  },
];

const navItems = [
  {
    label: "Shop All",
    href: "/shop",
  },
  {
    label: "Occasions",
    href: "/occasions",
    hasDropdown: true,
  },
  {
    label: "Build Your Own Hamper",
    href: "/build-your-hamper",
  },
  {
    label: "Corporate Gifting",
    href: "/corporate-gifting",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { user, loading } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleAccountClick = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="border-b border-[#eee5e1] bg-white">
      <div className="mx-auto flex h-[82] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="relative h-7 w-[170] sm:h-8 sm:w-[190]">
              <Image
                src="/images/brand.png"
                alt="Wrapora"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-[#7b4135]">
              GIFTS THAT DELIGHT
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#241b18] transition hover:text-[#9d3025]"
                >
                  {item.label}

                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div className="invisible absolute left-0 top-full z-50 w-52 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-md border border-[#eee5e1] bg-white py-2 shadow-lg">
                    {occasionItems.map((occasion) => (
                      <Link
                        key={occasion.href}
                        href={occasion.href}
                        className="block px-4 py-2.5 text-sm text-[#241b18] transition hover:bg-[#FFF1F4] hover:text-[#B0184F]"
                      >
                        {occasion.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-[#241b18] transition hover:text-[#9d3025]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="hidden cursor-pointer text-[#211b19] transition hover:text-[#9d3025] sm:block"
          >
            <Search className="h-[23] w-[23]" strokeWidth={1.7} />
          </button>

          <div className="group relative">
            <button
              type="button"
              aria-label="Account"
              onClick={handleAccountClick}
              className="flex cursor-pointer items-center justify-center text-[#211b19] transition hover:text-[#9d3025]"
            >
              {loading ? (
                <div className="h-9 w-9 animate-pulse rounded-full bg-[#f7e7e9]" />
              ) : user ? (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7e7e9] text-sm font-semibold text-[#b8325a]">
                  {(
                    user.displayName?.trim()?.charAt(0) ||
                    user.email?.trim()?.charAt(0) ||
                    "U"
                  ).toUpperCase()}
                </div>
              ) : (
                <UserRound className="h-[23] w-[23]" strokeWidth={1.6} />
              )}
            </button>

            <div className="invisible absolute right-0 top-full z-50 w-56 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-xl border border-[#eee5e1] bg-white py-2 shadow-lg">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-[#241b18] transition hover:bg-[#fff1f4] hover:text-[#b0184f]"
                >
                  <User className="h-[18] w-[18]" strokeWidth={1.7} />
                  <span>My Profile</span>
                </Link>

                <Link
                  href="/orders"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-[#241b18] transition hover:bg-[#fff1f4] hover:text-[#b0184f]"
                >
                  <Package className="h-[18] w-[18]" strokeWidth={1.7} />
                  <span>My Orders</span>
                </Link>

                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-[#241b18] transition hover:bg-[#fff1f4] hover:text-[#b0184f]"
                >
                  <Heart className="h-[18] w-[18]" strokeWidth={1.7} />
                  <span>Wishlist</span>
                </Link>

                <Link
                  href="/account-settings"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-[#241b18] transition hover:bg-[#fff1f4] hover:text-[#b0184f]"
                >
                  <Settings className="h-[18] w-[18]" strokeWidth={1.7} />
                  <span>Account Settings</span>
                </Link>

                <div className="my-1 border-t border-[#eee5e1]" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-[#b83227] transition hover:bg-[#fff1f4]"
                >
                  <LogOut className="h-[18] w-[18]" strokeWidth={1.7} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative text-[#211b19] transition hover:text-[#9d3025]"
          >
            <ShoppingCart className="h-[25] w-[25]" strokeWidth={1.6} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#b83227] text-[10px] font-semibold text-white">
              2
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="cursor-pointer text-[#211b19] transition hover:text-[#9d3025] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-[25] w-[25]" strokeWidth={1.7} />
            ) : (
              <Menu className="h-[25] w-[25]" strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#eee5e1] bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.href} className="group relative w-fit">
                  {/* Occasions */}
                  <Link
                    href={item.href}
                    className="flex w-fit items-center gap-1 py-2.5 text-sm font-medium text-[#241b18] transition hover:text-[#9d3025]"
                  >
                    <span>{item.label}</span>

                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Occasion options */}
                  <div className="hidden pl-4 group-hover:block">
                    <div className="flex flex-col border-l border-[#eee5e1]">
                      {occasionItems.map((occasion) => (
                        <Link
                          key={occasion.href}
                          href={occasion.href}
                          onClick={() => setMenuOpen(false)}
                          className="px-4 py-2 text-sm text-[#6b5b56] transition hover:text-[#b0184f]"
                        >
                          {occasion.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm font-medium text-[#241b18] transition hover:text-[#9d3025]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
};

export default Header;
