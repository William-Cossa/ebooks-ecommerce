import { ebooks } from "@/data/ebooks";
import { Ebook } from "@/types/types";

export default async function getAllBooks() {
  try {
    // const response = await fetch("https://api.example.com/books");
    await new Promise((resolve) => setTimeout(resolve, 0));
    // const data = await response.json();
    const data: Ebook[] = ebooks;
    return { success: true, books: data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
