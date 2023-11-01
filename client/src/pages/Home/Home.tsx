import { useCallback, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { Footer } from "../../components/Footer";
import { cn } from "../../utils/cn";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(window.innerWidth <= 768);

  const handleResize = useCallback(() => {
    setMobileMenu(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <main
        className={cn(
          "max-w-[70em] w-[95vw] h-[100vh] flex ",
          mobileMenu && "flex-col"
        )}
      >
        <Navbar variant={mobileMenu ? "Header" : "Side"} />
        <div
          className={cn(
            " border-2 border-[#707070] p-4 rounded-sm",
            mobileMenu ? "w-[95vw]" : "min-w-[44em]"
          )}
        >
          home
          {mobileMenu && <Footer className="fixed bottom-0 w-full" />}
        </div>
      </main>
    </>
  );
}
