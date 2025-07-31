"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { Book, CartItem } from "@/types/types";

interface CartListButtonProps {
  book: Book;
}

export function AddToCartButton({ book }: CartListButtonProps) {
  const { isCartListed, toggleCartItem } = useCart();
  const iscartListed = isCartListed(book.id);
  const isEbook = book.format?.toLowerCase() !== "livro";

  const handletoggleCartList = () => {
    try {
      toggleCartItem(book);
    } catch (error) {
      console.error("Erro ao atualizar cartList", error);
    }
  };

  return (
    // <Button
    //   onClick={handletoggleCartList}
    //   className={`hover:bg-primary/90 p-2 transition-all w-full ${
    //     iscartListed ? "bg-destructive hover:bg-red-600" : ""
    //   }`}
    //   aria-label={
    //     iscartListed ? "Remover do carrinho" : "Adicionar ao carrinho"
    //   }
    // >
    //   <ShoppingCart
    //     className={`
    //       w-6 h-6
    //       ${iscartListed ? "fill-white " : " hover:te"}
    //     `}
    //   />
    //   {iscartListed ? "Remover do carrinho" : "Adicionar ao carrinho"}
    // </Button>

    <Button
      onClick={handletoggleCartList}
      variant={"outline"}
      className="hover:text-none "
    >
      <ShoppingCart
        className={`w-8 h-8 ${iscartListed ? "fill-primary " : "fill-white"}`}
      />
    </Button>
  );
}
