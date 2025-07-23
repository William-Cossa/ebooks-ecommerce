"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin, CreditCard, User, Phone, Mail, Map } from "lucide-react";
import {
  deliveryBoundaryPoints,
  deliveryPolygon,
} from "@/config/google-maps-zones";
import DeliveryMap from "@/components/DeliveryMap";
import ButtonVoltar from "@/components/ButtonVoltar";

const freeDeliveryZones = [
  {
    name: "Centro da Cidade",
    center: { lat: -25.9553, lng: 32.5892 },
    radius: 3000,
  },
  {
    name: "Polana",
    center: { lat: -25.9342, lng: 32.6052 },
    radius: 2500,
  },
  {
    name: "Sommerschield",
    center: { lat: -25.9445, lng: 32.6023 },
    radius: 2000,
  },
  {
    name: "Alto Maé",
    center: { lat: -25.9234, lng: 32.5934 },
    radius: 2200,
  },
  {
    name: "Coop",
    center: { lat: -25.9667, lng: 32.5778 },
    radius: 1800,
  },
];
const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Map className="h-5 w-5 text-blue-600" />
              Zonas de Entrega gratuita - Mapa Detalhado
            </h3>
            <DeliveryMap />
            <div className="mt-4 text-sm text-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium mb-2">Avenidas Principais:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-1 bg-red-500"></div>
                      Avenida Marginal
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-1 bg-red-500"></div>
                      Avenida Dona Alice
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-1 bg-red-500"></div>
                      Avenida Samora Machel
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-1 bg-red-500"></div>
                      Avenida 24 de Julho
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Pontos de Referência:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Praça dos Heróis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Universidade Pedagógica
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Baixa da Cidade
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Porto de Maputo
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-700">
                  <strong>Zona Verde:</strong> Área delimitada pelas principais
                  avenidas com delivery gratuito
                  <br />
                  <strong>NB:</strong> Caso o o seu endereço não esteja na zona
                  delimitada no mapa, serão aplicadas as taxas de entrega padrão
                  <br />
                  {/*
                  <strong>Pontos Azuis:</strong> Principais pontos de referência
                  na zona */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
