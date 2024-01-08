"use client";
import Navbar2 from "@/components/Navbar2";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import jsonData from "../../data/allData.json";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/training/Modal";

const TrainingDetails = () => {
  const searchParams = useSearchParams();
  const idString = searchParams.get("id");
  const id = parseInt(idString, 10);

  console.log(id);
  const openedTraining = jsonData.openedTraining;
  const selectedTraining = openedTraining.find((item) => item.id === id);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="w-full bg-[#FAFAFA]flex min-h-screen flex-col  gap-4">
      <Navbar2 />
      <div className="w-full px-[20px] md:px-20 flex flex-col lg:flex-row gap-5 pb-10 items-center">
        <div className="max-w-[450px] lg:max-w-[550px] pr-0 md:pl-20 h-[400px]">
          <Image
            src={selectedTraining.image}
            alt="events"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col  p-2 w-full lg:w-1/2  lg:items-start leading-10 text-center lg:text-start items-center">
          <h1 className="font-[800] text-[32px]">{selectedTraining.name}</h1>
          <div className="flex flex-row gap-4">
            <div className=" px-4 bg-gray-100 rounded-full">
              <span className="text-gray-400 font-[300]">
                {selectedTraining.type}
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-[16px] font-[500] text-black">Buy </span>
              <span className="text-[16px] font-[400] text-primary">
                Js Master
              </span>
            </div>
          </div>
          <div className="py-3 flex flex-col gap-2">
            <button
              onClick={openModal}
              className=" bg-primary text-white font-[300] text-[14px] rounded-full hover:scale-110 transition-all"
            >
              Aplly Now
            </button>

            <div className="flex flex-row items-center gap-2">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66669 1.66699V4.16699"
                    stroke="#9C9A9A"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3333 1.66699V4.16699"
                    stroke="#9C9A9A"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91669 7.5752H17.0834"
                    stroke="#9C9A9A"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5 7.08366V14.167C17.5 16.667 16.25 18.3337 13.3333 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366Z"
                    stroke="#9C9A9A"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.0789 11.417H13.0864"
                    stroke="#9C9A9A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.0789 13.917H13.0864"
                    stroke="#9C9A9A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99628 11.417H10.0038"
                    stroke="#9C9A9A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99628 13.917H10.0038"
                    stroke="#9C9A9A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.91193 11.417H6.91941"
                    stroke="#9C9A9A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.91193 13.917H6.91941"
                    stroke="#9C9A9A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="text-primary text-[14px]">
                {selectedTraining.published} | 10:30 AM
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[16px] font-[600] text-gray-400">
              What You will Learn
            </h1>
            <span className="text-[16px] lg:max-w-[800px] font-[300] leading-6">
              Event as a noun means A contest in a sports competition, such as a
              meet.. Dictionary Thesaurus Sentences Examples ... The definition
              of an event is something that takes place. An example of an event
              is the prom dance for a high school. noun. 5. 1. Advertisement
            </span>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        whichTrain={selectedTraining}
      />

      <Footer />
    </div>
  );
};

export default TrainingDetails;
