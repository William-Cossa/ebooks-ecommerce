import HeroSection from "@/components/HomePage/HeroSection";
import EbookCardSection from "@/components/HomePage/EbookCardSection";
import { ebooks } from "@/data/ebooks";
import BookFormatSection from "@/components/HomePage/BookFormatSection";

export default function Home() {
  const mostPopular = ebooks.slice(0, 4);
  const newEbooks = ebooks.slice(5, 9);
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
