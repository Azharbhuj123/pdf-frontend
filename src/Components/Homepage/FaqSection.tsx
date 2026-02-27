import { useState } from "react";
import Container from "../Container";
import Heading from "../Global/Heading";
import Accordion from "../Accordion";
import { FaqContent } from "@/Data/ComponentData";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? prev : index));
  };
  return (
    <section className="space-y-10">
      <Container extraClasses="space-y-12.5">
        <Heading
          title={"Have A Question?"}
          content={
            "Sed lectus commodo sed nisl sed ornare. Tempor urna facilisis lacus sit id. Pellentesque volutpat enim imperdiet nulla ultricies arcu facilisis vitae sit. Ullamcorper porttitor turpis."
          }
          headingVariant="sub-heading"
        />

        <div className="flex flex-wrap justify-center gap-10">
          {FaqContent.map((item, index) => (
            <Accordion
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              handleClick={() => handleToggle(index)}
              key={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
