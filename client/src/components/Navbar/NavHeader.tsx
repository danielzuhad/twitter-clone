import { useCallback, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import { cn } from "../../utils/cn";
import foto from "../../assets/foto.jpeg";
import { NavSideItem } from "./NavSideItem";
import { NavbarItem } from "./NavSide";

type Props = {
  className?: string;
  navbarItem?: NavbarItem[];
};

export const NavHeader = ({ navbarItem, className }: Props) => {
  const [navbarActive, setNavbarActive] = useState<boolean>(false);

  const handleOpenNavbar = useCallback(
    (e: React.UIEvent) => (e.preventDefault(), setNavbarActive(true)),
    []
  );

  const handleClickNav = useCallback(
    (e: React.UIEvent) => (e.preventDefault(), setNavbarActive(false)),
    []
  );

  return (
    <>
      <div
        className={cn(
          "w-[95vw] h-[7em] p-3 fixed md:left-[1.7%]  sm:left-[2.5%] left-[2.5%]  top-0 bg-white rounded-b-md  border-black  border-b-2  border-l-2  border-r-2 "
        )}
      >
        <button onClick={handleOpenNavbar} className="">
          <img
            src={foto}
            className="w-[5em] h-[5em] object-cover rounded-full"
            alt=""
          />
        </button>
      </div>

      {/* Nav Menu Asolute */}

      {navbarActive && (
        <div
          className={cn(
            "fixed w-screen h-[110vh] bg-[#060606a8] top-0 left-0 right-0 "
          )}
        />
      )}

      <div
        className={cn(
          "h-screen w-[40vw] p-3 bg-white border-r-2 border-black fixed transition-all -translate-x-full left-0 top-0",
          navbarActive && "translate-x-0 "
        )}
      >
        <button onClick={handleClickNav} className="text-[2.5em] ">
          <RxCross1 />
        </button>

        <div className=" flex flex-col gap-5 mt-10">
          {navbarItem?.map((item: NavbarItem, index) => (
            <button onClick={handleClickNav}>
              <NavSideItem
                link={item.link}
                title={item.title}
                Homeicon={item.Homeicon}
                ProfileIcon={item.ProfileIcon}
                key={index}
                className="border-2 shadow-none"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
