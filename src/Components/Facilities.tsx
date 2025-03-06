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
  return <div className="py-10 grid grid-cols-1 md:grid-cols-4 4m:grid-cols-2 gap-3">
    {
        data.map((item) => (
            <div className="flex flex-col sm:flex-row items-center gap-3" key={item?.title}>
                <span className="text-3xl text-orange-400">{item?.icon}</span>
                <div className="text-center sm:text-left">
                    <h2 className="uppercase font-bold">{item?.title}</h2>
                    <p className="text-sm text-gray-500">{item?.description}</p>
                </div>
            </div>
        ))
    }
  </div>;
};

export default Facilities;
