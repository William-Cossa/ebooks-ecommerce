import React, { useState } from "react";
import { ReaderHeader } from "./ReaderHeader";
import { EbookViewer } from "./EbookViewer";
import { BookWithContent } from "@/types/types";

interface ReaderLayoutProps {
  book: BookWithContent;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export const ReaderLayout: React.FC<ReaderLayoutProps> = ({
  book,
  initialPage = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const totalPages = Array.isArray(book.content)
    ? book.content.length
    : book.totalPages || 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className="flex flex-col h-screen mt-[8vh] bg-gray-50">
      <ReaderHeader
        book={book}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <div className="flex-1 overflow-hidden">
        <EbookViewer
          book={book}
          initialPage={initialPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
