"use client";
import { BookGrid } from "@/components/Reader/BookGrid";
import { fetchEbooks } from "@/lib/api/ebooks";
import { Book } from "@/types/types";
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      const response = await fetchEbooks();

      if (response.success && response.data) {
        setBooks(response.data);
      } else {
        setError(response.error || "Falha ao carregar os livros");
      }

      setLoading(false);
    };

    loadBooks();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Biblioteca de eBooks Gratuitos
      </h1>
      <BookGrid books={books} isLoading={loading} />
    </div>
  );
}
