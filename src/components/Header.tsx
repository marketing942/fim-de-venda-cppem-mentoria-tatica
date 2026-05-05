import Image from "next/image";

export function Header() {
  return (
    <header className="w-full border-b border-[rgba(34,197,94,0.12)] bg-[#0a0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://raw.githubusercontent.com/marketing942/fotos-dos-bots/main/LOGO%20CPPEM.png"
            alt="CPPEM Concursos"
            width={140}
            height={50}
            className="object-contain h-10 w-auto"
            priority
          />
        </div>
        <span className="hidden sm:block text-xs text-slate-500 font-medium tracking-widest uppercase">
          Plano de Combate Supremo
        </span>
      </div>
    </header>
  );
}
