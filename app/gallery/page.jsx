"use client";
import React from "react";
import Image from "next/image";
import "../../components/gallery.css";
import Masonry from "react-masonry-css";
import Navbar2 from "@/components/Navbar2";
const Gallery = () => {
  const dataImage = [
    {
      imgUrl: "/image/member4.png",
    },
    {
      imgUrl: "/image/blog1.png",
    },
    {
      imgUrl: "/image/blog2.png",
    },
    {
      imgUrl: "/image/blog3.png",
    },
    {
      imgUrl: "/image/member1.png",
    },
    {
      imgUrl: "/image/blog4.png",
    },
    {
      imgUrl: "/image/blog4.png",
    },
    {
      imgUrl: "/image/blog4.png",
    },
    {
      imgUrl: "/image/member2.png",
    },
  ];

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <div className="flex flex-col gap-4">
      <Navbar2 />
      <div className="w-full flex items-center justify-center pb-10">
        <h1 className="text-[24px] font-[800] p-2 bg-primary text-white px-8 rounded-[2px]">
          GALLERY
        </h1>
      </div>

      <div className=" px-[20px] md:px-40 items-center justify-center flex">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {dataImage.map((item, index) => {
            return (
              <div className="whole" key={index}>
                <img src={item.imgUrl} alt="" />
              </div>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;
