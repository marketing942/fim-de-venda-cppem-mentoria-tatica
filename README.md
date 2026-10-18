# CPPEM Concursos — Próximos Passos | Plano de Combate Tático

Página pós-compra da Mentoria Plano de Combate Tático do CPPEM Concursos, com a mesma identidade visual da Central de Ajuda
(dourado sobre preto, Oxanium / Rajdhani / Inter, brasas animadas, emblema do leão).

## Tecnologias

- **Next.js 14** (App Router) + **TypeScript**
- CSS próprio em `src/app/globals.css`
- **lucide-react** (ícones) e **localStorage** (progresso da checklist)

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Deploy: Vercel (importar o repositório, sem configuração extra e sem variáveis de ambiente).

## Estrutura da página

1. **Hero** — parabéns + convite para começar o passo 1
2. **Próximos passos** — 4 passos em linha do tempo, cada um com "como fazer" numerado
3. **Atendimento** — assistente virtual 24h e suporte ao aluno (mesmos da Central de Ajuda)
4. **Rodapé** — redes sociais, botão da Central de Ajuda e link para o cppem.com.br

## Onde editar

- **Nome do plano e link do Grupo VIP:** `src/lib/plan.ts`
- **Passos e links:** `STEPS` em `src/app/components/ChecklistSection.tsx`
- **Canais de suporte e link da Central de Ajuda:** `src/lib/contact.ts`
- **Redes sociais:** `SOCIAL_LINKS` em `src/app/components/social-icons.tsx`

O progresso é salvo no `localStorage` (chave `cppem-<plano>-steps-v2`).
