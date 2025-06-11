"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { toggleCartList, CartListBook } from "@/lib/actions/cartList-actions";
import { Button } from "./ui/button";

interface CartListButtonProps {
  book: CartListBook | any;
  initialIscartListed?: boolean;
}

export function CartListButton({
  book,
  initialIscartListed = false,
}: CartListButtonProps) {
  const [iscartListed, setIscartListed] = useState(initialIscartListed);

  const handletoggleCartList = async () => {
    try {
      await toggleCartList(book);
      setIscartListed(!iscartListed);
    } catch (error) {
      console.error("Erro ao atualizar cartList", error);
    }
  };

  return (
    <Button
      onClick={handletoggleCartList}
      className="hover:bg-gray-100 p-2 rounded-full transition-colors"
      aria-label={
        iscartListed ? "Remover do carrinho" : "Adicionar ao carrinho"
      }
    >
      <ShoppingCart
        className={`
          w-6 h-6 
          ${
            iscartListed
              ? "fill-primary text-primary"
              : "text-gray-500 hover:text-primary"
          }
        `}
      />
    </Button>
  );
}
