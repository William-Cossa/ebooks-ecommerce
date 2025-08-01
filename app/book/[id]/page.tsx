import { AddToCartButton } from "@/components/AddToCartButton";
import BookCarousel from "@/components/BookCarousel";
import BookDetails from "@/components/booksDetails/BookDetails";
import ButtonVoltar from "@/components/ButtonVoltar";
import { BuyButton } from "@/components/BuyButton";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  getBookById,
  getBooksByAuthor,
  getRelatedBooks,
} from "@/lib/actions/books-actions";
import { paramsProps } from "@/types/types";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }: paramsProps) {
  const { id } = params;
  const { book } = await getBookById(id);

  const relatedBooks = await getRelatedBooks(id);
  const authorsToSearch = Array.isArray(book?.author)
    ? book.author
    : typeof book?.author === "string"
    ? [book.author]
    : [];

  const authorBooks = await getBooksByAuthor(authorsToSearch, id);

  if (!book) {
    return (
      <Container>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Livro não encontrado</h1>
          <p className="mb-6 text-muted-foreground">
            O livro que você está procurando não existe.
          </p>
          <ButtonVoltar />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <ButtonVoltar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="aspect-[3/4] overflow-hidden rounded-lg border shadow-sm">
              <Image
                width={1000}
                height={1000}
                src={book.cover?.url}
                alt={`Capa de ${book.title}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center text-yellow-500 mb-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-1 text-base font-medium">
                {book.rating.toFixed(1)}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">{book.title}</h1>

            <div className="space-y-1">
              <div className="text-lg">
                por{" "}
                {(() => {
                  const authors = Array.isArray(book?.author)
                    ? book.author
                    : typeof book?.author === "string" &&
                      (book.author as string).trim() !== ""
                    ? [book.author]
                    : [];

                  return authors.length > 0 ? (
                    authors.map((author, index) => (
                      <div key={author}>
                        <Link
                          href={`/books?search=${encodeURIComponent(author)}`}
                          className="text-bookBlue hover:underline"
                        >
                          {author}
                        </Link>
                        {index < authors.length - 1 ? ", " : ""}
                      </div>
                    ))
                  ) : (
                    <span className="text-muted-foreground">
                      Autor desconhecido
                    </span>
                  );
                })()}
              </div>
              <p className="text-sm text-muted-foreground">
                Editora: {book.publisher?.name} | Publicado em:{" "}
                {new Date(book.publishDate).toLocaleDateString("pt-BR")}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-bookBlue">
                MT {book.priceAfterDiscount.toFixed(2)}
              </span>
              <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                {book?.format === "ebook" ? "eBook" : "Livro Físico"}
              </span>
            </div>

            {book.format === "livro" && (
              <p className="text-sm">
                <span className="font-medium">Páginas:</span> {book.pages}
              </p>
            )}

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-2">Gêneros</h3>
              <div className="flex flex-wrap gap-2">
                {book.categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/books?categories=${encodeURIComponent(
                      category.name
                    )}`}
                    className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-full text-sm"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-2">Sinopse</h3>
              <p className="text-base/relaxed">{book?.description}</p>
            </div>

            <div className="pt-6  flex gap-4 w-2/4">
              <BuyButton book={book} label="Comprar agora" />
              <AddToCartButton book={book} isCartIcon={false} />
            </div>
          </div>
        </div>
      </div>

      {authorBooks.length > 0 && (
        <section className="my-12">
          <BookCarousel title="Livros do mesmo autor" books={authorBooks} />
        </section>
      )}
      {relatedBooks.length > 0 && (
        <section className="my-12">
          <BookCarousel title="Livros Relacionados" books={relatedBooks} />
        </section>
      )}
    </Container>
  );
}
