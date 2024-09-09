"use client";
import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  // const closeNav = () => setIsOpen(false);
  return (
    <header className="flex justify-between items-center h-20 md:h-auto gap-x-10 lg:pt-10 md:pt-0 md:px-20 px-4 relative">
      <Logo custom="50" />

      <nav className="hidden md:flex items-center justif y-center px-20 gap-x-4  absolute right-0 z-20 backdrop-blur-lg bg-white/5 backdrop-brightness-150 ">
        <Links />
      </nav>

      {/* mobile navigation */}
      <div className="md:hidden">
        {!isOpen && (
            <button onClick={toggleMenu}>
            {isOpen ? "" : <CiMenuBurger size={40} />}
          </button>
        )}
        {isOpen && (
          <nav className=" md:hidden z-20 flex flex-col gap-y-1 min-h-screen absolute right-0 px-8 pt-20 top-0 backdrop-blur-lg bg-white/30 backdrop-brightness-150 min-w-[60vw]">
            <Links isVertical />
            {isOpen && (
                <button className="absolute right-4 top-4" onClick={toggleMenu}>
                {isOpen ? <CgClose size={40}  className="text-red-400"/> : "" }
              </button>
            )}
          </nav>
        )
        }
      </div>
    </header>
  );
};

export default Navigation;
