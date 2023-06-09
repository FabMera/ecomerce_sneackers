import React, { useState } from "react";
import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";
import PrevIcon from "../../../Icons/PrevIcon";
import NextIcon from "../../../Icons/NextIcon";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const SlideProducts = () => {
  const [index, setIndex] = useState(0);

  const handleClicNext = () => {
    /* si el index es igual al tamaño del array en su ultima posicion retorna 0 
    de lo contrario va sumando 1 
    */
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length -1) : setIndex(index -1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative col-span-4 ">
        <img src={ARRAY_IMGS[index]} alt="" className="aspect-[16/12] w-full " />
        <div className="absolute top-1/2 left-0    flex w-full -translate-y-1/2  justify-between px-4">
          <button
            onClick={handleClickPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-75 hover:bg-orange-100"
          >
            <PrevIcon />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-75 hover:bg-orange-100">
            <NextIcon onClick={handleClicNext} />
          </button>
        </div>
      </div>
      <img src={imgProductSmall1} alt="" className="hidden md:block" />
      <img src={imgProductSmall2} alt="" className="hidden md:block" />
      <img src={imgProductSmall3} alt="" className="hidden md:block" />
      <img src={imgProductSmall4} alt="" className="hidden md:block" />
    </section>
  );
};

export default SlideProducts;
