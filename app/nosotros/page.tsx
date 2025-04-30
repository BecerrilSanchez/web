import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image 
                src="/images/team.jpg" 
                alt="Nuestro equipo de expertos" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="mb-4">
                Seguridad Visual nació en 2010 con la misión de brindar protección confiable 
                a hogares y negocios mediante tecnología de vigilancia de última generación.
              </p>
              <p className="mb-4">
                Desde entonces, hemos crecido para convertirnos en líderes del sector, 
                gracias a nuestro compromiso con la calidad y la satisfacción del cliente.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Nuestros Valores</h3>
              <ul className="space-y-2">
                <li>• Profesionalismo y ética en cada proyecto</li>
                <li>• Tecnología de vanguardia</li>
                <li>• Atención personalizada</li>
                <li>• Garantía en todos nuestros servicios</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const teamMembers = [
  {
    name: "Juan Pérez",
    position: "Director General",
    bio: "Especialista en seguridad electrónica con 15 años de experiencia."
  },
  {
    name: "María González",
    position: "Ingeniera en Sistemas",
    bio: "Certificada en redes de vigilancia y sistemas inteligentes."
  },
  {
    name: "Carlos Martínez",
    position: "Técnico Instalador",
    bio: "Experto en instalación y mantenimiento de equipos CCTV."
  }
]