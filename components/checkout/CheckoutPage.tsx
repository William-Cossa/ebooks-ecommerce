"use client";
import React, { useState, useEffect } from "react";
import { PaymentSection, PaymentData } from "./PaymentSection";
import { useCart } from "@/contexts/CartContext";
import CheckoutItem from "./CheckoutItem";
import { calculateShipping } from "@/lib/actions/shipping-actions";
import {
  efectuarPagamento,
  PaymentRequest,
} from "@/lib/actions/payment-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import DeliveryForm, { DeliveryData } from "../forms/DeliveryForm";

function CheckoutPage() {
  const { total, items, clearCart } = useCart();
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const router = useRouter();

  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
    deliveryLocation: "",
    selectedShipping: null,
  });

  const calculateShippings = async (id: string) => {
    setIsCalculatingShipping(true);

    try {
      const quantity = items.reduce((total, item) => total + item.quantity, 0);

      const result = await calculateShipping({
        id,
        quantity,
      });

      setShippingCost(result.deliveryPrice);
    } catch (error) {
      console.error("Erro ao calcular frete:", error);
      setShippingCost(0);
      toast.error("Erro ao calcular frete. Tente novamente.");
    } finally {
      setIsCalculatingShipping(false);
    }
  };

  const handleDeliveryChange = (newDeliveryData: DeliveryData) => {
    setDeliveryData(newDeliveryData);

    // Se o frete foi alterado, recalcular o custo
    if (
      newDeliveryData.selectedShipping &&
      newDeliveryData.selectedShipping !== deliveryData.selectedShipping
    ) {
      calculateShippings(newDeliveryData.selectedShipping);
    }
  };

  const handlePaymentSubmit = async (paymentData: PaymentData) => {
    if (!deliveryData.selectedShipping) {
      toast.error("Por favor, selecione uma opção de frete");
      return;
    }

    if (
      !deliveryData.contactInfo.name.trim() ||
      !deliveryData.contactInfo.email.trim() ||
      !deliveryData.contactInfo.phone.trim() ||
      !deliveryData.deliveryLocation.trim()
    ) {
      toast.error("Por favor, preencha todas as informações de entrega");
      return;
    }

    setIsProcessingPayment(true);

    try {
      const paymentRequest: PaymentRequest = {
        ebooks: items.map((item) => ({
          ebookId: item.book.id,
          quantity: item.quantity,
        })),
        paymentMethod: paymentData.paymentMethod,
        phoneNumber: paymentData.phoneNumber,
        province: deliveryData.selectedShipping,
        deliveryLocation: deliveryData.deliveryLocation,
        contactInfo: deliveryData.contactInfo,
      };
      console.log("Payment Request:", paymentRequest);

      const result = await efectuarPagamento(paymentRequest);

      if (result.success) {
        toast.success(result.message);
        clearCart();
        router.push(`/orders/${result.orderId}`);
      } else {
        toast.error(result.message || "Erro ao processar pagamento");
      }
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
      toast.error("Erro inesperado. Tente novamente.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  useEffect(() => {
    if (deliveryData.selectedShipping) {
      calculateShippings(deliveryData.selectedShipping);
    }
  }, [items]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Finalizar Compra
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de checkout */}
          <div className="space-y-6">
            {/* Formulário de Entrega */}
            <DeliveryForm
              onDeliveryChange={handleDeliveryChange}
              deliveryData={deliveryData}
            />

            {/* Seção de Pagamento */}
            <PaymentSection
              onPaymentSubmit={handlePaymentSubmit}
              total={total + shippingCost}
              isLoading={isProcessingPayment}
            />
          </div>

          {/* Resumo do pedido */}
          <div className="lg:sticky lg:top-16 lg:self-start">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-medium mb-4">Resumo do pedido</h2>

              <div className="space-y-4">
                <CheckoutItem />

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>{total.toFixed(2)} MT</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Frete</span>
                    <span>
                      {isCalculatingShipping ? (
                        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                      ) : deliveryData.selectedShipping ? (
                        `${shippingCost.toFixed(2)} MT`
                      ) : (
                        "Selecione o frete"
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span className="text-green-600">
                      {isCalculatingShipping ? (
                        <div className="w-20 h-5 bg-gray-200 rounded animate-pulse"></div>
                      ) : deliveryData.selectedShipping ? (
                        `${(total + shippingCost).toFixed(2)} MT`
                      ) : (
                        `${total.toFixed(2)} MT`
                      )}
                    </span>
                  </div>
                </div>

                {/* Informações adicionais */}
                <div className="text-xs text-gray-500 pt-4 border-t">
                  <p>✓ Entrega segura e rastreável</p>
                  <p>✓ Suporte 24/7 disponível</p>
                  <p>✓ Garantia de satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
