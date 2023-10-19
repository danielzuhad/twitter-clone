import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [mobileView, setmobileView] = useState(false);

  const navbarItem = [
    { Homeicon: AiOutlineHome, title: "Home" },
    { ProfileIcon: CgProfile, title: "Profile" },
  ];

  return <div className={className}>Navbar</div>;
};
