"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Links from "./Links";
import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false);
  return (
    <header className="flex justify-between items-center gap-x-10 lg:pt-14 md:pt-0 px-20 relative h-32">
      <Logo />
      <nav className="hidden md:flex items-center justify-center gap-x-4 lg:h-[20vh] md:h-[28vh] px-20 absolute right-0 z-20 backdrop-blur-lg bg-white/20 backdrop-brightness-100 ">
        <Links />
      </nav>

      {/* mobile navigation */}
      <div className="">
        {!isOpen && (
            <button onClick={toggleMenu}>
            {isOpen ? "" : <CiMenuBurger size={40} />}
          </button>
        )}
        {isOpen && (
          <nav className=" md:hidden flex flex-col gap-y-4 min-h-screen absolute right-0 p-8 pt-20 top-0 bg-white/20 backdrop-blur-lg backdrop-brightness-100 min-w-[60vw]">
            <Links isVertical onClick={closeNav} />
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
