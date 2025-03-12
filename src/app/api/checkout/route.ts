import { ProductData } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  try {
    const reqBody = await request.json();
    const { items, email } = await reqBody;

    const existingItems = items.map((item: ProductData) => ({
      quantity: item.quantity,
      price_data: {
        currency: "ngn",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: item?.title,
          description: item?.description,
        },
      },
    }));

    const origin = request.headers.get("origin");
    console.log(origin);
    console.log(reqBody);
    
    return NextResponse.json({ message: "Hello from Checkout" });

  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
