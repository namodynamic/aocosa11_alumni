"use client";

import { logo, hamburger, close} from "../public/assets";
import Image from "next/image";
import { useState } from "react";
import { instagram, chevron } from "../public/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton,SignedIn,SignInButton, useAuth, SignedOut } from "@clerk/nextjs";
import { navLinks } from "@/constants";

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
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <>
      <section className="padding-x flex gap-2  relative w-full bg-green-700 justify-end">
        <div className="bg-white rounded-md px-1 py-1 hover:bg-yellow-400">
          <Link
            href="https://www.instagram.com/aocosa2011"
            target="_blank"
            rel="noopener noreferrer"
            className="object-contain cursor-pointer"
          >
            <Image src={instagram} alt="instagram" />
          </Link>
        </div>
        <div className="text-white text-lg font-medium px-2 rounded-md hover:bg-white border border-yellow-400 hover:text-black bg-maroon justify-end">
          <Link href="/dues">Pay Dues Here</Link>
        </div>
      </section>
      <section className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src={logo}
              alt="Aocosa logo"
              width={60}
              height="auto"
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

          <ul className="flex-1 flex justify-center items-center gap-5 max-lg:hidden">
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
          <div className="flex gap-3 max-lg:hidden">
            <Link href="/registration" className="outline_btn">
              Register
            </Link>
            <SignedIn>

            <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <div className="black_btn">

              <SignInButton/>
              </div>
            </SignedOut>
          </div>

          <div className="hidden max-lg:block">
            <Image
              src={toggle ? close : hamburger}
              alt="Hamburger"
              width={28}
              height={28}
              className="object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 absolute bg-slate-800 top-20 min-h-screen w-auto right-5 my-2 min-w-[140px] rounded-2xl z-10`}
            >
              <UserButton afterSignOutUrl="/" />
              <ul>
                {navLinks.map((item) => (
                  <li key={item.label} onClick={() => setToggle(!toggle)}>
                    <Link
                      href={item.href}
                      className="font-Manrope px-4 leading-normal text-lg text-white hover:text-maroon"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <Link
                  href="login"
                  className="font-Manrope px-4 leading-normal text-lg text-white hover:text-maroon"
                >
                  Login
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
