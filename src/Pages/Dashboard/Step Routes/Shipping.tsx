import ShippingForm from "@/Components/Form/ShippingForm";
import Button from "@/Components/Global/Button";
import Image from "@/Components/Global/Image";
import Typography from "@/Components/Global/Typography";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Shipping = () => {
  return (
    <section className="space-y-10">
      <Typography
        text={"Shipping Information"}
        variant="h2"
        colorVariant="black"
        sizeVariant="giant"
        extraClasses="font-medium"
      />
      <div className="grid grid-cols-[1fr_max-content] items-center gap-13">
        <div className="space-y-10">
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className="shadow-dashboard flex items-center justify-between gap-2 px-11 py-7.5"
            >
              <div className="flex w-full max-w-lg items-center gap-12.5">
                <div className="w-31 shrink-0">
                  <Image
                    src="/book.png"
                    alt=""
                    fit="object-cover"
                    extraClasses="w-full"
                  />
                </div>
                <div className="space-y-5">
                  <Typography
                    text={"My Book"}
                    variant="h3"
                    colorVariant="black"
                    sizeVariant="xl"
                    extraClasses="font-medium"
                  />
                  <Typography
                    text={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    }
                    variant="p"
                    colorVariant="black"
                  />
                </div>
              </div>

              <div className="flex items-center gap-10 rounded-md border border-black px-10 py-5 font-bold">
                <FaMinus className="text-2xl" />
                <Typography text={"01"} variant="p" colorVariant="black" />
                <FaPlus className="text-2xl" />
              </div>

              <Typography
                text={"$900.00"}
                variant="p"
                colorVariant="black"
                sizeVariant="large"
              />
            </div>
          ))}
          <ShippingForm />
        </div>

        <div className="shadow-dashboard w-130 space-y-7.5 border border-black px-7.5 py-16.5">
          <div className="flex flex-col items-center gap-7.5">
            <div className="w-47.5">
              <Image
                src="/book.png"
                alt="book"
                fit="object-cover"
                extraClasses="w-full"
              />
            </div>
            <Typography
              text={"My Book"}
              variant="h3"
              colorVariant="black"
              sizeVariant="xl"
              extraClasses="font-medium"
            />
            <Typography
              text={"Quantity: 01"}
              variant="p"
              colorVariant="black"
            />
          </div>

          <div className="border-secondary-border flex items-center justify-between border-y px-3 py-7.5">
            <Typography
              text={"Subtotal"}
              variant="p"
              colorVariant="secondary"
            />
            <Typography text={"$900.00"} variant="p" colorVariant="secondary" />
          </div>

          <div className="flex items-center justify-between px-3 pb-7.5">
            <Typography text={"Total"} variant="p" colorVariant="secondary" />
            <Typography text={"$900.00"} variant="p" colorVariant="secondary" />
          </div>

          <Button
            btnText="Confirm"
            type="button"
            variant="primary"
            iconVariant={false}
            paddingVariant={false}
            extraClasses="font-bold text-xl mx-auto rounded-sm p-5 w-1/2 justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Shipping;
