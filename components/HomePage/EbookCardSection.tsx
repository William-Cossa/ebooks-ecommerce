import React from "react";
import EbookCard from "../EbookCard";
import { Ebook } from "@/types/types";
import CategoryNotFound from "../books/CategoryNotFound";
interface props {
  title?: string;
  content: Ebook[] | any;
}
function EbookCardSection({ title, content }: props) {
  const ebook: Ebook[] = content;
  if (!(ebook.length > 0)) return <CategoryNotFound />;

  return (
    <section className="w-full">
      <h2 className="text-muted-foreground  font-bold mb-4 text-4xl">
        {title}
      </h2>
      {/* <ul className="grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-start gap-4"> */}
      <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8">
        {ebook.map((ebook) => (
          <li key={ebook.id} className="">
            <EbookCard ebooks={ebook} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EbookCardSection;
