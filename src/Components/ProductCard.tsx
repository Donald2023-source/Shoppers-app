import React from "react";
import { ProductData } from "../../types";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import FormattedPrice from "./FormattedPrice";
import AddToCartButton from "./AddToCartButton";
const ProductCard = ({ item }: { item: ProductData }) => {
  // const image = item.rowPrice;
  // console.log(image);
  return (
    <div className="border border-px border-gray-200 rounded-md relative group overflow-hidden">
      <div className="overflow-hidden">
        <Link href={`/product/${item?.slug.current}`}>
          <Image
            src={urlFor(item?.image)?.url()}
            alt={item?._type}
            width={500}
            height={500}
            className="w-full h-32 md:h-64 object-cover group-hover:scale-105 hoverEffect"
          />
        </Link>
      </div>
      <div className="px-6 flex flex-col items-center gap-2">
      <div className="text-base text-gray-400 md:py-4 mt-1 flex items-center">
          {Array?.from({ length: 5 })?.map((_, index) => {
            const filled = index + 1 <= Math.floor(item?.ratings);
            const halfFilled =
              index + 1 > Math.floor(item?.ratings) &&
              index < Math.ceil(item?.ratings);

            return (
              <MdStar
                key={index}
                className={`${
                  filled
                    ? "text-[#fa8900]"
                    : halfFilled
                      ? "text-[#f7ca00]"
                      : "text-gray-400"
                }`}
              />
            );
          })}
        </div>
        <p className="uppercase text-xs font-medium text-orange-400">{item?.brand}</p>
        <h2 className="text-base font-semibold text-acent line-clamp-1">{item?.title}</h2>
        <p className="text-center md:block hidden text-xs md:text-sm line-clamp-2">{item?.description}</p>
        <div className="flex md:flex-row items-center md:gap-3 md:mb-5 flex-wrap">
          <FormattedPrice className="text-gray-400 line-through md:text-base text-[10px]" amount={item?.rowPrice} />
          <FormattedPrice className="text-orange-500 font-bold" amount={item?.price} />
        </div>
      </div>
      <AddToCartButton />
    </div>
  );
};

export default ProductCard;
