import React from "react";
import Image from "next/image";

const Value = () => {
  const ourvalues = [
    {
      name: "Customer centricity",
    },
    {
      name: "Integrity",
    },
    {
      name: "Respect",
    },
    {
      name: "Confidentiality",
    },
    {
      name: "Trust",
    },
    {
      name: "Professional competence",
    },
  ];
  return (
    <div
      data-aos="zoom-in-up"
      className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center px-[20px] md:px-[100px] lg:px-[100px] gap-6"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-[50px] h-1 bg-header"></div>
          <span className="text-[24px] text-primary font-[600]">
            OUR VALUES
          </span>
        </div>
        <p className="text-[16ox] text-black">
          Our values drive our commitment to customer satisfaction through
          excellence, integrity, and innovation. We prioritize transparency,
          ethical practices, and collaborative teamwork, ensuring our customers
          consistently receive unparalleled value.
        </p>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-[20px] h-1 bg-header"></div>
          <span className="text-[18px] text-primary font-[600]">
            Our values are summarized as follows:
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 ">
          {ourvalues.map((item, index) => {
            return (
              <div key={index} className="flex flex-row items-center gap-1">
                <div>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
                  </svg>
                </div>
                <span className="text-[14px]">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-row gap-6">
        <div className="w-1/2 h-[386px]">
          <Image
            src={`/image/aboutus1.png`}
            width={200}
            height={0}
            className="w-full h-[90%] "
          />
        </div>
        <div className="w-1/2 h-[386px]">
          <Image
            src={`/image/aboutus2.png`}
            width={200}
            height={0}
            className="w-full h-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Value;
