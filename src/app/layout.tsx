import type { Metadata } from "next";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
