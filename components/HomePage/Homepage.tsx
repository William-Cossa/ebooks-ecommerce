import HeroSection from "./HeroSection";
import BookFormatSection from "./BookFormatSection";
import { Book } from "@/types/types";
import BookCarouselClient from "../BookCarousel";

interface HomepageProps {
  popularBooks: Book[];
  newestBooks: Book[];
}

export default function Homepage({ popularBooks, newestBooks }: HomepageProps) {
  return (
    <div className="bg-bubbles">
      <HeroSection />
      <main className="container flex flex-col gap-12 pb-24">
        <BookCarouselClient title="Mais Populares" books={popularBooks} />
        <BookCarouselClient title="Lançamentos" books={newestBooks} />
        <BookFormatSection />
      </main>
    </div>
  );
}
