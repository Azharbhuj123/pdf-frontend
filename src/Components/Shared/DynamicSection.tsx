import type React from "react";
import Container from "../Container";
import Button from "../Global/Button";
import Image from "../Global/Image";
import Typography from "../Global/Typography";

import type { DynamicSectionProps } from "@/Types/ComponentTypes";

const DynamicSection: React.FC<DynamicSectionProps> = ({
  title,
  content,
  variant,
  image,
  extraClasses,
}) => {
  return (
    <section>
      <Container
        extraClasses={`flex gap-9 items-center ${extraClasses ? extraClasses : ""}`}
      >
        <div
          className={`space-y-5 ${variant === "textVariant" ? "w-118.5" : ""}`}
        >
          <Typography
            variant={variant === "textVariant" ? "h1" : "h3"}
            sizeVariant="xl-alt"
            colorVariant="primary"
            text={title}
          />
          <Typography
            variant="p"
            colorVariant="secondary"
            text={
              content
              // "Lorem ipsum dolor sit amet consectetur. Mauris egestas at neque ut. Blandit vitae habitasse lectus amet sit scelerisque lacus sit. Tortor elit amet eget cursus nibh. Non lacus quam nibh eget. Et ligula vestibulum laoreet eu elementum in felis molestie. Odio diam orci molestie egestas. Quis nec phasellus pellentesque quisque ac mattis hac amet. Egestas phasellus eu at scelerisque. Velit eu tellus lectus in leo dolor. Varius"
            }
            extraClasses="leading-8 tracking-wider"
          />
          {variant === "buttonVariant" && (
            <Button btnText="Read More" type="button" variant="primary" />
          )}
        </div>
        <div className="shrink-0">
          <Image
            src={image}
            width={600}
            height={620}
            alt="Multiple Books Image"
          />
        </div>
      </Container>
    </section>
  );
};

export default DynamicSection;
