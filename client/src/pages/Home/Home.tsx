import { MakePost } from "../../components/MakePost";
import { cn } from "../../utils/cn";
import { useSelector } from "react-redux";
import { MobileMenuState } from "../../redux/mobileMenuSlice";

export default function Home() {
  const mobileMenu = useSelector(
    (state: { mobileMenu: MobileMenuState }) => state.mobileMenu.mobileMenu
  );

  return (
    <>
      <div
        className={cn(
          "w-[42em] mt-3 h-screen border-t-2 border-l-2 border-r-2 border-black p-4 rounded-t-md shadow-md md:mr-3 px-12 flex flex-row justify-center",
          mobileMenu && "w-[95vw]"
        )}
      >
        <MakePost />
      </div>
    </>
  );
}
