// BookCarousel.tsx
"use client";
import React, { useRef } from "react";
import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Book } from "@/types/types";

interface BookCarouselProps {
  title: string;
  books: Book[]; // Dados já vêm do server
}

const BookCarousel: React.FC<BookCarouselProps> = ({ title, books }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const { current } = carouselRef;
    const scrollAmount = current.clientWidth * 0.8;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (books.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-bookBlue">{title}</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="carousel flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 snap-x scroll-smooth"
      >
        {books?.map((book) => (
          <div key={book.id} className="flex-none w-[280px] snap-start">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCarousel;
