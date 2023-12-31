import { ReactElement } from "react";

import { cn } from "../../utils/cn";
import foto from "../../assets/foto.jpeg";
import { NavSideItem } from "./NavSideItem";
import { PostButton } from "../PostButton";

export type NavbarItem = {
  Homeicon?: ReactElement;
  ProfileIcon?: ReactElement;
  title: string;
  link: string;
};

type Props = {
  className?: string;
  navbarItem?: NavbarItem[];
};

export const NavSide = ({ className, navbarItem }: Props) => {
  return (
    <>
      <div
        className={cn(
          "w-full  border-2  border-black rounded-md flex gap-3 py-5 px-2 justify-center items-center shadow-md sm:max-lg:hidden",

          className
        )}
      >
        {/* Foto */}
        <img
          className="min-w-[7em] h-[7em] object-cover rounded-full "
          src={foto}
          alt=""
        />

        {/* Data diri */}
        <div>
          <div>
            <h3 className="font-bold text-[2em] max-w-[5em]  truncate">
              {" "}
              Zuhad test test tsest
            </h3>
            <p className="mt-[-5px]">danielzuhad@mail.com</p>

            <h4 className="font-semibold text-[1.2em] mt-2">10 Friend</h4>
          </div>
        </div>
      </div>

      {/* Navbar Menu */}
      <div
        className={cn(
          "flex flex-col items-end gap-5 w-full max-w-[20em] md:mt-5 "
        )}
      >
        {navbarItem?.map((item, index) => (
          <NavSideItem
            key={index}
            link={item.link}
            title={item.title}
            Homeicon={item.Homeicon}
            ProfileIcon={item.ProfileIcon}
          />
        ))}

        <PostButton />
      </div>
    </>
  );
};
