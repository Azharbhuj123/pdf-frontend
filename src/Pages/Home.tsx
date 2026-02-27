import Badge from "@/Components/Badge";
import Container from "@/Components/Container";
import BookComponent from "@/Components/Shared/BookComponent";
import Heading from "@/Components/Global/Heading";
import ReviewComponent from "@/Components/Shared/ReviewComponent";
import StepComponent from "@/Components/Shared/StepComponent";
import HeroSection from "@/Components/Homepage/HeroSection";
import PerksSection from "@/Components/Homepage/PerksSection";
import { StepsContent } from "@/Data/ComponentData";
import { HomeBadges, HomeBadgesAlt } from "@/Data/PageData";
import DynamicSection from "@/Components/Shared/DynamicSection";
import MultipleBookImg from "/books-img.png";
import FaqSection from "@/Components/Homepage/FaqSection";

const Home = () => {
  return (
    <div className="space-y-20">
      <HeroSection />

      <section className="bg-secondary-alt">
        <Container extraClasses="flex items-center justify-around py-12 flex-wrap gap-2 ">
          {HomeBadges.map((item, index) => (
            <Badge extraClasses="items-center" key={index} {...item} />
          ))}
        </Container>
      </section>

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

      <section>
        <Container>
          <BookComponent />
        </Container>
      </section>

      {/* brand here  */}

      <ReviewComponent />

      <section>
        <Container extraClasses="flex items-center justify-around py-12 flex-wrap gap-2">
          {HomeBadgesAlt.map((item, index) => (
            <Badge extraClasses="" key={index} {...item} />
          ))}
        </Container>
      </section>

      <PerksSection
        title="Grandparent Tested, Family Approved"
        content="Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iaculis tortor mi maecenas ut nibh pellentesque. Cursus sed malesuada feugiat venenatis "
      />

      <DynamicSection
        title="Our Story"
        content="Lorem ipsum dolor sit amet consectetur. Mauris egestas at neque ut. Blandit vitae habitasse lectus amet sit scelerisque lacus sit. Tortor elit amet eget cursus nibh. Non lacus quam nibh eget. Et ligula vestibulum laoreet eu elementum in felis molestie. Odio diam orci molestie egestas. Quis nec phasellus pellentesque quisque ac mattis hac amet. Egestas phasellus eu at scelerisque. Velit eu tellus lectus in leo dolor. Varius"
        image={MultipleBookImg}
        variant="buttonVariant"
        extraClasses="lg:flex-row flex-col"
      />

      <FaqSection />
    </div>
  );
};

export default Home;
