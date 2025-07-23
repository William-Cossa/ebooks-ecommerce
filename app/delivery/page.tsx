"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin, CreditCard, User, Phone, Mail, Map } from "lucide-react";
import {
  deliveryBoundaryPoints,
  deliveryPolygon,
} from "@/config/google-maps-zones";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    mpesaNumber: "",
  });

  const [isInDeliveryZone, setIsInDeliveryZone] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const mapRef = useRef(null);
  const detailMapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [detailMap, setDetailMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);

  // Zonas de delivery gratuito em Maputo (coordenadas aproximadas)
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

  useEffect(() => {
    const initMaps = () => {
      if (window.google && mapRef.current && detailMapRef.current) {
        // Mapa principal com círculos
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: { lat: -25.9553, lng: 32.5892 },
          zoom: 12,
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
            },
          ],
        });

        // Mapa detalhado com avenidas
        const detailMapInstance = new window.google.maps.Map(
          detailMapRef.current,
          {
            center: { lat: -25.9553, lng: 32.5892 },
            zoom: 14,
            styles: [
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
              },
            ],
          }
        );

        const geocoderInstance = new window.google.maps.Geocoder();
        setGeocoder(geocoderInstance);
        setMap(mapInstance);
        setDetailMap(detailMapInstance);

        // Adicionar círculos para zonas de delivery gratuito no mapa principal
        freeDeliveryZones.forEach((zone) => {
          new window.google.maps.Circle({
            strokeColor: "#10B981",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#10B981",
            fillOpacity: 0.2,
            map: mapInstance,
            center: zone.center,
            radius: zone.radius,
          });

          // Adicionar marcador no centro da zona
          new window.google.maps.Marker({
            position: zone.center,
            map: mapInstance,
            title: `Delivery Gratuito - ${zone.name}`,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#10B981",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
          });
        });

        // Adicionar polígono da zona de delivery no mapa detalhado
        new window.google.maps.Polygon({
          paths: deliveryPolygon,
          strokeColor: "#10B981",
          strokeOpacity: 0.9,
          strokeWeight: 3,
          fillColor: "#10B981",
          fillOpacity: 0.3,
          map: detailMapInstance,
        });

        // Adicionar marcadores dos pontos principais no mapa detalhado
        deliveryBoundaryPoints.forEach((point) => {
          new window.google.maps.Marker({
            position: { lat: point.lat, lng: point.lng },
            map: detailMapInstance,
            title: point.name,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 6,
              fillColor: "#3B82F6",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
          });
        });
      }
    };

    if (window.google) {
      initMaps();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDF_ZeHxHH3f2_DOuWKyJwLBAsDJZWuHQU&libraries=geometry`;
      script.onload = initMaps;
      document.head.appendChild(script);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Verificar zona de delivery quando o endereço muda
    if (name === "address" && value.length > 5 && geocoder) {
      checkDeliveryZone(value);
    }
  };

  const checkDeliveryZone = (address) => {
    if (!geocoder) return;

    geocoder.geocode(
      { address: address + ", Maputo, Mozambique" },
      (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;
          let inZone = false;

          freeDeliveryZones.forEach((zone) => {
            const distance =
              window.google.maps.geometry.spherical.computeDistanceBetween(
                location,
                new window.google.maps.LatLng(zone.center.lat, zone.center.lng)
              );

            if (distance <= zone.radius) {
              inZone = true;
            }
          });

          setIsInDeliveryZone(inZone);
          setDeliveryFee(inZone ? 0 : 150);

          // Adicionar marcador no mapa principal
          if (map) {
            new window.google.maps.Marker({
              position: location,
              map: map,
              title: "Seu Endereço",
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: inZone ? "#10B981" : "#EF4444",
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 2,
              },
            });
          }

          // Adicionar marcador no mapa detalhado
          if (detailMap) {
            new window.google.maps.Marker({
              position: location,
              map: detailMap,
              title: "Seu Endereço",
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: inZone ? "#10B981" : "#EF4444",
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 2,
              },
            });
          }
        }
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pedido processado com sucesso!");
  };

  const subtotal = 850;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <CreditCard className="h-8 w-8" />
              Finalizar Pedido
            </h1>
            <p className="text-blue-100 mt-2">
              Complete seus dados para finalizar a compra
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Formulário de Pagamento */}
            <div className="space-y-6">
              <div onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    Dados Pessoais
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-4"
                    required
                  />
                </div>

                {/* Endereço de Entrega */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Endereço de Entrega
                  </h3>
                  <textarea
                    name="address"
                    placeholder="Endereço completo (rua, número, bairro)"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="3"
                    required
                  />
                  {formData.address && (
                    <div
                      className={`mt-3 p-3 rounded-lg ${
                        isInDeliveryZone
                          ? "bg-green-50 border border-green-200"
                          : "bg-yellow-50 border border-yellow-200"
                      }`}
                    >
                      <p
                        className={`text-sm font-medium ${
                          isInDeliveryZone
                            ? "text-green-800"
                            : "text-yellow-800"
                        }`}
                      >
                        {isInDeliveryZone
                          ? "✓ Zona de delivery gratuito!"
                          : "⚠ Fora da zona gratuita - Taxa: 150 MT"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Método de Pagamento */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    Método de Pagamento
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === "card"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Cartão de Crédito/Débito
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="mpesa"
                          checked={formData.paymentMethod === "mpesa"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        M-Pesa
                      </label>
                    </div>

                    {formData.paymentMethod === "card" && (
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Número do cartão"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="expiryDate"
                            placeholder="MM/AA"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                          <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {formData.paymentMethod === "mpesa" && (
                      <input
                        type="text"
                        name="mpesaNumber"
                        placeholder="Número M-Pesa"
                        value={formData.mpesaNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    )}
                  </div>
                </div>

                {/* Resumo do Pedido */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">
                    Resumo do Pedido
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>{subtotal} MT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxa de entrega:</span>
                      <span
                        className={
                          deliveryFee === 0
                            ? "text-green-600 font-semibold"
                            : ""
                        }
                      >
                        {deliveryFee === 0 ? "GRÁTIS" : `${deliveryFee} MT`}
                      </span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>{total} MT</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  Finalizar Pedido - {total} MT
                </button>
              </div>
            </div>

            {/* Mapas */}
            <div className="space-y-6">
              {/* Mapa Geral com Círculos */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Map className="h-5 w-5 text-blue-600" />
                  Zonas de Delivery Gratuito - Visão Geral
                </h3>
                <div
                  ref={mapRef}
                  className="w-full h-80 rounded-lg border border-gray-300"
                />
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium mb-2">
                    Áreas com delivery gratuito:
                  </p>
                  <ul className="space-y-1">
                    {freeDeliveryZones.map((zone, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        {zone.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mapa Detalhado com Avenidas */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Map className="h-5 w-5 text-green-600" />
                  Mapa Detalhado - Avenidas e Pontos de Referência
                </h3>
                <div
                  ref={detailMapRef}
                  className="w-full h-96 rounded-lg border border-gray-300"
                />
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
                      <strong>Zona Verde:</strong> Área delimitada pelas
                      principais avenidas com delivery gratuito
                      <br />
                      <strong>Linhas Vermelhas:</strong> Avenidas que definem os
                      limites da zona
                      <br />
                      <strong>Pontos Azuis:</strong> Principais pontos de
                      referência na zona
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
