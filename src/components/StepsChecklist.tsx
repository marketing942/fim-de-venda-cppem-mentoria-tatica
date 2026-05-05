"use client";

import { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { StepCard, type Step } from "./StepCard";
import { ProgressBar } from "./ProgressBar";

const STORAGE_KEY = "cppem-supremo-steps-v1";

const STEPS: Step[] = [
  {
    id: 1,
    title: "Preencha o formulário inicial",
    description:
      "Complete o pré-cadastro para que nossa equipe organize seus dados e acompanhe corretamente sua entrada na Mentoria Plano de Combate Supremo.",
    buttonLabel: "Preencher formulário",
    link: "https://links.cppem.com.br/cppem-pre-cadastro-tutory",
    badge: "Obrigatório",
  },
  {
    id: 2,
    title: "Entre no Grupo VIP do Supremo",
    description:
      "Acesse o grupo VIP oficial da Mentoria Plano de Combate Supremo. Esse será um dos canais importantes para avisos, direcionamentos e acompanhamento da sua preparação.",
    buttonLabel: "Entrar no Grupo VIP",
    link: "https://chat.whatsapp.com/J4Y212N6Ssk06PzHOGGw5q",
  },
  {
    id: 3,
    title: "Salve o link da plataforma",
    description:
      "Este é o link oficial de acesso à plataforma da mentoria. Deixe salvo nos favoritos do seu navegador para acessar sempre que precisar.",
    buttonLabel: "Acessar plataforma",
    link: "https://mentoriaexito.tutory.com.br/login.php",
    highlight: (
      <>
        <span className="font-semibold text-green-300">Guarde esse link.</span>{" "}
        Você vai usar ele para acessar seus conteúdos.
      </>
    ),
  },
  {
    id: 4,
    title: "Encontre seu acesso no e-mail",
    description:
      "Você recebeu o link de acesso no mesmo e-mail cadastrado na hora da compra.",
    buttonLabel: "Já conferi meu e-mail",
    highlight: (
      <>
        Pesquise por{" "}
        <span className="font-bold text-green-300 bg-green-500/10 px-1.5 py-0.5 rounded font-mono">
          CPPEM
        </span>{" "}
        na sua caixa de entrada, spam ou promoções.
      </>
    ),
  },
  {
    id: 5,
    title: "Assista ao vídeo de uso da plataforma",
    description:
      "Veja o vídeo explicando como utilizar a plataforma corretamente, acessar seus conteúdos e iniciar sua preparação sem dificuldade.",
    buttonLabel: "Assistir vídeo",
    link: "https://youtu.be/byj2sOvZ3oQ",
  },
];

export function StepsChecklist() {
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompletedIds(JSON.parse(saved));
      }
    } catch {
      // localStorage indisponível
    }
  }, []);

  function handleComplete(id: number) {
    setCompletedIds((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // localStorage indisponível
      }
      return next;
    });
  }

  function handleReset() {
    setCompletedIds([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // localStorage indisponível
    }
  }

  if (!mounted) {
    return (
      <section className="w-full max-w-4xl mx-auto px-4 mb-10">
        <ProgressBar completed={0} total={STEPS.length} />
        <div className="space-y-4">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="h-32 rounded-xl border border-[rgba(34,197,94,0.15)] bg-[#111111] animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 mb-10">
      <ProgressBar completed={completedIds.length} total={STEPS.length} />

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          Próximos Passos
        </h2>
        {completedIds.length > 0 && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700"
          >
            <RotateCcw size={12} />
            Refazer checklist
          </button>
        )}
      </div>

      <div className="space-y-4">
        {STEPS.map((step) => (
          <StepCard
            key={step.id}
            step={step}
            completed={completedIds.includes(step.id)}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </section>
  );
}
