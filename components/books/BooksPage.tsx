// app/books/page.tsx (Server Component)
import { Suspense } from "react";
import BookGrid from "@/components/BookGrid";
import BooksFilters from "@/components/BooksFilters";
import { Book } from "@/types/types";
import Container from "../Container";
import { loadBooks } from "@/lib/actions/storage-actions";
import { getAllGenres } from "@/lib/actions/books-actions";

interface SearchParams {
  search?: string;
  format?: string;
  genres?: string | string[];
}

interface BooksPageProps {
  searchParams: SearchParams;
}

function filterBooks(books: Book[], searchParams: SearchParams): Book[] {
  let filtered = [...books];

  // Filter by search term
  if (searchParams.search) {
    const searchTermLower = searchParams.search.toLowerCase();
    filtered = filtered.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTermLower) ||
        book.author.some((author) =>
          author.toLowerCase().includes(searchTermLower)
        ) ||
        book.description.toLowerCase().includes(searchTermLower)
    );
  }

  // Filter by format
  if (searchParams.format) {
    filtered = filtered.filter((book) => book.format === searchParams.format);
  }

  // Filter by genres (multiple selection)
  if (searchParams.genres) {
    const selectedGenres = Array.isArray(searchParams.genres)
      ? searchParams.genres
      : [searchParams.genres];

    filtered = filtered.filter((book) =>
      selectedGenres.some((genre) => book.genres.includes(genre))
    );
  }

  return filtered;
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const books = await loadBooks();
  const allGenres = await getAllGenres();
  const filteredBooks = filterBooks(books, searchParams);

  const hasActiveFilters =
    !!searchParams.search || !!searchParams.format || !!searchParams.genres;

  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Server-side filters component */}
        <Suspense fallback={<div>Carregando filtros...</div>}>
          <BooksFilters
            allGenres={allGenres}
            searchParams={searchParams}
            hasActiveFilters={hasActiveFilters}
          />
        </Suspense>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold mb-6">Catálogo de Livros</h1>
          </div>

          <div className="mb-6">
            <div className="text-sm text-muted-foreground">
              {filteredBooks.length}{" "}
              {filteredBooks.length === 1 ? "resultado" : "resultados"}
              {hasActiveFilters && " para os filtros aplicados"}
            </div>
          </div>

          <BookGrid books={filteredBooks} />

          {filteredBooks.length === 0 && (
            <div className="py-12 text-center">
              <h3 className="text-lg font-medium">Nenhum livro encontrado</h3>
              <p className="mt-2 text-muted-foreground">
                Tente mudar os filtros ou a busca para encontrar o que procura.
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
