import { getBarnerData } from "@/lib/getData";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
const Barner = async () => {
  const barners = await getBarnerData();
  const singleBarner = barners[0]
  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]">
        {/* Left half */}
      <div>
        <Image 
        src={urlFor(singleBarner?.image).url()} 
        alt={singleBarner.title} 
        width={500}
        height={500}
        />
      </div>

      {/* Right hal*/}
      <div></div>
    </Container>
  );
};

export default Barner;
