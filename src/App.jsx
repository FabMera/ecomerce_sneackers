import React from "react";
import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImg from "@/assets/images/image-avatar.png";
import MainHeader from "./components/header/MainHeader";
import MainProduct from "./components/product/MainProduct";

const App = () => {
  return (
    <>
      <MainHeader LogoSneakes={LogoSneakes} AvatarImg={AvatarImg} />
      <MainProduct />
    </>
  );
};

export default App;
