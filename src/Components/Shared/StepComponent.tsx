import type { StepComponentProps } from "@/Types/ComponentTypes";
import DiamondImage from "../Diamond Image";
import Typography from "../Global/Typography";

const StepComponent = ({
  variant,
  extraClasses,
  stepNumber,
  title,
  content,
  image,
}: StepComponentProps) => {
  return (
    <article
      className={`grid grid-cols-1 gap-2.5 md:grid-cols-2 ${extraClasses ? extraClasses : ""}`}
    >
      <div className={`flex ${variant === "reverse" ? "order-2" : "order-1"}`}>
        <Typography
          text={"step"}
          colorVariant="accent"
          sizeVariant="large"
          variant="p"
          extraClasses="vertical-text border-r-accent text-accent border-r-2 leading-10 uppercase"
        />

        <div className="flex max-w-xl flex-col justify-center gap-7.5 pl-3">
          <Typography
            variant="h3"
            text={`0${stepNumber}`}
            sizeVariant="huge"
            colorVariant="primary-light"
          />
          <Typography
            variant="h4"
            text={title}
            sizeVariant="xl"
            colorVariant="primary"
          />
          <Typography
            variant="p"
            text={content}
            sizeVariant="medium"
            colorVariant="secondary"
          />
        </div>
      </div>

      <div
        className={`${variant === "reverse" ? "order-1 justify-self-center md:justify-self-start" : "order-2 justify-self-center md:justify-self-end"}`}
      >
        <DiamondImage imgUrl={image} extraClasses="md:h-95 md:w-95 w-full" />
      </div>
    </article>
  );
};

export default StepComponent;
