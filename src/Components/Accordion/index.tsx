import { FaMinus, FaPlus } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import Typography from "../Global/Typography";
import type { AccordionProps } from "@/Types/ComponentTypes";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({
  isOpen,
  handleClick,
  question,
  answer,
}: AccordionProps) => {
  return (
    <div
      className={`${isOpen ? "border-tertiary-border border" : ""} w-full max-w-137 rounded-2xl px-9 py-7.5 transition-colors duration-500 select-none`}
    >
      <div
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-between gap-2"
      >
        <div className="flex items-center gap-2">
          <MdInfoOutline
            className={`${isOpen ? "text-accent" : "text-neutral-very-light"} shrink-0 text-2xl`}
          />
          <Typography
            variant="p"
            sizeVariant="large"
            text={question}
            colorVariant={`${isOpen ? "accent" : "primary"}`}
            extraClasses="font-semibold"
          />
        </div>
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              key="minus"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <FaMinus className="from-accent to-accent-dark shrink-0 rounded-lg bg-linear-to-t px-2 py-1 text-3xl text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-light shrink-0 text-xl"
            >
              <FaPlus />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.span
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{
          opacity: { duration: 0.3 },
          height: { duration: 0.3, ease: "easeInOut" },
        }}
        className="max-w-106 pt-5 pl-8.5"
      >
        {!!isOpen && (
          <Typography variant="p" text={answer} colorVariant="primary-light" />
        )}
      </motion.span>
    </div>
  );
};

export default Accordion;
