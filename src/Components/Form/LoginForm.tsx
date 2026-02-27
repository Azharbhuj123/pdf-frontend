import Button from "../Global/Button";
import Input from "../Global/Input";
import Typography from "../Global/Typography";

const LoginForm = ({
  handleVariant,
}: {
  handleVariant: (variant: "register") => void;
}) => {
  return (
    <form className="space-y-10 text-black">
      <Typography
        text={"Login"}
        variant="h2"
        sizeVariant="giant"
        colorVariant="primary"
        extraClasses="font-extrabold"
      />

      <Typography
        text={"Login to access your travelwise account"}
        variant="p"
        extraClasses="!font-solway"
      />

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
          btnText="Login"
          type="submit"
          variant="primary"
          extraClasses="w-full justify-center font-plus-jakarta"
        />
        <span className="text-secondary block text-center text-sm font-medium">
          Don’t have an account?{" "}
          <span
            className="cursor-pointer text-black"
            onClick={() => handleVariant("register")}
          >
            Sign up
          </span>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
