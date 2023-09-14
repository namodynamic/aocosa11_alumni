"use client";

import { logo, hamburger, close } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { instagram } from "@/public/assets";
import Link from "next/link";


const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="padding-x flex gap-5  relative w-full bg-green-700 justify-end">
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
        <div className="text-white px-2 py-1 rounded-md hover:bg-slate-500 bg-maroon justify-end">
         <a href="#">Pay Dues Here</a>
        </div>
      </header>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center">
          <a href="/" className="flex gap-2 flex-center">
            <Image
              src={logo}
              alt="Aocosa logo"
              width={60}
              height={60}
              className="object-contain rounded-full"
            />
            <div>
              <p className="font-Manrope font-extrabold text-lg tracking-wide maroon_gradient">AOCOSA 05/11 Alumni</p>
              <p className="font-bold font-inter text-sm text-slate-500 tracking-tight">Network And Growth</p>
          </div>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-5 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-bold leading-normal text-lg text-black hover:text-maroon"
                >
                  {item.label}
                </a>
              </li>
            ))}
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
              } p-6 absolute bg-slate-800 top-20 right-5 my-2 min-w-[140px] rounded-2xl z-10`}
            >
              <ul className="">
                {navLinks.map((item) => (
                  <li key={item.label} onClick={() => setToggle(!toggle)}>
                    <a
                      href={item.href}
                      className="font-Manrope px-4 leading-normal text-lg text-white hover:text-maroon"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
