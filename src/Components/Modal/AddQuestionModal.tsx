import { IoIosCloseCircle } from "react-icons/io";
import Button from "../Global/Button";
import Modal from "../Global/Modal";
import Typography from "../Global/Typography";
import Image from "../Global/Image";
import type { BaseModalProps } from "@/Types/ComponentTypes";

const AddQuestionModal = ({ isOpen, handleClose }: BaseModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      extraClasses="max-w-5xl font-solway px-5 py-5 lg:px-12 lg:py-10 max-h-[95vh] overflow-y-scroll hide-scrollbar space-y-10"
    >
      <div className="flex items-center justify-between">
        <Typography
          text={"Add your own question"}
          variant="h1"
          colorVariant="black"
          sizeVariant="xxl"
          extraClasses="mx-auto font-bold"
        />
        <Button handleClick={handleClose} btnText="" type="button" variant="">
          <IoIosCloseCircle className="text-7xl text-red-500" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-10 bg-white p-5 md:flex-row lg:p-12.5">
        <Image
          src="/Question Modal/add-question.png"
          width={127}
          height={108}
          alt=""
        />
        <div className="space-y-6">
          <Typography
            text={"Add your own question"}
            variant="h2"
            colorVariant="black"
            sizeVariant="xxl"
            extraClasses="mx-auto font-bold"
          />
          <Typography
            text={`Wilt u zelf een vraag toevoegen? Dat kan heel eenvoudig.`}
            variant="p"
            colorVariant="black"
            sizeVariant="large"
          />
          <Button
            btnText="Add Question"
            type="button"
            variant="primary"
            iconVariant={false}
            extraClasses="rounded-md text-xl justify-center max-w-80 w-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 bg-white p-5 md:flex-row lg:gap-10 lg:p-12.5">
        <Image
          src="/Question Modal/view-question.png"
          width={103}
          height={128}
          alt=""
        />
        <div className="space-y-6">
          <Typography
            text={"View new questions"}
            variant="h2"
            colorVariant="black"
            sizeVariant="xxl"
            extraClasses="mx-auto font-bold"
          />
          <Typography
            text={`Looking for inspiration? Discover our question library`}
            variant="p"
            colorVariant="black"
            sizeVariant="large"
          />
          <Button
            btnText="View Question"
            type="button"
            variant="primary"
            iconVariant={false}
            extraClasses="rounded-md text-xl justify-center max-w-80 w-full"
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddQuestionModal;
