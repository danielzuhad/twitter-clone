import { useEffect, useRef } from "react";

import { cn } from "../utils/cn";

type Props = {
  className?: string;
};

export const MakePost = ({ className }: Props) => {
  const textInput = useRef<HTMLInputElement>("" || null);

  console.log(textInput.current?.value);

  useEffect(() => {}, [textInput]);

  return (
    <>
      <div
        className={cn(
          "w-full border-2 border-black h-max flex flex-col rounded-md p-2",
          className
        )}
      >
        <input
          className="max-w-full p-3 border-b-2 focus:outline-none font-semibold text-[1.5em] resize overflow-hidden leading-3 block  min-h-[40px]"
          placeholder="Make Post here"
          ref={textInput}
        />

        {/* Icon % Post Button */}
        <div>test</div>
      </div>
    </>
  );
};
