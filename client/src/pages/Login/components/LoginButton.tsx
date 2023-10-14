import clsx from "clsx";

interface LoginButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          `w-full bg-black text-white p-2 rounded-md mt-4 hover:bg-gray-800`,
          disabled &&
            "opacity-50 cursor-default bg-gray-200 pointer-events-none"
        )}
      >
        {children}
      </button>
    </>
  );
};
