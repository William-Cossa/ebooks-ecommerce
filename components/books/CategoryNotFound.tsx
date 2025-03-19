"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CategoryNotFound = ({
  suggestedCategories = ["Ficção", "Autoajuda", "Fantasia", "academico"],
  onExploreAll = () => {},
}) => {
  const category = useSearchParams().get("categoria");
  return (
    <div className="w-full py-8 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Ícone de estante vazia */}
        <div className="mx-auto w-16 h-16 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <path d="M9 5v16" />
            <path d="M4 9h5" />
            <path d="M4 13h5" />
            <path d="M4 17h5" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-gray-800">
          Nenhum livro encontrado na categoria {category && `"${category}"`}
        </h3>

        <p className="mt-3 text-gray-600">
          Não encontramos livros que correspondam a esta categoria no momento.
          Experimente outra categoria ou volte mais tarde.
        </p>

        {/* {suggestedCategories.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Categorias populares:
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedCategories.map((cat, index) => (
                <Link
                  href={`/categorias/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        )} */}
        <Link href={"/books"} scroll={false}>
          <button
            onClick={onExploreAll}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Explorar todos os livros
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryNotFound;
