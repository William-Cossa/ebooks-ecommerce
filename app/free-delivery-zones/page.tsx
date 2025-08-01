"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin, CreditCard, User, Phone, Mail, Map } from "lucide-react";
import {
  deliveryBoundaryPoints,
  deliveryPolygon,
} from "@/config/google-maps-zones";
import DeliveryMap from "@/components/DeliveryMap";
import ButtonVoltar from "@/components/ButtonVoltar";

const Delivery = () => {
  return (
    <div className="min-h-screen bg- py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Map className="h-5 w-5 text-bl" />
              Zonas de Entrega gratuita - Mapa Detalhado
            </h3>
            <DeliveryMap />
            <div className="mt-4 text-sm ">
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
              <div className="mt-4 p-3 rounded-lg bg-card">
                <p className="text-xs text-muted-foreground">
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
