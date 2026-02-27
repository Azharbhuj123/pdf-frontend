import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Image from "../Global/Image";
import { useEffect } from "react";

const EmblaCarousel = ({
  images,
  onSelect,
  selectedIndex,
}: {
  images: string[];
  onSelect?: (index: number) => void;
  selectedIndex: number;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // loop: true,
    axis: "y",
    // align: "start",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi || !onSelect) return;

    const handleSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      onSelect(selectedIndex);
    };

    emblaApi.on("select", handleSelect);
    handleSelect();

    return () => {
      if (emblaApi) emblaApi.off("select", handleSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="embla-vertical w-max">
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport-vertical" ref={emblaRef}>
        <div className="embla__container-vertical">
          {images.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="book"
              // fit="object-contain"
              extraClasses={`embla__slide-vertical ${index === selectedIndex ? "is-selected" : ""} shrink-0`}
              // width={100}
              // height={200}
            />
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
