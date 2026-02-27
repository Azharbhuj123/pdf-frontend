import Button from "../Global/Button";
import Input from "../Global/Input";

const BookInfoModalForm = () => {
  return (
    <form className="space-y-10">
      <Input
        name=""
        type="text"
        label="Title (max. 20 characters)"
        parentClasses="text-2xl font-bold"
        extraClasses="!font-regular"
      />
      <Input
        name=""
        type="text"
        label="Author"
        parentClasses="text-2xl font-bold"
      />

      <Button
        btnText="Save"
        type="submit"
        variant="primary"
        iconVariant={false}
        paddingVariant={false}
        extraClasses="text-xl font-bold mx-auto justify-center max-w-xs w-full py-5 rounded-sm uppercase"
      />
    </form>
  );
};

export default BookInfoModalForm;
