import React from "react";
import { Links } from "./Links";
import { Logo } from "../Logo";

export const NavigationDesk = () => {
  return (
    <header className="absolute top-0 right-0 w-full pt-10 hidden lg:block">
      <div className="grid grid-cols-[8rem_1fr]">
        <div className="flex justify-center items-center">
          {/* <Logo custom="16" /> */}
          <div className="w-16 h-16 bg-white rounded-full"></div>
        </div>
        <Links hasNubering hasLine />
      </div>
    </header>
  );
};
