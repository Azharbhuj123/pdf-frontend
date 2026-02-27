import Typography from "@/Components/Global/Typography";
import DashboardSteps from "@/Components/Dashboard Steps";
import { DashboardStepsData } from "@/Data/ComponentData";
import { useState } from "react";
import { Outlet } from "react-router";

const DashboardReview = () => {
  const [navSelected, setNavSelected] = useState(0);
  return (
    <div className="space-y-17.5">
      <div>
        <Typography
          text={"Review my book"}
          variant="h1"
          colorVariant="black"
          sizeVariant="giant"
          extraClasses="font-extrabold leading-20"
        />
        <Typography
          text={"Choose the book you want to dive into"}
          variant="p"
          colorVariant="black"
          sizeVariant="large"
        />
      </div>
      <DashboardSteps
        NavData={DashboardStepsData}
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      />
      <Outlet />
    </div>
  );
};

export default DashboardReview;
