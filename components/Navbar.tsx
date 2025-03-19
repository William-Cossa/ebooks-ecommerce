import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex fixed items-center justify-center gap-10 text-white h-[8vh] w-full z-50 flex-wrap bg-darkBlue">
      <Link href={"/"}>Inicio</Link>
      <Link href={"/books"}>Books</Link>
      <Link href={"/reader"}>Reader</Link>
    </nav>
  );
}

export default Navbar;
