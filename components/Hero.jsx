import Link from "next/link";
import React from "react";
import HeroCarousel from '@/components/HeroCarousel'

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex wrapper max-xl:flex-col gap-16 sm:gap-32">
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            HOW WILL WE FORGE
            <br className="max-md:hidden" /> {""}
            OUR FUTURE?
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed font-manrope lg:text-base/relaxed xl:text-xl/relaxed">
            The AOCOSA 05/11 Set Alumni is a non-profit, a non-religious, a non-
            governmental and a non-political association of old students of
            Adeola Odutola College (AOC) 2011 set who have recognized the need
            to network and foster meaningful connections for personal and
            professional development, while also striving to create a positive
            impact on society.
            <br />
            <br />
            <strong>Together we can make a profound difference!</strong>
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/#about-us"
              className="inline-flex h-10 items-center justify-center rounded-md bg-maroon px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-500"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
          <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;
