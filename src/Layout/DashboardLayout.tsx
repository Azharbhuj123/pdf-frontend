import Container from "@/Components/Container";
import DashboardHeader from "@/Components/Global/DashboardHeader";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <main className="font-solway bg-background-dashboard flex min-h-screen flex-col">
      <DashboardHeader />
      <Container dashboardVariant={true} extraClasses="flex-grow py-17.5">
        <Outlet />
      </Container>
    </main>
  );
};

export default DashboardLayout;
