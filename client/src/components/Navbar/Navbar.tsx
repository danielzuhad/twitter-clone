import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { cn } from "../../utils/cn";
import { NavProfile } from "./NavProfile";
import { NavHeader } from "./NavHeader";

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

  return (
    <>
      <div
        className={cn(
          " w-full md:max-lg:max-w-max p-3 flex flex-col items-end ",
          className
        )}
      >
        {variant === "Side" ? <NavProfile /> : <NavHeader />}
      </div>
    </>
  );
};
