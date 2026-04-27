import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  title: "NutriBebé - Guía de Alimentación Complementaria",
  description: "Guía de alimentación complementaria para bebés de 6+ meses. Basada en recomendaciones de la OMS, UNICEF y AEPAP. Introducción gradual de alimentos con seguimiento de reacciones.",
  keywords: ["NutriBebé", "alimentación complementaria", "bebés", "introducción alimentos", "WHO", "UNICEF", "AEPAP", "pediatría", "nutrición infantil"],
  authors: [{ name: "NutriBebé Team" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NutriBebé",
  },
  formatDetection: {
    telephone: false,
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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NutriBebé" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('SW registered: ', registration);
                    },
                    function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
