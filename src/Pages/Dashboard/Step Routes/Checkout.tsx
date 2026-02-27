import Button from "@/Components/Global/Button";
import Image from "@/Components/Global/Image";
import Typography from "@/Components/Global/Typography";
import { FaApplePay } from "react-icons/fa6";
import { NavLink } from "react-router";

const Checkout = () => {
  return (
    <section className="space-y-12.5">
      {" "}
      <Typography
        text={"Pay Safely and Easily"}
        variant="h2"
        colorVariant="black"
        sizeVariant="giant"
        extraClasses="font-bold"
      />
      <div className="grid grid-cols-[1fr_max-content] items-center justify-between gap-13">
        <div className="space-y-10">
          <Typography
            text={
              "You can pay with iDEAL, Apple Pay, Klarna, credit card, bank transfer or Google Pay."
            }
            variant="p"
            colorVariant="black"
            sizeVariant="large"
            extraClasses="font-bold px-9 py-6 bg-secondary-alt font-bold rounded-sm"
          />
          <Button
            btnText="Complete Order"
            type="button"
            variant="primary"
            iconVariant={false}
            paddingVariant={false}
            extraClasses="font-bold text-xl rounded-sm p-5 w-1/2 justify-center"
          />

          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div key={idx} className="bg-secondary-alt py-4">
                <FaApplePay className="mx-auto text-7xl" />
              </div>
            ))}
          </div>

          <div className="bg-secondary-alt w-full rounded-lg py-20 text-center">
            <div className="mx-auto max-w-140">
              <Typography
                text={"Privacy Statement"}
                variant="h3"
                colorVariant="black"
                sizeVariant="giant"
                extraClasses="font-medium leading-18"
              />
              <Typography
                text={
                  "We only use the information necessary to process your order—such as your name, shipping address, contact information, and payment information. Your information is stored securely and never shared with third parties without your permission. Click HERE"
                }
                variant="p"
                colorVariant="black"
                sizeVariant="large"
              />
              <NavLink to={""} className="text-xl text-blue-400">
                for our privacy policy.
              </NavLink>
            </div>
          </div>
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
            <div className="border-secondary-border w-full space-y-7.5 border-y py-7.5">
              <div className="flex items-center justify-between px-2.5">
                <Typography
                  text={"Number of Books"}
                  variant="p"
                  colorVariant="secondary"
                />
                <Typography text={"02"} variant="p" colorVariant="secondary" />
              </div>
              <div className="flex items-center justify-between px-2.5">
                <Typography
                  text={"Extra Copies"}
                  variant="p"
                  colorVariant="secondary"
                />
                <Typography text={"0"} variant="p" colorVariant="secondary" />
              </div>
              <div className="flex items-center justify-between px-2.5">
                <Typography
                  text={"Subtotal "}
                  variant="p"
                  colorVariant="secondary"
                />
                <Typography
                  text={"$900"}
                  variant="p"
                  colorVariant="secondary"
                />
              </div>
              <div className="flex items-center justify-between px-2.5">
                <Typography
                  text={"Dispatch"}
                  variant="p"
                  colorVariant="secondary"
                />
                <Typography
                  text={"Free"}
                  variant="p"
                  colorVariant="secondary"
                />
              </div>
            </div>

            <div className="border-secondary-border w-full border-b pb-7.5">
              <div className="flex items-center justify-between px-2.5">
                <Typography text={"Total"} variant="p" colorVariant="black" />
                <Typography text={"$900"} variant="p" colorVariant="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
