import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="w-full max-w-7xl  flex justify-center px-[20px] md:px-[100px] py-20">
      <div className="flex flex-col md:flex-row gap-10 w-full ">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center  justify-center ">
          <Image
            src={`/image/about.png`}
            width={550}
            height={200}
            alt="l"
            className="w-[90%] sm:w-[70%] md:w-[70%] "
          />
        </div>
        <div className="w-full md:w-1/2  justify-center  flex flex-col gap-5 items-center md:items-start">
          <span className="text-[16px] text-[#F2C300] text-center md:text-start ">
            About us
          </span>
          <h1 className="text-[#2B6490] font-[500] max-w-[400px] leading-6 text-[24px] text-center md:text-start">
            Global experts headquartered in Kigali, Rwanda
          </h1>
          <p className="text-[16px] leading-6 max-w-[450px] text-center md:text-start">
            Specializing in corporate training and human resource consulting
            services. We serve Rwandan businesses, public and private
            institutions, manufacturing companies, factories, and
            local/international NGOs, both locally and worldwide.
          </p>
          <button className="py-3 px-4 hover:scale-110 transition-all bg-[#F2C300] w-[150px] rounded-md text-white">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
