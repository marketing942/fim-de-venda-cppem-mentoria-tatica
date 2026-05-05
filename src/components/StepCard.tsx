"use client";

import { CheckCircle2, ExternalLink } from "lucide-react";

export interface Step {
  id: number;
  title: string;
  description: string;
  buttonLabel: string;
  link?: string;
  badge?: string;
  highlight?: React.ReactNode;
}

interface StepCardProps {
  step: Step;
  completed: boolean;
  onComplete: (id: number) => void;
}

export function StepCard({ step, completed, onComplete }: StepCardProps) {
  function handleClick() {
    onComplete(step.id);
    if (step.link) {
      window.open(step.link, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div
      className={`relative rounded-xl border transition-all duration-300 ${
        completed
          ? "border-green-500/40 bg-[rgba(34,197,94,0.05)]"
          : "border-[rgba(34,197,94,0.15)] bg-[#111111] hover:border-[rgba(34,197,94,0.3)] hover:bg-[#141414]"
      }`}
    >
      <div className="flex items-start gap-4 p-5 sm:p-6">
        <div className="shrink-0 mt-0.5">
          {completed ? (
            <CheckCircle2
              size={28}
              className="text-green-400"
              strokeWidth={2}
            />
          ) : (
            <div className="w-7 h-7 rounded-full border-2 border-[rgba(34,197,94,0.4)] flex items-center justify-center">
              <span className="text-green-400 text-xs font-bold">
                {step.id}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3
              className={`font-semibold text-base sm:text-lg leading-snug transition-all ${
                completed
                  ? "line-through text-slate-500"
                  : "text-white"
              }`}
            >
              {step.title}
            </h3>
            {step.badge && !completed && (
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-green-500/15 text-green-400 border border-green-500/30">
                {step.badge}
              </span>
            )}
            {completed && (
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-green-500/10 text-green-500/70 border border-green-500/20">
                Concluído
              </span>
            )}
          </div>

          <p
            className={`text-sm leading-relaxed mb-4 ${
              completed ? "text-slate-600" : "text-slate-400"
            }`}
          >
            {step.description}
          </p>

          {step.highlight && !completed && (
            <div className="mb-4 px-3 py-2 rounded-lg bg-[rgba(34,197,94,0.07)] border border-[rgba(34,197,94,0.2)] text-sm text-green-300/80">
              {step.highlight}
            </div>
          )}

          <button
            onClick={handleClick}
            disabled={completed}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              completed
                ? "bg-[#1a1a1a] text-slate-600 border border-slate-800 cursor-default"
                : "bg-green-500 hover:bg-green-400 active:bg-green-600 text-black cursor-pointer shadow-[0_0_16px_rgba(34,197,94,0.25)] hover:shadow-[0_0_24px_rgba(34,197,94,0.4)]"
            }`}
          >
            {completed ? (
              <>
                <CheckCircle2 size={15} />
                Concluído
              </>
            ) : (
              <>
                {step.buttonLabel}
                {step.link && <ExternalLink size={13} />}
              </>
            )}
          </button>
        </div>
      </div>

      {completed && (
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
      )}
    </div>
  );
}
