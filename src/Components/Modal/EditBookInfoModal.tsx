import { IoIosCloseCircle } from "react-icons/io";
import Button from "../Global/Button";
import Modal from "../Global/Modal";
import Typography from "../Global/Typography";
import type { BaseModalProps } from "@/Types/ComponentTypes";
import BookInfoModalForm from "../Form/BookInfoModalForm";

const EditBookInfoModal = ({ isOpen, handleClose }: BaseModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      extraClasses="max-w-5xl font-solway px-5 lg:px-7.5 py-5 max-h-[95vh] space-y-22 overflow-y-scroll hide-scrollbar"
    >
      <div className="border-secondary-border bg-secondary-alt sticky top-0 flex w-full items-center justify-between border-b py-5">
        <div>
          <Typography
            text={"Add photo and text"}
            variant="h2"
            colorVariant="black"
            sizeVariant="giant"
            extraClasses="font-medium"
          />
          <Typography
            text={"Personalize your book with your own title and cover image"}
            variant="p"
            colorVariant="black"
            sizeVariant="large"
          />
        </div>
        <Button handleClick={handleClose} btnText="" type="button" variant="">
          <IoIosCloseCircle className="text-7xl text-red-500" />
        </Button>
      </div>

      <BookInfoModalForm />
    </Modal>
  );
};

export default EditBookInfoModal;
