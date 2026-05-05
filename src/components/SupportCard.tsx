import { MessageCircle, HeadphonesIcon } from "lucide-react";

export function SupportCard() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 mb-12">
      <div className="rounded-xl border border-slate-800 bg-[#0f0f0f] p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
            <HeadphonesIcon size={18} className="text-slate-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-base mb-1">
              Precisa de ajuda?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-1">
              Se tiver qualquer dificuldade para acessar a plataforma, localizar
              o e-mail ou entrar no grupo, fale com nosso suporte. Esse contato
              é opcional e não faz parte dos passos obrigatórios.
            </p>
            <p className="text-slate-500 text-xs mb-4">
              Me avisa se deu tudo certo. Nossa equipe está pronta para te
              orientar no que for necessário.
            </p>
            <a
              href="https://links.cppem.com.br/cppem-suporte-aluno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              <MessageCircle size={14} />
              Falar com suporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
