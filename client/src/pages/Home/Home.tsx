import { cn } from "../../utils/cn";

type Props = {
  mobileMenu: boolean;
};

export default function Home({ mobileMenu }: Props) {
  return (
    <>
      <div
        className={cn(
          "w-[42em] mt-3 h-screen border-t-2 border-l-2 border-r-2 border-black p-4 rounded-md shadow-md md:mr-3",
          mobileMenu && "w-[95vw]"
        )}
      >
        home
      </div>
    </>
  );
}
