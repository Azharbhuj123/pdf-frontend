import type React from "react";
import Container from "../Container";
import Heading from "../Global/Heading";
import Image from "../Global/Image";
import Typography from "../Global/Typography";
import HomeImg from "/home-img.png";
import type { PerksSectionProps } from "@/Types/ComponentTypes";
import { PerksContent } from "@/Data/ComponentData";

const PerksSection: React.FC<PerksSectionProps> = ({ title, content }) => {
  return (
    <section className="space-y-10">
      <Container extraClasses="space-y-12.5">
        <Heading title={title} content={content} headingVariant="sub-heading" />

        <div className="grid items-center justify-items-center gap-13.5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={HomeImg}
              width={578}
              height={437}
              fit="object-cover"
              alt="image"
              //   extraClasses="h-full w-full"
            />
          </div>
          <div className="flex gap-4 md:gap-13.5">
            {/* Round Indicators  */}
            <div className="grid grid-rows-[repeat(10,48px)] place-items-center items-center">
              <div className="row-start-1 h-12 w-12 rounded-full border-2 border-dashed border-gray-800 p-1">
                <p className="bg-accent flex h-full w-full justify-center rounded-full"></p>
              </div>

              <div className="row-start-2 row-end-5 h-full w-max self-center border-r-2 border-dashed border-gray-700"></div>

              <div className="row-start-5 h-12 w-12 rounded-full border-2 border-dashed border-gray-800 p-1">
                <p className="h-full w-full rounded-full bg-gray-800"></p>
              </div>

              <div className="row-start-6 row-end-10 h-full w-max self-center border-r-2 border-dashed border-gray-700"></div>

              <div className="row-start-10 h-12 w-12 rounded-full border-2 border-dashed border-gray-800 p-1">
                <p className="bg-accent h-full w-full rounded-full"></p>
              </div>
            </div>
            {/* Round Indicators  */}

            <div className="grid grow grid-cols-1 grid-rows-[repeat(3,140px)] gap-7 lg:grid-rows-[repeat(3,max-content)] lg:gap-7">
              {PerksContent.map((item, index) => (
                <div key={index} className={`${index === 2 ? "self-end" : ""}`}>
                  <Typography
                    variant="h3"
                    sizeVariant="xxl"
                    text={item.title}
                    extraClasses="leading-13 text-gray-700"
                  />
                  <Typography
                    variant="p"
                    sizeVariant="large"
                    text={item.content}
                    extraClasses="line-clamp-3 text-gray-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PerksSection;
