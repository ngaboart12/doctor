import React from "react";
import Image from "next/image";

const Joinustoday = () => {
  return (
    <div className="w-full max-w-7xl flex items-center justify-center px-[20px] md:px-[100px] pb-10">
      <div className="relative w-full   gap-3 items-center">
        <div className="w-full h-full absolute -z-10">
          <Image
            src={`/image/joinustoday.png`}
            width={800}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 py-20 items-center leading-8">
          <h1 className="text-header text-[32px] font-[700] text-center max-w-[642px]">
            Join us today and let us help you to grow your business.
          </h1>
          <div className="flex flex-row gap-3">
            <button className=" hover:bg-header/20 transition-all py-2 px-6 border-2 border-header rounded-[16px] text-header flex flex-row items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                  stroke="#F2C300"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297"
                  stroke="#F2C300"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span> contact us</span>
            </button>
            <button className=" hover:scale-110 transition-all py-2 px-6  bg-header rounded-[16px] text-black flex flex-row items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span> 07835**345</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinustoday;
