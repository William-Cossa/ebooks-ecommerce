import HeroSection from "@/components/HomePage/HeroSection";
import EbookCardSection from "@/components/HomePage/EbookCardSection";
import { loadBooks } from "@/data/books";
import BookFormatSection from "@/components/HomePage/BookFormatSection";
import getAllBooks from "@/lib/actions/books-actions";

export default async function Home() {
  const { books } = await getAllBooks();
  const mostPopular = books?.slice(0, 4);
  console.log(books);
  const newEbooks = books?.slice(5, 9);
  return (
    <div className="bg-bubbles">
      {/* <Hero/> */}
      <HeroSection />
      <main className="container  flex flex-col gap-12 pb-24">
        <EbookCardSection title={"Mais Populares"} content={mostPopular} />

        <EbookCardSection title={"Mais Recentes"} content={newEbooks} />

        <BookFormatSection />
      </main>
    </div>
  );
}
