import type { Metadata } from "next";
import { Inter, Oxanium, Rajdhani } from "next/font/google";
import { EmberField } from "./components/ember-field";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { PLAN } from "@/lib/plan";
import "./globals.css";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const oxanium = Oxanium({ variable: "--font-display", subsets: ["latin"] });
const rajdhani = Rajdhani({ variable: "--font-ui", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: `Próximos Passos | ${PLAN.name} — CPPEM Concursos`,
  description: `Você acaba de entrar para a Mentoria ${PLAN.name}. Siga os próximos passos para acessar sua mentoria, entrar no grupo VIP e iniciar sua preparação.`,
  openGraph: {
    title: `Próximos Passos | ${PLAN.name} — CPPEM Concursos`,
    description: "Acesse todos os próximos passos da sua mentoria e inicie sua preparação da forma certa.",
    siteName: "CPPEM Concursos",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oxanium.variable} ${rajdhani.variable}`}>
      <body>
        <div className="page-shell" id="topo">
          <EmberField />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
