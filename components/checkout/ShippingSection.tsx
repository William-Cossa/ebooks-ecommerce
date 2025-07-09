" use client";
import { getAllDeliveries } from "@/lib/actions/payments-actions";
import { DeliveryFee, ShippingOption } from "@/types/types";
import { useEffect, useState } from "react";

export interface ShippingOptionProps {
  shippingOptions: ShippingOption[];
}

export const ShippingSection = () => {
  const [shippingOptions, setShippingOptions] = useState<DeliveryFee[]>([]);

  useEffect(() => {
    async function fetchShippingOptions() {
      const { deliviryFees } = await getAllDeliveries();
      setShippingOptions(deliviryFees!);
    }
    fetchShippingOptions();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Forma de frete</h2>

      <div className="space-y ">
        {shippingOptions?.map((option) => (
          <label
            key={option.id}
            className="flex items-center justify-between p-3 border border-gray-200 first:rounded-t-xl first:border-t border-t-0 last:rounded-b-xl hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="shippingMethod"
                value={option.id}
                // checked={formData.shippingMethod === option.id}
                // onChange={handleInputChange}
                className="mr-3 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">{option.province}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {Number(option.price) == 0 ? (
                <span className="text-green-600">GRÁTIS</span>
              ) : (
                `MZN ${Number(option.price).toFixed(2)}`
              )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
