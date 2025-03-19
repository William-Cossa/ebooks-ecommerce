"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const EbooksHeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden mt-[   vh] bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-500"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500"></div>
      </div>

      <div className="container lg:max-w-4xl xl:max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sua Biblioteca Digital
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore nossa coleção de livros digitais. Leia clássicos da
              literatura e novas obras em qualquer dispositivo, sem necessidade
              de cadastro.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/books"
                className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300"
              >
                Explorar Catálogo
              </Link>
              <Link
                href="/books"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300"
              >
                Adicionados Recentemente
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 text-sm text-blue-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                  <path d="M10 8a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5A.75.75 0 0110 18z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>+200 Títulos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Leitura Online</span>
              </div>
              <div className="flex items-center gap-2"></div>
            </motion.div>
          </div>

          {/* Illustration/Book Display */}
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Book Cover Shadow */}
              <div className="absolute inset-0 bg-black/20 blur-xl transform translate-y-4 scale-95 rounded-lg"></div>

              {/* Main Book */}
              <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg shadow-2xl">
                <div className="bg-white rounded overflow-hidden aspect-[3/4] shadow-inner">
                  <div className="p-8 h-full flex flex-col">
                    <div className="w-full h-2 bg-gray-200 rounded mb-4"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded mb-8"></div>
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-xl text-gray-400 font-serif italic">
                        "A leitura é a viagem de quem não pode pegar um trem."
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded mt-8"></div>
                    <div className="w-2/3 h-2 bg-gray-200 rounded mt-4"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Books */}
              <div className="absolute -right-16 -bottom-8 w-32 h-40 bg-blue-600 rounded-md transform rotate-12 shadow-lg"></div>
              <div className="absolute -left-12 -bottom-6 w-28 h-36 bg-indigo-500 rounded-md transform -rotate-6 shadow-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
