import React from "react";

import { Star, ShoppingCart, Check } from "lucide-react";
import { Book } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";

interface BookCardProps {
  book: Book;
}

const BookCard = async ({ book }: BookCardProps) => {
  return (
    <div className="book-card flex flex-col h-full rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow pb-1">
      <Link href={`/book/${book.id}`} className="flex-grow">
        <div className="aspect-[1/1.2] w-full overflow-hidden bg-muted">
          <Image
            width={620}
            height={620}
            src={book.coverImage}
            alt={`Capa de ${book.title}`}
            className="w-full h-full object-cover transition-transform hover:scale-105"
            // loading="lazy"
          />
        </div>
        <div className="p-3 flex flex-col flex-grow">
          <div className="flex items-center text-yellow-500 mb-1.5">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="ml-1 text-xs">{book.rating.toFixed(1)}</span>
          </div>
          <h3 className="font-semibold text-base mb-1 line-clamp-2 leading-tight">
            {book?.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
            {book.author?.join(", ")}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <span className="font-medium text-sm text-primary">
              {book.price.toFixed(2)} MT
            </span>
            <span className="text-[10px] px-1.5 py-0.5 bg-muted text-muted-foreground rounded">
              {book.format}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-3 pt-0">
        <AddToCartButton book={book} />
      </div>
    </div>
  );
};

export default BookCard;
