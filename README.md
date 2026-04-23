# 📚 Ebook Kiwifi - Landing Page

Uma landing page moderna e interativa para vender e-books através da plataforma **Kiwify**. Construída com Next.js, React e Tailwind CSS.

## ✨ Features

- 🎨 **Design moderno** com tema dark e gradientes vibrantes (verde + azul)
- 📖 **Componente Book3D interativo** com efeito de rotação ao movimento do mouse
- ⚡ **Performance otimizada** com Next.js 14
- 📱 **100% responsivo** - funciona em mobile, tablet e desktop
- 🎯 **SEO otimizado** com metadata e Open Graph
- 💳 **Integrado com Kiwify** para processamento de pagamentos
- ✅ **TypeScript** para maior segurança de tipo
- 🎨 **Tailwind CSS** para estilização rápida e eficiente

## 🚀 Tech Stack

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **Next.js** | 14.2.3 | Framework React com SSR |
| **React** | 18 | UI library |
| **TypeScript** | 5 | Type safety |
| **Tailwind CSS** | 3.4.1 | Styling |
| **Autoprefixer** | 10 | CSS vendor prefixes |
| **PostCSS** | 8 | CSS processing |

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/BrundoCJ/ebook-kiwifi.git
cd ebook-kiwifi
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

## 🏃 Como usar

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para produção

```bash
npm run build
npm run start
```

## 🔧 Configuração

### Alterar link do Kiwify

No arquivo [app/page.tsx](app/page.tsx#L6), procure por:

```typescript
const KIWIFY_URL = "https://pay.kiwify.com.br/SEU-LINK-AQUI"
```

Substitua `SEU-LINK-AQUI` pelo seu link de afiliado/produto do Kiwify.

### Personalizar conteúdo

Edite os arrays `benefits` e `faq` em [app/page.tsx](app/page.tsx) para:
- Alterar os benefícios do e-book
- Adicionar/remover perguntas frequentes
- Modificar ícones e textos

## 📁 Estrutura do Projeto

```
.
├── app/
│   ├── layout.tsx          # Layout raiz com metadata
│   ├── page.tsx            # Homepage com conteúdo principal
│   └── globals.css         # Estilos globais
├── components/
│   └── Book3D.tsx          # Componente do livro interativo 3D
├── public/                 # Assets estáticos
├── package.json
├── tailwind.config.js      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
├── next.config.js          # Configuração Next.js
└── README.md               # Este arquivo
```

## 🎨 Personalizando o design

### Cores da marca

As cores estão definidas em [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  brand: {
    green: '#00E676',   // Verde neon
    blue: '#00B0FF',    // Azul neon
    dark: '#0A0A0A',    // Fundo escuro
    card: '#111111',    // Cards
    border: '#1F1F1F',  // Bordas
  }
}
```

### Fontes customizadas

Altere em [app/layout.tsx](app/layout.tsx) a importação da fonte `Inter` do Google Fonts.

## 📊 O que está no E-book

O e-book cobre:

- 💡 7 formas reais de ganhar dinheiro com IA
- 🚀 Plano de ação de 7 dias para começar
- 📋 Prompts prontos para usar
- 💰 Como criar e vender produtos digitais
- ⚡ Automações simples para trabalhar menos
- 🎯 Como escolher nicho e montar oferta

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)

1. Push para o GitHub
2. Vá para [vercel.com](https://vercel.com)
3. Clique "New Project" e selecione este repositório
4. Vercel detectará Next.js automaticamente
5. Deploy feito! 🎉

### Opção 2: Outras plataformas

- **Netlify**: Suporte para Next.js via build command
- **AWS**: Use AWS Amplify
- **Docker**: Crie uma imagem com Node.js

## 🧪 Testing

Para verificar builds:

```bash
npm run build
npm run start
```

## 📝 .gitignore

Arquivos automaticamente ignorados:

```
node_modules/
.next/
.env.local
.env*.local
dist/
build/
```

## 🤝 Contribuições

Sinta-se livre para fazer fork e enviar pull requests! 

## 📄 Licença

Este projeto é de uso livre. Use como desejar!

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Made with ❤️ by [BrundoCJ](https://github.com/BrundoCJ)**
