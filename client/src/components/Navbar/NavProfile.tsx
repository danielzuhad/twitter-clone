import React, { useState, useEffect, useCallback } from "react";

import { cn } from "../../utils/cn";
import foto from "../../assets/foto.jpeg";

type Props = {
  className?: string;
};

export const NavProfile = ({ className }: Props) => {
  const [mobileMenu, setMobileMenu] = useState(window.innerWidth <= 1023);

  const handleResize = useCallback(() => {
    setMobileMenu(window.innerWidth <= 1023);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return (
    <>
      <div
        className={cn(
          " max-w-[22em] w-full  border-2  border-black rounded-md flex gap-3 py-5 px-2 justify-center items-center",
          mobileMenu && "hidden",
          className
        )}
      >
        {/* Foto */}
        <img
          className="min-w-[7em] h-[7em] object-cover rounded-full"
          src={foto}
          alt=""
        />

        {/* Data diri */}
        <div>
          <div>
            <h3 className="font-bold text-[2em] w-max">Mr. Zuhad </h3>
            <p className="mt-[-5px]">danielzuhad@mail.com</p>

            <h4 className="font-semibold text-[1.2em] mt-2">10 Friend</h4>
          </div>
        </div>
      </div>

      <div>test</div>
    </>
  );
};
