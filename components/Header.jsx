"use client";

import { logo } from "../public/assets";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserButton,
  SignedIn,
  SignInButton,
  useAuth,
  SignedOut,
} from "@clerk/nextjs";
import { navLinks } from "@/constants";
import MobileNav from "./MobileNav";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setToggle(false);
  };

  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <header className="border-b-2">
      <div className="flex wrapper  py-4  w-full  justify-between items-center">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src={logo}
            alt="logo"
            width={60}
            height={60}
            className="object-contain rounded-full"
          />
          <div>
            <p className="font-manrope font-extrabold text-lg tracking-tight">
              AOCOSA 2005/11
            </p>
            <p className="font-medium font-manrope text-sm text-slate-500 tracking-tight">
              Network And Growth
            </p>
          </div>
        </Link>

        <ul className="flex-1 flex justify-center items-center gap-8 max-lg:hidden">
          {navLinks.map((item) => {
            let href = item.href;
            const isActive =
              (pathname.includes(href) && href.length > 1) ||
              pathname === href ||
              (item.subMenu &&
                item.subMenu.some(
                  (subMenuItem) =>
                    pathname === subMenuItem.href ||
                    (subMenuItem.label === "Profile" &&
                      pathname === `/profile/${userId}`)
                ));
            const hasSubMenu = item.subMenu && item.subMenu.length > 0;
            const showDropdown = activeDropdown === item.label;

            return (
              <li key={item.label}>
                {hasSubMenu ? (
                  <div
                    className={` ${
                      isActive ? "text-maroon" : "text-black"
                    } font-bold leading-normal cursor-pointer text-lg hover:text-maroon`}
                    onMouseEnter={() => toggleDropdown(item.label)}
                    onMouseLeave={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`inline-block top-[1px] ml-1 transition-transform duration-200 transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />

                    {showDropdown && (
                      <div className="absolute p-4 rounded-md bg-white border border-gray-300 shadow-md">
                        <ul>
                          {item.subMenu.map((subMenuItem) => (
                            <li
                              key={subMenuItem.label}
                              className="text-base font-medium"
                            >
                              <Link
                                href={
                                  subMenuItem.label === "Profile"
                                    ? `/profile/${userId}`
                                    : subMenuItem.href
                                }
                                className={`${
                                  pathname === subMenuItem.href ||
                                  (subMenuItem.label === "Profile" &&
                                    pathname === `/profile/${userId}`)
                                    ? "text-maroon"
                                    : "text-slate-400"
                                } hover:text-maroon`}
                              >
                                {subMenuItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={href}
                    className={`${
                      isActive ? "text-maroon" : "text-black"
                    } font-bold leading-normal text-lg hover:text-maroon`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="gap-2 flex">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <div className="flex gap-3 justify-end max-lg:hidden">
            <SignedOut>
              <Link href="/registration" className="outline_btn">
                Register
              </Link>
              <div className="black_btn">
                <SignInButton />
              </div>
            </SignedOut>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
