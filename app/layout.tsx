import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreaNumerik04 - Guillaume Ceccoli",
  description: "Le site portfolio de Guillaume Ceccoli, développeur web.",
  keywords: [
    "portfolio",
    "développeur web",
    "Guillaume Ceccoli",
    "CreaNumerik04",
    "Développeur web saint etienne les orgues",
    "développeur web alpes de hautes provence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

