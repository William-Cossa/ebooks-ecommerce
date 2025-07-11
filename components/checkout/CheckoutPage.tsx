"use client";
import React, { useState, useEffect } from "react";
import { ShippingSection } from "./ShippingSection";
import { useCart } from "@/contexts/CartContext";
import CheckoutItem from "./CheckoutItem";
import { calculateShipping } from "@/lib/actions/shipping-actions";

function CheckoutPage() {
  const { total, items } = useCart();
  const [selectedShipping, setSelectedShipping] = useState<string | null>(null);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false);

  const calculateShippings = async (province: string) => {
    setIsCalculatingShipping(true);

    try {
      const quantity = items.reduce((total, item) => total + item.quantity, 0);

      const result = await calculateShipping({
        province,
        quantity,
      });

      setShippingCost(result.deliveryPrice);
    } catch (error) {
      console.error("Erro ao calcular frete:", error);
      setShippingCost(0);
    } finally {
      setIsCalculatingShipping(false);
    }
  };

  const handleShippingSelect = (province: string) => {
    setSelectedShipping(province);
    calculateShippings(province);
  };

  useEffect(() => {
    if (selectedShipping) {
      calculateShippings(selectedShipping);
    }
  }, [items]);

  return (
    <div className="bg-white">
      <section className="min-h-screen mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Delivery Section */}
            <div className="rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Entrega
              </h2>

              <ShippingSection
                onShippingSelect={handleShippingSelect}
                selectedShipping={selectedShipping}
              />

              {/* Payment Section */}
            </div>
          </div>

          {/* Checkout details */}
          <section className="sticky top-16 self-start bg-secondary h-screen w-full p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Resumo do pedido
            </h2>
            <div className="space-y-3 px-8">
              <CheckoutItem />
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span>Subtotal</span>
                  <span>{total.toFixed(2)} MT</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Frete</span>
                  <span>
                    {isCalculatingShipping ? (
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse "></div>
                      </div>
                    ) : selectedShipping ? (
                      `${shippingCost.toFixed(2)} MT`
                    ) : (
                      "Selecione o frete"
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-montserrat font-bold">
                  <span>Total</span>
                  <span>
                    {isCalculatingShipping ? (
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-5 bg-gradient-to-l from-gray-300 to-gray-200 rounded animate-pulse"></div>
                      </div>
                    ) : selectedShipping ? (
                      `${(total + shippingCost).toFixed(2)} MT`
                    ) : (
                      `${total.toFixed(2)} MT`
                    )}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default CheckoutPage;
