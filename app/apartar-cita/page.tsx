import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AppointmentPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Aparta tu Cita</h1>
          <p className="text-xl text-center mb-12">
            Completa el siguiente formulario y nos pondremos en contacto contigo 
            para programar una visita de evaluación sin costo.
          </p>

          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-2 font-medium">Servicio de interés</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="residencial">Instalación Residencial</option>
                  <option value="comercial">Seguridad Comercial</option>
                  <option value="industrial">Vigilancia Industrial</option>
                  <option value="mantenimiento">Mantenimiento</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">Mensaje adicional</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                <span>Acepto la política de privacidad y el tratamiento de mis datos</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              Enviar Solicitud
            </button>
          </form>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">¿Prefieres contactarnos directamente?</h2>
            <p className="mb-4">Estamos disponibles para atenderte:</p>
            <ul className="space-y-2">
              <li>📞 Teléfono: +52 55 1234 5678</li>
              <li>📧 Email: citas@seguridadvisual.com</li>
              <li>📍 Dirección: Av. Seguridad 123, CDMX</li>
              <li>🕒 Horario: Lunes a Viernes 9am - 6pm</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}