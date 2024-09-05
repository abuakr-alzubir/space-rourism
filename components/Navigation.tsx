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
    <header className="flex justify-between items-center h-24 md:max-h-[20vh] gap-x-10 lg:pt-10 md:pt-0 md:px-20 px-4 relative">
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
          <nav className=" md:hidden flex flex-col gap-y-4 min-h-screen absolute right-0 p-4 pt-20 top-0 backdrop-blur-lg bg-white/5 backdrop-brightness-150 min-w-[60vw]">
            <Links isVertical />
            {isOpen && (
                <button className="absolute right-8 top-8" onClick={toggleMenu}>
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
