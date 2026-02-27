import Input from "../Global/Input";
import Typography from "../Global/Typography";

const ContactForm = () => {
  return (
    <form className="space-y-6 rounded-2xl bg-white px-7.5 py-10 shadow-2xl">
      <Typography
        sizeVariant="xl-alt"
        text={"Let’s Get In Touch"}
        variant="h2"
        colorVariant="primary"
      />
      <Input
        name=""
        type="text"
        placeholderText="Name"
        extraClasses="px-7 py-4.5 rounded-md border-tertiary"
      />
      <Input
        name=""
        type="text"
        placeholderText="Last Name"
        extraClasses="px-7 py-4.5 rounded-md border-tertiary"
      />
      <textarea
        className="border-tertiary w-full rounded-md border px-7 py-4.5"
        rows={15}
        placeholder="Message"
      ></textarea>
    </form>
  );
};

export default ContactForm;
