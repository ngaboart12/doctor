import React from "react";
import Navbar2 from "../Navbar2";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full items-center max-w-7xl">
      <Navbar2 />
      <div className="w-full flex flex-col gap-20 px-[20px] md:px-[100px] py-10">
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <span className="text-black text-[16px] font-[600] text-center md:text-start">
              Empowering Success:
            </span>
            <h1 className="text-[28px] font-[600] text-primary leading-8 text-center md:text-start">
              Unleashing Expertise and Innovation in Consulting Excellence
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <span className="text-black text-[16px] font-[400] text-center md:text-start">
              Tincidunt eu aliquet a lorem. Volutpat magna a pharetra consequat
              id. Posuere mattis pellentesque volutpat fames{" "}
            </span>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap1">
                <h1 className="text-[32px] text-primary font-[600]">20</h1>
                <span>
                  Satisfied <br /> customers
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap1">
                  <h1 className="text-[32px] text-primary font-[600]">40</h1>
                  <span>Business consultant</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap1">
                  <h1 className="text-[32px] text-primary font-[600]">30</h1>
                  <span>Satisfied customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full mf:w-1/2">
            <Image
              src={`/image/abou1.png`}
              width={700}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full mf:w-1/2">
            <Image
              src={`/image/about2.png`}
              width={700}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
