"use client";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Corporate from "@/components/service/Corporate";
import OtherServices from "@/components/service/OtherServices";
import { FaHireAHelper } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { FaFileSignature } from "react-icons/fa";
import { SlOrganization } from "react-icons/sl";
import { GiTeacher } from "react-icons/gi";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const whatwedo = [
  {
    icon: <FaHireAHelper />,
    head: "HIRING PROCESS",
    content:
      "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed.",
  },
  {
    icon: <SiProgress />,
    head: "ONBOARDING PROCESS",
    content:
      "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed.",
  },
  {
    icon: <FaFileSignature />,
    head: "CLOSEOUT SERVICES",
    content:
      "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed.",
  },
  {
    icon: <SlOrganization />,
    head: "HR MANAGEMENT ADVISORY",
    content:
      "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed.",
  },
  {
    icon: <GiTeacher />,
    head: "CORPPRATE TRAINNINGS ATIVITIES",
    content:
      "Maecenas maecenas consequat sit scelerisque aliquet id lacinia leo laoreet. Semper a risus sed.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center gap-4">
      <Navbar2 />
      <div className="w-full max-w-7xl items-center flex flex-col gap-20">
        <div data-aos="zoom-in" className="flex flex-col gap-2">
          <div className="w-20 h-2 bg-[#2B6490] mr-auto"></div>
          <h1 className="max-w-[600px] text-center md:text-[48px] text-[#2B6490] text-[22px] leading-[30px] md:leading-[50px] font-bold">
            What Solutions We Provide To Our Valued Customers
          </h1>
          <div className="w-20 h-2  bg-[#F2C300] mx-auto"></div>
        </div>
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-[4px] md:px-20 "
        >
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <h1 className="text-[32px] text-[#F2C300] font-[400]">
              What we do
            </h1>
            <span className="text-black font-[300] text-[16px] text-center md:text-start">
              Elevating Businesses Through Insightful Consulting
            </span>
          </div>
          {whatwedo.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 items-center">
                <span className="text-[30px] text-[#F2C300]">{item.icon}</span>
                <h1 className="text-center text-[18px] text-[#2B6490]">
                  {item.head}
                </h1>
                <span className="font-[300] text-center ">{item.content}</span>
              </div>
            );
          })}
        </div>
      </div>
      <OtherServices />

      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Service;
