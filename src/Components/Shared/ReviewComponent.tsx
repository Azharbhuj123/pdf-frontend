import Container from "../Container";
import { ImQuotesLeft } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import Heading from "../Global/Heading";
import useEmblaCarousel from "embla-carousel-react";
import Typography from "../Global/Typography";

const ReviewComponent = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, axis: "x" });

  return (
    <section className="space-y-10 overflow-hidden">
      <Container>
        <Heading
          title="Our Google Reviews"
          content="Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iaculis tortor mi maecenas ut nibh pellentesque. Cursus sed malesuada feugiat venenatis "
          headingVariant="sub-heading"
        />
      </Container>

      <div className="embla-horizontal" ref={emblaRef}>
        <div className="embla__container-horizontal">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="embla__slide-horizontal space-y-5">
              <div className="flex items-center justify-between">
                <ImQuotesLeft className="text-accent text-6xl" />
                <FcGoogle className="text-5xl" />
              </div>
              <Typography
                variant="p"
                colorVariant="info"
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu"
                }
                extraClasses="pr-3"
                sizeVariant="medium"
              />

              <div className="pt-7.5">
                <Typography
                  variant="p"
                  colorVariant="secondary"
                  text={"Peter, Belgium"}
                  sizeVariant="small"
                />
                <Typography
                  variant="p"
                  colorVariant="info"
                  text={"on what he learned when sitting with himself"}
                  extraClasses="text-[12px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent;
