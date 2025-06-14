import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Safely AI - Protección Familiar Inteligente",
  description: "Aplicación de control parental con escaneo QR, dashboard de actividad y sistema de alertas en tiempo real para mantener seguros a tus hijos.",
  keywords: ["control parental", "seguridad familiar", "QR scanner", "dashboard", "alertas"],
  authors: [{ name: "Safely AI Team" }],
  creator: "Safely AI",
  publisher: "Safely AI",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} antialiased bg-gradient-dark min-h-screen`}>
        <AppProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
