import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <h1 className="head_text">
        HOW WILL WE FORGE
        <br className="max-md:hidden" /> {""}
        OUR FUTURE?
      </h1>
      <p className="sub_head_text">
        The AOCOSA 05/11 Set Alumni is a non-profit, a non-religious, a non-
        governmental and a non-political association of old students of Adeola
        Odutola College (AOC) 2011 set who have recognized the need to network
        and foster meaningful connections for personal and professional
        development, while also striving to create a positive impact on society.
        <br />
        <br />
        Together we can make a profound difference!
      </p>

      <div className="bg-maroon rounded-md py-2 px-6 md:px-10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg mb-6">
        <Link
          href="/about-us"
          className="font-bold text-white text-base md:text-xl py-2 px-2"
        >
          LEARN MORE
        </Link>
      </div>
    </section>
  );
};

export default Hero;
