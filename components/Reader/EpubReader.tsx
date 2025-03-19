"use client";
import { BookWithContent } from "@/types/types";
import React, { useState, useEffect, useRef } from "react";
i;

interface EpubReaderProps {
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export const EpubReader: React.FC<EpubReaderProps> = ({
  initialPage = 1,
  onPageChange,
}) => {
  const [book, setBook] = useState<any>(null);
  const [rendition, setRendition] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  // Free EPUB URL - "Pride and Prejudice" from Standard Ebooks
  const epubUrl =
    "https://standardebooks.org/ebooks/jane-austen/pride-and-prejudice/downloads/pride-and-prejudice_jane-austen.epub";

  useEffect(() => {
    loadEpub();
  }, []);

  const loadEpub = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Initialize the EPUB book
      const epubBook = epubjs.default();
      await epubBook.open(epubUrl, { openAs: "epub" });
      setBook(epubBook);

      // Get total pages/locations
      const locations = await epubBook.locations.generate(1000);
      setTotalPages(epubBook.locations.total);

      // Create rendition
      if (viewerRef.current) {
        const epubRendition = epubBook.renderTo(viewerRef.current, {
          width: viewerRef.current.clientWidth * scale,
          height: viewerRef.current.clientHeight * scale,
          spread: "none",
        });

        // Display the rendition
        await epubRendition.display();
        setRendition(epubRendition);
      }

      setIsLoading(false);
    } catch (err) {
      console.error("Error loading EPUB:", err);
      setError("Failed to load the EPUB book. Please try again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Update rendition size when scale changes
    if (rendition && viewerRef.current) {
      rendition.resize(
        viewerRef.current.clientWidth * scale,
        viewerRef.current.clientHeight * scale
      );
    }
  }, [scale, rendition]);

  // Bloqueia teclas de atalho e menu de contexto
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloqueia atalhos comuns de salvamento e impressão
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "s" || e.key === "p" || e.key === "g")
      ) {
        e.preventDefault();
        return false;
      }

      // Navegação com as teclas de seta
      if (e.key === "ArrowRight") {
        nextPage();
      } else if (e.key === "ArrowLeft") {
        prevPage();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const nextPage = () => {
    if (rendition) {
      rendition.next();
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      if (onPageChange) onPageChange(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (rendition) {
      rendition.prev();
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      if (onPageChange) onPageChange(currentPage - 1);
    }
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 2));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.5));
  };

  return (
    <div className="flex flex-col h-full">
      {/* Área de conteúdo */}
      <div className="flex-1 relative bg-white overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
            <div className="text-xl">Carregando EPUB...</div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-red-600 text-xl">{error}</div>
          </div>
        )}

        <div
          ref={viewerRef}
          className="h-full w-full mx-auto"
          style={{
            transformOrigin: "center top",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
          onCopy={(e) => e.preventDefault()}
        />
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between bg-gray-100 border-t border-gray-200 p-4">
        <button
          onClick={prevPage}
          disabled={currentPage <= 1 || isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Anterior
        </button>

        <div className="flex items-center space-x-4">
          <button
            onClick={zoomOut}
            disabled={isLoading}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full disabled:bg-gray-300"
          >
            -
          </button>
          <span className="text-sm">{Math.round(scale * 100)}%</span>
          <button
            onClick={zoomIn}
            disabled={isLoading}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full disabled:bg-gray-300"
          >
            +
          </button>
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages || isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};
