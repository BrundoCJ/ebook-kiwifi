import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ganhar Dinheiro com IA | Guia Prático',
  description: 'Descubra como usar inteligência artificial para criar renda extra, vender serviços e trabalhar menos. E-book prático para iniciantes.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Ganhar Dinheiro com IA',
    description: 'Guia prático para criar renda extra com inteligência artificial.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
