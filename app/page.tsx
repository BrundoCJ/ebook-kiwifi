"use client"

import { useState } from "react"
import Book3D from "@/components/Book3D"

const KIWIFY_URL = "https://pay.kiwify.com.br/6pziddP"

const benefits = [
  { icon: "💡", text: "7 formas reais de ganhar dinheiro com IA" },
  { icon: "🚀", text: "Plano de ação de 7 dias para começar hoje" },
  { icon: "📋", text: "Prompts prontos para copiar e usar agora" },
  { icon: "💰", text: "Como criar e vender produtos digitais com IA" },
  { icon: "⚡", text: "Como trabalhar menos usando automações simples" },
  { icon: "🎯", text: "Como escolher um nicho e montar sua oferta" },
]

const faq = [
  {
    q: "Preciso ter experiência com IA para aplicar o conteúdo?",
    a: "Não. O material foi feito para iniciantes e traz exemplos práticos, passo a passo, com linguagem simples e direta.",
  },
  {
    q: "Preciso investir dinheiro para começar?",
    a: "Não. As ferramentas usadas nos exemplos têm versões gratuitas. O foco é gerar renda antes de investir.",
  },
  {
    q: "Como recebo o e-book após a compra?",
    a: "Você recebe acesso imediato pela área de membros da Kiwify, logo após a confirmação do pagamento.",
  },
  {
    q: "O conteúdo funciona para qualquer nicho?",
    a: "Sim. As estratégias apresentadas se adaptam a diferentes áreas, serviços, produtos e perfis de público.",
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 text-center max-w-4xl mx-auto">
        {/* Glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00E676]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#00B0FF]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-[#111] border border-[#1F1F1F] text-sm text-[#00E676] px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
          Guia Prático · Acesso Imediato
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Ganhe Dinheiro com{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00B0FF]">
            Inteligência Artificial
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Descubra como usar IA para criar renda extra, vender serviços e lançar produtos digitais,{" "}
          <span className="text-white font-medium">mesmo começando do zero.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={KIWIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00E676] to-[#00B0FF] text-black font-bold px-10 py-4 rounded-xl text-lg hover:opacity-90 transition-all shadow-lg shadow-[#00E676]/20"
          >
            Quero o E-book Agora →
          </a>
        </div>

        <p className="text-sm text-gray-500">
          ✅ Acesso imediato &nbsp;·&nbsp; ✅ PDF para download &nbsp;·&nbsp; ✅ Pagamento seguro
        </p>
      </section>

      {/* BOOK MOCKUP 3D INTERACTIVE */}
      <section className="px-6 py-24 flex justify-center">
        <div className="w-full max-w-2xl">
          <Book3D />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que você vai aprender
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-4 bg-[#111] border border-[#1F1F1F] rounded-xl p-5 hover:border-[#00E676]/30 transition-colors">
              <span className="text-2xl">{b.icon}</span>
              <p className="text-gray-300 leading-snug text-sm">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOR WHO */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Para quem é este e-book?</h2>
        <div className="space-y-3">
          {[
            "Iniciantes que querem ganhar dinheiro online sem investimento inicial",
            "Freelancers que querem usar IA para produzir mais e atender mais clientes",
            "Empreendedores que querem criar e vender produtos digitais rapidamente",
            "Criadores de conteúdo que querem acelerar a produção com inteligência artificial",
            "Qualquer pessoa curiosa sobre como monetizar IA na prática",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#111] border border-[#1F1F1F] rounded-xl px-5 py-4">
              <span className="text-[#00E676] text-lg">✓</span>
              <p className="text-gray-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 pb-24 max-w-md mx-auto">
        <div className="relative bg-[#111] border border-[#1F1F1F] rounded-2xl p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E676]/5 to-[#00B0FF]/5 pointer-events-none" />
          <p className="text-sm text-[#00E676] font-semibold tracking-widest uppercase mb-2">Oferta especial</p>
          <h3 className="text-2xl font-extrabold mb-1">Ganhar Dinheiro com IA</h3>
          <p className="text-gray-400 text-sm mb-6">E-book completo com prompts, exemplos e plano de ação</p>
          <div className="flex items-end justify-center gap-2 mb-8">
            <span className="text-gray-500 line-through text-xl">R$ 47</span>
            <span className="text-5xl font-extrabold text-white">R$ 27</span>
          </div>
          <a
            href={KIWIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-[#00E676] to-[#00B0FF] text-black font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-all"
          >
            Comprar Agora →
          </a>
          <p className="text-xs text-gray-500 mt-4">Pagamento seguro via Pix, cartão ou boleto</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Perguntas frequentes</h2>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="bg-[#111] border border-[#1F1F1F] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-sm font-medium text-white hover:text-[#00E676] transition-colors"
              >
                {item.q}
                <span className="text-[#00E676] ml-4">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed border-t border-[#1F1F1F] pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-32 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">
          Comece a ganhar dinheiro{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00B0FF]">
            com IA hoje
          </span>
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Acesso imediato após a compra. Sem prazo de validade.
        </p>
        <a
          href={KIWIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#00E676] to-[#00B0FF] text-black font-bold px-12 py-5 rounded-xl text-xl hover:opacity-90 transition-all shadow-xl shadow-[#00E676]/20"
        >
          Quero o E-book Agora →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1F1F1F] px-6 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Ganhar Dinheiro com IA. Todos os direitos reservados.
      </footer>
    </main>
  )
}
