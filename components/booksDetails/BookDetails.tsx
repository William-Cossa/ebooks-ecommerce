import { Ebook } from "@/types/types";
import Image from "next/image";
import React from "react";

function BookDetails({ book }: { book: Ebook }) {
  return (
    <section className="h-full w- grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10 px-20">
      <div className="col-span-1 min-w-[500px] flex items-center justify-center  border-r bo">
        <Image
          src={book.coverImage}
          alt={book.title}
          width={1000}
          height={1000}
          objectFit="cover"
          className="h-96 w-64 object-cover "
        />
      </div>

      <div className="col-span-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{book.title}</h1>
        <p className="text-sm text-gray-700 mb-2">Por: {book.authors}</p>
        <p className="text-lg text-gray-600">{book.description}</p>
      </div>
    </section>
  );
}

export default BookDetails;
