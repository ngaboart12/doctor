import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { GiWorld, GiTeacher } from "react-icons/gi";
import { FaPeopleGroup, FaFileContract } from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import { VscLaw } from "react-icons/vsc";
import { CiPen } from "react-icons/ci";
import { AiOutlineAudit } from "react-icons/ai";
import { MdOutlineTextIncrease, MdOutlinePolicy } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { PiExam } from "react-icons/pi";

const OtherServices = () => {
  const otherServices = [
    {
      icon: <TfiWrite />,
      name: "Preparation of Job descriptions",
    },
    {
      icon: <GiWorld />,
      name: "Jobs Posting",
    },
    {
      icon: <FaPeopleGroup />,
      name: "Shortlisting of the applicants",
    },
    {
      icon: <PiExam />,
      name: "Carry out the written &amp; Oral test",
    },
    {
      icon: <FaFileContract />,
      name: "Contract designing",
    },
    {
      icon: <FcProcess />,
      name: "On-boarding process",
    },
    {
      icon: <GiTeacher />,
      name: "Corporate trainings",
    },
    {
      icon: <VscLaw />,
      name: "Labor Laws advisory",
    },
    {
      icon: <AiOutlineAudit />,
      name: "Provision of Human Resources Audits",
    },
    {
      icon: <MdOutlineTextIncrease />,
      name: "Initiating or improving staffing structure (Organogram)",
    },
    {
      icon: <MdOutlinePolicy />,
      name: "Designing of HR Policies",
    },
    {
      icon: <GrResources />,
      name: "Initiating Human Resources &amp; Administration Policies",
    },
  ];
  return (
    <div className="w-full max-w-7xl px-[4px] md:px-20 flex flex-col gap-10 mt-10">
      <h1 className="text-[24px] text-[#2B6490] font-bold text-center">
        Other Services
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-x-6 gap-y-10">
        {otherServices.map((item, index) => {
          return (
            <div
              key={index}
              className={`bg-gray-100 p-2 gap-2 rounded-md flex flex-row items-center  min-h-[80px]`}
            >
              <span className="text-[30px] text-primary">{item.icon}</span>
              <h1 className="text-start text-[14px]">{item.name}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 mt-10 w-full items-center">
        <h1 className="text-[24px] font-bold text-center text-primary">
          CORPORATE TRAININGS SERVICES
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 border p-4 border-black/30 rounded-sm w-[260px] items-center justify-center">
            <h1 className="text-[18px] text-primary">Individual trainings</h1>
          </div>
          <div className="flex flex-col gap-2 border p-4 border-black/30 rounded-sm w-[260px]">
            <h1 className="text-[18px] text-primary text-center ">
              Mass trainings –Institutions, Cooperatives or companies
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
