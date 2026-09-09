import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Lorraine Nguyen | Portfolio",
  description: "Software Engineering & Data Science",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ADDED 'overflow-x-hidden' and 'min-h-screen' here */}
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen overflow-x-hidden`}>
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}