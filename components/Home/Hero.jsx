"use client";
import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full items-center relative flex flex-col justify-between    h-[100vh]">
      <div className="absolute -z-10 w-full h-full">
        <Image
          src={`/image/hero.png`}
          width={2000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <Navbar />
      <div
        data-aos="zoom-in"
        className="flex flex-col gap-2 w-full items-center"
      >
        <h1 className="text-white text-[20px] font-bold text-center">
          Transforming Visions into Results
        </h1>
        <h1 className="text-[30px] md:text-[48px] max-w-[800px] text-center leading-8 md:leading-[50px] font-bold text-white">
          Your Trusted Partner in Strategic Consulting Excellence
        </h1>
        <span className="text-white font-bold">
          WE ARE MCN CONSULTING NETWORK
        </span>
        <div className="flex flex-rwo gap-3">
          <button className="px-8 py-[10px] hover:scale-110 transition-all rounded-[14px] bg-[#F2C300] text-white mt-3">
            TALK TO US
          </button>
          <button className="px-8 py-[10px] hover:bg-[#F2C300] hover:text-white transition-all rounded-[14px] border-2 border-[#F2C300] text-[#F2C300] mt-3">
            ABOUT US
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
