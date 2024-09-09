"use client";
import React from "react";
import { cn } from "@/app/utils/cn";
import { destinations } from "@/app/datat";
import Image from "next/image";

const DestComponent = () => {
  const [currentNav, setCurrentNav] = React.useState(0);

  return (
    <div className="lg:relative">
      {/* destination navigation */}
      <div className="flex gap-4 lg:absolute right-[180px] text-slate-200 items-center justify-center lg:justify-start">
        {destinations.map((item, idx) => (
          <button
            key={idx}
            onClick={(_) => setCurrentNav(idx)}
            className={cn(
              `uppercase pb-2 hover:text-green-500 text-xs ${
                currentNav === idx ? "border-b border-slate-200" : ""
              }`
            )}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div>
        {destinations.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              `grid grid-cols-1 lg:grid-cols-[1fr_24rem] items-center gap-8 text-center lg:text-left pt-4 ${
                currentNav !== idx ? "hidden" : ""
              }`
            )}
          >
            {/* all texts */}
            <div className="lg:order-2">
              <h2 className="text-white text-7xl uppercase pb-4">
                {item.name}
              </h2>
              <p className="text-slate-400 tracking-wide pb-4 max-w-lg md:max-w-none">
                {item.description}
              </p>
              <hr className="border-slate-400 mb-6" />
              <div className="flex gap-8 justify-around lg:justify-between text-slate-400 text-left">
                <div className="flex flex-col">
                  <span className="uppercase text-xs">avg. distance</span>
                  <span className="text-white uppercase pt-1 text-lg">
                    {item.distance}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-xs">est. travel time</span>
                  <span className="text-white uppercase pt-1 text-lg">
                    {item.travel}
                  </span>
                </div>
              </div>
            </div>

            {/* image */}
            <div className="flex justify-center items-center">
              <Image
                src={item.images.webp}
                alt="destination"
                width={0}
                height={0}
                priority
                sizes="100vw"
                className="w-64 h-64 md:w-72 md:h-72 lg:h-96 lg:w-96"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestComponent;
