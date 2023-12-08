import React from "react";
import Navbar2 from "../Navbar2";

const Hero = () => {
  return (
    <div className="w-full items-center">
      <Navbar2 />
      <div className="flex flex-col gap-2  items-center">
        <h1 className="text-[48px] font-bold text-primary">Latest blogs</h1>
        <p className="text-[24px] leading-6 text-black  text-center">
          Enim cursus porta enim mattis at fames mollis. <br /> pellentesque
          vulputate sit venenatis tellus adipiscing sed tortor.
        </p>
      </div>
    </div>
  );
};

export default Hero;
