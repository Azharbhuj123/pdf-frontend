import Container from "../Container";
import Image from "./Image";
import Typography from "./Typography";
import bookImage from "/dualbook.png";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "/LOGO.png";
import {
  FooterContactLinks,
  FooterIcons,
  FooterPayIcons,
  FooterQuickLinks,
  FooterUsefulLinks,
} from "@/Data/ComponentData";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer>
      <Container extraClasses="flex items-center justify-around gap-4 py-10.5 lg:flex-row flex-col lg:text-left text-center">
        <Image src={bookImage} alt="dual book image" width={265} height={235} />
        <Typography
          dualColorVariant={true}
          variant="h3"
          text={"Get $10 off when you subscribe"}
          colorVariant="primary"
          sizeVariant="xxl"
          finalTextClasses="text-accent"
          extraClasses="max-w-[13ch] capitalize"
        />
        <div className="w-full max-w-[48ch] space-y-8">
          <Typography
            variant="p"
            sizeVariant="small"
            colorVariant="secondary"
            text={
              "Lorem ipsum dolor sit amet consectetur. Mauris egestas at neque ut. Blandit vitae habitasse lectus"
            }
          />
          <form action="" className="border-b-primary text-primary border-b">
            <label
              htmlFor="newsletter"
              className="flex items-center justify-between gap-4 pb-4.5 hover:cursor-text"
            >
              <input
                id="newsletter"
                type="email"
                className="w-full max-w-104.5 border-none focus-visible:outline-none"
                placeholder="Enter your email address here"
              />
              <button className="flex cursor-pointer items-center justify-between gap-2.5 border-none bg-transparent uppercase">
                subscribe <FaTelegramPlane />
              </button>
            </label>
          </form>
        </div>
      </Container>

      <Container extraClasses="flex lg:gap-54.5 sm:gap-40 gap-10 pb-15 md:flex-row flex-col sm:text-left text-center">
        <div className="mx-auto max-w-81 space-y-2 text-center md:mx-0 md:text-left">
          <Image src={logo} alt="logo" extraClasses="md:mx-0 mx-auto" />
          <Typography
            variant="p"
            colorVariant="secondary"
            sizeVariant="small"
            text={"Elk verhaal verdient het om verteld te worden"}
            extraClasses="uppercase tracking-widest leading-9"
          />
          <ul className="flex items-center justify-center gap-12 pt-12.5 md:justify-start">
            {FooterIcons.map((item, index) => (
              <li
                key={index}
                className="text-secondary hover:text-accent cursor-pointer text-2xl whitespace-nowrap"
              >
                <item.Icon className="" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex grow flex-col justify-between gap-5 sm:flex-row sm:flex-wrap">
          <ul className="space-y-4">
            <Typography
              variant="h3"
              sizeVariant="large"
              colorVariant="primary"
              text={"Quick Links"}
              extraClasses="capitalize"
            />
            {FooterQuickLinks.map((item, index) => (
              <li
                key={index}
                className="text-secondary text-sm tracking-widest whitespace-nowrap uppercase"
              >
                <NavLink to={item.link}>{item.text}</NavLink>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            <Typography
              variant="h3"
              sizeVariant="large"
              colorVariant="primary"
              text={"Useful links"}
              extraClasses="capitalize"
            />
            {FooterUsefulLinks.map((item, index) => (
              <li
                key={index}
                className="text-secondary text-sm tracking-widest whitespace-nowrap uppercase"
              >
                <NavLink to={item.link}>{item.text}</NavLink>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            <Typography
              variant="h3"
              sizeVariant="large"
              colorVariant="primary"
              text={"Contact"}
              extraClasses="capitalize"
            />
            {FooterContactLinks.map((item, index) => (
              <li
                key={index}
                className="text-secondary text-sm tracking-widest uppercase"
              >
                <NavLink to={item.link}>{item.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <hr className="text-secondary-border" />

      <Container extraClasses="flex sm:flex-row flex-col justify-between items-center gap-5 py-8">
        <Typography
          variant="p"
          sizeVariant="small"
          colorVariant="secondary"
          text={"Ongeschreven Leven © 2025"}
        />

        <ul className="flex items-center gap-4">
          {FooterPayIcons.map((item, index) => (
            <li key={index} className="text-3xl">
              <item.Icon />
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
