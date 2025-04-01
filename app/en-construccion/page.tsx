import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Construction } from "lucide-react"

export default function EnConstruccionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Construction className="h-24 w-24 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Página en construcción</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Estamos trabajando para ofrecerte la mejor experiencia. Esta sección estará disponible muy pronto.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Mientras tanto, puedes explorar otras secciones de nuestra plataforma o contactarnos si necesitas
            información específica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary-800 text-white px-8 py-6 text-lg">Volver al inicio</Button>
            </Link>
            <Link href="mailto:contacto@finsmart.pe">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary-50 px-8 py-6 text-lg"
              >
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              ¿Qué encontrarás aquí próximamente?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 card-hover">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Recursos educativos</h3>
                <p className="text-gray-600">
                  Artículos, guías y tutoriales sobre finanzas, inversiones y gestión empresarial para ayudarte a tomar
                  mejores decisiones.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 card-hover">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Herramientas financieras</h3>
                <p className="text-gray-600">
                  Calculadoras, simuladores y otras herramientas para planificar tus inversiones y financiamiento.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 card-hover">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Área de usuario</h3>
                <p className="text-gray-600">
                  Un espacio personalizado donde podrás gestionar tus inversiones, financiamiento y seguir el estado de
                  tus operaciones.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 card-hover">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Soporte especializado</h3>
                <p className="text-gray-600">
                  Acceso a nuestro equipo de expertos para resolver tus dudas y brindarte asesoramiento personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

