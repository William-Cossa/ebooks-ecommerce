"use client";
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  X,
  Minus,
  Plus,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { Input } from "../ui/input";

const CartPage: React.FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    total,
    checkout,
  } = useCart();

  if (items.length === 0) {
    return (
      <Container>
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-2xl font-bold mb-8">Seu Carrinho</h1>
          <div className="text-center py-12 bg-card rounded-lg border">
            <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Seu carrinho está vazio
            </h2>
            <p className="text-muted-foreground mb-6">
              Adicione alguns livros incríveis para continuar.
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/books">Explorar Catálogo</Link>
            </Button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="">
        <h1 className="text-2xl font-bold mb-8">Seu Carrinho</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-medium">
                  {totalItems} {totalItems === 1 ? "Item" : "Itens"}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-muted-foreground "
                >
                  <X className="h-4 w-4 mr-1" />
                  Limpar carrinho
                </Button>
              </div>
              <ul className="divide-y">
                {items.map((item) => (
                  <li key={item.book.id} className="p-4">
                    <div className="flex gap-4">
                      <Link href={`/book/${item.book.id}`} className="shrink-0">
                        <Image
                          src={item.book.cover.url}
                          alt={item.book.title}
                          width={100}
                          height={150}
                          className="w-20 h-24 object-cover rounded"
                        />
                      </Link>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <Link href={`/book/${item.book.id}`}>
                            <h3 className="font-medium hover:text-blue-600 transition-colors">
                              {item.book.title}
                            </h3>
                          </Link>
                          <Button
                            variant={"outline"}
                            onClick={() => removeFromCart(item.book.id)}
                            className="text-muted-foreground "
                            aria-label="Remover item"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {Array.isArray(item.book.author)
                            ? item.book.author.join(", ")
                            : typeof item.book.author === "string"
                            ? item.book.author
                            : "Autor desconhecido"}
                        </p>
                        <p className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full inline-block">
                          {item.book.format === "ebook"
                            ? "eBook"
                            : "Livro Físico"}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                          {item.book.format === "ebook" ? (
                            <div className="flex items-center">
                              <span className="text-sm text-muted-foreground">
                                Quantidade: 1 (eBook)
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center border rounded">
                              <Button
                                variant={"ghost"}
                                onClick={() =>
                                  updateQuantity(
                                    item.book.id,
                                    item.quantity - 1
                                  )
                                }
                                className="px-2 py-1 hover:bg-muted rounded-none hover:text-muted-foreground"
                                aria-label="Diminuir quantidade"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => {
                                  const value = parseInt(e.target.value);
                                  if (!isNaN(value) && value > 0) {
                                    updateQuantity(item.book.id, value);
                                  }
                                }}
                                className="w-12 text-center py-1 border-x pr-1 pl-4 rounded-none"
                              />
                              <Button
                                variant="ghost"
                                onClick={() =>
                                  updateQuantity(
                                    item.book.id,
                                    item.quantity + 1
                                  )
                                }
                                className="px-2 py-1 hover:bg-muted rounded-none hover:text-muted-foreground"
                                aria-label="Aumentar quantidade"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                          <div className="font-medium">
                            {(item.book.price * item.quantity).toFixed(2)} MT
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border sticky top-24">
              <div className="p-4 border-b">
                <h2 className="font-medium">Resumo do Pedido</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex justify-between text-sm">
                  <span>
                    Subtotal ({totalItems} {totalItems === 1 ? "item" : "itens"}
                    )
                  </span>
                  <span>{total.toFixed(2)} MT</span>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>{total.toFixed(2)} MT</span>
                  </div>
                </div>

                <Button
                  onClick={checkout}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                >
                  Finalizar Pedido
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="flex items-start gap-2 text-xs text-muted-foreground mt-4">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <p> Frete e descontos serão calculados no checkout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
