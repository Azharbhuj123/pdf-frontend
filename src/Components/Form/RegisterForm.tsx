import Button from "../Global/Button";
import Input from "../Global/Input";
import Typography from "../Global/Typography";

const RegisterForm = () => {
  return (
    <form className="space-y-10 text-black">
      <Typography
        text={"Sign up"}
        variant="h2"
        sizeVariant="giant"
        colorVariant="primary"
        extraClasses="font-extrabold"
      />

      <Typography
        text={
          "Let’s get you all st up so you can access your personal account."
        }
        variant="p"
        extraClasses="!font-solway"
      />
      <div className="space-y-10 md:flex md:justify-between md:gap-2.5 md:space-y-0">
        <Input
          name=""
          type="text"
          label="First Name*"
          parentClasses="text-3xl font-medium"
          extraClasses="text-base"
          placeholderText="john.doe@gmail.com"
        />
        <Input
          name=""
          type="text"
          label="Last Name*"
          parentClasses="text-3xl font-medium"
          extraClasses="text-base"
          placeholderText="john.doe@gmail.com"
        />
      </div>
      <Input
        name=""
        type="email"
        label="Email*"
        parentClasses="text-3xl font-medium"
        extraClasses="text-base"
        placeholderText="john.doe@gmail.com"
      />
      <Input
        name=""
        type="password"
        label="Password*"
        parentClasses="text-3xl font-medium"
        extraClasses="text-base"
        placeholderText="•••••••••••••••••••••••••"
      />
      <div>
        <Button
          btnText="Sign Up  "
          type="submit"
          variant="primary"
          extraClasses="w-full justify-center font-plus-jakarta"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
