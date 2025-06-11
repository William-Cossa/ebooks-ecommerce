import { getCartList } from "@/lib/actions/cartList-actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const cartList = await getCartList();
    return NextResponse.json(cartList);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar cartList" },
      { status: 500 }
    );
  }
}
