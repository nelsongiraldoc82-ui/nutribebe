import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "NutriBebé - Guía de Alimentación Complementaria",
  description: "Guía de alimentación complementaria para bebés de 6+ meses. Basada en recomendaciones de la OMS, UNICEF y AEPAP.",
  icons: {
    icon: "/nutribebe-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
