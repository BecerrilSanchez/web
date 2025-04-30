import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CTAButton from '../../components/CTAButton'
import Image from 'next/image'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Ofrecemos soluciones completas de seguridad adaptadas a tus necesidades específicas, 
            con tecnología de punta y soporte profesional.
          </p>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={600} 
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="mb-6">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <CTAButton href="/apartar-cita" text="Solicitar este servicio" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const services = [
  {
    title: "Sistemas Residenciales",
    description: "Protección completa para tu hogar con cámaras de alta resolución, visión nocturna y monitoreo remoto desde tu smartphone.",
    image: "https://amplify-d2vsmhalyqedyt-ma-hospitalstoragebucketbe1-jsq92bxxzczw.s3.us-west-2.amazonaws.com/simi.jpg",
    features: [
      "Cámaras HD con visión nocturna",
      "Grabación continua o por detección de movimiento",
      "Acceso remoto desde cualquier dispositivo",
      "Instalación discreta y profesional",
      "Soporte técnico 24/7"
    ]
  },
  {
    title: "Seguridad Comercial",
    description: "Soluciones empresariales para proteger tu negocio contra robos, fraudes y monitorear operaciones.",
    image: "https://amplify-d2vsmhalyqedyt-ma-hospitalstoragebucketbe1-jsq92bxxzczw.s3.us-west-2.amazonaws.com/simi.jpg",
    features: [
      "Sistemas escalables para cualquier tamaño de negocio",
      "Cámaras con reconocimiento facial",
      "Integración con sistemas de alarma",
      "Analíticos de video inteligente",
      "Cumplimiento con normativas de seguridad"
    ]
  },
  {
    title: "Vigilancia Industrial",
    description: "Sistemas robustos para proteger instalaciones industriales, almacenes y áreas extensas.",
    image: "https://amplify-d2vsmhalyqedyt-ma-hospitalstoragebucketbe1-jsq92bxxzczw.s3.us-west-2.amazonaws.com/simi.jpg",
    features: [
      "Cámaras resistentes a condiciones extremas",
      "Sistemas anti-vandalismo",
      "Cobertura de áreas extensas",
      "Monitoreo perimetral",
      "Integración con otros sistemas de seguridad"
    ]
  }
]
const faqs = [
  {
    question: "¿Qué tipo de cámaras recomiendan para una casa?",
    answer: "Para residencias recomendamos cámaras inalámbricas con visión nocturna de al menos 1080p, preferiblemente con detección de movimiento y alertas."
  },
  {
    question: "¿Incluyen mantenimiento después de la instalación?",
    answer: "Sí, todos nuestros paquetes incluyen 3 meses de mantenimiento gratuito. Ofrecemos planes de mantenimiento anual según tus necesidades."
  },
  {
    question: "¿Puedo ver las cámaras desde mi celular?",
    answer: "Absolutamente. Todos nuestros sistemas incluyen aplicación móvil para monitoreo remoto desde cualquier dispositivo con internet."
  }
]