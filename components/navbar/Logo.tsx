import Link from "next/link";
import React from "react";
import logo from "@/public/images/unibook-logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils"; // (ou use clsx ou string template)

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "w-14 h-14 rounded-full  overflow-hidden relative border border-bookOrange",
        className
      )}
    >
      <Image
        src={logo}
        fill
        alt="Unibooks logo"
        className=" object-center"
        sizes="128px"
      />
    </Link>
  );
}

export default Logo;
