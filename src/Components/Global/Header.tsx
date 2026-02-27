import { NavLink, useNavigate } from "react-router";
import Container from "../Container";
import Typography from "./Typography";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Logo from "/LOGO.png";
import Image from "./Image";
import { HeaderLinks } from "@/Data/ComponentData";
import Button from "./Button";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import AuthModal from "../Modal/AuthModal";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isVariant, setIsVariant] = useState<"login" | "register">("login");

  return (
    <header>
      <div className="border-primary-border border-b py-5">
        <Container extraClasses="flex items-center justify-between gap-4">
          <Typography
            variant="p"
            sizeVariant="small"
            colorVariant="black"
            text={"Tijdelijk alle boeken 10% korting! Gebruik code"}
          />

          <ul className="flex items-center gap-3 text-base tracking-widest uppercase">
            <li className="text-secondary">
              <Button
                btnText=""
                type="button"
                variant=""
                handleClick={() => {
                  setIsAuthOpen(true);
                  setIsVariant("login");
                }}
                extraClasses="flex items-center gap-1 uppercase"
              >
                <LuUserRound className="text-black" /> Login
              </Button>
            </li>
            <li className="text-secondary">
              <NavLink to="/login" className="flex items-center gap-1">
                <HiOutlineShoppingBag className="text-black" /> Cart
              </NavLink>
            </li>
          </ul>
        </Container>
      </div>
      <div className="py-5">
        <Container extraClasses="flex items-center justify-between gap-4">
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
            <ul className="text-accent items-center gap-4 pt-20 text-base tracking-widest uppercase md:flex md:pt-0 lg:gap-12.5">
              {HeaderLinks.map((item, index) => (
                <li key={index}>
                  {item.variant === "link" ? (
                    <NavLink to={item.link} className="block p-4 pl-0 md:p-0">
                      {item.text}
                    </NavLink>
                  ) : (
                    <Button
                      variant="primary"
                      btnText={item.text}
                      type="button"
                      handleClick={() => navigate(item.link)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      <AuthModal
        isOpen={isAuthOpen}
        handleClose={() => setIsAuthOpen(false)}
        variant={isVariant}
        handleVariant={setIsVariant}
      />
    </header>
  );
};

export default Header;
