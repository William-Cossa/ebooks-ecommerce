import React from "react";
import { BookCard } from "./BookCard";
import { Book } from "@/types/types";

interface BookGridProps {
  books: Book[];
  isLoading?: boolean;
}

export const BookGrid: React.FC<BookGridProps> = ({
  books,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!books || books.length === 0) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-gray-500 text-lg">
          Nenhum livro disponível no momento.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
