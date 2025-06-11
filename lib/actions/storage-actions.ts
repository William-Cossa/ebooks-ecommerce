import { initialBooks } from "@/data/books";
import { Book } from "@/types/types";
import { cookies } from "next/headers";

const STORAGE_KEY = "unibooks_data";
export const saveBooks = (books: Book[]) => {
  const cookieStore = cookies();
  cookieStore.set(STORAGE_KEY, JSON.stringify(books));
};

export async function loadBooks(): Promise<Book[]> {
  const cookieStore = cookies();
  const stored = cookieStore.get(STORAGE_KEY);

  if (stored) {
    try {
      return JSON.parse(stored.value);
    } catch (error) {
      console.error("Error parsing stored books:", error);
    }
  }
  // Se não há dados salvos, inicializa com os dados padrão
  saveBooks(initialBooks);
  return initialBooks;
}
