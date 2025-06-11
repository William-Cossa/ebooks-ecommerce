"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  MapPin,
  CreditCard,
  User,
  Truck,
  CheckCircle,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// Tipos para pedido e livro
interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  quantity: number;
}

interface DeliveryOption {
  id: string;
  name: string;
  price: number;
  estimated_days: number;
}

const CheckoutPage: React.FC = () => {
  // Estados para gerenciar o checkout
  const [step, setStep] = useState<"cart" | "delivery" | "payment">("cart");
  const [books, setBooks] = useState<Book[]>([]);
  // Obter a cartList do cookie
  const [cartList, setcartList] = useState<Book[]>([]);

  React.useEffect(() => {
    const getCartListData = async () => {
      const cartListData = await getCartList();
      setcartList(cartListData);
      setBooks(cartListData);
    };
    getCartListData();
  }, []);

  const [deliveryOptions] = useState<DeliveryOption[]>([
    {
      id: "standard",
      name: "Entrega Padrão",
      price: 15.0,
      estimated_days: 5,
    },
    {
      id: "express",
      name: "Entrega Expressa",
      price: 30.0,
      estimated_days: 2,
    },
  ]);

  const [selectedDelivery, setSelectedDelivery] =
    useState<DeliveryOption | null>(null);

  // Cálculos
  const subtotal = books.reduce(
    (total, book) => total + book.price * book.quantity,
    0
  );
  const total = subtotal + (selectedDelivery?.price || 0);

  // Funções de manipulação
  const updateQuantity = (bookId: string, newQuantity: number) => {
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? { ...book, quantity: Math.max(1, newQuantity) }
          : book
      )
    );
  };

  const removeBook = (bookId: string) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const renderCartStep = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xl font-bold">
        <ShoppingCart />
        Seu Carrinho
      </div>

      {books.map((book) => (
        <Card key={book.id} className="flex items-center p-4">
          <Image
            src={book.coverImage}
            alt={book.title}
            width={80}
            height={120}
            className="mr-4"
          />
          <div className="flex-grow">
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.author}</p>
            <p className="font-bold">MT {book.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(book.id, book.quantity - 1)}
            >
              -
            </Button>
            <span>{book.quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(book.id, book.quantity + 1)}
            >
              +
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeBook(book.id)}
            >
              Remover
            </Button>
          </div>
        </Card>
      ))}

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>MT {subtotal.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full" onClick={() => setStep("delivery")}>
        Continuar para Entrega
      </Button>
    </div>
  );

  const renderDeliveryStep = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xl font-bold">
        <Truck />
        Opções de Entrega
      </div>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center gap-2">
            <MapPin />
            <h3 className="font-semibold">Endereço de Entrega</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="CEP" />
            <Input placeholder="Cidade" />
            <Input placeholder="Endereço" className="md:col-span-2" />
            <Input placeholder="Número" />
            <Input placeholder="Complemento" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          {deliveryOptions.map((option) => (
            <div
              key={option.id}
              className={`
                border rounded-lg p-4 cursor-pointer
                ${selectedDelivery?.id === option.id ? "border-primary" : ""}
              `}
              onClick={() => setSelectedDelivery(option)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{option.name}</h4>
                  <p className="text-sm text-gray-500">
                    {option.estimated_days} dias úteis
                  </p>
                </div>
                <span className="font-bold">MT {option.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button
        className="w-full"
        onClick={() => setStep("payment")}
        disabled={!selectedDelivery}
      >
        Continuar para Pagamento
      </Button>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xl font-bold">
        <CreditCard />
        Pagamento
      </div>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Nome completo</Label>
              <Input placeholder="Nome como no cartão" />
            </div>
            <div>
              <Label>Número do cartão</Label>
              <Input placeholder="0000 0000 0000 0000" />
            </div>
            <div>
              <Label>Data de validade</Label>
              <Input placeholder="MM/AA" />
            </div>
            <div>
              <Label>CVV</Label>
              <Input placeholder="000" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="save-card" />
            <Label htmlFor="save-card">
              Salvar cartão para próximas compras
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>MT {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Entrega</span>
            <span>MT {selectedDelivery?.price.toFixed(2) || "0.00"}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>MT {total.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full" variant="default">
        Finalizar Compra
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {step === "cart" && renderCartStep()}
        {step === "delivery" && renderDeliveryStep()}
        {step === "payment" && renderPaymentStep()}
      </div>
    </div>
  );
};

export default CheckoutPage;
