import Footer from "@/Components/Global/Footer";
import Header from "@/Components/Global/Header";
import { Outlet } from "react-router";

const GlobalLayout = () => {
  return (
    <main className="home font-prata flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

export default GlobalLayout;
