"use client";
import React, { useState, useEffect } from "react";

import { Book, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import heroImage from "@/public/images/book.jpg";
import heroImage2 from "@/public/images/hero.jpg";
import Link from "next/link";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: <Book />, text: "Mais de 10+ Books" },
    // { icon: <Download />, text: "Instant Downloads" },
    { icon: <BookOpen />, text: "Leia em qualquer lugar" },
  ];

  return (
    <div className="min-h-screen mt-[7vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      <div className="mx-auto px-20 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Descubra um Mundo de Conhecimento no Seu Bolso
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Mergulhe em uma extensa coleção de livros digitais. Leia, aprenda
              e cresça com nossa seleção selecionada de e-books disponíveis a
              qualquer hora e em qualquer lugar.
            </p>
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span className="text-primary text-xl">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="space-x-4">
              <Button className="p-6">
                <Link href={"/ebook"}>Explorar e-books</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full">
              <Image
                src={heroImage}
                alt="Digital Reading Experience"
                className="absolute top-0 right-0 w-4/5 h-4/5 object-cover object-left rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                // loading="lazy"
              />

              <Image
                src={heroImage2}
                alt="Book Collection"
                className="absolute bottom-0 left-0 w-3/5 h-3/5 object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
