"use client";
import Hero from "@/components/blogs/Hero";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import jsonData from "../../data/allData.json";

const Blogs = () => {
  const [active, setActive] = useState(0);
  const blogstitle = [
    {
      name: "All",
    },
    {
      name: "Strategy and Planning",
    },
    {
      name: "Change Management",
    },
    {
      name: " Innovation",
    },
    {
      name: "Project Management",
    },
    {
      name: "Graduation",
    },
    {
      name: "Graduation 2",
    },
  ];
  const blogs = jsonData.blogs;

  return (
    <div className="flex min-h-screen flex-col items-center gap-10 ">
      <Hero />

      <div className="flex w-full flex-col gap-10 px-[20px] md:px-[100px]">
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          {blogstitle.map((item, index) => {
            return (
              <div
                key={index}
                className={` ${
                  active === index ? "bg-[#F49D47]" : " bg-transparent"
                } py-2 px-4 rounded-lg cursor-pointer`}
                onClick={() => setActive(index)}
              >
                <h1
                  className={` 
                   text-[#4A4754]
                   font-[300]`}
                >
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {blogs.map((item, index) => {
            return (
              <a
                href={`/eventdetails?id=${item.id}`}
                key={index}
                className="flex flex-col gap-2"
              >
                <div className="h-[40vh]">
                  <Image
                    src={item.imageUrl}
                    width={600}
                    height={0}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[16px] text-[#4A4754] font-[300]">
                  {item.title}
                </span>
                <h1 className="text-[18px] text-black font-[600] leading-5">
                  {item.name}
                </h1>
                <span className="text-[13px] text-black text-[300] line-clamp-2">
                  {item.disc}
                </span>
                <div className="flex flex-row gap-2">
                  <div>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5289 1.16666C10.8049 1.16666 11.0289 1.39066 11.0289 1.66666L11.0292 2.23186C12.0026 2.2986 12.8111 2.63202 13.3833 3.20539C14.0079 3.83272 14.3366 4.73472 14.3333 5.81672V11.8987C14.3333 14.1201 12.9226 15.5001 10.6526 15.5001H5.01392C2.74392 15.5001 1.33325 14.1007 1.33325 11.8481V5.81539C1.33325 3.72018 2.59129 2.37528 4.64304 2.23209L4.64345 1.66666C4.64345 1.39066 4.86745 1.16666 5.14345 1.16666C5.41945 1.16666 5.64345 1.39066 5.64345 1.66666L5.64325 2.21932H10.0286L10.0289 1.66666C10.0289 1.39066 10.2529 1.16666 10.5289 1.16666ZM13.3333 7.10266H2.33325V11.8481C2.33325 13.5587 3.28525 14.5001 5.01392 14.5001H10.6526C12.3813 14.5001 13.3333 13.5761 13.3333 11.8987L13.3333 7.10266ZM10.8007 11.2975C11.0767 11.2975 11.3007 11.5215 11.3007 11.7975C11.3007 12.0735 11.0767 12.2975 10.8007 12.2975C10.5247 12.2975 10.2981 12.0735 10.2981 11.7975C10.2981 11.5215 10.5187 11.2975 10.7947 11.2975H10.8007ZM7.84239 11.2975C8.11839 11.2975 8.34239 11.5215 8.34239 11.7975C8.34239 12.0735 8.11839 12.2975 7.84239 12.2975C7.56639 12.2975 7.33972 12.0735 7.33972 11.7975C7.33972 11.5215 7.56039 11.2975 7.83639 11.2975H7.84239ZM4.87785 11.2975C5.15385 11.2975 5.37785 11.5215 5.37785 11.7975C5.37785 12.0735 5.15385 12.2975 4.87785 12.2975C4.60185 12.2975 4.37452 12.0735 4.37452 11.7975C4.37452 11.5215 4.59585 11.2975 4.87185 11.2975H4.87785ZM10.8007 8.70639C11.0767 8.70639 11.3007 8.93039 11.3007 9.20639C11.3007 9.48239 11.0767 9.70639 10.8007 9.70639C10.5247 9.70639 10.2981 9.48239 10.2981 9.20639C10.2981 8.93039 10.5187 8.70639 10.7947 8.70639H10.8007ZM7.84239 8.70639C8.11839 8.70639 8.34239 8.93039 8.34239 9.20639C8.34239 9.48239 8.11839 9.70639 7.84239 9.70639C7.56639 9.70639 7.33972 9.48239 7.33972 9.20639C7.33972 8.93039 7.56039 8.70639 7.83639 8.70639H7.84239ZM4.87785 8.70639C5.15385 8.70639 5.37785 8.93039 5.37785 9.20639C5.37785 9.48239 5.15385 9.70639 4.87785 9.70639C4.60185 9.70639 4.37452 9.48239 4.37452 9.20639C4.37452 8.93039 4.59585 8.70639 4.87185 8.70639H4.87785ZM10.0286 3.21932H5.64325L5.64345 3.86066C5.64345 4.13666 5.41945 4.36066 5.14345 4.36066C4.86745 4.36066 4.64345 4.13666 4.64345 3.86066L4.6431 3.23446C3.14961 3.35992 2.33325 4.26523 2.33325 5.81539V6.10266H13.3333L13.3333 5.81539C13.3359 4.99206 13.1146 4.35206 12.6753 3.91206C12.2896 3.52526 11.7258 3.29426 11.0295 3.23478L11.0289 3.86066C11.0289 4.13666 10.8049 4.36066 10.5289 4.36066C10.2529 4.36066 10.0289 4.13666 10.0289 3.86066L10.0286 3.21932Z"
                        fill="#615E69"
                      />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#615E69]">
                    {item.date}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
