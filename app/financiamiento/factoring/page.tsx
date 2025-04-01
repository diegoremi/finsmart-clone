import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FactoringBenefits from "@/components/factoring-benefits"
import FactoringProcess from "@/components/factoring-process"
import FactoringFAQ from "@/components/factoring-faq"
import { CheckCircle } from "lucide-react"

export default function FactoringPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Empresario sonriente"
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-primary-400 font-medium mb-2">Factoring</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Adelanta el pago de tus facturas</h1>
              <h2 className="text-2xl text-gray-600 mb-8">Rápido, fácil y 100% online</h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Convierte tus facturas en dinero.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reduce el riesgo de impago.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Obtén financiamiento sin incrementar tu nivel de endeudamiento en el sistema financiero.
                  </span>
                </li>
              </ul>

              <Button className="bg-primary hover:bg-primary-700 text-white px-8 py-6 text-lg">
                Adelanta tus facturas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Factoring Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">¿Tu empresa necesita liquidez?</h2>
          <p className="section-description mb-10">
            El factoring es una herramienta financiera que permite a las empresas obtener liquidez a través de sus
            facturas por cobrar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Vende tus facturas</h3>
              <p className="text-gray-600">
                Convierte tus cuentas por cobrar en efectivo inmediato sin esperar al vencimiento.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mejora tu flujo de caja</h3>
              <p className="text-gray-600">
                Optimiza la gestión financiera de tu empresa y cumple con tus obligaciones a tiempo.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Crece sin deuda</h3>
              <p className="text-gray-600">Obtén capital de trabajo sin aumentar tu nivel de endeudamiento bancario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <FactoringBenefits />

      {/* Process Section */}
      <FactoringProcess />

      {/* FAQ Section */}
      <FactoringFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para adelantar el pago de tus facturas?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Regístrate hoy y comienza a convertir tus facturas en efectivo en menos de 48 horas.
          </p>
          <Button className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-6">Regístrate gratis</Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

