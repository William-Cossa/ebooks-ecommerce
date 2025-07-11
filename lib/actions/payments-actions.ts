"use server";

import { routes } from "@/config/routes";
import { getErrorMessage } from "../utils";
import { DeliveryFee } from "@/types/types";

export async function getAllDeliveries() {
  try {
    const response = await fetch(routes.deliveries, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return {
        success: false,
        error: "Erro ao carregar localizações de entrega",
        status: response.status,
      };
    }

    const data: DeliveryFee[] = await response.json();
    data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

    return { success: true, deliviryFees: data, status: response.status };
  } catch (error: unknown) {
    return {
      success: false,
      error: getErrorMessage(error),
    };
  }
}
