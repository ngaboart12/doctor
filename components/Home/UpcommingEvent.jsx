import React from "react";
import Image from "next/image";

const UpcommingEvent = () => {
  const events = [
    {
      img: "/image/event.png",
      date: "07 june 2023",
      title: "Surgery",
      disc: "Examine traditional Rwandan crafts such as basket weaving and pottery.",
    },
    {
      img: "/image/event2.jpg",
      date: "07 june 2023",
      title: "Talking",
      disc: "Examine traditional Rwandan crafts such as basket weaving and pottery.",
    },
    {
      img: "/image/event3.jpg",
      date: "07 june 2023",
      title: "Meeting",
      disc: "Examine traditional Rwandan crafts such as basket weaving and pottery.",
    },
    {
      img: "/image/event4.jpg",
      date: "07 june 2023",
      title: "Hello",
      disc: "Examine traditional Rwandan crafts such as basket weaving and pottery.",
    },
  ];
  return (
    <div className="w-full max-w-7xl items-center flex flex-col px-[20px] md:px-[100px] gap-6 pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-[32px] text-primary font-[600] text-center">
          Up comming events
        </h1>
        <span className="text-center max-w-[300px]">
          {" "}
          Discover Whats on the Horizon in Our Upcoming Events
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  ">
        {events.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 items-center sm:items-start"
            >
              <div className="h-[150px]">
                <Image
                  src={item.img}
                  width={300}
                  height={0}
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>
              <span className="text-[14px] text-[#9D9D9D] px-4">
                {item.date}
              </span>
              <h1 className="text-[20px] px-2">{item.title}</h1>
              <span className="text-[#3E3E3E] text-[14px] text-center">
                {item.disc}
              </span>

              <button className="p-2 text-white  bg-header rounded-md w-[150px] hover:scale-110 transition-all">
                Know more
              </button>
            </div>
          );
        })}
      </div>
      <a href="/blogs">
        <button className="hover:scale-110 transition-all py-3 px-10 bg-header rounded-md text-white mt-10">
          Discover more
        </button>
      </a>
    </div>
  );
};

export default UpcommingEvent;
