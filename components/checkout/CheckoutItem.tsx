import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

function CheckoutItem() {
  const { items: cartItems, removeFromCart } = useCart();
  return (
    <ScrollArea className="max-h-72 border-b">
      <ul className="space-y-4 w-full h-full  p-4 ">
        {cartItems.map((item) => (
          <li
            key={item.book.id}
            className=" flex justify-between items-center h-full"
          >
            <div className="flex h-full gap-6  w-full">
              <div className=" h-16 w-16 relative ">
                <Image
                  src={item.book.cover.url}
                  alt={item.book.title}
                  fill={true}
                  priority={true}
                  className="object-cover rounded-lg"
                />
                <Badge
                  className="absolute bg-zinc-500 aspect-square -right-3 -top-2 w-5 items-center flex justify-center 
            "
                >
                  {item.quantity}
                </Badge>
              </div>

              <div className="flex flex-col  max-w-[80%] justify-center gap-1">
                <h3 className="text-sm font-semibold line-clamp-2 text-wrap">
                  {item.book.title}
                </h3>
                <p className="text-xs font-medium text-zinc-500">
                  {Array.isArray(item.book.author)
                    ? item.book.author.join(", ")
                    : typeof item.book.author === "string"
                    ? item.book.author
                    : "Autor desconhecido"}
                </p>
              </div>
            </div>

            <Button
              variant={"ghost"}
              onClick={() => removeFromCart(item.book.id)}
              className="text-muted-foreground hover:bg-muted hover:text-none "
              aria-label="Remover item"
            >
              <X className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}

export default CheckoutItem;
