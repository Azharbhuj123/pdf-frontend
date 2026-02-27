import type { UseFormRegisterReturn } from "react-hook-form";
import type { NavListType } from "./ContentType";

export type ContainerProps = {
  children: React.ReactNode;
  extraClasses?: string;
  dashboardVariant?: boolean;
};

export type InputProps = {
  name: string;
  initialValue?: string;
  type: string;
  label?: string;
  disable?: boolean;
  placeholderText?: string;
  extraClasses?: string;
  parentClasses?: string;
  error?: string;
  register?: UseFormRegisterReturn;
};

export type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fit?:
    | "object-contain"
    | "object-cover"
    | "object-fill"
    | "object-none"
    | "object-scale-down";
  loading?: "lazy" | "eager";
  extraClasses?: string;
  onErrorFallbackSrc?: string;
};

export type ButtonProps = {
  children?: React.ReactNode;
  extraClasses?: string;
  type: "button" | "submit" | "reset";
  btnText: string;
  disable?: boolean;
  variant: "primary" | "secondary" | "danger" | "success" | "";
  handleClick?: () => void;
  iconVariant?: boolean;
  paddingVariant?: boolean;
};

export type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  // children?: React.ReactNode;
  text: string | number;
  extraClasses?: string;
  finalTextClasses?: string;
  sizeVariant?:
    | "small"
    | "medium"
    | "large"
    | "xl"
    | "xl-alt"
    | "xxl"
    | "giant"
    | "huge";
  colorVariant?:
    | "primary"
    | "primary-light"
    | "secondary"
    | "accent"
    | "info"
    | "black"
    | "white";
  dualColorVariant?: boolean;
};

export type DiamondImageProps = {
  imgUrl: string;
  extraClasses?: string;
};

export type StepComponentProps = {
  variant: "normal" | "reverse";
  extraClasses?: string;
  stepNumber: number;
  title: string;
  content: string;
  image: string;
};

export type SVGComponentProps = {
  extraClasses?: string;
  props?: React.SVGProps<SVGSVGElement>;
};

export type BadgeProps = {
  content?: string;
  title: string;
  extraClasses?: string;
  Icon: React.FC<SVGComponentProps>;
};

export type HeadingProps = {
  headingVariant: "main-heading" | "sub-heading";
  title: string;
  content: string;
};

export type AccordionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  handleClick: () => void;
};

export type PerksSectionProps = {
  title: string;
  content: string;
};

export interface DynamicSectionProps extends PerksSectionProps {
  variant: "buttonVariant" | "textVariant";
  extraClasses?: string;
  image: string;
}

export type BlogCardProps = {
  image: string;
  name: string;
  date: string;
  title: string;
  summary: string;
  _id: string;
};

export type BaseModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  extraClasses?: string;
};

export interface AuthModalProps extends BaseModalProps {
  variant: "login" | "register";
  handleVariant: (variant: "login" | "register") => void;
}

export type NavListProps = {
  NavData: NavListType[];
  navSelected: number;
  setNavSelected: (selectedNav: number) => void;
  extraClasses?: string;
  borderVariant?: boolean;
};

export type DynamicDashboardComponentProps = {
  questionVariant?: boolean;
  title: string;
  buttonText: string;
  question?: string[];
  handleQuestionOpen?: () => void;
  handleAnswer?: () => void;
  handleDelete?: () => void;
};

export type DashboardHomeHeadingProps = Omit<HeadingProps, "headingVariant">;
