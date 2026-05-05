import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StepsChecklist } from "@/components/StepsChecklist";
import { SupportCard } from "@/components/SupportCard";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <StepsChecklist />
        <SupportCard />
      </main>
      <Footer />
    </div>
  );
}
