import type { PerksSectionProps } from "@/Types/ComponentTypes";
import type {
  FaqContentType,
  FooterIconType,
  FooterLinkType,
  FooterPayIconType,
  HeaderLinkType,
  NavListType,
  StepContentType,
} from "@/Types/ContentType";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import {
  FaAmazonPay,
  FaApplePay,
  FaCcVisa,
  FaFacebook,
  FaGooglePay,
  FaInstagram,
  FaLinkedin,
  FaPaypal,
  FaTwitter,
} from "react-icons/fa6";

export const HeaderLinks: HeaderLinkType[] = [
  {
    link: "/products",
    text: "books",
    variant: "link",
  },
  {
    link: "/how-it-works",
    text: "how it works",
    variant: "link",
  },
  {
    link: "/news",
    text: "News",
    variant: "link",
  },
  {
    link: "/contact-us",
    text: "Contact",
    variant: "link",
  },
  {
    link: "/",
    text: "get started",
    variant: "button",
  },
];

export const FooterIcons: FooterIconType[] = [
  {
    Icon: FaFacebook,
    link: "",
  },
  {
    Icon: FaInstagram,
    link: "",
  },
  {
    Icon: FaLinkedin,
    link: "",
  },
  {
    Icon: FaTwitter,
    link: "",
  },
];

export const FooterQuickLinks: FooterLinkType[] = [
  {
    text: "Book",
    link: "",
  },
  {
    text: "How it works",
    link: "",
  },
  {
    text: "news",
    link: "",
  },
  {
    text: "contact",
    link: "",
  },
];

export const FooterUsefulLinks: FooterLinkType[] = [
  {
    text: "Privacy statement",
    link: "",
  },
  {
    text: "Terms and Conditions",
    link: "",
  },
];

export const FooterContactLinks: FooterLinkType[] = [
  {
    text: "info@ongescrevenleven.nl",
    link: "mailto:info@ongescrevenleven.nl",
  },
  {
    text: "0643218765",
    link: "tel:+0643218765",
  },
];

export const FooterPayIcons: FooterPayIconType[] = [
  {
    Icon: FaCcVisa,
  },
  {
    Icon: FaGooglePay,
  },
  {
    Icon: FaApplePay,
  },
  {
    Icon: FaAmazonPay,
  },
  {
    Icon: FaPaypal,
  },
];

export const StepsContent: StepContentType[] = [
  {
    image: "https://picsum.photos/800/800",
    title: "Lorem Ipsum, commonly used",
    content:
      "Tempor ultricies dictum fermentum semper massa suspendisse. Arcu elit ut mauris fringilla mauris dictum ipsum purus sapien. Varius mi massa orci",
    variant: "normal",
  },
  {
    image: "https://picsum.photos/800/800",
    title: "Lorem Ipsum, commonly used",
    content:
      "Tempor ultricies dictum fermentum semper massa suspendisse. Arcu elit ut mauris fringilla mauris dictum ipsum purus sapien. Varius mi massa orci",
    variant: "reverse",
  },
  {
    image: "https://picsum.photos/800/800",
    title: "Lorem Ipsum, commonly used",
    content:
      "Tempor ultricies dictum fermentum semper massa suspendisse. Arcu elit ut mauris fringilla mauris dictum ipsum purus sapien. Varius mi massa orci",
    variant: "normal",
  },
  {
    image: "https://picsum.photos/800/800",
    title: "Lorem Ipsum, commonly used",
    content:
      "Tempor ultricies dictum fermentum semper massa suspendisse. Arcu elit ut mauris fringilla mauris dictum ipsum purus sapien. Varius mi massa orci",
    variant: "reverse",
  },
  {
    image: "https://picsum.photos/800/800",
    title: "Lorem Ipsum, commonly used",
    content:
      "Tempor ultricies dictum fermentum semper massa suspendisse. Arcu elit ut mauris fringilla mauris dictum ipsum purus sapien. Varius mi massa orci",
    variant: "normal",
  },
];

export const PerksContent: PerksSectionProps[] = [
  {
    title: "No Writing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
  },
  {
    title: "No Logins",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
  },
  {
    title: "No Downloads",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
  },
];

export const FaqContent: FaqContentType[] = [
  {
    question: "When did Webflow was founded?",
    answer:
      "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
  },
  {
    question: "When did Webflow was founded?",
    answer:
      "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
  },
  {
    question: "When did Webflow was founded?",
    answer:
      "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
  },
  {
    question: "When did Webflow was founded?",
    answer:
      "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
  },
  {
    question: "When did Webflow was founded?",
    answer:
      "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
  },
  {
    question: "When did Webflow was founded?",
    answer:
      "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
  },
];

export const ContactUsData = [
  {
    Icon: FaEnvelope,
    content: "Tempory12452@gmail.com",
  },
  {
    Icon: FaPhone,
    content: "+1 3567378 34434334",
  },
  {
    Icon: FaLocationArrow,
    content: "united state street no 4 new york ciry 345564 52345 232234233",
  },
];

export const DashboardNavData: NavListType[] = [
  {
    path: "",
    content: "Question of the Week",
  },
  {
    path: "chapters",
    content: "Chapter",
  },
  {
    path: "questions",
    content: "All questions",
  },
  {
    path: "family",
    content: "My family",
  },
];

export const DashboardStepsData: NavListType[] = [
  {
    path: "",
    content: "Original text",
  },
  {
    path: "rewritten",
    content: "Rewritten",
  },
  {
    path: "audio-book",
    content: "Audio Book",
  },
  {
    path: "book-cover",
    content: "Book Cover",
  },
  {
    path: "controls",
    content: "Controls",
  },
  {
    path: "shipping",
    content: "Shipping",
  },
  {
    path: "checkout",
    content: "Checkout",
  },
];
