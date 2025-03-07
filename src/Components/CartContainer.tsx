"use client";
import React from "react";
import { useSelector } from "react-redux";
import { ProductData, StoreState } from "../../types";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);
  const handleReset = () => {
    
  }
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
                {
                    cart?.map((item: ProductData) => (
                        <CartItem key={item._id} cart={cart} item={item}/>
                    ))
                }
            </div>
            <button className="px-10 cursor-pointer py-3 bg-red-600 rounded-lg text-white mb-4 hover:bg-red-700 ">Reset cart</button>
          </div>
        ) : (
          <div>No Product</div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
