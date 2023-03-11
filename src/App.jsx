import React from "react";
import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImg from "@/assets/images/image-avatar.png";
import MainHeader from "./components/header/MainHeader";

const App = () => {
  return (
    <>
      <MainHeader LogoSneakes={LogoSneakes} AvatarImg={AvatarImg} />
      <main>
        <section>Galeria de Imagenes</section>
        <section>
          <p>Sneaker Company</p>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear
            companion.Featuring a durable rubber outer sole,they'all withstand
            everything the weather can offer.
          </p>
          <p>
            <span>$125.00</span>
            <span>50%</span>
          </p>
          <p>$250.00</p>
          <div>
            <div>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <button>Add to Cart</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
