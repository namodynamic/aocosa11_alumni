"use client";

import { logo, hamburger, close } from "../public/assets";
import Image from "next/image";
import { useState } from "react";
import { instagram } from "../public/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="padding-x flex gap-2  relative w-full bg-green-700 justify-end">
        <div className="bg-white rounded-md px-1 py-1 hover:bg-yellow-400">
          <a
            href="https://www.instagram.com/aocosa2011"
            target="_blank"
            rel="noopener noreferrer"
            className="object-contain cursor-pointer"
          >
            <Image src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="text-white text-lg font-medium px-2 rounded-md hover:bg-white border border-yellow-400 hover:text-black bg-maroon justify-end">
          <a href="/dues">Pay Dues Here</a>
        </div>
      </header>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src={logo}
              alt="Aocosa logo"
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
          <ul className="flex-1 flex justify-center items-center gap-5 max-lg:hidden">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    className={`${
                      isActive ? "text-maroon" : "text-black"
                    } font-bold leading-normal text-lg hover:text-maroon`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <Link href="/registration" className="black_btn">
              Register
            </Link>
            <UserButton afterSignOutUrl="/" />
          </ul>
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
                  href="registration"
                  className="font-Manrope px-4 leading-normal text-lg text-white hover:text-maroon"
                >
                  Register
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
