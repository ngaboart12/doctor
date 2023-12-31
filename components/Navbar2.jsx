import React from "react";

const Navbar2 = () => {
  return (
    <div
      data-aos="zoom-in"
      className="max-w-7xl w-full py-10 px-[20px] sm:px-10 md:px-20 flex flex-row justify-between"
    >
      <div className="px-10 py-3  bg-[#2B6490] bg">
        <h1 className="text-white">Logo</h1>
      </div>
      <div className=" hidden md:flex flex-row gap-6 text-black text-[16px] font-[300] items-center">
        <a href="/">Home</a>
        <a href="/service">Services</a>
        <a href="/training">Our Training</a>
        <a href="/aboutus">About us</a>
        <a href="/blogs">Events</a>
        <a href="/gallery">Gallery</a>
        <a
          href="#contactus"
          className="py-3 px-6 hover:scale-110 transition-all rounded-md bg-[#F2C300] text-white"
        >
          Reach to us
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
