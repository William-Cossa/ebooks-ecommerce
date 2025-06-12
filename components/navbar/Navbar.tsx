import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/unibook-logo.png";
import { CartListDropdown } from "../CartListDropdown";
import { navLinks } from "./Navlinks";
import NavItem from "./NavbarItem";
import Logo from "./Logo";
import SearchField from "./SearchField";
import CartListButton from "../CartListButton";
import MenuButton from "./MenuButton";

function Navbar() {
  return (
    <header className="sticky font-playfair top-0 z-50 border-b bg-card shadow-sm">
      <div className="container   w-full px-4 md:px-6">
        <div className="flex h-16 items-center justify-between w-full">
          <Logo />
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <NavItem key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <SearchField />
            <CartListButton />
            {/* <CartListDropdown /> */}
          </div>

          <div className="md:hidden flex items-center mr-4 gap-4">
            <CartListButton />
            <MenuButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
