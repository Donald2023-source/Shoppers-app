"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductData, StoreState } from "../../types";
import CartItem from "./CartItem";
import { resetCart } from "@/redux/shoppersSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import emptyCart from "../../public/emptyCart.png";

const CartContainer = () => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);
  const dispatch = useDispatch();
  const handleReset = () => {
    const confirmed = window.confirm("Are you sure you want to reset cart");
    if (confirmed) {
      dispatch(resetCart());
      toast.success("Cart reset successfully");
    }
  };
  return (
    <div>
      <div>
        {cart?.length > 0 ? (
          <div className="pb-20">
            <div className="w-full h-20 bg-white/80 text-black hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
              <h2 className="col-span-2">Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Sub Total</h2>
            </div>
            <div className="mb-5">
              {cart?.map((item: ProductData) => (
                <CartItem key={item._id} cart={cart} item={item} />
              ))}
            </div>
            <button
              onClick={handleReset}
              className="px-10 cursor-pointer py-3 bg-red-600 rounded-lg text-white mb-4 hover:bg-red-700 "
            >
              Reset cart
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 py-32"
          >
            <div>
              <Image
                src={emptyCart}
                alt="emptyCart"
                className="w-80 rounded-lg p-4 mx-auto"
              />
            </div>
            <div className="max-w-[500px] p-4 py-8 bg-white flex flex-col gap-4 items-center rounded-md shadow-lg">
              <h1 className="text-xl font-bold uppercase">
                Your Cart feels lonely.
              </h1>
              <p className="text-sm text-center px-10 -mt-2">
                Your Shopping cart lives to serve. Give it purpose - fill it
                with books, electronics, videos, etc. and make it happy.
              </p>
              <Link
                href={"/"}
                className="bg-lightOrange text-white hover:bg-darkOrange hoverEffect px-8 py-3 rounded-lg font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
