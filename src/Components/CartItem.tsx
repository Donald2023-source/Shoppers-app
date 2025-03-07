"use client";
import React from "react";
import { ProductData } from "../../types";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { removeFromCart } from "@/redux/shoppersSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
  cart: ProductData[];
  item: ProductData;
}
const CartItem = ({ cart, item }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex cols-span-5 md:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => {
            dispatch(removeFromCart(item._id));
            toast.success(
              `${item?.title.substring(0, 12)} removed successfully`
            );
          }}
          className="text-black hover:text-orange-500 cursor-pointer duration-300"
        />
        <Link href={`/product/${item?.slug.current}`}>
          <Image
            width={200}
            height={200}
            src={urlFor(item?.image).url()}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
