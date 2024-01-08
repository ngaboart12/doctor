"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Modal = ({ isOpen, onClose, children, whichTrain }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      // Attach the event listener when the modal is open
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      // Detach the event listener when the component is unmounted or modal is closed
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;
  return (
    <div className=" absolute bottom-0 left-0 w-full h-full overflow-hidden transition-all ease-out duration-300 bg-black/50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="w-1/2  bg-white rounded-[8px] flex flex-row gap-2 p-4"
      >
        <div className="flex flex-col gap-4 py-2 w-full">
          <div className="flex flex-col">
            <h1 className="text-[20px] font-[800]">{whichTrain.name}</h1>
            <span className="text-[14px] font-[300] text-gray-400">
              Fill Your Infomation
            </span>
          </div>
          <form
            onSubmit={handelSubmit}
            className="flex flex-col items-center w-full  gap-4"
          >
            <div className="grid grid-cols-2 gap-4 w-full ">
              <div className="flex flex-col gap-2 ">
                <h1 className="font-[300]">Full name</h1>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className=" p-2  border border-gray-400 rounded-[4px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <h1 className="font-[300]">Email</h1>
                <input
                  type="email"
                  placeholder="Enter Email  "
                  className=" p-2  border border-gray-400 rounded-[4px] outline-none"
                />
              </div>
              <div className="flex flex-row gap-2 items-end">
                <div className="flex flex-row items-center gap-2 bg-gray-200 rounded-[4px] px-2 h-12 w-[100px] ">
                  <h1 className="font-[300]">Male</h1>
                  <input
                    type="radio"
                    name="gender"
                    placeholder="Enter Full Name"
                    className=" p-2  border border-gray-400 rounded-[4px] outline-none"
                  />
                </div>
                <div className="flex flex-row items-center gap-2  bg-gray-200 rounded-[4px] px-2 h-12 w-[100px] ">
                  <h1 className="font-[300]">Female</h1>
                  <input
                    type="Radio"
                    name="gender"
                    placeholder="Enter Full Name"
                    className=" p-2  border border-gray-400 rounded-[4px] outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <h1 className="font-[300]">Date Of birth</h1>
                <input
                  type="date"
                  placeholder="Enter Full Name"
                  className=" p-2  border border-gray-400 rounded-[4px] outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="p-2 bg-primary text-white px-10 font-[200] "
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
