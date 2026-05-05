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
  title: "Próximos Passos | Plano de Combate Supremo — CPPEM Concursos",
  description:
    "Você acaba de entrar para a Mentoria Plano de Combate Supremo. Siga os próximos passos para acessar sua mentoria, entrar no grupo VIP e iniciar sua preparação.",
  openGraph: {
    title: "Próximos Passos | Plano de Combate Supremo — CPPEM Concursos",
    description:
      "Acesse todos os próximos passos da sua mentoria e inicie sua preparação da forma certa.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-slate-100">
        {children}
      </body>
    </html>
  );
}
