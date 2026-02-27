import Button from "@/Components/Global/Button";
import Typography from "@/Components/Global/Typography";

const Rewritten = () => {
  return (
    <section className="mx-auto space-y-7.5">
      <div className="max-w-3xl">
        <Typography
          text={"Rewritten version"}
          variant="h2"
          colorVariant="black"
          sizeVariant="giant"
          extraClasses="font-medium leading-18"
        />
        <Typography
          text={
            "Your answers have been rewritten into a warm and continuous life story, including your photos and videos via QR code."
          }
          variant="p"
          colorVariant="black"
          sizeVariant="large"
        />
        <Typography
          text={"Select which version you want to use on the right to continue"}
          variant="p"
          colorVariant="black"
          sizeVariant="large"
          extraClasses="font-medium"
        />
      </div>
      <section className="grid gap-15 lg:grid-cols-[1fr_max-content]">
        <div className="shadow-dashboard h-320 w-full space-y-7.5 px-10.5 py-15">
          <Typography
            text={"Table of Contents"}
            variant="h3"
            colorVariant="black"
            sizeVariant="giant"
            extraClasses="font-medium text-center"
          />
          <div className="flex items-center justify-between gap-2">
            <Typography
              text={"Chapter 1: My Family"}
              variant="p"
              colorVariant="black"
              sizeVariant="large"
            />
            <Typography
              text={"2"}
              variant="p"
              colorVariant="black"
              sizeVariant="large"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <Typography
              text={"Chapter 2: My Family"}
              variant="p"
              colorVariant="black"
              sizeVariant="large"
            />
            <Typography
              text={"8"}
              variant="p"
              colorVariant="black"
              sizeVariant="large"
            />
          </div>
        </div>

        <div className="mx-auto max-w-lg space-y-12.5">
          <div className="shadow-dashboard space-y-7.5 border border-black px-9 py-15 text-center">
            <Typography
              text={"Choose your version"}
              variant="h3"
              colorVariant="black"
              extraClasses="!text-2xl font-medium"
            />
            <Typography
              text={"What do you want to continue with?"}
              variant="p"
              colorVariant="black"
              sizeVariant="large"
            />
            <Button
              btnText="Your original stories"
              iconVariant={false}
              type="button"
              variant="primary"
              extraClasses="rounded-sm w-full justify-center py-5 font-bold text-xl"
              paddingVariant={false}
            />
            <Button
              btnText="The rewritten version"
              iconVariant={false}
              type="button"
              variant="secondary"
              extraClasses="rounded-sm w-full justify-center py-5 font-bold text-xl !border-black"
              paddingVariant={false}
            />
          </div>
          <div className="shadow-dashboard space-y-7.5 px-9 py-15">
            <Typography
              text={
                "How would you describe yourself as a child? What made you unique?"
              }
              variant="h3"
              colorVariant="black"
              sizeVariant="xl"
              extraClasses="font-medium"
            />
            <Typography
              text={
                "As a child, I was endlessly curious and full of imagination. I loved exploring new ideas, asking countless questions, and finding creative ways to turn simple things into something exciting. Whether it was building tiny houses out of cardboard or making up stories for my toys, I always found joy in creating something new. I had a strong sense of wonder about the world, and every little discovery felt like a big adventure. What made me unique was my ability to combine creativity with empathy. I loved helping others, whether it was sharing toys, explaining something I had learned"
              }
              variant="p"
              colorVariant="black"
              sizeVariant="large"
              extraClasses="line-clamp-14"
            />
            <Button
              btnText="Edit Story"
              iconVariant={false}
              type="button"
              variant="primary"
              extraClasses="rounded-sm w-full justify-center py-5 font-bold text-xl"
              paddingVariant={false}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Rewritten;
