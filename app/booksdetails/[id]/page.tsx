import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RatingStars } from "@/components/RatingsStars";

interface Author {
  id: string;
  name: string;
  bio?: string;
}

interface Book {
  id: string;
  title: string;
  author: Author;
  coverImage: string;
  description: string;
  price: number;
  rating: number;
  totalReviews: number;
  genres: string[];
  format: "ebook" | "paperback" | "hardcover";
  pages?: number;
  publishDate: string;
  publisher: string;
}

async function fetchBookDetails(id: string): Promise<Book> {
  return {
    id: id,
    title: "O Último Desejo",
    author: {
      id: "1",
      name: "Andrzej Sapkowski",
    },
    coverImage: "/images/book-cover.jpg",
    description:
      "Primeiro livro da série Wiedźmin, que inspirou o famoso jogo The Witcher. Neste volume, acompanhamos Geralt de Rívia, um bruxo treinado desde a infância para combater criaturas sobrenaturais.",
    price: 1352.0,
    rating: 4.7,
    totalReviews: 1245,
    genres: ["Fantasia", "Aventura", "Literatura Fantástica"],
    format: "ebook",
    pages: 288,
    publishDate: "2019-03-15",
    publisher: "WMF Martins Fontes",
  };
}

export default async function BookDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const book = await fetchBookDetails(params.id);

  return (
    <div className="mx-auto px-4 py-10 mt-[7vh] max-w-7xl">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center ">
          <Image
            src={book.coverImage}
            alt={`Capa do livro ${book.title}`}
            width={1000}
            height={1000}
            className="shadow-xl h-[420px] w-64 rounded-sm"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">por {book.author.name}</p>

          <div className="mb-4">
            <RatingStars rating={book.rating} />
            <p className="text-sm text-gray-500">
              {book.totalReviews} avaliações
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary">
                  MT {book.price.toFixed(2)}
                </span>
                <Button size="lg" className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Comprar Agora
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Descrição */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Descrição</h2>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>

          <Separator className="my-6" />

          {/* Detalhes Adicionais */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">Formato:</p>
              <p>{book.format === "ebook" ? "E-book" : book.format}</p>
            </div>
            <div>
              <p className="font-semibold">Editora:</p>
              <p>{book.publisher}</p>
            </div>
            <div>
              <p className="font-semibold">Páginas:</p>
              <p>{book.pages || "Não disponível"}</p>
            </div>
            <div>
              <p className="font-semibold">Publicação:</p>
              <p>{new Date(book.publishDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Gêneros */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Gêneros</h3>
            <div className="flex flex-wrap gap-2">
              {book.genres.map((genre) => (
                <span
                  key={genre}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
