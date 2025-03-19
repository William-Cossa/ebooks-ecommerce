import { ebooks } from "@/data/ebooks";

export default async function getAllBooks() {
  try {
    // const response = await fetch("https://api.example.com/books");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // const data = await response.json();
    const data = ebooks;
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
