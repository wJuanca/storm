import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Storm',
  description: 'Descubre nuestra colección de ropa y calzado deportivo diseñada para potenciar tu rendimiento y estilo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-black">{children}</body>
    </html>
  )
}