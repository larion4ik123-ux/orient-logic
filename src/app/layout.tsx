import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Orient Logic — Надёжная логистика без границ',
  description: 'Международные грузоперевозки из Китая в Россию. Полный цикл логистического сопровождения. Опыт работы 3+ года, более 500 доставок.',
  keywords: 'логистика, грузоперевозки, доставка из Китая, международная логистика, Orient Logic',
  authors: [{ name: 'Orient Logic' }],
  openGraph: {
    title: 'Orient Logic — Надёжная логистика без границ',
    description: 'Международные грузоперевозки из Китая в Россию',
    siteName: 'Orient Logic',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
