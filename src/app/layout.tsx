import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutriBebé - Guía de Alimentación Complementaria",
  description: "Guía de alimentación complementaria para bebés de 6+ meses. Basada en recomendaciones de la OMS, UNICEF y AEPAP. Introducción gradual de alimentos con seguimiento de reacciones.",
  keywords: ["NutriBebé", "alimentación complementaria", "bebés", "introducción alimentos", "WHO", "UNICEF", "AEPAP", "pediatría", "nutrición infantil"],
  authors: [{ name: "NutriBebé Team" }],
  icons: {
    icon: "/nutribebe-logo.png",
  },
  openGraph: {
    title: "NutriBebé - Guía de Alimentación Complementaria",
    description: "Guía de alimentación complementaria para bebés de 6+ meses siguiendo recomendaciones de la OMS",
    siteName: "NutriBebé",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriBebé - Guía de Alimentación Complementaria",
    description: "Guía de alimentación complementaria para bebés de 6+ meses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
