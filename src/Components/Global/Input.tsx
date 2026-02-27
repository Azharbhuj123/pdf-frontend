import type { InputProps } from "@/Types/ComponentTypes";
import { disabledClasses } from "@/Utils/Classes";

const Input = ({
  type,
  name,
  label,
  disable = false,
  placeholderText,
  extraClasses = "",
  error,
  register,
  parentClasses,
  initialValue,
}: InputProps) => {
  return (
    <div className={`w-full ${parentClasses ? parentClasses : ""}`}>
      {!!label && <label className="capitalize">{label}</label>}
      <input
        {...register}
        defaultValue={initialValue ? initialValue : ""}
        type={type}
        name={name}
        placeholder={placeholderText}
        disabled={disable}
        className={`w-full border px-6 py-3 ${extraClasses ? extraClasses : ""} ${disabledClasses}`}
      />

      {!!error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
