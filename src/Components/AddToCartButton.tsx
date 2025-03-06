import React from "react";
import { ProductData } from "../../types";
import { twMerge } from "tailwind-merge";

interface Props {
  item: ProductData;
  className?: string;
}
const AddToCartButton = ({ item, className }: Props) => {
  return (
    <button
      className={twMerge(
        "bg-black w-full hover:bg-orange-400 hoverEffect cursor-pointer rounded text-white py-2 border border-px border-slate-400 font-semibold tracking-wide flex items-center justify-center gap-1", className
      )}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
