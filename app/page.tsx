import HeroSection from "@/components/HomePage/HeroSection";
import BookFormatSection from "@/components/HomePage/BookFormatSection";
import getAllBooks, {
  getNewestBooks,
  getPopularBooks,
} from "@/lib/actions/books-actions";
import BookCarousel from "@/components/BookCarousel";

export default async function Home() {
  try {
    const { books } = await getAllBooks();
    const popularBooks = await getPopularBooks();
    console.log("Popilar books", popularBooks);
    const newestBooks = await getNewestBooks();

    return (
      <div className="bg-bubbles">
        <HeroSection />
        <main className="container flex flex-col gap-12 pb-24">
          <BookCarousel title="Mais Populares" books={popularBooks} />
          <BookCarousel title="Lançamentos" books={newestBooks} />
          <BookFormatSection />
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error loading home page:", error);
    return (
      <div className="bg-bubbles">
        <HeroSection />
        <main className="container flex flex-col gap-12 pb-24">
          <div>Erro ao carregar os livros. Tente novamente.</div>
          <BookFormatSection />
        </main>
      </div>
    );
  }
}
