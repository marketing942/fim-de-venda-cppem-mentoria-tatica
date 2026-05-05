import { CheckCircle2 } from "lucide-react";

interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const allDone = completed === total;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-8">
      <div className="border border-[rgba(34,197,94,0.2)] rounded-xl p-5 bg-[#111111]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {allDone ? (
              <CheckCircle2 size={18} className="text-green-400 shrink-0" />
            ) : (
              <span className="w-4 h-4 rounded-full border-2 border-green-500/50 shrink-0" />
            )}
            <span className="text-sm font-medium text-slate-300">
              {allDone ? (
                <span className="text-green-400 font-semibold">
                  Todos os passos concluídos!
                </span>
              ) : (
                <>
                  Você concluiu{" "}
                  <span className="text-green-400 font-bold">{completed}</span>
                  {" "}de{" "}
                  <span className="text-white font-bold">{total}</span> passos
                </>
              )}
            </span>
          </div>
          <span className="text-xs font-bold text-green-400 tabular-nums">
            {percentage}%
          </span>
        </div>

        <div className="w-full h-2.5 bg-[#1c1c1c] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${percentage}%`,
              background: allDone
                ? "linear-gradient(90deg, #16a34a, #22c55e)"
                : "linear-gradient(90deg, #16a34a, #4ade80)",
            }}
          />
        </div>

        {allDone && (
          <p className="mt-3 text-sm text-green-300/80 leading-relaxed">
            Tudo certo! Agora você já está pronto para iniciar sua jornada no
            Plano de Combate Supremo.
          </p>
        )}
      </div>
    </div>
  );
}
