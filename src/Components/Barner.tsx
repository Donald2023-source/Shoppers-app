import { getBarnerData } from "@/lib/getData";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Button from "./Button";
import { BarnerData } from "../../types";
import FormattedPrice from "./FormattedPrice";

const Barner = async () => {
  const barners = await getBarnerData();
  const singleBarner = barners[0];

  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]">
      {/* Left half */}
      <div className="md:col-span-2 bg-gray-300 relative flex items-end justify-end rounded-lg overflow-hidden group">
        <div className="w-full h-full absolute bg-black/30" />
        <div className="h-full z-10 absolute left-10 top-0 flex flex-col justify-center isolate gap-5 md:gap-10">
          <div className="flex flex-col gap-4">
            <button className="bg-green-400 text-white rounded-full w-24 py-1 text-sm font-semibold hover:bg-green-600 px-2">
              Sale N{singleBarner?.price}
            </button>
            <p className="text-xl md:text-2xl text-gray-100 font-semibold">
              {singleBarner?.title}
            </p>
            <h2 className="text-2xl text-slate-100 md:text-5xl font-bold">
              {singleBarner?.subtitile}
            </h2>
            <p className="text-xs md:text-sm text-white max-w-60">
              {singleBarner?.description}
            </p>
          </div>
          <Button className="w-fit">Shop Now</Button>
        </div>
        <Image
          src={urlFor(singleBarner?.image).url()}
          alt={singleBarner.title}
          width={500}
          height={500}
          className="object-container h-full md:h-full max-h-[600px] self-end group-hover:scale-105 hoverEffect"
        />
      </div>

      {/* Right hal*/}
      <div>
        <div className="flex flex-col space-y-5 md:space-y-10 h-auto md:max-[600px]">
          {barners.slice(1, 3).map((item: BarnerData) => (
            <div
              className="h-full md:h-1/2 bg-slate-200 rounded-lg overflow-hidden flex justify-center items-center p-4 group"
              key={item?._id}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-2xl font-semibold">{item?.title}</p>
                  <p className="text-xl font-bold">{item?.subtitile}</p>
                </div>
                <FormattedPrice
                  className="text-orange-300"
                  amount={item?.price}
                />

                <Link
                  className="mt-5 font-bold underline-offset-2 decoration-[1px] hover:text-orange-400 hoverEffect"
                  href={"/shop"}
                >
                  Shop Now!
                </Link>
              </div>
              <Image
                src={urlFor(item?.image).url()}
                alt={item.title}
                width={500}
                height={500}
                className="object-contain h-full md:h-60 w-1/2 group-hover:scale-105 hoverEffect"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Barner;
