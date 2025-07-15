import { getAllDeliveries } from "@/lib/actions/payment-actions";
import { DeliveryFee } from "@/types/types";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export interface ShippingSectionProps {
  onShippingSelect: (id: string) => void;
  selectedShipping: string | null;
}

export const ShippingSection = ({
  onShippingSelect,
  selectedShipping,
}: ShippingSectionProps) => {
  const [shippingOptions, setShippingOptions] = useState<DeliveryFee[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchShippingOptions() {
      try {
        setIsLoading(true);
        const { deliviryFees } = await getAllDeliveries();
        setShippingOptions(deliviryFees!);
      } catch (error) {
        console.error("Erro ao carregar opções de frete:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchShippingOptions();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg animate-pulse"
          >
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-3"></div>
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <RadioGroup
        // value={selectedShipping || ""}
        onValueChange={(value) => onShippingSelect(value)}
        className="space-y-0 gap-0"
        defaultValue={shippingOptions[0]?.id}
      >
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-center justify-between px-3 border first:rounded-t-lg first:border-t last:rounded-b-lg border-t-0 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 w-full">
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="border-gray-300"
              />
              <Label
                htmlFor={option.id}
                className="text-sm text-gray-800 cursor-pointer w-full py-3 font-medium"
              >
                {option.province}
              </Label>
            </div>
            <span className="text-sm font-semibold text-nowrap">
              {Number(option.price) === 0 ? (
                <span className="text-green-600 font-bold">GRÁTIS</span>
              ) : (
                `${Number(option.price).toFixed(2)} MT`
              )}
            </span>
          </div>
        ))}
      </RadioGroup>

      {shippingOptions.length === 0 && !isLoading && (
        <p className="text-sm text-gray-500 text-center py-4">
          Nenhuma opção de frete disponível
        </p>
      )}
    </div>
  );
};
