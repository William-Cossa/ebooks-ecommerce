import Link from "next/link";
import React from "react";
import logo from "@/public/images/unibook-logo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link
      href="/"
      className="rounded-full w-14 h-14 relative border border-bookOrange"
    >
      <Image
        src={logo}
        fill
        alt="Unibooks logo"
        className="rounded-full object-center"
      />
    </Link>
  );
}

export default Logo;
