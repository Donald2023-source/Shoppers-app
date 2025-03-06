import React from "react";
import { ProductData } from "../../types";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
const ProductCard = ({ item }: { item: ProductData }) => {
  return (
    <div className="border border-px border-gray-200 rounded-md relative group iverflow-hidden">
      <div>
        <Link href={`/product/${item?.slug.current}`}>
            <Image height={500} width={500} className="w-full h-72 object-cover group-hover:scale-105 hoverEffect" src={urlFor(item?.image).url()} alt={item._type} />
        </Link>
      </div>
    </div>
  )
};

export default ProductCard;
