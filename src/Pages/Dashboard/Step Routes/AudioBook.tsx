import Button from "@/Components/Global/Button";
import Image from "@/Components/Global/Image";
import Typography from "@/Components/Global/Typography";

const AudioBook = () => {
  return (
    <section className="space-y-7.5">
      <div className="mx-auto max-w-5xl space-y-7.5 text-center">
        <Typography
          text={"Your story, recorded as an audio book"}
          variant="h2"
          colorVariant="black"
          sizeVariant="giant"
          extraClasses="font-medium"
        />
        <Typography
          text={
            "Would you like to not only read your life story but also listen to it? We can. We'll transform your written book into a professionally narrated audiobook, with a voice of your choice."
          }
          variant="p"
          colorVariant="black"
          sizeVariant="large"
        />
      </div>
      <div className="bg-secondary-alt flex gap-12.5 px-10 py-17.5">
        <div className="w-full max-w-lg shrink-0">
          <Image
            src="/headphone.png"
            alt="headphone image"
            fit="object-cover"
            extraClasses="w-full"
          />
        </div>
        <div className="w-full space-y-7.5 text-center">
          <Typography
            text={"Choose one voice"}
            variant="h3"
            colorVariant="black"
            extraClasses="font-medium !text-2xl"
          />
          <div className="flex flex-col gap-7.5 md:flex-row">
            <Button
              btnText="Female Voice"
              type="button"
              variant="secondary"
              paddingVariant={false}
              extraClasses="flex-grow justify-center rounded-sm py-5 border-black !border-black font-bold text-xl"
              iconVariant={false}
            />
            <Button
              btnText="Male Voice"
              type="button"
              variant="secondary"
              paddingVariant={false}
              extraClasses="flex-grow justify-center rounded-sm py-5 border-black !border-black font-bold text-xl"
              iconVariant={false}
            />
          </div>

          <Typography
            text={"Press the speaker to listen"}
            variant="h3"
            colorVariant="black"
            extraClasses="font-medium !text-2xl"
          />
          <div className="flex flex-col items-center space-y-10 border border-black px-4 py-12.5">
            <Image
              src="/sound.png"
              alt="sound icon"
              fit="object-cover"
              width={88}
              height={98}
            />

            <Typography
              text={
                "Every Sunday my mother baked apple pie. The smell of cinnamon and warm apples still takes me back to that time."
              }
              variant="p"
              colorVariant="black"
              sizeVariant="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioBook;
