import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "China&Paglia — Identidad y dirección creativa",
  description:
    "Consultoría de branding, comunicación y dirección creativa para empresas y desarrollos en crecimiento, transformación o expansión.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={bricolage.variable}>{children}</body>
    </html>
  );
}
