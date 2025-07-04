import type { Metadata } from "next";
import { Montserrat, Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { OrderProvider } from "@/contexts/OrderContext";
import { Toaster as Sonner } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebooks Unitec",
  description: "Generated by create next app",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        // className={`flex flex-col bg-secondary w-scree ${nunito.className} ${montserrat.variable}`}
        className={`flex flex-col min-h-screen bg-secondary w-screen overflow-x-hidden`}
      >
        <OrderProvider>
          <CartProvider>
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </CartProvider>
          {/* <Toaster /> */}
          <Sonner richColors />
        </OrderProvider>
      </body>
    </html>
  );
}
