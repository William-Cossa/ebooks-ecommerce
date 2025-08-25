import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, CreditCard, Smartphone } from "lucide-react";

export interface PaymentSectionProps {
  onPaymentSubmit: (paymentData: PaymentData) => void;
  total: number;
  isLoading?: boolean;
}

export interface PaymentData {
  paymentMethod: "M-pesa" | "cartao";
  phoneNumber: string;
}

export const PaymentSection = ({
  onPaymentSubmit,
  total,
  isLoading = false,
}: PaymentSectionProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"M-pesa" | "cartao">(
    "M-pesa"
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const paymentData: PaymentData = {
      paymentMethod,
      phoneNumber,
    };

    onPaymentSubmit(paymentData);
  };

  const handleTabChange = (value: string) => {
    setPaymentMethod(value as "M-pesa" | "cartao");
  };

  const isFormValid = () => {
    return paymentMethod && phoneNumber.trim();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Método de Pagamento
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs
            defaultValue="M-pesa"
            value={paymentMethod}
            onValueChange={handleTabChange}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="M-pesa" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                M-Pesa
              </TabsTrigger>
              <TabsTrigger value="cartao" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Cartão
              </TabsTrigger>
              <TabsTrigger
                value="transferencia"
                className="flex items-center gap-2"
              >
                <CreditCard className="h-4 w-4" />
                Tranferência
              </TabsTrigger>
            </TabsList>

            <TabsContent value="M-pesa" className="space-y-4">
              <div className="p-4  rounded-lg border ">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="h-5 w-5 " />
                  <h4 className="font-">Pagamento via M-Pesa</h4>
                </div>
                <p className="text-sm">
                  Pague de forma rápida e segura usando sua conta M-Pesa
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mpesa-phone">Número M-Pesa *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 " />
                  <Input
                    id="mpesa-phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+258 84 123 4567"
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Número M-Pesa onde será enviado o pedido de pagamento
                </p>
              </div>
            </TabsContent>

            <TabsContent value="cartao" className="space-y-4">
              <div className="p-4  rounded-lg border ">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <h4 className="font-medium text-blue-800">
                    Pagamento via Cartão
                  </h4>
                </div>
                <p className="text-sm text-blue-700">
                  Pague com seu cartão de crédito ou débito
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="card-phone">Número de Telefone *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                  <Input
                    id="card-phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+258 84 123 4567"
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Número associado ao seu cartão
                </p>
              </div>
            </TabsContent>
            <TabsContent value="transferencia" className="space-y-4">
              <div className="text-center">TRANSFERÊNCIA</div>
            </TabsContent>
          </Tabs>

          {/* Order Summary */}
          <div className=" p-4 rounded-lg">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total a pagar:</span>
              <span className="font-bold">{total.toFixed(2)} MT</span>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={!isFormValid() || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processando pagamento...</span>
              </div>
            ) : (
              `Confirmar Pagamento - ${total.toFixed(2)} MT`
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
