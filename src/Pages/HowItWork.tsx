import DynamicSection from "@/Components/Shared/DynamicSection";
import MultipleBookImg from "/books-img.png";
import Container from "@/Components/Container";
import Heading from "@/Components/Global/Heading";
import StepComponent from "@/Components/Shared/StepComponent";
import { StepsContent } from "@/Data/ComponentData";

const HowItWork = () => {
  return (
    <div className="space-y-20 pt-20">
      <DynamicSection
        title="Effortless Storytelling Beautiful Crafted"
        content="We make it easy for anyone to create a beautiful book the captures the memories that matter most."
        image={MultipleBookImg}
        variant="textVariant"
        extraClasses="flex-col text-center"
      />

      <section>
        <Container extraClasses="space-y-12.5">
          <Heading
            title="How It Work"
            content="Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iaculis tortor mi maecenas ut nibh pellentesque. Cursus sed malesuada feugiat venenatis "
            headingVariant="sub-heading"
          />
          {StepsContent.map((item, index) => (
            <StepComponent
              key={index + 1}
              content={item.content}
              image={item.image}
              stepNumber={index + 1}
              title={item.title}
              variant={item.variant}
            />
          ))}
        </Container>
      </section>
    </div>
  );
};

export default HowItWork;
