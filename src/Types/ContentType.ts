import type { IconType } from "react-icons/lib";
import type { StepComponentProps } from "./ComponentTypes";

export type HeaderLinkType = {
  link: string;
  text: string;
  variant: string;
};

export type FooterLinkType = {
  text: string;
  link: string;
};

export type FooterIconType = {
  Icon: IconType;
  link: string;
};

export type FooterPayIconType = {
  Icon: IconType;
};

export type StepContentType = Omit<
  StepComponentProps,
  "extraClasses" | "stepNumber"
>;

export type FaqContentType = {
  question: string;
  answer: string;
};

export type NavListType = {
  content: string;
  path: string;
};
