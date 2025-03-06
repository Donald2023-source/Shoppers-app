import Link from "next/link";
import React from "react";

import { RiShoppingCart2Fill } from "react-icons/ri";

const SidebarCart = () => {
  return (
   
      <Link
        className="bg-gray-100 w-16 h-[70px] rounded-md flex flex-col group overflow-hidden gap-1 text-black/60 items-center justify-center shadow-md shadow-green-200 relative"
        href={"/signin"}
      >
        <div className="flex items-center justify-center">
          <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-300" />
          <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-12 transition-transform duration-300" />
        </div>
        <p className="text-xs font-medium">Cart</p>
        <p className="absolute top-1 right-2 bg-orange-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</p>
      </Link>
   
  );
};

export default SidebarCart;
