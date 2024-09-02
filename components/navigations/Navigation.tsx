"use client";

import React, { useEffect } from "react";
import { Links } from "./Links";
// import { Logo } from "../Logo";
import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="absolute top-0 right-0 w-full pt-4 md:hidden">
      <div className="flex justify-between items-center px-8">
        {/* <Logo custom="16" /> */}
        <div className="w-16 h-16 bg-white rounded-full"></div>
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <CgClose size={60} /> : <CiMenuBurger size={60} />}
        </button>
      </div>
      {isOpen && (
        <nav className="absolute z-10 right-0 w-full h-[calc(100vh-112px)] top-28 bg-white flex justify-center items-center">
          <Links isvertival onClick={closeMenu} />
        </nav>
      )}
    </header>
  );
};
