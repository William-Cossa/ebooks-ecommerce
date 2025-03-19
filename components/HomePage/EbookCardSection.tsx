import React from "react";
import EbookCard from "../EbookCard";
import { Ebook } from "@/types/types";
interface props {
  title?: string;
  content: Ebook[];
}
function EbookCardSection({ title, content }: props) {
  const ebook: Ebook[] = content;
  if (!(ebook.length > 0)) return null;

  return (
    <section className="">
      <h2 className="text-muted-foreground  font-bold mb-4 text-4xl">
        {title}
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {ebook.map((ebook) => (
          <li key={ebook.id}>
            <EbookCard ebooks={ebook} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EbookCardSection;
