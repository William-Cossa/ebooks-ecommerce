import BooksList from "@/components/books/BooksList";
import { EbooksHeroSection } from "@/components/books/EbooksHeroSection";
import Categories from "@/components/Categories";
import HeroSection from "@/components/HomePage/HeroSection";
import { searchParamsProps } from "@/types/types";
import React from "react";

function page({ searchParams }: searchParamsProps) {
  const categoria = searchParams?.categoria || "";
  return (
    <div>
      <EbooksHeroSection />
      <Categories />
      <BooksList categoria={categoria} />
    </div>
  );
}

export default page;
