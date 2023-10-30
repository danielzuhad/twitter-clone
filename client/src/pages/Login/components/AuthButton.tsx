import clsx from "clsx";

interface AuthButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <>
      <button
        type="submit"
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
