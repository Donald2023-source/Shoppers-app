import React from "react";
import { ProductData } from "../../types";
import { getProductsData } from "@/lib/getData";
import products from "@/sanity/schemas/products";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const Products: ProductData[] = await getProductsData();

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {Products.map((item) => (
        <ProductCard item={item} key={item?._id} />
      ))}
    </div>
  );
};

export default ProductList;
