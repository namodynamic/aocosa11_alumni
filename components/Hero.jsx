import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex padding-x max-sm:mt-12 flex-center flex-col">
      <h1 className="text-center head_text orange_gradient">
        HOW WILL WE FORGE
        <br className="max-md:hidden" /> {""}
        OUR FUTURE?
      </h1>
      <p className="lg:max-w-lg mt-5 font-inter text-slate-950 text-center">
        The AOCOSA 05/11 Set Alumni is a non-profit, a non-religious, a non-
        governmental and a non-political association of old students of Adeola
        Odutola College (AOC) 2011 set who have recognized the need to network
        and foster meaningful connections for personal and professional
        development, while also striving to create a positive impact on society.
        <br />
        Together we can make a profound difference!
      </p>
    </section>
  );
};

export default Hero;
