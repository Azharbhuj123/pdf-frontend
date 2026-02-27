import Typography from "@/Components/Global/Typography";

const DefaultStep = () => {
  return (
    <section className="mx-auto max-w-5xl space-y-7.5 text-center">
      <Typography
        text={"Original Version"}
        variant="h2"
        colorVariant="black"
        sizeVariant="giant"
        extraClasses="font-medium"
      />
      <Typography
        text={
          "Your answers have been rewritten into a warm and continuous life story, including your photos and videos via QR code."
        }
        variant="p"
        colorVariant="black"
        sizeVariant="large"
      />

      <div className="shadow-dashboard h-320 w-full space-y-7.5 px-10.5 py-15">
        <Typography
          text={"Table of Contents"}
          variant="h2"
          colorVariant="black"
          sizeVariant="giant"
          extraClasses="font-medium"
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
    </section>
  );
};

export default DefaultStep;
