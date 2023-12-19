import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-primary pb-4 px-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-6">
        <div className="border-b border-white/20 p-4  grid grid-cols-2 md:grid-cols-3 w-full">
          <div className="flex flex-col gap-2 items-center">
            <div className="h-14 w-14 rounded-full bg-header flex items-center justify-center">
              <FiPhoneCall color="white" size={25} />
            </div>
            <h1 className="text-white">+250793762424</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="h-14 w-14 rounded-full bg-header flex items-center justify-center">
              <IoIosMail color="white" size={25} />
            </div>
            <h1 className="text-white">mwembaconsultingnet@gmail.com</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="h-14 w-14 rounded-full bg-header flex items-center justify-center">
              <FaLocationDot color="white" size={25} />
            </div>
            <h1 className="text-white">Rwanda ,Kigali, Gasabo</h1>
          </div>
        </div>
        <div className="w-full border-b border-white/20 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          <div className="flex flex-col gap-2 text-white  ">
            <h1 className="text-[20px] text-header">Links</h1>
            <div className="grid grid-cols-2 gap-2 text-[16px] font-[200]">
              <a href="/" className="hover:opacity-70">
                Home
              </a>
              <a href="/service" className="hover:opacity-70">
                Services
              </a>
              <a href="/training" className="hover:opacity-70">
                Our Training
              </a>
              <a href="/aboutus" className="hover:opacity-70">
                Aboutus
              </a>
              <a href="/blogs" className="hover:opacity-70">
                Events
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white ">
            <h1 className="text-[20px] text-header">OUR MISSION</h1>
            <div className="flex flex-col gap-2 text-[16px] font-[200]">
              <span>
                To offer our clients with high quality client centered
                consulting services driven by innovation, technology and world
                class expertise to enable sustainable clients’ business growth.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white  ">
            <h1 className="text-[20px] text-header">OUR VISION</h1>
            <div className="flex flex-col gap-2 text-[16px] font-[200]">
              <span>
                To be a well-established and useful Corporate training and Human
                Resource consulting firm across the world.
              </span>
            </div>
          </div>
        </div>

        {/* <span className="  text-white font-[200] text-center">
          Our regional and global outlook provides us with nearly unlimited
          opportunities to serve various clients across the world serving them
          professionally. Founded in Rwanda, MCN Consulting Network is expanding
          its footprint in East African Countries and very soon plans are under
          a way to expand MCN Consulting Network in Zambia, Ivory-Cost, and
          abroad to Mexico and Canada Countries.
        </span> */}

        <div className="w-full flex items-center justify-center ">
          <span className="text-center text-white">
            @ 2023 Our Site. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
