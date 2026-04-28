import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#10b981",
};

export const metadata: Metadata = {
  title: "NutriBebé - Guía de Alimentación Infantil",
  description: "Guía completa de alimentación para bebés de 6 a 24 meses. Recetas, calendario de comidas y lista de compras personalizada.",
  keywords: ["bebé", "alimentación", "nutrición infantil", "comida bebé", "destete", "alimentación complementaria", "recetas bebé"],
  authors: [{ name: "NutriBebé" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "NutriBebé - Guía de Alimentación Infantil",
    description: "Guía completa de alimentación para bebés de 6 a 24 meses",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriBebé - Guía de Alimentación Infantil",
    description: "Guía completa de alimentación para bebés de 6 a 24 meses",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NutriBebé",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
