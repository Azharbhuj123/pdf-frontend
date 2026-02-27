import Modal from "../Global/Modal";
import Typography from "../Global/Typography";
import Input from "../Global/Input";
import { FaApplePay } from "react-icons/fa";
import Button from "../Global/Button";
import type { BaseModalProps } from "@/Types/ComponentTypes";

const PaymentModal = ({ isOpen, handleClose }: BaseModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      extraClasses="max-w-xl px-12 py-30 shadow-xl rounded-xl text-center"
    >
      <div className="max-w-118.5 space-y-5">
        <Typography
          variant="h1"
          colorVariant="primary"
          text={"Payment Information"}
          sizeVariant="xxl"
        />
        <Typography
          variant="p"
          colorVariant="secondary"
          text={
            "Give Your Parents the Joy of Sharing Their Life Story with Future Generations."
          }
          extraClasses="leading-8"
        />
      </div>
      <form className="space-y-5">
        <Input
          name=""
          type="text"
          placeholderText="Contact Information"
          extraClasses="px-7 py-4.5 rounded-md border-tertiary"
        />
        <label
          htmlFor="iPay"
          className="border-tertiary flex w-full items-center gap-2 rounded-md border px-7 py-4.5"
        >
          <FaApplePay className="text-4oxl shrink-0" />
          <input
            id="iPay"
            type="text"
            placeholder="iDeal"
            className="h-full w-full border-none focus-visible:outline-0"
          />
        </label>
        <label
          htmlFor="iPay"
          className="border-tertiary flex w-full items-center gap-2 rounded-md border px-7 py-4.5"
        >
          <FaApplePay className="text-4oxl shrink-0" />
          <input
            id="iPay"
            type="text"
            placeholder="iDeal"
            className="h-full w-full border-none focus-visible:outline-0"
          />
        </label>
        <Button
          btnText="pay"
          type="submit"
          variant="primary"
          extraClasses="w-[90%] justify-center mx-auto"
        />
      </form>
    </Modal>
  );
};

export default PaymentModal;
