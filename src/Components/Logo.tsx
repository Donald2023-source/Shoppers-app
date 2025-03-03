import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <h2
        className={twMerge(
          "text-2xl text-black hover:text-orange-600 font-bold uppercase hoverEffect relative group overflow-hidden"
        )}
      >
        Shoppers
        <span className="absolute left-0 bottom-0 w-full h-px bg-orange-600 -translate-x-[105%] group-hover:translate-x-0 hoverEffect" />
      </h2>
    </Link>
  );
};

export default Logo;
