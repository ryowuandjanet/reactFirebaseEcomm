import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet
          consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
