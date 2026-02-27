import type { ContainerProps } from "@/Types/ComponentTypes";
import type React from "react";

const Container: React.FC<ContainerProps> = ({
  children,
  extraClasses = "",
  dashboardVariant = false,
}) => {
  return (
    <div
      className={`mx-auto w-[100%] ${dashboardVariant ? "max-w-405" : "max-w-7xl"} px-5 xl:px-2.5 ${extraClasses ? extraClasses : ""} `}
    >
      {children}
    </div>
  );
};

export default Container;
