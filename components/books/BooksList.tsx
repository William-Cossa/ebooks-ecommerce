import getAllBooks from "@/lib/actions/books-actions";
import EbookCardSection from "../HomePage/EbookCardSection";
import { searchParamsProps } from "@/types/types";

async function BooksList(searchParams: any) {
  const categoria = searchParams?.categoria;
  console.log("Categoria", categoria);
  const books = await getAllBooks();
  // const filteredBooks = selectedCategories.length
  // ? books.data?.filter((book) =>
  //     book.categories.some((cat) => selectedCategories.includes(cat))
  //   )
  // : books.data;

  return <EbookCardSection content={books.data!} />;
}

export default BooksList;
