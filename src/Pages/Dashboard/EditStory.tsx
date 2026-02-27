import Button from "@/Components/Global/Button";
import Typography from "@/Components/Global/Typography";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const EditStory = () => {
  return (
    <section className="space-y-14">
      <div className="flex items-center justify-between gap-4">
        <Button btnText="" type="button" variant="">
          <FaArrowLeftLong className="text-6xl text-black" />
        </Button>
        <Typography
          text={"What was your favorite childhood memory?"}
          variant="h1"
          colorVariant="black"
          sizeVariant="xxl"
          extraClasses="font-bold text-center"
        />
        <Button btnText="" type="button" variant="">
          <FaArrowRightLong className="text-6xl text-black" />
        </Button>
      </div>

      <div className="space-y-17.5 px-10 lg:px-25">
        <div className="shadow-dashboard rounded-2xl p-5 lg:p-10">
          <Typography
            text={`As a child, I was endlessly curious and full of imagination. I loved exploring new ideas, asking countless questions, and finding creative ways to turn simple things into something exciting. Whether it was building tiny houses out of cardboard or making up stories for my toys, I always found joy in creating something new. I had a strong sense of wonder about the world, and every little discovery felt like a big adventure.
                
                What made me unique was my ability to combine creativity with empathy. I loved helping others, whether it was sharing toys, explaining something I had learned, or simply listening to a friend. I wasn’t just interested in things—I was deeply interested in people, their feelings, and their stories. That mix of curiosity, imagination, and kindness made me stand out in a way that felt natural and true to who I was.`}
            variant="p"
            colorVariant="black"
            sizeVariant="xl"
            extraClasses="whitespace-pre-line"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-9 p-5 md:flex-nowrap lg:p-10">
          <Button
            btnText="Add media"
            type="button"
            variant="secondary"
            iconVariant={false}
            extraClasses="rounded-md py-4 text-xl justify-center w-60"
            paddingVariant={false}
          />
          <Button
            btnText="Add Text"
            type="button"
            variant="secondary"
            iconVariant={false}
            extraClasses="rounded-md py-4 text-xl justify-center w-60"
            paddingVariant={false}
          />
          <Button
            btnText="Record"
            type="button"
            variant="secondary"
            iconVariant={false}
            extraClasses="rounded-md py-4 text-xl justify-center w-60"
            paddingVariant={false}
          />
          <Button
            btnText="Spell check"
            type="button"
            variant="secondary"
            iconVariant={false}
            extraClasses="rounded-md py-4 text-xl justify-center w-60"
            paddingVariant={false}
          />
          <Button
            btnText="Save stories"
            type="button"
            variant="secondary"
            iconVariant={false}
            extraClasses="rounded-md py-4 text-xl justify-center w-60"
            paddingVariant={false}
          />
        </div>

        <div className="flex items-center justify-center gap-5">
          <Button
            btnText="Previous Question"
            type="button"
            variant="primary"
            iconVariant={false}
            extraClasses="rounded-md py-4 text-xl justify-center w-60"
            paddingVariant={false}
          />
          <Button
            btnText="Next Question"
            type="button"
            variant="primary"
            iconVariant={false}
            extraClasses="rounded-md py-4 text-xl justify-center w-60"
            paddingVariant={false}
          />
        </div>
      </div>
    </section>
  );
};

export default EditStory;
