import Container from "../Container";
import Button from "../Global/Button";
import Image from "../Global/Image";
import Typography from "../Global/Typography";
import HeroImage from "/hero-img.png";

const HeroSection = () => {
  return (
    <section>
      <Container extraClasses="flex gap-4 justify-between items-center lg:flex-row flex-col">
        <div className="w-full max-w-147.5 space-y-2.5">
          <Typography
            variant="h1"
            sizeVariant="giant"
            colorVariant="primary"
            text={"Every story deserves to be told"}
            extraClasses="leading-20 capitalize"
          />
          <Typography
            variant="p"
            colorVariant="secondary"
            extraClasses="leading-10"
            text={
              "Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iaculis tortor mi maecenas ut nibh pellentesque. Cursus sed malesuada feugiat venenatis enim cursus hac nibh. Ut blandit sed mattis elementum tincidunt sit. In donec a facilisis id elementum mi vulputate enim. Bibendum."
            }
          />
          <div className="flex flex-wrap items-center gap-4 pt-5">
            <Button
              variant="primary"
              btnText="Discover the possibilities"
              type="button"
            />
            <Button variant="secondary" btnText="How it works" type="button" />
          </div>
        </div>
        <Image
          src={HeroImage}
          alt="Hero Section Image"
          width={720}
          height={574}
        />
      </Container>
    </section>
  );
};

export default HeroSection;
