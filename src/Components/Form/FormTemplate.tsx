import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, type LoginFormType } from "@/Schema/FormSchema";
import Input from "../Global/Input";
import Button from "../Global/Button";
import Badge from "../Badge";
import { AwardIcon } from "@/Utils/Svg";
import Heading from "../Global/Heading";
import Accordion from "../Accordion";
import { useState } from "react";

const FormTemplate = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return your watch within 14 days of purchase with the original packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping rates are calculated at checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "After shipping, you’ll receive an email with a tracking link and updates.",
    },
  ];
  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormType>({ resolver: zodResolver(loginFormSchema) });

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Badge
        Icon={AwardIcon} 
        title={"Superior Quality"}
        content={"Up to 500 Pages of Quality Printing"}
      />

      <div className="space-y-5">
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === i}
            handleClick={() => handleToggle(i)}
          />
        ))}
      </div>
      <Heading
        title="Login"
        content="Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iaculis tortor mi maecenas ut nibh pellentesque. Cursus sed malesuada feugiat venenatis "
        headingVariant="main-heading"
      />
      <Input
        type="email"
        placeholderText="Enter your email"
        label="email"
        name="email"
        parentClasses="max-w-80"
        error={errors.email?.message}
        register={register("email")}
      />

      <Input
        type="password"
        placeholderText="Enter your password"
        label="password"
        name="password"
        parentClasses="max-w-80"
        error={errors.password?.message}
        register={register("password")}
      />

      <Button
        type="submit"
        variant="primary"
        btnText="Login"
        extraClasses="px-7.5 py-2.5"
      />
    </form>
  );
};

export default FormTemplate;
