import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '@/core/shared/styles/index.scss'
import { LayoutWidget } from '@/core/widgets/layout'

const MontserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  preload: true,
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-primary',
})

export const metadata: Metadata = {
  title: 'React-AI',
  description: 'Meta-description for React-AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className="scroll-smooth">
      <body className={`${MontserratFont.className}  relative `}>
        <LayoutWidget>{children}</LayoutWidget>
      </body>
    </html>
  )
}
