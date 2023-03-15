import React, { useState } from "react";
import CartIcon from "../../../Icons/CartIcon";
import CloseIcon from "../../../Icons/CloseIcon";
import MenuIcon from "../../../Icons/MenuIcon";
import NavLinkHeader from "./NavLinkHeader";
import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImg from "@/assets/images/image-avatar.png";

const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    " hidden md:flex md:gap-4 md:static md:mr-auto md:h-auto md:flex-row  p-8 font-bold"
  );
  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-3/5 flex-col bg-white py-4 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:h-auto z-10  "
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:h-auto"
    );
  };
  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-4 md:p-0 ">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakes}
          alt="logo Sneakers"
          className="mr-auto mb-1 h-5 md:mr-0 "
        />
        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collection" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Woman" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImg} alt="" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto block h-[0.5px] w-full bg-gray-200"></span>
    </>
  );
};

export default MainHeader;
