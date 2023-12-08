import React from "react";
import Image from "next/image";

const OutTeam = () => {
  const team = [
    {
      name: "Byiringiro Aime",
      title: "CEO",
      imageUrl: "/image/member1.png",
    },
    {
      name: "Jonty Brewer",
      title: "Software developer",
      imageUrl: "/image/member2.png",
    },
    {
      name: "Jonty Brewer",
      title: "Marketing",
      imageUrl: "/image/member3.png",
    },
    {
      name: "Jonty Brewer",
      title: "IT technician",
      imageUrl: "/image/member4.png",
    },
  ];
  return (
    <div className="w-full max-w-7xl items-center flex flex-col gap-10  justify-center px-[20px] md:px-[100px] pb-20">
      <div className="w-full flex flex-col md:flex-row  justify-between">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <div className="h-1 bg-green-800 w-[50px]"></div>
          <h1 className="text-primary text-[32px] font-[600]">Our Team</h1>
          <h2 className="text-black text-[20px] font-[600]">
            Let’s Meet The Team
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span className="text-[#000929] text-[16px]">
            Pork bbq and banana steak thin. Sautéed tomatoes and parmesan pesto
            pepperoni. Spinach ham tossed parmesan lot. Pesto marinara deep pie
            onions buffalo. Mushrooms anchovies red buffalo pesto ipsum onions{" "}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {team.map((item, index) => {
          return (
            <div key={index} className="w-full flex flex-col gap-2">
              <div className="h-[40vh]">
                <Image
                  src={item.imageUrl}
                  width={200}
                  height={0}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-[18px] text-black">{item.name}</h1>
              <div className="flex flex-row w-full">
                <span className="text-[#5A5A5A]">{item.title}</span>
                <div className="flex flex-row gap-2 ml-auto">
                  <a href="#">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.139771 12.4438C0.139771 5.70748 5.60067 0.246582 12.337 0.246582C19.0734 0.246582 24.5343 5.70748 24.5343 12.4438C24.5343 19.1802 19.0734 24.6411 12.337 24.6411C5.60067 24.6411 0.139771 19.1802 0.139771 12.4438ZM16.9872 9.01336C17.5209 8.93713 17.9783 8.8609 18.4357 8.6322C18.1307 9.16583 17.6733 9.62323 17.1397 9.92816C17.2922 13.5111 14.7003 17.399 10.05 17.399C8.67785 17.399 7.38189 16.9416 6.2384 16.2555C7.53436 16.408 8.90655 16.0268 9.82135 15.3407C8.67785 15.3407 7.76306 14.5784 7.45813 13.5873C7.83929 13.6636 8.22046 13.5873 8.60162 13.5111C7.45813 13.2062 6.61957 12.1389 6.61957 10.9954C7.00073 11.1479 7.38189 11.3003 7.76306 11.3003C6.6958 10.538 6.31463 9.0896 7.00073 7.9461C8.29669 9.47076 10.1263 10.4618 12.1846 10.538C11.8034 9.01336 13.0231 7.48871 14.624 7.48871C15.3101 7.48871 15.9962 7.79364 16.4536 8.25103C17.0635 8.09857 17.5971 7.9461 18.0545 7.64117C17.902 8.25103 17.5209 8.70843 16.9872 9.01336Z"
                        fill="#3C3C3C"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.797363 12.4438C0.797363 5.70748 6.25826 0.246582 12.9946 0.246582C19.731 0.246582 25.1919 5.70748 25.1919 12.4438C25.1919 19.1802 19.731 24.6411 12.9946 24.6411C6.25826 24.6411 0.797363 19.1802 0.797363 12.4438ZM7.04846 10.3856V18.5425H9.64038V10.3856H7.04846ZM6.89599 7.79364C6.89599 8.6322 7.50586 9.24206 8.34442 9.24206C9.18298 9.24206 9.79285 8.6322 9.79285 7.79364C9.79285 6.95508 9.18298 6.34521 8.34442 6.34521C7.58209 6.34521 6.89599 6.95508 6.89599 7.79364ZM16.5013 18.5425H18.9408V13.5111C18.9408 10.9954 17.4161 10.1569 15.9677 10.1569C14.6717 10.1569 13.757 10.9954 13.5283 11.5291V10.3856H11.0888V18.5425H13.6807V14.1972C13.6807 13.0537 14.443 12.4438 15.2054 12.4438C15.9677 12.4438 16.5013 12.825 16.5013 14.121V18.5425Z"
                        fill="#3C3C3C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutTeam;
