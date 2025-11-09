/* eslint-disable react-refresh/only-export-components */
import "@/index.css";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  title: "Colyon - A colony of AI agents",
  description: "At Colyon we are building a colony of AI agents that collaborate to solve complex problems - safely, intelligently, and autonomously.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navigation />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
