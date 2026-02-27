import Container from "@/Components/Container";
import ContactForm from "@/Components/Form/ContactForm";
import Heading from "@/Components/Global/Heading";
import Typography from "@/Components/Global/Typography";
import { ContactUsData } from "@/Data/ComponentData";

const Contact = () => {
  return (
    <Container extraClasses="space-y-20 pt-20">
      <Heading
        headingVariant="main-heading"
        title="Contact Us"
        content="Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iacu"
      />

      <div className="grid items-center justify-center lg:grid-cols-2">
        <div className="max-w-120 space-y-5 px-10 text-center">
          <Typography
            sizeVariant="xl-alt"
            text={"Contact Info"}
            variant="h2"
            colorVariant="primary"
          />
          <Typography
            text={
              "Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iacu"
            }
            variant="p"
            colorVariant="secondary"
            extraClasses="leading-8"
          />

          <ul className="text-secondary space-y-5 text-base">
            {ContactUsData.map((item) => (
              <li className="flex items-start justify-center gap-2">
                <item.Icon className="text-accent shrink-0 text-2xl" />
                {item.content}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
