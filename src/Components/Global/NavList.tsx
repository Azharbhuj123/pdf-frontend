import type { NavListProps } from "@/Types/ComponentTypes";
import Button from "./Button";
import Typography from "./Typography";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const NavList: React.FC<NavListProps> = ({
  NavData,
  navSelected,
  setNavSelected,
  extraClasses = "",
  borderVariant = true,
}) => {
  return (
    <div className="hide-scrollbar overflow-x-auto overflow-y-visible">
      <ul
        className={`${borderVariant ? "border-primary-very-light border-b-2" : ""} flex items-center ${extraClasses}`}
      >
        {NavData.map((item, idx) => {
          const isActive = navSelected === idx;

          return (
            <li key={idx} className="relative">
              <Button
                btnText=""
                type="button"
                variant=""
                handleClick={() => setNavSelected(idx)}
              >
                <NavLink to={item.path}>
                  <Typography
                    variant={"span"}
                    text={item.content}
                    colorVariant={
                      isActive
                        ? `${borderVariant ? "accent" : "black"}`
                        : "primary-light"
                    }
                    sizeVariant="large"
                    extraClasses="capitalize whitespace-nowrap"
                  />
                </NavLink>
              </Button>

              {/* Loading-bar like underline */}
              <motion.div
                className={`${borderVariant ? "-mb-0.5" : ""} absolute bottom-0 left-0 h-[2px] bg-black`}
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

export default NavList;
