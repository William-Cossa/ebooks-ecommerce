import BookDetails from "@/components/booksDetails/BookDetails";
import { getBookById } from "@/lib/actions/books-actions";
import { paramsProps } from "@/types/types";
import React from "react";

export default async function page({ params }: paramsProps) {
  const { id } = params;
  const { book } = await getBookById(id);

  return (
    <div className=" h-screen mt-[8vh] ">
      <BookDetails book={book!} />
    </div>
  );
}
