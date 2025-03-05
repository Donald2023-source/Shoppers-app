import { getBarnerData } from "@/lib/getData";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Button from "./Button";
const Barner = async () => {
  const barners = await getBarnerData();
  const singleBarner = barners[0];
  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]">
      {/* Left half */}
      <div className="md:col-span-2 bg-gray-200 relative fkex items-end justify-end rounded-lg overflow-hidden group">
        <div className="h-full z-0 absolute left-10 top-0 flex flex-col justify-center isolate gap-5 md:gap-10">
          <div>
            <button className="bg-green-400 text-white rounded-full w-20 py-1 text-sm font-semibold hover:bg-green-600">
              Sale {singleBarner?.price}
            </button>
            <p className="text-xl md:text-3xl font-semibold">
              {singleBarner?.title}
            </p>
            <h2 className="text-2xl md:text-6xl font-bold">
              {singleBarner?.subtitle}
            </h2>
            <p className="text-xs md:text-sm text-black/60 font-medium max-w-44">
              {singleBarner?.description}
            </p>
          </div>
          <Button>Shop Now</Button>
        </div>
        <Image
          src={urlFor(singleBarner?.image).url()}
          alt={singleBarner.title}
          width={400}
          height={400}
        />
      </div>

      {/* Right hal*/}
      <div></div>
    </Container>
  );
};

export default Barner;
