"use client";
import { StoreState } from "@/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import Loader from "./Loader";
import { HiCheckCircle, HiInformationCircle, HiMail } from "react-icons/hi";
import { resetCart } from "@/redux/shoppersSlice";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import toast from "react-hot-toast";
const SucessContainer = ({ id }: { id: string }) => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);
  const [totalAmt, setTotalAmt] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state: StoreState) => state.shoppers.userInfo);

  useEffect(() => {
    let price = 0;
    cart.map((item) => {
      price += item?.price * item?.quantity;
    });

    setTotalAmt(price);
  }, [cart]);

  const handleSaveOrder = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/saveorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          email: user.email as string,
          id: id,
          totalAmt,
        }),
      });

      const data = await response.json();
      if (data?.success) {
        setLoading(false);
        dispatch(resetCart());
        toast.success(data?.message)
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && cart.length) {
      handleSaveOrder();
    }
  }, [user]);

  console.log(totalAmt);
  return (
    <div>
      {loading ? (
        <Loader title="Payment is processing... Please do not press back button" />
      ) : (
        <div className="bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-28">
          <div className="max-w-md w-full space-y-8 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-green-100 rounded-full"></div>
              </div>
              <div className="relative">
                <HiCheckCircle className="mx-auto h-24 w-24 text-green-500" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-gray-600">
              Success!
            </h2>
            <p className="text-sm mt-2 text-gray-500">
              Your payment has been completed successfully
            </p>
            <div className="mt-8 space-y-8">
              <p>
                Thank you for your submission. We&apos;ve recieved your
                information and will process it shortyly recieve a confirmation
                email within the next few minutes
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                
                <Link href={"/"}>
                  <button className="inline-flex cursor-pointer items-center px-4 py-2 bg-green-500 hover:bg-green-600 hoverEffeect text-white font-semibold rounded-lg shadow-md">
                    <HiHome className="mr-2 h-5 w-5" /> Home
                  </button>
                </Link>

                <Link href={"/"}>
                  <button className="inline-flex cursor-pointer items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 hoverEffeect text-white font-semibold rounded-lg shadow-md">
                    <HiInformationCircle className="mr-2 h-5 w-5" /> Order
                  </button>
                </Link>   
                <Link href={"/"}>
                  <button className="inline-flex cursor-pointer items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 hoverEffeect text-white font-semibold rounded-lg shadow-md">
                    <HiMail className="mr-2 h-5 w-5" /> Contact
                  </button>
                </Link>
              </div>
          </div>
          <div className="mt-0 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-green-200 rounded-full" />
            <div className="w-3 h-3 bg-green-300 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default SucessContainer;
