"use client";
import React, { useState } from "react";
import { Check, Info } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { ShippingSection } from "./ShippingSection";

export default function checkout() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    cep: "",
    city: "",
    shippingMethod: "cidade-maputo",
    paymentMethod: "mpesa",
    saveInfo: false,
  });

  const { items: cartItems } = useCart();

  const shippingOptions = [
    {
      id: "cidade-maputo",
      name: "Cidade de Maputo",
      price: 0,
      label: "GRÁTIS",
    },
    { id: "provincia-maputo", name: "Província de Maputo", price: 350.0 },
    { id: "inhambane", name: "Inhambane", price: 560.0 },
    { id: "chemoio", name: "Chemoio", price: 570.0 },
    { id: "pemba", name: "Pemba", price: 600.0 },
    { id: "beira", name: "Beira", price: 640.0 },
    { id: "nampula", name: "Nampula", price: 700.0 },
    { id: "quelimane", name: "Quelimane", price: 700.0 },
    { id: "tete", name: "Tete", price: 700.0 },
    { id: "nacala", name: "Nacala", price: 750.0 },
  ];

  const paymentMethods = [
    { id: "mpesa", name: "MPESA" },
    { id: "emola", name: "EMOLA" },
  ];

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );
  const selectedShipping = shippingOptions.find(
    (option) => option.id === formData.shippingMethod
  );
  const shippingCost = selectedShipping ? selectedShipping.price : 0;
  const estimatedTaxes = 92.0; // Fixed value as shown in image
  const total = subtotal + shippingCost + estimatedTaxes;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-8">
            {/* Delivery Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Entrega
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nome (opcional)"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Sobrenome"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Endereço"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartamento, bloco etc. (opcional)"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="cep"
                  placeholder="CEP (opcional)"
                  value={formData.cep}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Salvar minhas informações para a próxima vez
              </label>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ShippingSection />
            </div>

            {/* Payment Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Pagamento
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Todas as transações são seguras e criptografadas.
              </p>

              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={handleInputChange}
                      className="mr-3 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {method.name}
                    </span>
                  </label>
                ))}
              </div>

              {formData.paymentMethod === "mpesa" && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-800">
                    TRANSFERÊNCIA PARA 84 5583 754
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:pl-8">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Resumo do pedido
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.book.id}
                    className="flex items-center space-x-4"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {item.book.coverImage}
                      </div>
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {item.book.title}
                      </h3>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      MZN {item.book.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal • 2 itens</span>
                  <span className="text-gray-900">
                    MZN {subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Frete</span>
                  <span className="text-gray-900">
                    {shippingCost === 0
                      ? "GRÁTIS"
                      : `MZN ${shippingCost.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <span className="text-gray-600">Tributos estimados</span>
                    <Info className="w-4 h-4 ml-1 text-gray-400" />
                  </div>
                  <span className="text-gray-900">
                    MZN {estimatedTaxes.toFixed(2)}
                  </span>
                </div>

                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">
                      MZN {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
