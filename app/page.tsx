import HeroSection from "@/components/HomePage/HeroSection";
import EbookCardSection from "@/components/HomePage/EbookCardSection";
import { ebooks } from "@/data/ebooks";

export default function Home() {
  const mostPopular = ebooks.slice(0, 4);
  const newEbooks = ebooks;
  return (
    <div className="">
      {/* <Hero/> */}
      <HeroSection />
      <main className=" pb-24 p-8 xl:p-10 2xl:p-20 flex flex-col gap-12">
        <EbookCardSection title={"Mais Populares"} content={mostPopular} />

        <EbookCardSection title={"Mais Recentes"} content={newEbooks} />
      </main>
    </div>
  );
}
