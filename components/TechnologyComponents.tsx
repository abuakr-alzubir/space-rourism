"use client";
import React from "react";
import { technology } from "@/app/data";
import { cn } from "@/app/utils/cn";
import Image from "next/image";
import {useEffect,useState} from 'react'
import next from "next";

const TechnologyComponents = () => {
  const [currentNav, setCurrentNav] = React.useState(0);
  const [screenClientWidth, setScreenClientWidth] = useState(0)

  useEffect(()=>{
    const element = document.body.clientWidth;
    setScreenClientWidth(element);
  },[])
  return (
    <div>
      <div className="grid grdi-cols-1 lg:grid-cols-[5rem_1fr] gap-4 md:gap-0 lg:gap-8">
        <div className="flex lg:flex-col gap-4 md:gap-8 justify-center lg:justify-start">
          {technology.map((item, idx) => (
            <button
              key={idx}
              onClick={(_) => setCurrentNav(idx)}
              className={cn(
                `w-14 h-14 bg-transparent rounded-full text-xl border-slate-200 border ${
                  currentNav === idx ? "bg-slate-200 text-black" : ""
                }`
              )}
            >
              {idx + 1}
            </button>
          ))}
        </div>
          {technology.map((item, idx) => (
            <div key={idx} className={cn(`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 ${currentNav !== idx ? 'hidden' : ''}`)}>
              <div className="text-slate-400">
                <span className="uppercase">the terminlogy...</span>
                <h2 className="text-slate-200 uppercase text-5xl tracking-widest py-4">{item.name}</h2>
                <p className="tracking-wide text-justify">{item.description}</p>
              </div>
              <div>
                <Image
                  src={screenClientWidth > 1024? item.images.portrait : item.images.landscape}
                  alt="technology"
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-62 lg:h-[60vh]"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TechnologyComponents;
