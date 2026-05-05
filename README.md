# CPPEM Concursos — Próximos Passos | Plano de Combate Supremo

Página pós-compra da Mentoria Plano de Combate Supremo do CPPEM Concursos.  
Centraliza os próximos passos do aluno com checklist interativa e persistência via localStorage.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- lucide-react
- Vercel (deploy)

---

## Instalação e uso local

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 3. Build de produção (opcional)

```bash
npm run build
npm start
```

---

## Deploy na Vercel

### Opção 1 — Via CLI da Vercel

```bash
npm install -g vercel
vercel
```

Siga as instruções do terminal. Na primeira vez ele vai pedir login e configuração do projeto.

### Opção 2 — Via dashboard da Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login.
2. Clique em **Add New Project**.
3. Importe o repositório do GitHub.
4. Clique em **Deploy** — a Vercel detecta automaticamente o Next.js.

Nenhuma variável de ambiente é necessária.

---

## Estrutura de componentes

```
src/
├── app/
│   ├── globals.css        # Tema escuro + variáveis CSS
│   ├── layout.tsx         # Layout raiz com metadata
│   └── page.tsx           # Página principal
├── components/
│   ├── Header.tsx         # Logo e cabeçalho sticky
│   ├── Hero.tsx           # Seção de boas-vindas
│   ├── ProgressBar.tsx    # Barra de progresso (X de 5 passos)
│   ├── StepCard.tsx       # Card individual de cada passo
│   ├── StepsChecklist.tsx # Gerenciamento de estado + localStorage
│   ├── SupportCard.tsx    # Card opcional de suporte
│   └── Footer.tsx         # Rodapé institucional
```

---

## Funcionamento da checklist

- O estado dos passos é salvo no `localStorage` com a chave `cppem-supremo-steps-v1`.
- Ao clicar no botão de um passo, ele é marcado como concluído e o link externo (quando houver) é aberto em nova aba.
- O botão "Refazer checklist" limpa o progresso salvo.
- A barra de progresso conta apenas os 5 passos obrigatórios (suporte não é contabilizado).
- O componente `StepsChecklist` usa `"use client"` para evitar erros de hidratação — o localStorage só é acessado após montagem no cliente.
