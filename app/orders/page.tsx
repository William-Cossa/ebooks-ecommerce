"use client";
import React from "react";
import { useOrders } from "@/contexts/OrderContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Calendar, Package } from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";

const OrdersPage: React.FC = () => {
  const { orders } = useOrders();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pendente";
      case "processing":
        return "Processando";
      case "completed":
        return "Concluído";
      case "cancelled":
        return "Cancelado";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (orders.length === 0) {
    return (
      <Container>
        <div className="text-center py-12">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Nenhum pedido encontrado
          </h2>
          <p className="text-gray-600 mb-6">
            Você ainda não fez nenhum pedido. Explore nosso catálogo e faça sua
            primeira compra!
          </p>
          <Link href="/books">
            <Button>Explorar Livros</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Package className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Meus Pedidos</h1>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="w-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">
                      Pedido #{order.id}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(order.date)}</span>
                    </div>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    {getStatusText(order.status)}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Itens do pedido:</h4>
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.book.coverImage}
                          alt={item.book.title}
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">
                            {item.book.title}
                          </p>
                          <p className="text-xs text-gray-600">
                            {item.book.author.join(", ")}
                          </p>
                          <p className="text-xs text-blue-600">
                            Quantidade: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            {(item.book.price * item.quantity).toFixed(2)} MT
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold">
                      Total: {order.total.toFixed(2)} MT
                    </span>
                    <div className="space-x-2">
                      <Badge variant="outline">
                        {order.items.length}{" "}
                        {order.items.length === 1 ? "item" : "itens"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OrdersPage;
