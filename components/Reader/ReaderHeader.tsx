import React from "react";
import Link from "next/link";
import { Book } from "@/types/types";

interface ReaderHeaderProps {
  book: Book;
  currentPage: number;
  totalPages: number;
}

export const ReaderHeader: React.FC<ReaderHeaderProps> = ({
  book,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-blue-600 hover:text-blue-800">
          &larr; Voltar à biblioteca
        </span>
      </Link>

      <div className="text-center">
        <h1 className="text-xl font-bold text-gray-800">{book.title}</h1>
        <p className="text-sm text-gray-600">{book.author}</p>
      </div>

      <div className="text-sm text-gray-600">
        Página {currentPage} de {totalPages}
      </div>
    </div>
  );
};
