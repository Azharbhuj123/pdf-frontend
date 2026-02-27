import DashboardHomeHeading from "@/Components/Dashboard Home Heading";
import AddQuestionModal from "@/Components/Modal/AddQuestionModal";
import ConfirmationModal from "@/Components/Modal/ConfirmationModal";
import ChapterComponent from "@/Components/Shared/DynamicDashboardComponent";
import { useState } from "react";

const Chapters = () => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <section className="space-y-7.5">
      <DashboardHomeHeading
        title={"The following questions"}
        content={
          "Here you'll find upcoming questions. You can answer them now, delete them, or add your own."
        }
      />
      <div>
        <ChapterComponent
          buttonText="Add a question"
          title="Hoofdstuk 1: Familie"
          question={[
            "Question 1: How would you describe yourself as a child? What made you unique?",
          ]}
          handleQuestionOpen={() => setIsQuestionOpen(true)}
          handleDelete={() => setIsDeleteOpen(true)}
        />
      </div>
      <AddQuestionModal
        isOpen={isQuestionOpen}
        handleClose={() => setIsQuestionOpen(false)}
      />

      <ConfirmationModal
        isOpen={isDeleteOpen}
        handleClose={() => setIsDeleteOpen(false)}
      />
    </section>
  );
};

export default Chapters;
