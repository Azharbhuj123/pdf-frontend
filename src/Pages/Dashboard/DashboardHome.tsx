import NavList from "@/Components/Global/NavList";
import Typography from "@/Components/Global/Typography";
import { DashboardNavData } from "@/Data/ComponentData";
import { useState } from "react";
import { Outlet } from "react-router";

const DashboardHome = () => {
  const [navSelected, setNavSelected] = useState(0);
  return (
    <div className="space-y-6">
      <div>
        <Typography
          text={"Welcome to Your Future Book"}
          variant="h1"
          colorVariant="black"
          sizeVariant="giant"
          extraClasses="font-extrabold"
        />
        <Typography
          text={"Choose the book you want to dive into"}
          variant="p"
          colorVariant="black"
          sizeVariant="large"
        />
      </div>
      <NavList
        NavData={DashboardNavData}
        navSelected={navSelected}
        setNavSelected={setNavSelected}
        borderVariant={false}
        extraClasses="gap-5 font-bold"
      />
      <Outlet />
    </div>
  );
};

export default DashboardHome;
