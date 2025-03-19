import BooksList from "@/components/books/BooksList";
import { EbooksHeroSection } from "@/components/books/EbooksHeroSection";
import Categories from "@/components/Categories";

import { searchParamsProps } from "@/types/types";
import React, { Suspense } from "react";

async function Books({ searchParams }: searchParamsProps) {
  return (
    <Suspense>
      <EbooksHeroSection />
      <div className="p-8 lg:p-10 2xl:px-20">
        <Categories />
        <BooksList searchParams={searchParams} />
      </div>
    </Suspense>
  );
}

export default Books;
