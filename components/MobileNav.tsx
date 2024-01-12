"use client";

import { logo } from "../public/assets";
import { useState } from "react";
import { chevron } from "../public/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, useAuth, SignedOut } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const MobileNav = () => {
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
    <nav className="lg:hidden">
      <Sheet open={toggle} onOpenChange={setToggle}>
        <SheetTrigger className="align-middle">
          <Image src="/assets/menu.svg" alt="menu" width={24} height={24} />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-6 "
          style={{ background: "white" }}
        >
          <div className="flex  items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={30}
              className="object-contain rounded-full"
            />
            <p className="font-Manrope text-sm items-center tracking-wide maroon_gradient">
              AOCOSA 2005/11
            </p>
          </div>

          <Separator className="border border-gray-50" />
          <ul className="flex w-full flex-col gap-5">
            {navLinks.map((item) => {
              let href = item.href;
              const isActive =
                (pathname.includes(href) && href.length > 1) ||
                pathname === href;
              const hasSubMenu = item.subMenu && item.subMenu.length > 0;
              const showDropdown = activeDropdown === item.label;
              return (
                <li
                  key={item.label}
                  onClick={() => toggleDropdown(item.label)}
                  className=""
                >
                  {hasSubMenu ? (
                    <div
                      className={`${
                        isActive ? "text-maroon" : "text-black"
                      } font-semibold leading-normal text-lg hover:text-maroon`}
                    >
                      <div className="justify-between flex">
                        {item.label}
                        <Image
                          src={chevron}
                          alt="chevron icon"
                          className="inline-block ml-1"
                        />
                      </div>
                      {showDropdown && (
                        <div className=" absolute py-2 w-full px-5 rounded-md bg-white shadow-md">
                          <ul>
                            {item.subMenu.map((subMenuItem) => (
                              <li key={subMenuItem.label}>
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
                                      : "text-slate-500"
                                  } text-base font-medium`}
                                  onClick={closeDropdown}
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
                      href={item.href}
                      className={`${
                        isActive ? "text-maroon" : "text-black"
                      } font-semibold leading-normal text-lg hover:text-maroon`}
                      onClick={closeDropdown}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
            <div className="mt-5">
              <Link
                href="/registration"
                className="font-semibold text-xl leading-normal text-black hover:text-maroon"
              >
                Register
              </Link>
            </div>

            <SignedOut>
              <div className="outline_btn mt-8">
                <SignInButton />
              </div>
            </SignedOut>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
