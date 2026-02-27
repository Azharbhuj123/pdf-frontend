import DashboardHomeHeading from "@/Components/Dashboard Home Heading";
import Typography from "@/Components/Global/Typography";
import ChapterComponent from "@/Components/Shared/DynamicDashboardComponent";
import { useNavigate } from "react-router";

const Questions = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("");
  };
  return (
    <section>
      <DashboardHomeHeading
        title="Coming soon"
        content="Here you'll find all your life's questions in one place, neatly organized by chapter. Choose what you want to continue with."
      />
      <div className="space-y-7.5">
        <div>
          <Typography
            text={"Chapter 1"}
            variant="h4"
            colorVariant="black"
            sizeVariant="xxl"
            extraClasses="font-extrabold"
          />
          <ChapterComponent
            buttonText="Answer"
            title="Hoe zou je jezelf als kind omschrijven? Wat maakte je uniek?"
            questionVariant={false}
            handleAnswer={handleNavigate}
          />
        </div>
      </div>
    </section>
  );
};

export default Questions;
