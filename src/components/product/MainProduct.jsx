import React from "react";
import DetailsProducts from "@/components/product/DetailsProducts";
import SlideProducts from "./SlideProducts";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <SlideProducts/>
      <DetailsProducts />
    </main>
  );
};

export default MainProduct;
