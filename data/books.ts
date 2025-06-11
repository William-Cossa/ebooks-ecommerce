import { Book } from "@/types/types";

// Dados iniciais dos livros
export const initialBooks: Book[] = [
  {
    id: "1",
    title: "O Silmarillion",
    author: ["J.R.R. Tolkien"],
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387",
    description:
      "O Silmarillion é uma coletânea de trabalhos de J. R. R. Tolkien, editado e publicado postumamente por seu filho, Christopher Tolkien, em 1977, com a assistência de Guy Gavriel Kay.",
    price: 49.9,
    rating: 4.8,
    genres: ["Fantasia", "Clássico"],
    format: "livro",
    pages: 456,
    publishDate: "1977-09-15",
    publisher: "Editora HarperCollins",
  },
  {
    id: "2",
    title: "Duna",
    author: ["Frank Herbert"],
    coverImage:
      "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?auto=format&fit=crop&q=80&w=387",
    description:
      "Duna é um romance de ficção científica escrito por Frank Herbert e publicado em 1965. É o primeiro livro da série Duna, que se tornou uma das séries mais vendidas de todos os tempos.",
    price: 45.5,
    rating: 4.9,
    genres: ["Ficção Científica", "Aventura"],
    format: "livro",
    pages: 688,
    publishDate: "1965-08-01",
    publisher: "Editora Aleph",
  },
  {
    id: "3",
    title: "1984",
    author: ["George Orwell"],
    coverImage:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=388",
    description:
      "1984 é um romance distópico publicado em 1949 pelo escritor britânico George Orwell. A obra retrata uma sociedade totalitária e repressiva.",
    price: 29.9,
    rating: 4.7,
    genres: ["Ficção Distópica", "Clássico"],
    format: "ebook",
    pages: 328,
    publishDate: "1949-06-08",
    publisher: "Companhia das Letras",
  },
  {
    id: "4",
    title: "O Hobbit",
    author: ["J.R.R. Tolkien"],
    coverImage:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?auto=format&fit=crop&q=80&w=390",
    description:
      "O Hobbit é um livro infanto-juvenil de fantasia escrito pelo filólogo e professor universitário inglês J. R. R. Tolkien.",
    price: 39.9,
    rating: 4.8,
    genres: ["Fantasia", "Aventura"],
    format: "livro",
    pages: 336,
    publishDate: "1937-09-21",
    publisher: "Editora HarperCollins",
  },
  {
    id: "5",
    title: "A Revolução dos Bichos",
    author: ["George Orwell"],
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=387",
    description:
      "A Revolução dos Bichos, também conhecido como O Triunfo dos Porcos, é um romance do escritor inglês George Orwell publicado em 1945.",
    price: 24.9,
    rating: 4.5,
    genres: ["Ficção Política", "Clássico"],
    format: "ebook",
    pages: 152,
    publishDate: "1945-08-17",
    publisher: "Companhia das Letras",
  },
  {
    id: "6",
    title: "Neuromancer",
    author: ["William Gibson"],
    coverImage:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=876",
    description:
      "Neuromancer é um romance de ficção científica que se passa em um futuro distópico, onde a tecnologia avançada e a inteligência artificial dominam o mundo.",
    price: 35.9,
    rating: 4.6,
    genres: ["Ficção Científica", "Cyberpunk"],
    format: "ebook",
    pages: 320,
    publishDate: "1984-07-01",
    publisher: "Editora Aleph",
  },
  {
    id: "7",
    title: "Fundação",
    author: ["Isaac Asimov"],
    coverImage:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=387",
    description:
      "Fundação é o primeiro livro da série homônima escrita por Isaac Asimov. A saga narra a história da Fundação, uma organização que busca preservar o conhecimento humano diante do colapso iminente do Império Galáctico.",
    price: 42.5,
    rating: 4.7,
    genres: ["Ficção Científica", "Space Opera"],
    format: "livro",
    pages: 288,
    publishDate: "1951-05-01",
    publisher: "Editora Aleph",
  },
  {
    id: "8",
    title: "A Guerra dos Tronos",
    author: ["George R.R. Martin"],
    coverImage:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=387",
    description:
      "A Guerra dos Tronos é o primeiro livro da série As Crônicas de Gelo e Fogo, uma saga épica de fantasia escrita pelo autor americano George R. R. Martin.",
    price: 59.9,
    rating: 4.9,
    genres: ["Fantasia", "Aventura"],
    format: "livro",
    pages: 592,
    publishDate: "1996-08-01",
    publisher: "Editora Suma",
  },
  {
    id: "9",
    title: "O Nome do Vento",
    author: ["Patrick Rothfuss"],
    coverImage: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg",
    description:
      "O Nome do Vento é o primeiro livro da trilogia A Crônica do Matador do Rei, escrita por Patrick Rothfuss. Narra a história de Kvothe, um mago, músico e aventureiro lendário.",
    price: 49.9,
    rating: 4.9,
    genres: ["Fantasia", "Aventura"],
    format: "ebook",
    pages: 656,
    publishDate: "2007-03-27",
    publisher: "Editora Arqueiro",
  },
  {
    id: "10",
    title: "Devoradores de Estrelas",
    author: ["Andy Weir"],
    coverImage:
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=912",
    description:
      "De Andy Weir, autor do best-seller Perdido em Marte, chega uma história fascinante e divertida sobre uma missão para salvar a humanidade.",
    price: 39.9,
    rating: 4.6,
    genres: ["Ficção Científica", "Aventura"],
    format: "ebook",
    pages: 496,
    publishDate: "2021-05-04",
    publisher: "Editora Arqueiro",
  },
  {
    id: "11",
    title: "O Senhor dos Anéis: A Sociedade do Anel",
    author: ["J.R.R. Tolkien"],
    coverImage:
      "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&q=80&w=435",
    description:
      "A Sociedade do Anel é o primeiro volume da trilogia O Senhor dos Anéis, um épico de fantasia criado pelo autor britânico J. R. R. Tolkien.",
    price: 54.9,
    rating: 4.9,
    genres: ["Fantasia", "Aventura"],
    format: "livro",
    pages: 576,
    publishDate: "1954-07-29",
    publisher: "Editora HarperCollins",
  },
  {
    id: "12",
    title: "Admirável Mundo Novo",
    author: ["Aldous Huxley"],
    coverImage:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=387",
    description:
      "Admirável Mundo Novo é um romance distópico escrito por Aldous Huxley e publicado em 1932. A história se passa em um Estado Mundial futurista e tecnologicamente avançado.",
    price: 32.9,
    rating: 4.5,
    genres: ["Ficção Distópica", "Clássico"],
    format: "ebook",
    pages: 312,
    publishDate: "1932-01-01",
    publisher: "Biblioteca Azul",
  },
];

