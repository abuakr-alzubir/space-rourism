import React from "react";
import Image from "next/image";
import Link from "next/link";

type LogoData = {
  custom?: string;
  className?: string;
};

const Logo = ({ custom ="40", className }: LogoData) => {
  return (
    <Link href={"/"} className="md:mt-4">
      <Image src={"/shared/logo.svg"} alt="logo" width={+custom} height={+custom} />
    </Link>
  );
};

export default Logo;