import { IoIosCloseCircle } from "react-icons/io";
import Button from "../Global/Button";
import Modal from "../Global/Modal";
import Typography from "../Global/Typography";
import { FaCircleExclamation } from "react-icons/fa6";
import type { BaseModalProps } from "@/Types/ComponentTypes";

const ConfirmationModal = ({ isOpen, handleClose }: BaseModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      extraClasses="max-w-5xl font-solway px-5 py-5 lg:px-12 lg:py-10 max-h-[95vh] overflow-y-scroll hide-scrollbar space-y-50"
    >
      <div className="flex items-center justify-between">
        <Typography
          text={"Confirm deletion"}
          variant="h1"
          colorVariant="black"
          sizeVariant="xxl"
          extraClasses="mx-auto font-bold"
        />
        <Button handleClick={handleClose} btnText="" type="button" variant="">
          <IoIosCloseCircle className="text-7xl text-red-500" />
        </Button>
      </div>
      <div className="flex flex-col items-center gap-5 pb-60 text-center">
        <FaCircleExclamation className="text-7xl text-red-400" />

        <Typography
          text={`Are you sure you want to delete this question?`}
          variant="p"
          colorVariant="black"
          sizeVariant="large"
        />

        <div className="flex gap-5">
          <Button
            btnText="Yes, I know for sure"
            type="button"
            variant="primary"
            iconVariant={false}
            extraClasses="rounded-md py-5 text-xl justify-center w-90"
            paddingVariant={false}
          />
          <Button
            btnText="No, cancel"
            type="button"
            variant="secondary"
            iconVariant={false}
            extraClasses="rounded-md py-5 text-xl justify-center w-90"
            paddingVariant={false}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
