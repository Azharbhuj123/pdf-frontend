import type { HeadingProps } from "@/Types/ComponentTypes";
import Typography from "./Typography";

const Heading = ({ title, content, headingVariant }: HeadingProps) => {
  return (
    <div
      className={`mx-auto ${headingVariant === "main-heading" ? "max-w-lg" : "max-w-3xl"} space-y-5`}
    >
      <Typography
        variant={headingVariant === "main-heading" ? "h1" : "h2"}
        text={title}
        sizeVariant={headingVariant === "main-heading" ? "xxl" : "xl-alt"}
        colorVariant="primary"
        extraClasses="text-center"
      />
      <Typography
        variant="p"
        text={content}
        colorVariant="secondary"
        extraClasses="text-center leading-7"
      />
    </div>
  );
};

export default Heading;
