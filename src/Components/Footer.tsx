import React from "react";
import Container from "./Container";
import { footerData } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-gray-200 py-5">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {footerData.map((item) => (
          <div key={item?._id}>
            <h3 className="text-orange-600 text-lg font-semibold mb-3">
              {item?.title}
            </h3>
            <div className="flex flex-col gap-1">
              {item?.listItem?.map((list) =>
                list?.listData?.map((data) => (
                  <Link className="py-1 text-black font-medium hover:text-orange-600 hoverEffect" href="/" key={data}>
                    {data}
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Footer;
