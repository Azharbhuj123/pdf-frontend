import type { NavListProps } from "@/Types/ComponentTypes";
import Button from "../Global/Button";
import { NavLink } from "react-router";
import Typography from "../Global/Typography";
import { motion } from "framer-motion";

const DashboardSteps = ({
  NavData,
  navSelected,
  setNavSelected,
  extraClasses = "",
}: Omit<NavListProps, "borderVariant">) => {
  return (
    <div className="hide-scrollbar overflow-x-auto overflow-y-visible">
      <ul className={`flex items-center ${extraClasses}`}>
        {NavData.map((item, idx) => {
          const isActive = navSelected === idx;

          return (
            <li key={idx} className="clip-path bg-secondary-alt relative">
              <Button
                btnText=""
                type="button"
                variant=""
                handleClick={() => setNavSelected(idx)}
              >
                <NavLink
                  to={item.path}
                  className="flex items-center gap-2 px-8 py-3.5"
                >
                  <div
                    className={`h-4 w-4 rounded-full text-xs ${isActive ? "bg-white text-black" : "bg-black text-white"}`}
                  >
                    <span className=" ">{idx + 1}</span>
                  </div>
                  <Typography
                    variant={"span"}
                    text={item.content}
                    colorVariant={isActive ? "white" : "black"}
                    sizeVariant="large"
                    extraClasses="capitalize whitespace-nowrap font-bold"
                  />
                </NavLink>
              </Button>

              <motion.div
                className={`absolute inset-0 -z-1 bg-black`}
                animate={{
                  width: isActive ? "100%" : "0%",
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardSteps;
