import clsx from "clsx";

interface LoginInputProps {
  label: string;
  value: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthInput: React.FC<LoginInputProps> = ({
  label,
  value,
  type,
  disabled,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <div className="mt-3">
        <label>{label}</label>

        <input
          value={value}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          className={clsx(
            `w-full mt-2 p-2 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 
            focus:ring-inset focus:ring-sky-600 `,
            disabled && "opacity-50 cursor-default bg-gray-200"
          )}
        />
      </div>
    </>
  );
};
