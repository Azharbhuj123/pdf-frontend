import Button from "../Global/Button";
import Input from "../Global/Input";

const ShippingForm = () => {
  return (
    <form className="space-y-10 text-black">
      <div className="space-y-10 md:flex md:justify-between md:gap-7.5 md:space-y-0">
        <Input
          name=""
          type="text"
          label="First Name"
          parentClasses="text-3xl font-medium"
          extraClasses="text-base border-secondary-border border-secondary-border"
        />
        <Input
          name=""
          type="text"
          label="Last Name"
          parentClasses="text-3xl font-medium"
          extraClasses="text-base border-secondary-border"
        />
      </div>
      <div className="space-y-10 md:flex md:justify-between md:gap-7.5 md:space-y-0">
        <Input
          name=""
          type="email"
          label="Email"
          parentClasses="text-3xl font-medium"
          extraClasses="text-base border-secondary-border"
        />
        <Input
          name=""
          type="text"
          label="Phone Number"
          parentClasses="text-3xl font-medium"
          extraClasses="text-base border-secondary-border"
        />
      </div>
      <div className="space-y-10 md:flex md:justify-between md:gap-7.5 md:space-y-0">
        <Input
          name=""
          type="text"
          label="City"
          parentClasses="text-3xl font-medium"
          extraClasses="text-base border-secondary-border"
        />
        <Input
          name=""
          type="text"
          label="State"
          parentClasses="text-3xl font-medium"
          extraClasses="text-base border-secondary-border"
        />
      </div>
      <div>
        <Button
          btnText="Confirm"
          type="submit"
          variant="primary"
          iconVariant={false}
          paddingVariant={false}
          extraClasses=" justify-center py-5 w-full max-w-3xs text-xl font-bold rounded-sm"
        />
      </div>
    </form>
  );
};

export default ShippingForm;
