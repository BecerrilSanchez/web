import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./app.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seguridad Visual - Instalación Profesional de CCTV',
  description: 'Expertos en instalación de sistemas de seguridad CCTV para hogares y negocios. Protección 24/7 con tecnología de vanguardia.',
  keywords: 'cctv, camaras de seguridad, instalación de camaras, seguridad hogar, seguridad negocio',
  authors: [{ name: 'Seguridad Visual', url: 'https://seguridadvisual.com' }],
  openGraph: {
    title: 'Seguridad Visual - Instalación Profesional de CCTV',
    description: 'Expertos en instalación de sistemas de seguridad CCTV',
    url: 'https://seguridadvisual.com',
    siteName: 'Seguridad Visual',
    images: [
      {
        url: '/images/cctv-installation.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}