import { Suspense } from "react";
import BookGrid from "@/components/BookGrid";
import BooksFilters from "@/components/BooksFilters";
import { Book } from "@/types/types";
import Container from "../Container";
import getAllBooks, { getAllGenres } from "@/lib/actions/books-actions";

interface SearchParams {
  search?: string;
  format?: string;
  categories?: string | string[];
}

interface BooksPageProps {
  searchParams: SearchParams;
}

function filterBooks(books: Book[], searchParams: SearchParams): Book[] {
  let filtered = [...books];

  if (searchParams.search) {
    const searchTermLower = searchParams.search.toLowerCase();

    filtered = filtered.filter((book) => {
      const authors = Array.isArray(book.author)
        ? book.author
        : typeof book.author === "string"
        ? [book.author]
        : [];

      return (
        book.title.toLowerCase().includes(searchTermLower) ||
        authors.some((author) =>
          author.toLowerCase().includes(searchTermLower)
        ) ||
        book.description.toLowerCase().includes(searchTermLower)
      );
    });
  }

  if (searchParams.format) {
    filtered = filtered.filter((book) => book.format === searchParams.format);
  }

  if (searchParams.categories) {
    const selectedGenres = Array.isArray(searchParams.categories)
      ? searchParams.categories
      : [searchParams.categories];

    filtered = filtered.filter((book) =>
      selectedGenres.some((categoryName) =>
        book.categories.some((cat) => cat.name === categoryName)
      )
    );
  }

  return filtered;
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const { books } = await getAllBooks();
  const allGenres = await getAllGenres();
  const filteredBooks = filterBooks(books!, searchParams);

  const hasActiveFilters =
    !!searchParams.search || !!searchParams.format || !!searchParams.categories;

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
