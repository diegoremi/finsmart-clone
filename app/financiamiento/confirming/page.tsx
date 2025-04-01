import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ConfirmingBenefits from "@/components/confirming-benefits"
import ConfirmingProcess from "@/components/confirming-process"
import ConfirmingFAQ from "@/components/confirming-faq"
import { CheckCircle } from "lucide-react"

export default function ConfirmingPage() {
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
                alt="Empresario en oficina"
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-primary-400 font-medium mb-2">Confirming</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Paga a tus proveedores a tiempo</h1>
              <h2 className="text-2xl text-gray-600 mb-8">Optimiza tu cadena de pagos</h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Extiende tus plazos de pago a proveedores.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fortalece la relación con tus proveedores.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mejora tu capital de trabajo sin afectar a tus proveedores.</span>
                </li>
              </ul>

              <Button className="bg-primary hover:bg-primary-700 text-white px-8 py-6 text-lg">
                Solicitar confirming
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Confirming Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">¿Qué es el confirming?</h2>
          <p className="section-description mb-10">
            El confirming es un servicio financiero que permite a las empresas gestionar los pagos a sus proveedores,
            ofreciéndoles la posibilidad de cobrar sus facturas de forma anticipada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Extiende tus plazos</h3>
              <p className="text-gray-600">
                Gestiona mejor tu flujo de caja extendiendo los plazos de pago a tus proveedores.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Beneficia a tus proveedores</h3>
              <p className="text-gray-600">
                Ofrece a tus proveedores la opción de cobrar anticipadamente con tasas competitivas.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Optimiza procesos</h3>
              <p className="text-gray-600">
                Simplifica la gestión de pagos y reduce cargas administrativas con nuestra plataforma digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <ConfirmingBenefits />

      {/* Process Section */}
      <ConfirmingProcess />

      {/* FAQ Section */}
      <ConfirmingFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Optimiza la gestión de pagos de tu empresa</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Regístrate hoy y comienza a mejorar la relación con tus proveedores mientras optimizas tu capital de
            trabajo.
          </p>
          <Button className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-6">Regístrate gratis</Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

