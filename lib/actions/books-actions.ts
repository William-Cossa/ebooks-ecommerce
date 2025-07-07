import { Book } from "@/types/types";
import axios from "axios";
import { loadBooks } from "./storage-actions";
import { routes } from "@/config/routes";
import { getErrorMessage } from "../utils";

export default async function getAllBooks() {
  try {
    const response = await axios.get(routes.books);
    const data: Book[] = response.data;
    return { success: true, books: data };
  } catch (error: unknown) {
    return {
      success: false,
      error: getErrorMessage(error),
    };
  }
}

export async function getBookById(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 0));

    const data = await loadBooks();

    const book = data.find((book) => book.id === id);

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
      genresSet.add(genre);
    });
  });
  return Array.from(genresSet).sort();
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3d3cuZWJvb2siLCJhdWQiOiJFLWJvb2sgVW5pdGVjIiwic3ViIjoiMzY0YTEzNTUtNGYzNS00OTI5LWE3MmItNTVhMjk1MGVmOTQwIiwic3RhdHVzQWNjb3VudCI6dHJ1ZSwiZW1haWwiOiJsZW9uYXJkb2J1dG5lNzhAZ21haWwuY29tIiwiaWF0IjoxNzQ3OTAzNjMyfQ.QA0oP6iIPMigqpS6ere5F-wHmlojvQ3HYyLzSBWdcoU";
