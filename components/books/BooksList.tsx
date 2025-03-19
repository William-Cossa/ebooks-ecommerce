import getAllBooks from "@/lib/actions/books-actions";
import { Ebook } from "@/types/types";
import EbookCard from "../EbookCard";
import EbookCardSection from "../HomePage/EbookCardSection";

async function BooksList() {
  const books = await getAllBooks();
  return (
    <div>
      <EbookCardSection content={books.data!} />
    </div>
  );
}

export default BooksList;
