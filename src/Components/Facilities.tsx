import React from "react";
import { FaClockRotateLeft, FaWallet } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { PiChat } from "react-icons/pi";

const Facilities = () => {
  const data = [
    {
      title: "Free delivery",
      description: "When ordering above N200,000",
      icon: <GoRocket />,
    },
    {
      title: "90 Days Return",
      description: "If goods have problems",
      icon: <FaClockRotateLeft />,
    },
    {
      title: "Secure Payment",
      description: "100% secure payment",
      icon: <FaWallet />,
    },
    {
      title: "24/7 Support",
      description: "Dedicated support",
      icon: <PiChat />,
    },
  ];
  return <div></div>;
};

export default Facilities;
