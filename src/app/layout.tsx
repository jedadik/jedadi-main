import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jedadi.com"),
  title: "JEDADI — Look Always Ahead",
  description:
    "Arquitectura cibernética y ecosistema modular: Productividad Anti-Estrés, Energía Solar Fotovoltaica y Aprendizaje Neuronal de Idiomas.",
  icons: {
    icon: "/logo.png?v=2",
    apple: "/logo.png?v=2",
  },
  openGraph: {
    title: "JEDADI — Look Always Ahead",
    description:
      "Arquitectura cibernética y ecosistema modular: Productividad Anti-Estrés, Energía Solar Fotovoltaica y Aprendizaje Neuronal de Idiomas.",
    images: ["/emblem.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-titanium-dark text-white">{children}</body>
    </html>
  );
}
