"use client";

import { logo, hamburger, close } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import { useState } from "react";


const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="padding-x relative w-full bg-green-700 justify-end">
        <div className="text-white justify-end">
         <a href="#">Pay Due Here</a>
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
            <p className="font-Manrope font-bold text-lg text-black tracking-wide maroon_gradient">AOCOSA 05/11 Alumni</p>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-normal leading-normal text-lg text-black"
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
              className="object-contain cursor-pointer text-white"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 absolute top-15 -right-5 z-10`}
            >
              <ul className="-mt-5">
                {navLinks.map((item) => (
                  <li key={item.label} onClick={() => setToggle(!toggle)}>
                    <a
                      href={item.href}
                      className="font-Manrope leading-normal text-lg text-slate-gray"
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
