import { NavLink } from "react-router";
import Image from "../Global/Image";
import Typography from "../Global/Typography";
import { FaArrowRightLong } from "react-icons/fa6";
import type { BlogCardProps } from "@/Types/ComponentTypes";

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  name,
  date,
  title,
  summary,
  _id,
}) => {
  return (
    <article className="w-full max-w-75">
      <div className="w-full py-11">
        <Image
          width={142}
          fit="object-contain"
          src={image}
          alt="book cover"
          extraClasses="mx-auto"
        />
      </div>

      <div className="space-y-3">
        <ol className="text-primary-light marker:text-accent flex list-inside list-disc justify-between gap-2 text-sm">
          <li>{name}</li>
          <li>{date}</li>
        </ol>
        <Typography
          variant="h4"
          text={title}
          colorVariant="accent"
          sizeVariant="large"
        />
        <Typography variant="p" text={summary} colorVariant="primary-light" />
        <NavLink
          className="text-accent flex items-center gap-2 text-base tracking-widest uppercase"
          to={_id}
        >
          read <FaArrowRightLong />
        </NavLink>
      </div>
    </article>
  );
};

export default BlogCard;
