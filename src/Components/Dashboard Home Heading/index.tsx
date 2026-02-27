import type { DashboardHomeHeadingProps } from "@/Types/ComponentTypes";
import Typography from "../Global/Typography";

const DashboardHomeHeading = ({
  title,
  content,
}: DashboardHomeHeadingProps) => {
  return (
    <div className="mx-auto max-w-5xl space-y-6 text-center">
      <Typography
        text={title}
        variant="h2"
        colorVariant="black"
        sizeVariant="xxl"
        extraClasses="font-extrabold"
      />

      <Typography
        text={content}
        variant="p"
        colorVariant="black"
        sizeVariant="large"
      />
    </div>
  );
};

export default DashboardHomeHeading;
