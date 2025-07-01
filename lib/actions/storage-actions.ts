"use server";
import { initialBooks } from "@/data/books";
import { Book } from "@/types/types";

export async function loadBooks(): Promise<Book[]> {
  return initialBooks;
}
