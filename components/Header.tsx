import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/security-camera.png" 
            alt="Logo Seguridad Visual" 
            width={40} 
            height={40}
          />
          <span className="text-xl font-bold">Seguridad Visual</span>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-blue-200 transition">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:text-blue-200 transition">Nosotros</Link></li>
            <li><Link href="/nuestros-servicios" className="hover:text-blue-200 transition">Servicios</Link></li>
            <li><Link href="/apartar-cita" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">Apartar Cita</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}