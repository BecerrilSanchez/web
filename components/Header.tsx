import Link from 'next/link'
import Image from 'next/image'
import '../css/Header.css'; // Importamos el archivo CSS

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          <Image 
            src="/logo_angeles.png" 
            alt="Logo Seguridad sasasa Visual" 
            width={40} 
            height={40}
          />
        </Link>
        
        <nav className="header-nav">
          <ul className="nav-list">
            <li><Link href="/" className="nav-link">Inicio</Link></li>
            <li><Link href="/nosotros" className="nav-link">Nosotros</Link></li>
            <li><Link href="/nuestros-servicios" className="nav-link">Servicios</Link></li>
            <li><Link href="/apartar-cita" className="nav-button">Apartar Cita</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}