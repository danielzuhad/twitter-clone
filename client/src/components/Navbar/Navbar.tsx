import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { cn } from "../../utils/cn";
import { NavSide } from "./NavSide";
import { NavHeader } from "./NavHeader";

interface NavbarProps {
  className?: string;
  variant?: "Header" | "Side";
}

export const Navbar = ({ className, variant }: NavbarProps) => {
  const navbarItem = [
    { Homeicon: <AiOutlineHome />, title: "Home", link: "/home" },
    { ProfileIcon: <CgProfile />, title: "Profile", link: "/profile" },
  ];

  return (
    <>
      <div className={cn(" w-full p-3 flex flex-col items-end ", className)}>
        {variant === "Side" ? (
          <NavSide navbarItem={navbarItem} />
        ) : (
          <NavHeader navbarItem={navbarItem} />
        )}
      </div>
    </>
  );
};
