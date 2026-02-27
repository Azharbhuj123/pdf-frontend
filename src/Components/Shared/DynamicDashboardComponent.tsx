import type { DynamicDashboardComponentProps } from "@/Types/ComponentTypes";
import Button from "../Global/Button";
import Typography from "../Global/Typography";

const ChapterComponent = ({
  questionVariant = true,
  title,
  buttonText,
  question,
  handleQuestionOpen,
  handleAnswer,
  handleDelete,
}: DynamicDashboardComponentProps) => {
  return (
    <div className="space-y-5 text-center lg:text-left">
      <div className="bg-secondary-alt flex flex-col items-center justify-between gap-4 p-7.5 lg:flex-row">
        <Typography
          text={title}
          variant={questionVariant ? "h3" : "h4"}
          sizeVariant="xl-alt"
          colorVariant="black"
          extraClasses="font-medium"
        />
        <Button
          btnText={buttonText}
          type="button"
          variant="primary"
          iconVariant={false}
          paddingVariant={false}
          extraClasses="py-3 px-4 rounded-sm font-bold text-xl"
          handleClick={questionVariant ? handleQuestionOpen : handleAnswer}
        />
      </div>
      {questionVariant &&
        question?.map((item) => (
          <div className="bg-secondary-alt flex flex-col items-center justify-between gap-4 p-7.5 lg:flex-row">
            <Typography
              text={item}
              variant="h4"
              sizeVariant="xl"
              colorVariant="black"
              extraClasses="font-medium"
            />
            <div className="flex items-center gap-5">
              <Button
                btnText={"Answer"}
                type="button"
                variant="success"
                iconVariant={false}
                paddingVariant={false}
                extraClasses="py-3 px-6 rounded-sm font-bold text-xl"
                handleClick={handleAnswer}
              />
              <Button
                btnText={"Remove"}
                type="button"
                variant="danger"
                iconVariant={false}
                paddingVariant={false}
                handleClick={handleDelete}
                extraClasses="py-3 px-6 rounded-sm font-bold text-xl"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChapterComponent;
