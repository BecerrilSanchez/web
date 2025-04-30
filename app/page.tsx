import Header from '../components/Header'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'
import Image from 'next/image'
import styles from './Home.module.css' // Importamos nuestro CSS personalizado

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Protección Segura con CCTV de Alta Calidad</h1>
              <p>
                Instalación profesional de sistemas de vigilancia para hogares y negocios. 
                Tecnología de punta y monitoreo 24/7 para tu tranquilidad.
              </p>
              <CTAButton href="/apartar-cita" text="Solicitar Cotización" />
            </div>
            <div className={styles.heroImage}>
              <Image 
                src="https://amplify-d2vsmhalyqedyt-ma-hospitalstoragebucketbe1-jsq92bxxzczw.s3.us-west-2.amazonaws.com/simi.jpg" 
                alt="Instalación de cámaras CCTV" 
                width={600} 
                height={400}
                className={styles.roundedImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <h2>Nuestros Servicios</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <CTAButton href="/nuestros-servicios" text="Más información" small />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <Image 
                src="/images/team.jpg" 
                alt="Nuestro equipo de expertos" 
                width={400} 
                height={300}
                className={styles.roundedImage}
              />
            </div>
            <div className={styles.aboutText}>
              <h2>Expertos en Seguridad Electrónica</h2>
              <p>
                Con más de 10 años de experiencia en el mercado, nuestro equipo de técnicos 
                certificados garantiza instalaciones profesionales y sistemas confiables.
              </p>
              <CTAButton href="/nosotros" text="Conoce más sobre nosotros" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const services = [
  {
    title: "Instalación Residencial",
    description: "Sistemas personalizados para proteger tu hogar y familia con cámaras de alta resolución."
  },
  {
    title: "Seguridad Comercial",
    description: "Soluciones completas para negocios con monitoreo remoto y grabación continua."
  },
  {
    title: "Sistemas Empresariales",
    description: "Implementación de redes de vigilancia para empresas con múltiples ubicaciones."
  }
]