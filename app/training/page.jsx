import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import React from "react";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { MdHealthAndSafety } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { FaSignLanguage } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

const Training = () => {
  const trainning = [
    {
      icon: <TiSocialDribbbleCircular />,
      Head: "SOCIAL SCIENCES",
      trains: [
        "Human Resources Management",
        "Data protection",
        "Advanced communication skills",
        "Advanced Excel",
        "Financial Modeling",
        "Monitoring Evaluation and Learning",
        "Auditing",
        "Project Management",
        "Finance to NonFinancial Managers",
      ],
    },
    {
      icon: <MdHealthAndSafety color="orange" />,
      Head: "HEALTH",
      trains: [
        "Amahugurwa ku buzima bw’imyororokere - Kinyarwanda",
        "Mental Health Training – English presentation",
        "Amahugurwa k’ubuzima bwo mu mutwe - Kinyarwanda",
        "Uburyo bwo kwirinda ubwandu bushya bw’agakoko gateraSIDA",
      ],
    },
    {
      icon: <GrTechnology color="#1DCDFE" />,
      Head: "TECHNOLOGY",
      trains: [
        "IT Training",
        "SOFTWARES: STATA, JAVA, SPSS",
        "Graphics software",
        "Multimedia software",
        "Email clients",
      ],
    },
    {
      icon: <FaSignLanguage color="#00BA41" />,
      Head: "LINGUISTICS",
      trains: [
        "English – Advanced communication skills",
        "French- L’usage professionnel du Français",
        "Kiswahili-Matumizi ya Kiswahili sanifu katika shughuli mbalimbali",
      ],
    },
    {
      icon: <AiFillSafetyCertificate color="blue" />,
      Head: "CERTIFITED COURSES",
      trains: [
        "CHRM-Certified Human Resource Manager(GUST&amp;HRMI)",
        "PCMP - Project &amp; Contract Management Professional(GUST)",
        "CRCM - Certified Risk &amp; Crisis Manager (GUST)",
        "CGHFM-Certified Green Healthcare Facility Manager-(GUST)",
      ],
    },
  ];
  return (
    <div className="w-full bg-gray-200 flex min-h-screen flex-col items-center gap-4">
      <Navbar2 />
      <div className="w-full max-w-7xl flex flex-col items-center gap-6 px-[4px] md:px-20">
        <h1 className="text-center text-primary text-[32px] font-bold max-w-[500px] leading-8">
          CORPPORATE TRAINING PROVIDED
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {trainning.map((item, index) => {
            return (
              <div
                key={index}
                className="border  flex flex-col gap-4 bg-gray-100 rounded-md p-2 "
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[40px] text-blue-600">{item.icon}</span>
                  <h1 className="w-full text-center text-[19px] font-[200] text-primary">
                    {item.Head}
                  </h1>
                </div>
                <div className="flex flex-col gap-2 w-full p-2">
                  {item.trains.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-between"
                      >
                        <div className="flex flex-row gap-1 items-center">
                          <span className="text-primary">
                            <GoDotFill />
                          </span>
                          <span className="font-[200] leading-[18px]">
                            {" "}
                            {item}
                          </span>
                        </div>
                        <div></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Training;
