import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../Global/Button";
import Input from "../Global/Input";
import Typography from "../Global/Typography";

const FamilyForm = () => {
  return (
    <form className="space-y-5">
      <section className="space-y-10">
        <Typography
          text={"My Family"}
          variant="h3"
          colorVariant="black"
          sizeVariant="xl"
          extraClasses="font-medium"
        />
        <div className="grid grid-cols-2 gap-7.5">
          <Input
            name=""
            type="text"
            label="Paternal grandfather"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
          <Input
            name=""
            type="text"
            label="Paternal grandmother"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
        </div>
        <div className="grid grid-cols-2 gap-7.5">
          <Input
            name=""
            type="text"
            label="Maternal grandfather"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
          <Input
            name=""
            type="text"
            label="Maternal grandmother"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
        </div>
        <div className="grid grid-cols-2 gap-7.5">
          <Input
            name=""
            type="text"
            label="Father"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
          <Input
            name=""
            type="text"
            label="Mother"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
        </div>
      </section>

      <section className="space-y-10">
        <Typography
          text={"Aunts and uncles"}
          variant="h3"
          colorVariant="black"
          sizeVariant="xl"
          extraClasses="font-medium"
        />
        <div className="grid grid-cols-2 gap-7.5">
          <Input
            name=""
            type="text"
            label="Uncle 1"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
          <Input
            name=""
            type="text"
            label="Aunt 1"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
        </div>
        <div className="grid grid-cols-2 gap-7.5">
          <Input
            name=""
            type="text"
            label="Uncle 2"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
          <Input
            name=""
            type="text"
            label="Aunt 2"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium"
          />
        </div>
      </section>

      <section className="space-y-10">
        <Typography
          text={"Brothers and sisters"}
          variant="h3"
          colorVariant="black"
          sizeVariant="xl"
          extraClasses="font-medium"
        />
        <div className="grid grid-cols-2 gap-7.5">
          <div className="relative">
            <Input
              name=""
              type="text"
              label="Brother"
              extraClasses="border-secondary-border"
              parentClasses="text-2xl font-medium flex flex-col gap-4"
            />
            <span className="absolute top-0 right-0 flex items-center gap-4">
              <Button
                btnText=""
                type="button"
                variant=""
                paddingVariant={false}
                iconVariant={false}
                extraClasses="p-2 border-black border"
              >
                <FaPlus />
              </Button>
              <Button
                btnText=""
                type="button"
                variant=""
                paddingVariant={false}
                iconVariant={false}
                extraClasses="p-2 border-black border"
              >
                <FaMinus />
              </Button>
            </span>
          </div>

          <div className="relative">
            <Input
              name=""
              type="text"
              label="Sisters"
              extraClasses="border-secondary-border"
              parentClasses="text-2xl font-medium flex flex-col gap-4"
            />
            <span className="absolute top-0 right-0 flex items-center gap-4">
              <Button
                btnText=""
                type="button"
                variant=""
                paddingVariant={false}
                iconVariant={false}
                extraClasses="p-2 border-black border"
              >
                <FaPlus />
              </Button>
              <Button
                btnText=""
                type="button"
                variant=""
                paddingVariant={false}
                iconVariant={false}
                extraClasses="p-2 border-black border"
              >
                <FaMinus />
              </Button>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-7.5">
          <div className="relative">
            <Input
              name=""
              type="text"
              label="Nephew or Niece"
              extraClasses="border-secondary-border"
              parentClasses="text-2xl font-medium flex flex-col gap-4"
            />
            <span className="absolute top-0 right-0 flex items-center gap-4">
              <Button
                btnText=""
                type="button"
                variant=""
                paddingVariant={false}
                iconVariant={false}
                extraClasses="p-2 border-black border"
              >
                <FaPlus />
              </Button>
              <Button
                btnText=""
                type="button"
                variant=""
                paddingVariant={false}
                iconVariant={false}
                extraClasses="p-2 border-black border"
              >
                <FaMinus />
              </Button>
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <Typography
          text={"Your own family"}
          variant="h3"
          colorVariant="black"
          sizeVariant="xl"
          extraClasses="font-medium"
        />
        <div className="grid grid-cols-2 gap-7.5">
          <Input
            name=""
            type="text"
            label="Your Name"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium flex flex-col gap-4"
          />

          <Input
            name=""
            type="text"
            label="Partner"
            extraClasses="border-secondary-border"
            parentClasses="text-2xl font-medium flex flex-col gap-4"
          />
        </div>

        <div className="grid grid-cols-2 gap-7.5">
          <div className="relative">
            <Input
              name=""
              type="text"
              label="Children"
              extraClasses="border-secondary-border"
              parentClasses="text-2xl font-medium flex flex-col gap-4"
            />
            <span className="absolute top-0 right-0 flex items-center gap-4">
              <Button
                btnText=""
                type="button"
                variant=""
                paddingVariant={false}
                iconVariant={false}
                extraClasses="p-2 border-black border"
              >
                <FaPlus />
              </Button>
              <Button
                btnText=""
                type="button"
                variant=""
                paddingVariant={false}
                iconVariant={false}
                extraClasses="p-2 border-black border"
              >
                <FaMinus />
              </Button>
            </span>
          </div>
        </div>
      </section>

      <Button
        btnText="Save Now"
        type="submit"
        variant="primary"
        iconVariant={false}
        extraClasses="mx-auto max-w-xs justify-center rounded-sm w-full"
      />
    </form>
  );
};

export default FamilyForm;
