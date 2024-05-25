import { FC } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  options?: RegisterOptions;
  errorMessage?: string;
  className?: string;
  selectOptions?: { value: string; label: string }[]; // Add this for select options
}

const InputField: FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  options,
  errorMessage,
  className = "w-full p-2 border border-gray-300 rounded",
  selectOptions,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-4">
      <label className="block mb-2" htmlFor={name}>
        {label} <span className="text-red-400">*</span>
      </label>
      {type === "select" && selectOptions ? (
        <select {...register(name, options)} className={className}>
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input {...register(name, options)} type={type} className={className} />
      )}
      {errors[name] && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
