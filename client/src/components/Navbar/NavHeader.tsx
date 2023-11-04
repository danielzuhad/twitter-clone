import React from "react";

import { cn } from "../../utils/cn";
import foto from "../../assets/foto.jpeg";

type Props = {};

export const NavHeader = (props: Props) => {
  return (
    <>
      <div
        className={cn(
          "w-[95vw] h-[7em] p-3 fixed md:left-5  sm:left-4 left-[2.5%]  top-0 bg-white rounded-b-md  border-black  border-b-2  border-l-2  border-r-2"
        )}
      >
        <img
          src={foto}
          className="w-[5em] h-[5em] object-cover rounded-full"
          alt=""
        />
      </div>
    </>
  );
};
