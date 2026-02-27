import type { AuthModalProps } from "@/Types/ComponentTypes";
import LoginForm from "../Form/LoginForm";
import RegisterForm from "../Form/RegisterForm";
import Button from "../Global/Button";
import Image from "../Global/Image";
import Modal from "../Global/Modal";
import { IoIosCloseCircle } from "react-icons/io";

const AuthModal = ({
  variant,
  isOpen,
  handleClose,
  handleVariant,
}: AuthModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      extraClasses="max-w-7xl font-solway px-5 py-5 lg:px-12 lg:py-10 max-h-[95vh] overflow-y-scroll hide-scrollbar"
    >
      <div className="flex items-center justify-between">
        <Image src="/LOGO.png" alt="site logo" />
        <Button handleClick={handleClose} btnText="" type="button" variant="">
          <IoIosCloseCircle className="text-7xl text-red-500" />
        </Button>
      </div>
      <div className="grid items-center lg:grid-cols-2">
        {variant === "login" ? (
          <LoginForm handleVariant={handleVariant} />
        ) : (
          <RegisterForm />
        )}
        <div className="hidden w-full lg:block">
          <Image
            src="/hero-img.png"
            alt="Auth Modal image"
            fit="object-cover"
            // extraClasses="w-full h-full"
          />
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
