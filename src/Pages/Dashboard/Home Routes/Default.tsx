import Button from "@/Components/Global/Button";
import Typography from "@/Components/Global/Typography";
import BookmarkSvg from "@/Components/Svg/Svg";
import { NavLink } from "react-router";

const Default = () => {
  return (
    <section className="space-y-6">
      <div className="mx-auto max-w-5xl space-y-6 text-center">
        <Typography
          text={"That's how it works"}
          variant="h2"
          colorVariant="black"
          sizeVariant="xxl"
          extraClasses="font-extrabold"
        />
        <NavLink to={""} className="block text-xl text-blue-400 underline">
          Choose the book you want to dive into
        </NavLink>
        <Typography
          text={`Start creating your book in "Chapters." In the top right corner, you can manage everything: invite people, choose a cover, preview the book, order additional books, and finish.`}
          variant="p"
          colorVariant="black"
          sizeVariant="large"
        />
      </div>
      <div className="mx-auto flex max-w-[716px] flex-col items-center space-y-6 py-15 text-center">
        <BookmarkSvg width={174} height={123} />
        <Typography
          text={"You Have Answered Your Question of the Week"}
          variant="h2"
          colorVariant="black"
          sizeVariant="xxl"
          extraClasses="font-extrabold"
        />
        <Typography
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s`}
          variant="p"
          colorVariant="black"
          sizeVariant="large"
        />
        <Button
          btnText="Preview my Book"
          type="button"
          variant="primary"
          iconVariant={false}
          paddingVariant={false}
          extraClasses="rounded-sm font-bold w-full text-xl justify-center p-5"
        />
      </div>
    </section>
  );
};

export default Default;
