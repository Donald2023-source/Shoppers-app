'use client'
import { StoreState } from "@/types";
import React, { useEffect, useState } from "react";
import { useSelector, UseSelector } from "react-redux";

const SucessContainer = ({ id }: { id: string }) => {
    
     const { cart } = useSelector((state: StoreState) => state?.shoppers)
     const [totalAmt, setTotalAmt] = useState(0)
     const [loading, setLoading] = useState(false);

     useEffect(() => {
        let price = 0;
        cart.map((item) => {
            price += item?.price * item?.quantity
        });

        setTotalAmt(price)
     }, [cart])

     console.log(totalAmt)
  return (
    <div>Success Container</div>
  )
};

export default SucessContainer;
