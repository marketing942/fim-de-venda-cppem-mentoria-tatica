export function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(34,197,94,0.1)] mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-green-500/30" />
          <span className="text-green-500/50 text-xs">◆</span>
          <span className="w-8 h-px bg-gradient-to-l from-transparent to-green-500/30" />
        </div>
        <p className="text-slate-600 text-xs sm:text-sm">
          © 2026 CPPEM Concursos Públicos | Plano de Combate Supremo
        </p>
        <p className="text-slate-700 text-xs mt-1 italic">
          Seu sonho, nosso objetivo.
        </p>
      </div>
    </footer>
  );
}
