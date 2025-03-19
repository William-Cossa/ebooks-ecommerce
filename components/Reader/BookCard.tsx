import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types/types";

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={book.coverImage || "/images/placeholder-book.jpg"}
          alt={`Capa de ${book.title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
        <p className="text-sm text-gray-500 line-clamp-3 mb-4 h-12">
          {book.description}
        </p>

        <Link href={`/reader/${book.id}`}>
          <span className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors duration-200">
            Ler Agora
          </span>
        </Link>
      </div>
    </div>
  );
};
