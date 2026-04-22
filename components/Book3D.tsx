"use client"

import { useState, useRef, useEffect } from "react"

export default function Book3D() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isFlipping, setIsFlipping] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (e.clientY - centerY) / 10
      const y = (e.clientX - centerX) / 10

      setRotation({ x: Math.min(Math.max(x, -15), 15), y: Math.min(Math.max(y, -15), 15) })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleFlip = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % 3)
      setIsFlipping(false)
    }, 600)
  }

  const pages = [
    {
      title: "Ganhar Dinheiro com IA",
      subtitle: "Um guia prático para transformar ferramentas de IA em dinheiro",
      description: "Como usar inteligência artificial para criar renda extra, vender serviços e trabalhar menos",
      color: "from-[#00E676] to-[#00B0FF]",
      icon: "🤖"
    },
    {
      title: "7 Formas de Lucrar",
      subtitle: "Modelos reais comprovados",
      description: "E-books • Serviços • Prompts • Consultoria • Templates • Produtos sob demanda • Afiliado",
      color: "from-[#00B0FF] to-[#FF006E]",
      icon: "💰"
    },
    {
      title: "Plano de Ação",
      subtitle: "Comece em 7 dias",
      description: "Dia 1: Escolha • Dia 2: Produto • Dia 3: Conteúdo • Dia 4: Revisão • Dia 5: Publicação • Dia 6: Página • Dia 7: Divulgação",
      color: "from-[#FF006E] to-[#00E676]",
      icon: "🚀"
    },
  ]

  const currentPageData = pages[currentPage]

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* 3D Book Container */}
      <div
        ref={containerRef}
        className="relative w-full flex justify-center items-center"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          className="relative"
          style={{
            width: "300px",
            height: "400px",
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isFlipping ? "transform 0.6s ease-in-out" : "transform 0.1s ease-out",
          }}
        >
          {/* Front Cover */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              transform: isFlipping && currentPage > 0 ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: "transform 0.6s ease-in-out",
            }}
          >
            <div className={`w-full h-full bg-gradient-to-br ${currentPageData.color} p-8 flex flex-col justify-between relative overflow-hidden`}>
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white" />
                <div className="absolute bottom-8 left-4 w-32 h-32 rounded-full bg-white" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    E-BOOK 2026
                  </div>
                  <h2 className="text-3xl font-extrabold text-white leading-tight mb-2">
                    {currentPageData.title}
                  </h2>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    {currentPageData.description}
                  </p>
                  <p className="text-white/70 text-xs font-medium mt-2">
                    {currentPageData.subtitle}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <span className="text-5xl">{currentPageData.icon}</span>
                  <div className="text-right">
                    <p className="text-white/60 text-xs">Página</p>
                    <p className="text-white font-bold text-2xl">{currentPage + 1}/3</p>
                  </div>
                </div>
              </div>

              {/* Spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
            </div>
          </div>

          {/* Back Cover (hidden initially) */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl bg-[#111] border border-[#1F1F1F] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0A0A0A] to-[#111]">
              <div>
                <h3 className="text-lg font-bold text-[#00E676] mb-3 uppercase tracking-wider">O que você vai aprender:</h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E676] font-bold">✓</span>
                    <span>7 formas reais de ganhar dinheiro com IA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E676] font-bold">✓</span>
                    <span>Plano de ação de 7 dias para começar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E676] font-bold">✓</span>
                    <span>50+ prompts prontos para copiar e usar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E676] font-bold">✓</span>
                    <span>Como criar e-books e vender online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E676] font-bold">✓</span>
                    <span>Estratégias de monetização para iniciantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E676] font-bold">✓</span>
                    <span>Como trabalhar menos usando IA</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[#1F1F1F] pt-4">
                <p className="text-[#00E676] font-bold text-sm mb-1">47 páginas de conteúdo prático</p>
                <p className="text-gray-400 text-xs">Formatado em PDF • Acesso imediato após compra</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00E676] rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + i}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 items-center">
        <button
          onClick={handleFlip}
          disabled={isFlipping}
          className="px-6 py-2 bg-gradient-to-r from-[#00E676] to-[#00B0FF] text-black font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isFlipping ? "Virando..." : "Virar Página →"}
        </button>

        {/* Page indicators */}
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentPage ? "bg-[#00E676] w-6" : "bg-[#333]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info text */}
      <p className="text-sm text-gray-500 text-center max-w-md">
        💡 Mova o mouse para girar o livro em 3D • 👆 Clique em "Virar Página" para explorar todas as páginas
      </p>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
