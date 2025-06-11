import { Ebook } from "@/types/types";
import axios from "axios";
import { loadBooks } from "./storage-actions";
export default async function getAllBooks() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 0));
    // const data = await response.json();
    const data = await loadBooks();
    console.log(data);
    return { success: true, books: data };
  } catch (error: any) {
    return { success: false, error: error.message };
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

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3d3cuZWJvb2siLCJhdWQiOiJFLWJvb2sgVW5pdGVjIiwic3ViIjoiMzY0YTEzNTUtNGYzNS00OTI5LWE3MmItNTVhMjk1MGVmOTQwIiwic3RhdHVzQWNjb3VudCI6dHJ1ZSwiZW1haWwiOiJsZW9uYXJkb2J1dG5lNzhAZ21haWwuY29tIiwiaWF0IjoxNzQ3OTAzNjMyfQ.QA0oP6iIPMigqpS6ere5F-wHmlojvQ3HYyLzSBWdcoU";

export async function getAllBooksTeste() {
  try {
    const res = await axios.get(
      "https://backend-ebook.unitec.academy/api/ebooks/list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data: Ebook[] = res.data;

    console.log(data);
    console.log("AQUI DEVERIAM VIR DADOS============================ ");

    return { success: true, books: data };
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.message || error.message,
    };
  }
}