// Funções para gerenciar localStorage
// const STORAGE_KEY = "unibooks_data";

// export const saveBooks = (books: Book[]) => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
// };

// export const loadBooks = (): Book[] => {
//   const stored = localStorage.getItem(STORAGE_KEY);
//   if (stored) {
//     try {
//       return JSON.parse(stored);
//     } catch (error) {
//       console.error("Error parsing stored books:", error);
//     }
//   }
//   // Se não há dados salvos, inicializa com os dados padrão
//   saveBooks(initialBooks);
//   return initialBooks;
// };

// export const addBook = (book: Omit<Book, "id">): Book => {
//   const books = loadBooks();
//   const newBook = {
//     ...book,
//     id: Date.now().toString(),
//   };
//   const updatedBooks = [...books, newBook];
//   saveBooks(updatedBooks);
//   return newBook;
// };

// // Carrega os livros do localStorage ou usa os dados iniciais
// export const books = loadBooks();

// export const getPopularBooks = (): Book[] => {
//   const currentBooks = loadBooks();
//   return [...currentBooks].sort((a, b) => b.rating - a.rating).slice(0, 6);
// };

// export const getNewestBooks = (): Book[] => {
//   const currentBooks = loadBooks();
//   return [...currentBooks]
//     .sort(
//       (a, b) =>
//         new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//     )
//     .slice(0, 6);
// };

// export const getRelatedBooks = (bookId: string): Book[] => {
//   const currentBooks = loadBooks();
//   const currentBook = currentBooks.find((book) => book.id === bookId);
//   if (!currentBook) return [];

//   // Encontrar livros com gêneros similares
//   return currentBooks
//     .filter(
//       (book) =>
//         book.id !== bookId &&
//         book.genres.some((genre) => currentBook.genres.includes(genre))
//     )
//     .slice(0, 4);
// };

// export const getBooksByAuthor = (
//   authorName: string,
//   excludeBookId?: string
// ): Book[] => {
//   const currentBooks = loadBooks();
//   return currentBooks.filter(
//     (book) =>
//       book.author.includes(authorName) &&
//       (!excludeBookId || book.id !== excludeBookId)
//   );
// };

// export const getBooksByGenre = (genre: string): Book[] => {
//   const currentBooks = loadBooks();
//   return currentBooks.filter((book) => book.genres.includes(genre));
// };

// export const getAllGenres = (): string[] => {
//   const currentBooks = loadBooks();
//   const genresSet = new Set<string>();
//   currentBooks.forEach((book) => {
//     book.genres.forEach((genre) => {
//       genresSet.add(genre);
//     });
//   });
//   return Array.from(genresSet).sort();
// };
