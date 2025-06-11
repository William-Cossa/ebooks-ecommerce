import { BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

function BookFormatSection() {
  return (
    <section className="">
      <h2 className="text-2xl font-bold text-bookBlue mb-6">
        Explore por Formato
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group relative overflow-hidden rounded-lg bg-bookBlue/10 p-6 transition-all hover:bg-bookBlue/20">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-bookOrange/20 p-3">
              <BookOpen className="h-6 w-6 text-bookOrange" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">eBooks</h3>
              <p className="text-sm text-muted-foreground">
                Leia em qualquer dispositivo
              </p>
            </div>
          </div>
          <Link
            href="/books?format=ebook"
            className="absolute inset-0 z-10"
            aria-label="Ver eBooks"
          />
        </div>

        <div className="group relative overflow-hidden rounded-lg bg-bookBrown/10 p-6 transition-all hover:bg-bookBrown/20">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-bookBrown/20 p-3">
              <BookOpen className="h-6 w-6 text-bookBrown" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Livros Físicos</h3>
              <p className="text-sm text-muted-foreground">
                Sinta o cheiro das páginas
              </p>
            </div>
          </div>
          <Link
            href="/books?format=livro"
            className="absolute inset-0 z-10"
            aria-label="Ver Livros Físicos"
          />
        </div>
      </div>
    </section>
  );
}

export default BookFormatSection;
