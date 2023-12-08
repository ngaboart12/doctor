import React from "react";

const Contactus = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-[24px] text-primary font-[300] text-center md:text-start">
        Write A message
      </h1>
      <form action="" className="flex flex-col gap-6 w-full pr-[20px] md:pr-40">
        <div className="flex flex-col gap-1">
          <span className="text-black text-[14px]">Your name</span>
          <input
            type="text"
            placeholder="Your name"
            className="p-3 border rounded-lg border-gray-300 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-black text-[14px]">Email</span>
          <input
            type="text"
            placeholder="Your Email"
            className="p-3 border rounded-lg border-gray-300 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-black text-[14px]">Message</span>
          <textarea
            type="text"
            placeholder="Meaasge here"
            className="p-3 border rounded-lg border-gray-300 outline-none"
          />
        </div>
        <button type="submit" className="p-3 bg-header text-white rounded-lg">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contactus;
