import type { ButtonProps } from "@/Types/ComponentTypes";
import { disabledClasses } from "@/Utils/Classes";
import { FaArrowRightLong } from "react-icons/fa6";

const Button: React.FC<ButtonProps> = ({
  btnText,
  type,
  disable,
  variant,
  children,
  extraClasses,
  handleClick,
  iconVariant = true,
  paddingVariant = true,
}) => {
  switch (variant) {
    case "primary": {
      return (
        <button
          type={type}
          disabled={disable}
          className={`bg-primary border-secondary-border flex cursor-pointer items-center gap-3 border ${paddingVariant ? "px-5 py-2.5" : ""} tracking-widest text-white ${iconVariant ? "uppercase" : ""} transition-colors duration-300 hover:bg-transparent hover:text-black ${extraClasses ? extraClasses : ""} ${disabledClasses}`}
          onClick={handleClick}
        >
          {btnText}
          {children}
          {iconVariant && <FaArrowRightLong />}
        </button>
      );
    }

    case "secondary": {
      return (
        <button
          type={type}
          disabled={disable}
          className={`hover:bg-primary border-secondary-border flex cursor-pointer items-center gap-3 border bg-transparent ${paddingVariant ? "px-5 py-2.5" : ""} text-black ${iconVariant ? "uppercase" : ""} transition-colors duration-300 hover:text-white ${extraClasses ? extraClasses : ""} ${disabledClasses}`}
          onClick={handleClick}
        >
          {btnText}
          {children}
          {iconVariant && <FaArrowRightLong />}
        </button>
      );
    }

    case "danger": {
      return (
        <button
          type={type}
          disabled={disable}
          className={`flex cursor-pointer items-center border border-red-500 bg-transparent hover:bg-red-500 ${paddingVariant ? "px-5 py-2.5" : ""} text-red-500 ${iconVariant ? "uppercase" : ""} transition-colors duration-300 hover:text-white ${extraClasses ? extraClasses : ""} ${disabledClasses}`}
          onClick={handleClick}
        >
          {btnText}
          {children}
        </button>
      );
    }

    case "success": {
      return (
        <button
          type={type}
          disabled={disable}
          className={`flex cursor-pointer items-center gap-3 border border-green-600 bg-green-600 ${paddingVariant ? "px-5 py-2.5" : ""} tracking-widest text-white ${iconVariant ? "uppercase" : ""} transition-colors duration-300 hover:bg-transparent hover:text-green-500 ${extraClasses ? extraClasses : ""} ${disabledClasses}`}
          onClick={handleClick}
        >
          {btnText}
          {children}
          {iconVariant && <FaArrowRightLong />}
        </button>
      );
    }
    default: {
      return (
        <button
          type={type}
          disabled={disable}
          onClick={handleClick}
          className={`${extraClasses ? extraClasses : ""} ${disabledClasses} cursor-pointer`}
        >
          {btnText}
          {children}
        </button>
      );
    }
  }
};

export default Button;
