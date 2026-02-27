import type { BadgeProps } from "@/Types/ComponentTypes";
import type { NavListType } from "@/Types/ContentType";
import { AwardIcon } from "@/Utils/Svg";
// import { FaHouseMedical } from "react-icons/fa6";

export const HomeBadges: Omit<BadgeProps, "extraClasses" | "content">[] = [
  {
    Icon: AwardIcon,
    title: "Superior Quality",
  },
  {
    Icon: AwardIcon,
    title: "Superior Quality",
  },
  {
    Icon: AwardIcon,
    title: "Superior Quality",
  },
  {
    Icon: AwardIcon,
    title: "Superior Quality",
  },
];

export const HomeBadgesAlt: Omit<BadgeProps, "extraClasses">[] = [
  {
    Icon: AwardIcon,
    title: "Superior Quality",
    content: "Voice-to-Text Transcription Available",
  },
  {
    Icon: AwardIcon,
    title: "Superior Quality",
    content: "Voice-to-Text Transcription Available",
  },
  {
    Icon: AwardIcon,
    title: "Superior Quality",
    content: "Voice-to-Text Transcription Available",
  },
  {
    Icon: AwardIcon,
    title: "Superior Quality",
    content: "Voice-to-Text Transcription Available",
  },
];

export const BlogNavData: NavListType[] = [
  {
    path: "",
    content: "All",
  },
  {
    path: "",
    content: "Gifts",
  },
  {
    path: "",
    content: "Tips & Tricks",
  },
  {
    path: "",
    content: "Great Questions",
  },
  {
    path: "",
    content: "Webinars",
  },
  {
    path: "",
    content: "Customer Reviews",
  },
  {
    path: "",
    content: "the science storytelling",
  },
];
