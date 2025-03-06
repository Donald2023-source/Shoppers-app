import Container from "@/Components/Container";
import React from "react";
import { groq } from "next-sanity";
import { ProductData } from "../../../../../types";
import { client } from "@/sanity/lib/client";

interface Props {
  params: {
    slug: string;
  };
}
const SingleProduct = async ({ params: { slug } }: Props) => {
  console.log(slug);

  const query = groq`*[_type == 'product] && slug.current = ${slug[0]} { ... } `;
  const product: ProductData = await client.fetch(query, { slug });
  console.log(product);
  return <Container>Single Product Page</Container>;
};

export default SingleProduct;
