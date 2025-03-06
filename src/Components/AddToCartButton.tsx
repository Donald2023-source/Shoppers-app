"use client";
import React from "react";
import { ProductData } from "../../types";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppersSlice";
import toast from "react-hot-toast";

interface Props {
  item: ProductData;
  className?: string;
}
const AddToCartButton = ({ item, className }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item?.title.substring(0, 12)} added Successfully`);
  };
  return (
    <button
    onClick={handleAddToCart}
      className={twMerge(
        "bg-black w-full hover:bg-orange-400 hoverEffect cursor-pointer rounded text-white py-2 border border-px border-slate-400 font-semibold tracking-wide flex items-center justify-center gap-1",
        className
      )}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
