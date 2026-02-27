import Typography from "../Global/Typography";
import type { BadgeProps } from "@/Types/ComponentTypes";

const Badge = ({ content, title, extraClasses, Icon }: BadgeProps) => {
  return (
    <div
      className={`${extraClasses ? extraClasses : ""} flex max-w-40.5 flex-col`}
    >
      <div className="bg-primary-very-light text-tertiary w-fit rounded-md px-4.5 py-3">
        <Icon extraClasses="stroke-tertiary" />
      </div>
      <Typography
        variant="h3"
        sizeVariant="large"
        text={title}
        colorVariant="black"
        extraClasses="leading-10 pt-2"
      />
      {!!content && (
        <Typography
          variant="p"
          sizeVariant="small"
          text={content}
          colorVariant="secondary"
          extraClasses="font-semibold"
        />
      )}
    </div>
  );
};

export default Badge;
