"use client";
import React from "react";
import { crew } from "@/app/data";
import { cn } from "@/app/utils/cn";
import Image from "next/image";

const CrewComponent = () => {
  const [currentNav, setCurrentNav] = React.useState(0);
  return (
    <div>
      <div className="grid grid-cols-1 ">
        {crew.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              `grid grid-cols-1 lg:grid-cols-[24rem_1fr] gap-0 items-center lg:gap-8 ${
                currentNav !== idx ? "hidden" : ""
              }`
            )}
          >
            <div className="flex flex-col items-center lg:items-start text-slate-400 text-center uppercase lg:text-left">
              <p className="pb-4">{item.role}</p>
              <h2 className=" text-2xl text-slate-200 pb-8">{item.name}</h2>
              <p className="tracking-wide max-w-md pb-8">{item.bio}</p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={item.images.webp}
                width={0}
                height={0}
                priority
                alt="image crew member"
                sizes="100vw"
                className="w-32 md:w-72 lg:w-96"
              />
            </div>
          </div>
        ))}
        <div className="absolute bottom-24">
          <div className="flex gap-6">
            {crew.map((item, idx) => (
              <button
                key={idx}
                onClick={(_) => setCurrentNav(idx)}
                className={cn(
                  `w-4 h-4 bg-slate-600 rounded-full ${
                    currentNav === idx ? "bg-slate-200" : ""
                  }`
                )}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewComponent;
