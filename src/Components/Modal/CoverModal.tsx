import type { BaseModalProps } from "@/Types/ComponentTypes";
import Modal from "../Global/Modal";
import Typography from "../Global/Typography";
import Button from "../Global/Button";
import { IoIosCloseCircle } from "react-icons/io";
import Image from "../Global/Image";

const CoverModal = ({ isOpen, handleClose }: BaseModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      extraClasses="max-w-5xl font-solway px-5 lg:px-7.5 pb-5 h-[95vh] space-y-22 overflow-y-scroll hide-scrollbar"
    >
      <div className="border-secondary-border bg-secondary-alt sticky top-0 flex w-full items-center justify-between border-b py-5">
        <div>
          <Typography
            text={"Choose your cover"}
            variant="h2"
            colorVariant="black"
            sizeVariant="giant"
            extraClasses="font-medium"
          />
          <Typography
            text={"Are you sure you want to delete this question?"}
            variant="p"
            colorVariant="black"
            sizeVariant="large"
          />
        </div>
        <Button handleClick={handleClose} btnText="" type="button" variant="">
          <IoIosCloseCircle className="text-7xl text-red-500" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
          <Image
            key={idx}
            src="/book.png"
            alt="book cover"
            fit="object-cover"
            extraClasses="w-full"
          />
        ))}
      </div>
      <Button
        btnText="SAVE"
        type="button"
        variant="primary"
        iconVariant={false}
        paddingVariant={false}
        extraClasses="max-w-xs w-full py-5 justify-center rounded-sm mx-auto"
      />
    </Modal>
  );
};

export default CoverModal;
