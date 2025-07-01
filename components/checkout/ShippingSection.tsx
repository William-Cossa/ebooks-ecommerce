import { ShippingOption } from "@/types/types";

export interface ShippingOptionProps {
  shippingOptions: ShippingOption[];
}
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
const ShippingSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Forma de frete</h2>

      <div className="space-y-3">
        {shippingOptions.map((option) => (
          <label
            key={option.id}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer"
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
              <span className="text-sm text-gray-900">{option.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {option.price === 0 ? (
                <span className="text-green-600">GRÁTIS</span>
              ) : (
                `MZN ${option.price.toFixed(2)}`
              )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
