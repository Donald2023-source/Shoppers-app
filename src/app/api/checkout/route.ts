import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json()
    const { items, email} =await reqBody
    
    console.log(reqBody)
    return NextResponse.json({message: "Hello from Checkout"})
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
