import Await from "@/components/await";
import BooksList from "@/components/books/BooksList";
import { EbooksHeroSection } from "@/components/books/EbooksHeroSection";
import Categories from "@/components/Categories";
import EbookCardSection from "@/components/HomePage/EbookCardSection";
import HeroSection from "@/components/HomePage/HeroSection";
import Skeleton from "@/components/Sekeleton";
import getAllBooks from "@/lib/actions/books-actions";
import { Ebook, searchParamsProps } from "@/types/types";
import React, { Suspense } from "react";

async function Books({ searchParams }: searchParamsProps) {
  return (
    <div>
      <EbooksHeroSection />
      <div className="p-8 lg:p-10 2xl:px-20">
        <Categories />
        <BooksList searchParams={searchParams} />
      </div>
    </div>
  );
}

export default Books;
