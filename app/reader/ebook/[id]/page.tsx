"use client";
import { ReaderLayout } from "@/components/Reader/ReaderLayout";
import {
  fetchBookById,
  fetchReadingProgress,
  saveReadingProgress,
} from "@/lib/api/ebooks";
import { BookWithContent } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ReaderPage() {
  const router = useRouter();
  const { id } = useParams();
  console.log("id: " + id);
  const [book, setBook] = useState<BookWithContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialPage, setInitialPage] = useState(1);

  // ID do usuário simulado (em produção, viria do sistema de autenticação)
  const userId = "user123";

  useEffect(() => {
    if (id) {
      const loadBook = async () => {
        setLoading(true);

        try {
          // Busca o livro
          const bookResponse = await fetchBookById(id as string);

          if (!bookResponse.success || !bookResponse.data) {
            setError(bookResponse.error || "Livro não encontrado");
            setLoading(false);
            return;
          }

          // Busca o progresso do usuário
          const progressResponse = await fetchReadingProgress(
            userId,
            id as string
          );

          if (progressResponse.success && progressResponse.data) {
            setInitialPage(progressResponse.data.currentPage);
          }

          setBook(bookResponse.data);
        } catch (err) {
          setError("Ocorreu um erro ao carregar o livro");
        } finally {
          setLoading(false);
        }
      };

      loadBook();
    }
  }, [id, userId]);

  const handlePageChange = (page: number) => {
    if (book) {
      saveReadingProgress(userId, book.id, page);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error || "Livro não encontrado"}</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Voltar para a biblioteca
          </button>
        </div>
      </div>
    );
  }

  return (
    <ReaderLayout
      book={book}
      initialPage={initialPage}
      onPageChange={handlePageChange}
    />
  );
}
