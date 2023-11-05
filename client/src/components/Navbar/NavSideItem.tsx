import { Link } from "react-router-dom";

import { NavbarItem } from "./NavSide";
import { cn } from "../../utils/cn";

interface NavSideItemProps extends NavbarItem {
  className?: string;
}

export const NavSideItem = ({
  Homeicon,
  link,
  title,
  ProfileIcon,
  className,
}: NavSideItemProps) => {
  return (
    <>
      <Link
        to={link}
        className={cn(
          "w-full flex items-center justify-center p-2 gap-3 border-2 shadow-md border-black rounded-md hover:shadow-lg hover:scale-105 sm:max-lg:px-4 ",
          className
        )}
      >
        <div className="text-[2em] ">{Homeicon || ProfileIcon}</div>
        <div className="">{title}</div>
      </Link>
    </>
  );
};
