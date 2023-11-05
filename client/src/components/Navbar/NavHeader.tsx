import React, { useCallback } from "react";

import { cn } from "../../utils/cn";
import foto from "../../assets/foto.jpeg";
import { NavbarItem } from "./NavSide";

interface Props extends NavbarItem {
  className?: string;
}

export const NavHeader = ({
  Homeicon,
  link,
  title,
  ProfileIcon,
  className,
}: Props) => {
  const handleOpenNavbar = useCallback(() => alert("test"), []);

  return (
    <>
      <div
        className={cn(
          "w-[95vw] h-[7em] p-3 fixed md:left-[1.7%]  sm:left-[2.5%] left-[2.5%]  top-0 bg-white rounded-b-md  border-black  border-b-2  border-l-2  border-r-2 "
        )}
      >
        <button onClick={handleOpenNavbar}>
          <img
            src={foto}
            className="w-[5em] h-[5em] object-cover rounded-full"
            alt=""
          />
        </button>
      </div>
    </>
  );
};
