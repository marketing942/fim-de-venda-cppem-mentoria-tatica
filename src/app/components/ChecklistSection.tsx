"use client";

import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import { PLAN } from "@/lib/plan";
import StepCard from "./StepCard";

const STORAGE_KEY = `cppem-${PLAN.slug}-steps-v2`;

const STEPS = [
  {
    number: 1,
    title: "Confira o e-mail da sua compra",
    description:
      "Sua liberação é automática: o acesso chega no mesmo e-mail que você cadastrou na hora da compra. Confira se ele já chegou.",
    howTo: [
      "Abra o e-mail que você usou na hora da compra.",
      "Pesquise por “CPPEM” na caixa de entrada, no spam ou em promoções.",
      "Encontrou o acesso? Volte aqui e clique em “Já conferi meu e-mail”.",
      "Não chegou? Fale com a nossa equipe pelos canais de atendimento no fim desta página.",
    ],
    buttonLabel: "Já conferi meu e-mail",
    href: undefined,
    badge: "Obrigatório",
  },
  {
    number: 2,
    title: "Salve o link da plataforma",
    description:
      "Este é o link oficial de acesso à plataforma da mentoria. Deixe salvo nos favoritos do seu navegador para acessar sempre que precisar.",
    howTo: [
      "Clique no botão abaixo para abrir a plataforma.",
      "Salve a página nos favoritos do seu navegador.",
      "Guarde esse link: você vai usá-lo para acessar seus conteúdos.",
    ],
    buttonLabel: "Acessar plataforma",
    href: "https://plataforma.cppem.com.br",
  },
  {
    number: 3,
    title: "Entre no Grupo VIP",
    description: `Acesse o grupo VIP oficial da Mentoria ${PLAN.name}. Esse será um dos canais importantes para avisos, direcionamentos e acompanhamento da sua preparação.`,
    howTo: [
      "Clique no botão abaixo para abrir o grupo.",
      "Entre no grupo VIP da sua mentoria.",
      "Fique de olho nos avisos: é por lá que os direcionamentos são enviados.",
    ],
    buttonLabel: "Entrar no Grupo VIP",
    href: PLAN.vipLink,
  },
  {
    number: 4,
    title: "Assista ao vídeo de uso da plataforma",
    description:
      "Veja o vídeo explicando como utilizar a plataforma corretamente, acessar seus conteúdos e iniciar sua preparação sem dificuldade.",
    howTo: [
      "Clique no botão abaixo: o vídeo abre em uma nova aba.",
      "Assista até o fim para aprender a acessar seus conteúdos.",
      "Pronto: sua entrada está concluída.",
    ],
    buttonLabel: "Assistir vídeo",
    href: "https://links.cppem.com.br/video-explicativo-plataforma",
  },
];

export default function ChecklistSection() {
  const [completed, setCompleted] = useState<boolean[]>(Array(STEPS.length).fill(false));
  const [mounted, setMounted] = useState(false);

  // Lê o progresso do localStorage só no cliente
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length === STEPS.length) setCompleted(parsed);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  // Salva a cada alteração
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      // ignore
    }
  }, [completed, mounted]);

  function markComplete(index: number) {
    setCompleted((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }

  function resetAll() {
    setCompleted(Array(STEPS.length).fill(false));
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  const completedCount = completed.filter(Boolean).length;
  const allDone = completedCount === STEPS.length;
  const percentage = Math.round((completedCount / STEPS.length) * 100);
  const currentIndex = completed.findIndex((done) => !done);

  // Evita divergência de hidratação: só mostra o progresso depois de montar
  if (!mounted) {
    return (
      <section className="section" id="passos">
        <div className="container narrow">
          <div className="steps-skeleton" aria-hidden />
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="passos" aria-labelledby="passos-titulo">
      <div className="container narrow">
        <span className="eyebrow">Passo a passo</span>
        <h2 id="passos-titulo" className="section-title">Próximos passos</h2>
        <p className="section-copy">Conclua uma etapa de cada vez, na ordem. Seu progresso fica salvo neste aparelho.</p>

        <div className="progress" role="status" aria-live="polite">
          {allDone ? (
            <p className="progress-done">
              <Trophy size={20} aria-hidden /> Tudo certo! Agora você já está pronto para iniciar sua jornada no {PLAN.name}.
            </p>
          ) : (
            <div className="progress-head">
              <span>
                Você concluiu <strong>{completedCount}</strong> de <strong>{STEPS.length}</strong> passos
              </span>
              <span className="progress-percent">{percentage}%</span>
            </div>
          )}
          <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentage}>
            <div className="progress-fill" style={{ width: `${percentage}%` }} />
          </div>
        </div>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              howTo={step.howTo}
              buttonLabel={step.buttonLabel}
              href={step.href}
              badge={step.badge}
              state={completed[i] ? "done" : i === currentIndex ? "current" : "upcoming"}
              total={STEPS.length}
              isLast={i === STEPS.length - 1}
              onComplete={() => markComplete(i)}
            />
          ))}
        </ol>

        <div className="reset-row">
          <button type="button" className="reset-button" onClick={resetAll}>
            Reiniciar tarefas
          </button>
        </div>
      </div>
    </section>
  );
}
