import Button from "@/Components/Global/Button";
import Image from "@/Components/Global/Image";
import Typography from "@/Components/Global/Typography";
import CoverModal from "@/Components/Modal/CoverModal";
import EditBookInfoModal from "@/Components/Modal/EditBookInfoModal";
import { useState } from "react";
import { FaClock } from "react-icons/fa6";

const BookCover = () => {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <section className="space-y-10">
      <Typography
        text={"Choose your cover"}
        variant="h2"
        colorVariant="black"
        sizeVariant="giant"
        extraClasses="font-medium"
      />
      <Typography
        text={"Determine what the cover of your book will look like."}
        variant="p"
        colorVariant="black"
        sizeVariant="large"
      />
      <div className="grid grid-cols-2 gap-28">
        <div className="space-y-15">
          <div className="shadow-dashboard flex items-center justify-between gap-4 px-10.5 py-15">
            <Typography
              text={"1. Choose your front"}
              variant="p"
              colorVariant="black"
              sizeVariant="large"
            />
            <Button
              btnText="To process"
              type="button"
              handleClick={() => setIsCoverOpen(true)}
              variant="secondary"
              iconVariant={false}
              paddingVariant={false}
              extraClasses="rounded-sm py-5 px-15 !border-black font-bold text-xl"
            />
          </div>

          <div className="shadow-dashboard flex items-center justify-between gap-4 px-10.5 py-15">
            <Typography
              text={"2. Adjust photo, name and title"}
              variant="p"
              colorVariant="black"
              sizeVariant="large"
            />
            <Button
              btnText="To process"
              handleClick={() => setIsInfoModalOpen(true)}
              type="button"
              variant="secondary"
              iconVariant={false}
              paddingVariant={false}
              extraClasses="rounded-sm py-5 px-15 !border-black font-bold text-xl"
            />
          </div>

          <Button
            btnText="Check out the back"
            type="button"
            variant="primary"
            iconVariant={false}
            paddingVariant={false}
            extraClasses="mx-auto font-bold text-xl rounded-md p-5"
          />
        </div>

        <div className="grid grid-cols-[106px_1fr] gap-7.5">
          <div className="shadow-dashboard flex h-full w-full flex-col items-center justify-around bg-white">
            <Typography
              text={"Choose your cover"}
              variant="h3"
              colorVariant="black"
              sizeVariant="giant"
              extraClasses="font-medium vertical-text-alt my-auto"
            />
            <FaClock className="text-4xl" />
          </div>
          <div className="shadow-dashboard h-full w-full">
            <Image
              src="/book-cover.png"
              alt="Book Cover"
              fit="object-cover"
              extraClasses="w-full"
            />
          </div>
        </div>
      </div>

      <CoverModal
        isOpen={isCoverOpen}
        handleClose={() => setIsCoverOpen(false)}
      />

      <EditBookInfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
    </section>
  );
};

export default BookCover;
