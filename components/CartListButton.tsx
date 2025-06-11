"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

function CartListButton() {
  const { totalItems } = useCart();
  return (
    <Link href="/cart" className="relative">
      <Button variant="outline" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
}

export default CartListButton;
