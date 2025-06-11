import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { getCartList } from "@/lib/actions/cartList-actions";
import { cartListButton } from "@/components/AddCartListButton";

export default async function cartListPage() {
  const cartList = await getCartList();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Minha cartList</h1>

      {cartList.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <ShoppingCart className="mx-auto h-16 w-16 mb-4 text-gray-300" />
          <p className="text-xl">Sua cartList está vazia</p>
          <p>Adicione seus livros favoritos!</p>
          <Button className="mt-4" asChild>
            <a href="/books">Explorar Livros</a>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartList.map((book) => (
            <div key={book.id} className="relative">
              <div className="absolute top-2 right-2 z-10">
                <cartListButton book={book} initialIscartListed={true} />
              </div>
              <Image
                src={book.coverImage!}
                alt={book.title!}
                width={300}
                height={450}
                className="w-full object-cover rounded-lg shadow-md"
              />
              <div className="mt-4">
                <h3 className="font-semibold line-clamp-1">{book.title}</h3>
                <p className="text-gray-500 line-clamp-1">{book.author}</p>
                <p className="font-bold text-green-600 mt-2">
                  MT {book.price.toFixed(2)}
                </p>
                <Button variant="outline" className="w-full mt-2">
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
