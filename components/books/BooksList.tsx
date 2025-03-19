import getAllBooks from "@/lib/actions/books-actions";
import EbookCardSection from "../HomePage/EbookCardSection";

async function BooksList({ searchParams }: any) {
  const categoria = searchParams.categoria;
  console.log("Categoria", categoria);
  const { books } = await getAllBooks();
  const filteredBooks = categoria
    ? books?.filter((book) => book.categories.includes(categoria))
    : books;

  return <EbookCardSection content={filteredBooks!} />;
}

export default BooksList;
