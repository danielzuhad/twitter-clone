import { useState } from "react";

import { cn } from "../utils/cn";

type Props = {
  className?: string;
};

export const MakePost = ({ className }: Props) => {
  const [textInput, setTextInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    const rows = value.split("\n").length;

    setTextInput(value);
  };
  // TODO complete the input
  return (
    <>
      <div
        className={cn(
          "w-full border-2 border-black h-max flex flex-col rounded-md p-2",
          className
        )}
      >
        <textarea
          className="max-w-full p-3 border-b-2 focus:outline-none font-semibold text-[1.5em] resize overflow-hidden leading-3 block  min-h-[40px]"
          placeholder="Make Post here"
          value={textInput}
          onChange={handleInputChange}
        />

        {/* Icon & Post Button */}
        <div>test</div>
      </div>
    </>
  );
};
