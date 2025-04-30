import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Seguridad Visual</h3>
            <p>Expertos en instalación y mantenimiento de sistemas de seguridad CCTV para tu protección.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-300 transition">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-blue-300 transition">Nosotros</Link></li>
              <li><Link href="/nuestros-servicios" className="hover:text-blue-300 transition">Servicios</Link></li>
              <li><Link href="/apartar-cita" className="hover:text-blue-300 transition">Apartar Cita</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p>info@seguridadvisual.com</p>
            <p>+52 55 1234 5678</p>
            <p>Ciudad de México</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Seguridad Visual. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}