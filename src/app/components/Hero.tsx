import { ArrowDown } from "lucide-react";
import { PLAN } from "@/lib/plan";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden />
      <div className="container hero-inner">
        <span className="eyebrow hero-eyebrow">Mentoria {PLAN.name}</span>
        <h1 className="hero-title">
          Parabéns pela sua <span>decisão!</span>
        </h1>
        <p className="hero-copy">
          Agora você faz parte da elite do CPPEM. Você escolheu caminhar com direção, acompanhamento e estratégia.
          Para acessar sua mentoria e iniciar a preparação da forma correta, siga os <strong>5 passos rápidos</strong> abaixo,
          um de cada vez.
        </p>
        <a className="gold-button" href="#passos">
          Começar pelo passo 1 <ArrowDown size={16} aria-hidden />
        </a>
      </div>
    </section>
  );
}
