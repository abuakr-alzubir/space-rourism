import React from "react";
import { Links } from "./Links";
import { Logo } from "../Logo";

export const NavigationTab = () => {
  return (
    <header className="absolute top-0 right-0 w-full hidden md:block lg:hidden">
      <div className="grid grid-cols-[8rem_1fr]">
        <div className="flex items-center justify-center">
          <Logo custom="20" />
          {/* <div className="w-20 h-20 bg-white rounded-full"></div> */}
        </div>
        <Links isTablet />
      </div>
    </header>
  );
};
