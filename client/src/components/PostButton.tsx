import { cn } from "../utils/cn";

type Props = {
  className?: string;
};

export const PostButton = ({ className }: Props) => {
  return (
    <button
      className={cn(
        "w-full border-2 bg-black text-white rounded-md py-3 text-xl font-semibold mt-10 sm:max-lg:mt-0 hover:shadow-lg hover:scale-105 transition-all",
        className
      )}
    >
      Post
    </button>
  );
};
