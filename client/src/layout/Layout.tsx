import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { MobileMenuState } from "../redux/mobileMenuSlice";
import { Navbar } from "../components/Navbar/Navbar";
import { cn } from "../utils/cn";

const Layout = () => {
  const mobileMenu = useSelector(
    (state: { mobileMenu: MobileMenuState }) => state.mobileMenu.mobileMenu
  );

  return (
    <>
      <div className={cn("flex relative", mobileMenu && "flex-col")}>
        <Navbar variant={mobileMenu ? "Header" : "Side"} />
        <div className={mobileMenu ? "mt-[5em]" : ""}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
