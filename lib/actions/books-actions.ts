import { Book } from "@/types/types";
import axios from "axios";
import { routes } from "@/config/routes";
import { getErrorMessage } from "../utils";
import { error } from "console";

export default async function getAllBooks() {
  try {
    const response = await fetch(routes.books, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return {
        success: true,
        error: getErrorMessage(error),
        status: response.status,
      };
    }

    const data: Book[] = await response.json();

    return { success: true, books: data, status: response.status };
  } catch (error: unknown) {
    return {
      success: false,
      error: getErrorMessage(error),
    };
  }
}
export async function loadBooks(): Promise<Book[]> {
  const result = await getAllBooks();
  if (!result.success) {
    throw new Error(result.error || "Erro desconhecido");
  }
  return result.books!;
}

export async function getBookById(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 0));

    const { books: data } = await getAllBooks();

    const book = data?.find((book) => book.id === id);

    return { success: true, book: book };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getPopularBooks() {
  const currentBooks = await loadBooks();
  return [...currentBooks].sort((a, b) => b.rating - a.rating).slice(0, 6);
}
export async function getNewestBooks() {
  const currentBooks = await loadBooks();
  return [...currentBooks]
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, 6);
}

export async function getRelatedBooks(bookId: string) {
  const currentBooks = await loadBooks();
  const currentBook = currentBooks.find((book) => book.id === bookId);
  if (!currentBook) return [];
  // Encontrar livros com gêneros similares
  return currentBooks
    .filter(
      (book) =>
        book.id !== bookId &&
        book.genres.some((genre) => currentBook.genres.includes(genre))
    )
    .slice(0, 4);
}
export async function getBooksByAuthor(
  authorName: string,
  excludeBookId?: string
) {
  const currentBooks = await loadBooks();
  return currentBooks.filter(
    (book) =>
      book.author.includes(authorName) &&
      (!excludeBookId || book.id !== excludeBookId)
  );
}
export async function getBooksByGenre(genre: string) {
  const currentBooks = await loadBooks();

  return currentBooks.filter((book) =>
    book.genres?.some((cat) =>
      cat.name.toLowerCase().includes(genre.toLowerCase())
    )
  );
}
export async function getAllGenres(): Promise<string[]> {
  const currentBooks = await loadBooks();
  const genresSet = new Set<string>();
  currentBooks.forEach((book) => {
    book.genres.forEach((genre) => {
      genresSet.add(genre.name);
    });
  });
  return Array.from(genresSet).sort();
}
