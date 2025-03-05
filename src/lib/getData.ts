import { client } from "@/sanity/lib/client";
import { barnerQuery, bestSellersQuery, productsQuery } from "./query";

export const revalidate = 0;

const getBarnerData = async () => {
  const barnerData = await client.fetch(barnerQuery);
  return barnerData;
};

const getProductsData = async () => {
  const productsData = await client.fetch(productsQuery);
  return productsData;
};
const getBestSellersData = async () => {
  const bestSellersData = await client.fetch(bestSellersQuery);
  return bestSellersData;
};

export { getBarnerData, getProductsData, getBestSellersData };
