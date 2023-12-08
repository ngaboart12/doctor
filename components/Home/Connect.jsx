import React from "react";
import Image from "next/image";
import Contactus from "../Contactus";

const Connect = () => {
  const contact = [
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13.9299C13.7231 13.9299 15.12 12.5331 15.12 10.8099C15.12 9.08681 13.7231 7.68994 12 7.68994C10.2769 7.68994 8.88 9.08681 8.88 10.8099C8.88 12.5331 10.2769 13.9299 12 13.9299Z"
            stroke="#F2C300"
          />
          <path
            d="M3.62001 8.99C5.59001 0.330003 18.42 0.340004 20.38 9C21.53 14.08 18.37 18.38 15.6 21.04C13.59 22.98 10.41 22.98 8.39001 21.04C5.63001 18.38 2.47001 14.07 3.62001 8.99Z"
            stroke="#F2C300"
          />
        </svg>
      ),
      title: "Kanombe, Kicukiro",
      value: "KK 280 st",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z"
            stroke="#F2C300"
            stroke-miterlimit="10"
          />
        </svg>
      ),

      title: "Phone number",
      value: "07857**345",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 11H15.5"
            stroke="#F2C300"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 18.9299H11L15.45 21.89C16.11 22.33 17 21.8599 17 21.0599V18.9299C20 18.9299 22 16.9299 22 13.9299V7.92993C22 4.92993 20 2.92993 17 2.92993H7C4 2.92993 2 4.92993 2 7.92993V13.9299C2 16.9299 4 18.9299 7 18.9299Z"
            stroke="#F2C300"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),

      title: "Phone number",
      value: "07857**345",
    },
  ];
  return (
    <div className="w-full max-w-7xl flex flex-col gap-10 px-[20px] md:px-[100px] items-center">
      <div className="flx flex-col gap-2 justify-center items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="h-1 w-[30px] bg-header"></div>
          <span className="text-[32px] font-[600] text-primary ">
            Let’s connect
          </span>
        </div>
        <span className="text-[#B5B5B5] text-[16px] font-[300] px-3">
          let us know how we can help
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 rounded-[40px] bg-primary  lg:px-20 py-20 px-[30px] md: flex flex-col gap-6 items-center md:items-start">
          <h1 className="text-header text-[24px] font-[700]">
            Contact Information
          </h1>
          <div className="flex flex-row items-center gap-2">
            <Image
              src={`/image/doctor.png`}
              width={100}
              height={0}
              alt="doctor"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-[20px]">Byiringiro Aime</h1>
              <span className="text-white font-[200]">Consultant doctor</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contact.map((item, index) => {
              return (
                <div key={index} className="flex flex-row gap-2 items-center">
                  <div>{item.icon}</div>
                  <div className="flex flex-col ">
                    <span className="text-header text-[16px] font-[300]">
                      {item.title}
                    </span>
                    <span className="text-white text-[14px] font-[200]">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Contactus />
        </div>
      </div>
    </div>
  );
};

export default Connect;
