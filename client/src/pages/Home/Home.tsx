import { useCallback, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { Footer } from "../../components/Footer";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(window.innerWidth <= 639);

  const handleResize = useCallback(() => {
    setMobileMenu(window.innerWidth <= 639);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <div className="w-[85vw] grid sm:grid-cols-3 ">
        <Navbar className="bg-red-600 max-sm:h-10" />
        <div className=" h-[95vh] sm:col-start-2 sm:col-span-2 relative">
          home
          {mobileMenu && <Footer className="absolute bottom-0 w-full" />}
        </div>
      </div>
    </>
  );
}
