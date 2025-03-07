"use client";
import React, { useEffect, useState } from "react";
import { ProductData } from "../../types";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/shoppersSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import FormattedPrice from "./FormattedPrice";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  cart: ProductData[];
  item: ProductData;
}
const CartItem = ({ cart, item }: Props) => {
  const dispatch = useDispatch();
  const [existingProduct, setExistingProduct] = useState<ProductData | null>(
    null
  );

  useEffect(() => {
    const availableProduct = cart?.find(
      (product: ProductData) => product?._id === item?._id
    );
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, item]);

  const handleMinus = () => {
    if ((existingProduct?.quantity as number) > 1) {
      dispatch(decreaseQuantity(item._id));
      toast.success("Quantity descresed Successfully");
    } else {
      toast.error("Quanitiy cannot be less than 1");
    }
  };
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="col-span-5 md:col-span-2 flex items-center gap-4 ml-4">
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
      <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 lg:px-0">
        <p className="flex  w-1/2 items-center text-lg font-bold">
          <FormattedPrice amount={item?.price} />
        </p>

        <div className="w-1/3 flex items-center gap-6 text-lg">
          <button
            onClick={handleMinus}
            className="w-6 h-6 bg-gray-100 text-sm flex items-center justify-center hover:bg-orange-200 cursor-pointer border-[1px] hover:border-bg-orange-500 hoverEffect"
          >
            <FaMinus />
          </button>
          <p className="text-sm font-semibold">{item?.quantity}</p>
          <button
            onClick={() => {
              dispatch(increaseQuantity(item?._id));
              toast.success("Quantity increased successfully");
            }}
            className="w-6 h-6 bg-gray-100 text-sm flex items-center justify-center hover:bg-orange-200 cursor-pointer border-[1px] hover:border-bg-orange-500 hoverEffect"
          >
            <FaPlus />
          </button>
        </div>
        <div className="w-1/3 flex items-center font-bold textlg">
          <FormattedPrice amount={item?.quantity * item?.price} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
