// "use client";
// import { BookWithContent } from "@/types/types";
// import React, { useState, useEffect, useRef } from "react";

// interface EbookViewerProps {
//   book: BookWithContent;
//   initialPage?: number;
//   onPageChange?: (page: number) => void;
// }

// export const EbookViewer: React.FC<EbookViewerProps> = ({
//   book,
//   initialPage = 1,
//   onPageChange,
// }) => {
//   const [currentPage, setCurrentPage] = useState<number>(initialPage);
//   const [totalPages, setTotalPages] = useState<number>(1);
//   const [scale, setScale] = useState<number>(1);
//   const [pages, setPages] = useState<string[]>([]);
//   const contentRef = useRef<HTMLDivElement>(null);

//   // Processa o conteúdo do livro em páginas
//   useEffect(() => {
//     if (book.content) {
//       if (Array.isArray(book.content)) {
//         setPages(book.content);
//       } else {
//         // Divide o conteúdo em páginas com base em quebras de parágrafo
//         const contentPages = book.content
//           .split("\n\n")
//           .filter((p) => p.trim() !== "");
//         setPages(contentPages);
//       }
//     }
//   }, [book.content]);

//   // Atualiza o número total de páginas
//   useEffect(() => {
//     setTotalPages(pages.length || book.totalPages || 1);
//   }, [pages, book.totalPages]);

//   // Bloqueia teclas de atalho e menu de contexto
//   useEffect(() => {
//     const handleContextMenu = (e: MouseEvent) => {
//       e.preventDefault();
//       return false;
//     };

//     const handleKeyDown = (e: KeyboardEvent) => {
//       // Bloqueia atalhos comuns de salvamento e impressão
//       if (
//         (e.ctrlKey || e.metaKey) &&
//         (e.key === "s" || e.key === "p" || e.key === "g")
//       ) {
//         e.preventDefault();
//         return false;
//       }

//       // Navegação com as teclas de seta
//       if (e.key === "ArrowRight") {
//         nextPage();
//       } else if (e.key === "ArrowLeft") {
//         prevPage();
//       }
//     };

//     document.addEventListener("contextmenu", handleContextMenu);
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [currentPage, totalPages]);

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       const newPage = currentPage + 1;
//       setCurrentPage(newPage);
//       if (onPageChange) onPageChange(newPage);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       const newPage = currentPage - 1;
//       setCurrentPage(newPage);
//       if (onPageChange) onPageChange(newPage);
//     }
//   };

//   const zoomIn = () => {
//     setScale((prev) => Math.min(prev + 0.1, 2));
//   };

//   const zoomOut = () => {
//     setScale((prev) => Math.max(prev - 0.1, 0.5));
//   };

//   return (
//     <div className="flex flex-col h-full">
//       {/* Área de conteúdo */}
//       <div
//         className="flex-1 overflow-y-auto bg-white mx-auto max-w-3xl px-8 py-12"
//         style={{ transform: `scale(${scale})`, transformOrigin: "center top" }}
//       >
//         <div
//           ref={contentRef}
//           className="prose prose-lg max-w-none mx-auto"
//           style={{ userSelect: "none", WebkitUserSelect: "none" }}
//           onCopy={(e) => e.preventDefault()}
//         >
//           {pages[currentPage - 1] && (
//             <div dangerouslySetInnerHTML={{ __html: pages[currentPage - 1] }} />
//           )}
//         </div>
//       </div>

//       {/* Controles */}
//       <div className="flex items-center justify-between bg-gray-100 border-t border-gray-200 p-4">
//         <button
//           onClick={prevPage}
//           disabled={currentPage <= 1}
//           className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Anterior
//         </button>

//         <div className="flex items-center space-x-4">
//           <button
//             onClick={zoomOut}
//             className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
//           >
//             -
//           </button>
//           <span className="text-sm">{Math.round(scale * 100)}%</span>
//           <button
//             onClick={zoomIn}
//             className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
//           >
//             +
//           </button>
//         </div>

//         <button
//           onClick={nextPage}
//           disabled={currentPage >= totalPages}
//           className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Próxima
//         </button>
//       </div>
//     </div>
//   );
// };
