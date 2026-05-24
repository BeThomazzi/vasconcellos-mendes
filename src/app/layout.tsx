import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  // Declarando explicitamente todos os pesos para evitar falhas de renderização do navegador
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vasconcellos & Mendes — Advocacia desde 1987",
  description: "Escritório de advocacia full-service. Direito Empresarial, Tributário, Trabalhista, Cível e Previdenciário. Discrição, método e continuidade desde 1987.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
