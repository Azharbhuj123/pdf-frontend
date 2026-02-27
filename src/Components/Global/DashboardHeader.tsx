import { FaBarsStaggered } from "react-icons/fa6";
import Container from "../Container";
import Button from "./Button";
import Image from "./Image";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import Logo from "/LOGO.png";
import { NavLink } from "react-router";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-secondary-alt">
      <div className="py-5 shadow-md">
        <Container
          dashboardVariant={true}
          extraClasses="flex items-center justify-between gap-4"
        >
          <NavLink to="/">
            <Image src={Logo} alt="website logo" />
          </NavLink>
          <Button
            btnText=""
            type="button"
            variant=""
            handleClick={() => setIsOpen((prev) => !prev)}
          >
            <FaBarsStaggered className="block md:hidden" />
          </Button>
          <nav
            className={`fixed top-0 bottom-0 ${isOpen ? "left-0" : "-left-70"} bg-primary-border p-5 transition-[left] duration-300 md:static md:bg-inherit md:p-0`}
          >
            <ul className="items-center gap-6 pt-20 text-base md:flex md:pt-0">
              <li>
                <Button btnText="" type="button" variant="">
                  <FaBell />
                </Button>
              </li>
              <li>
                <Button
                  btnText=""
                  type="button"
                  variant=""
                  extraClasses="aspect-square w-12 overflow-hidden rounded-full"
                >
                  <Image
                    src="/book-2.png"
                    alt="profile image"
                    fit="object-cover"
                    extraClasses="w-full"
                  />
                </Button>
              </li>
              <li>
                <Button
                  btnText="Sample book"
                  variant="primary"
                  type="button"
                  iconVariant={false}
                  paddingVariant={false}
                  extraClasses="rounded-sm w-full text-xl justify-center py-5 px-11 font-bold"
                />
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default DashboardHeader;
