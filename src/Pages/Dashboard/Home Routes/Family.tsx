import DashboardHomeHeading from "@/Components/Dashboard Home Heading";
import FamilyForm from "@/Components/Form/FamilyForm";

const Family = () => {
  return (
    <section>
      <DashboardHomeHeading
        title="Your family in the picture"
        content="Enter your family names here. We'll create a family tree that will be printed in your book."
      />

      <FamilyForm />
    </section>
  );
};

export default Family;
