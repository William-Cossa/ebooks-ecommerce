import { EbooksHeroSection } from "@/components/books/EbooksHeroSection";
import Categories from "@/components/Categories";
import HeroSection from "@/components/HomePage/HeroSection";
import React from "react";

function page() {
  return (
    <div>
      <EbooksHeroSection />
      <Categories />
    </div>
  );
}

export default page;
