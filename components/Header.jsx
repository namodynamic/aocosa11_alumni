"use client";

import { logo } from "../public/assets";
import Image from "next/image";
import { useState } from "react";
import { instagram, chevron } from "../public/assets";
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
import Hamburger from "hamburger-react";

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
    <header>
      {/* <section className="padding-x flex gap-2 justify-between relative w-full bg-green-700">
        <div className="max-md:hidden flex gap-2">
          <div className="bg-white rounded-md px-1 py-1 hover:bg-yellow-400">
            <Link
              href="https://www.instagram.com/aocosa2011"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                alt="instagram"
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>
          <div className="text-white text-lg font-medium px-2 rounded-md hover:bg-white border border-yellow-400 hover:text-black bg-maroon">
            <Link href="/dues">Pay Dues Here</Link>
          </div>
        </div>
      </section> */}

      <section className="padding-x  py-8 border-b w-full ">
        <div className="flex  justify-between items-center">
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src={logo}
              alt="logo"
              width={60}
              height={60}
              className="object-contain rounded-full"
            />
            <div>
              <p className="font-Manrope font-extrabold text-lg tracking-wide maroon_gradient">
                AOCOSA 05/11 Alumni
              </p>
              <p className="font-bold font-inter text-sm text-slate-500 tracking-tight">
                Network And Growth
              </p>
            </div>
          </Link>

          <ul className="flex-1 flex justify-center items-center gap-8 max-lg:hidden">
            {navLinks.map((item) => {
              let href = item.href;
              const isActive =
                (pathname.includes(href) && href.length > 1) ||
                pathname === href;
              const hasSubMenu = item.subMenu && item.subMenu.length > 0;
              const showDropdown = activeDropdown === item.label;

              return (
                <li key={item.label}>
                  {hasSubMenu ? (
                    <div
                      className={`${
                        isActive ? "text-maroon" : "text-black"
                      } font-bold leading-normal text-lg hover:text-maroon`}
                      onMouseEnter={() => toggleDropdown(item.label)}
                      onMouseLeave={() => toggleDropdown(item.label)}
                    >
                      <div className="flex relative">
                        {item.label}
                        <Image
                          src={chevron}
                          alt="chevron icon"
                          className="inline-block ml-1"
                        />
                      </div>
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
      </section>
    </header>
  );
};

export default NavBar;
