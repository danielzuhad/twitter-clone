import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { cn } from "../utils/cn";

interface NavbarProps {
  className?: string;
  variant?: "Header" | "Side";
}

export const Navbar = ({ className, variant }: NavbarProps) => {
  const navbarItem = [
    { Homeicon: AiOutlineHome, title: "Home" },
    { ProfileIcon: CgProfile, title: "Profile" },
    { ProfileIcon: AiOutlineSearch, title: "Search" },
  ];

  const header = () => {
    return (
      <>
        <h1>header</h1>
      </>
    );
  };

  const side = () => {
    return (
      <>
        <h1>side</h1>
      </>
    );
  };

  return (
    <>
      <div className={cn(" w-full ", className)}>
        {variant === "Side" ? side() : header()}
      </div>
    </>
  );
};
