import EmblaCarousel from "../Embla Carousel/EmblaCarousel";
import Book from "/book.png";
import Book2 from "/book-2.png";
import Image from "../Global/Image";
import { useState } from "react";
import Typography from "../Global/Typography";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import Button from "../Global/Button";

const BookComponent = () => {
  const Books = [Book, Book2, Book, Book2, Book, Book2];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_500px]">
      <div className="grid grid-cols-[100px_1fr] items-center justify-items-center gap-5">
        <EmblaCarousel
          images={Books}
          onSelect={setSelectedIndex}
          selectedIndex={selectedIndex}
        />

        <div className="max-w-xs">
          <Image
            src={Books[selectedIndex]}
            alt="Selected Book"
            width={200}
            height={200}
            fit="object-contain"
            extraClasses="rounded-lg shadow-md w-full"
          />
        </div>
      </div>

      <div className="space-y-6 justify-self-center text-center lg:justify-self-start lg:text-left">
        <Typography
          variant="h3"
          colorVariant="black"
          sizeVariant="xxl"
          text={"Tips of Simple Lifestyle"}
        />

        <div className="flex justify-center gap-2 lg:justify-start">
          <FcGoogle className="shrink-0 text-5xl" />
          <div>
            <Typography
              variant="p"
              colorVariant="black"
              text={"Google Reviews"}
            />
            <span className="flex items-center gap-1">
              <Typography variant="p" colorVariant="black" text={4.6} />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </span>
          </div>
        </div>

        <Typography
          variant="p"
          colorVariant="secondary"
          text={
            "Give Your Parents the Joy of Sharing Their Life Story with Future Generations."
          }
          extraClasses="uppercase tracking-widest"
        />

        <Typography
          variant="h4"
          colorVariant="black"
          sizeVariant="xl"
          text={"Birds gonna be happy"}
        />

        <ol className="text-secondary list-inside list-disc space-y-4">
          <li>
            Weekly guided questions that make it easy for your parent to share
            memories
          </li>
          <li>
            Weekly guided questions that make it easy for your parent to share
            memories
          </li>
          <li>
            Weekly guided questions that make it easy for your parent to share
            memories
          </li>
          <li>
            Weekly guided questions that make it easy for your parent to share
            memories
          </li>
          <li>
            Weekly guided questions that make it easy for your parent to share
            memories
          </li>
        </ol>
        <div className="flex items-center gap-2">
          <Typography
            variant="h5"
            colorVariant="accent"
            sizeVariant="xl"
            text={"$80.58 USD"}
          />
          <Typography
            variant="h5"
            colorVariant="accent"
            text={"$168"}
            extraClasses="line-through"
          />
          <Typography
            variant="p"
            colorVariant="black"
            text={"Original Price"}
            extraClasses="text-[10px]"
          />
        </div>
        <Button
          type="button"
          variant="primary"
          btnText="Get Started With This Book"
          extraClasses="w-full justify-center"
        />

        <Typography
          variant="p"
          colorVariant="secondary"
          text={"Free Delivery  | Money-Back Guarantee"}
          extraClasses="text-center"
        />
      </div>
    </div>
  );
};

export default BookComponent;
