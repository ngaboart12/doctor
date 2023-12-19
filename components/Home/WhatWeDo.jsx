import React from "react";
import { FaHireAHelper } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { FaFileSignature } from "react-icons/fa";
import { SlOrganization } from "react-icons/sl";
import { GiTeacher } from "react-icons/gi";

const WhatWeDo = () => {
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
  return (
    <div className="w-full px-[20px] md:px-[100px] lg:px-[180px] py-20 items-center flex justify-center bg-[#2B6490]">
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
        <div className="flex flex-col gap-1 items-center sm:items-start">
          <h1 className="text-[32px] text-[#F2C300] font-[400]">What we do</h1>
          <span className="text-white font-[600] text-[16px] text-center sm:text-start">
            Elevating Businesses Through Insightful Consulting
          </span>
        </div>
        {whatwedo.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-1 items-center sm:items-start"
            >
              <span className="text-[30px] text-[#F2C300]">{item.icon}</span>
              <h1 className="text-[20px] font-[200] text-[#F2C300] text-center sm:text-start">
                {item.head}
              </h1>
              <span className="text-[16px] text-white font-[200] text-center sm:text-start">
                {item.content}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
