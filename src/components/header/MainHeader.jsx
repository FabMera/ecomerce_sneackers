import React, { useState } from "react";
import CartIcon from "./Icons/CartIcon";
import CloseIcon from "./Icons/CloseIcon";
import MenuIcon from "./Icons/MenuIcon";

const MainHeader = ({ LogoSneakes, AvatarImg }) => {
  const [navClass, setNavClass] = useState(
    " hidden h-full w-3/5 flex-col gap-y-5 bg-gray-400  p-8 font-bold"
  );
  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-3/5 flex-col gap-y-5 bg-gray-400  p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:h-auto"
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:h-auto"
    );
  };
  return (
    <>
      <header className="container mx-auto flex items-center gap-8 bg-gray-200 px-4 py-8">
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
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImg} alt="" className="w-10" />
        </div>
      </header>
    </>
  );
};

export default MainHeader;
