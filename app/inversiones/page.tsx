import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import InvestmentBenefits from "@/components/investment-benefits"
import InvestmentProcess from "@/components/investment-process"
import InvestmentFAQ from "@/components/investment-faq"
import InvestmentCalculator from "@/components/investment-calculator"

export default function InversionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Invierte en facturas y obtén hasta 18% de retorno anual
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                En Finsmart puedes invertir en soles y dólares y retirar tus ganancias a partir de 120 días o menos. A
                una tasa inmejorable.
              </p>
              <Button className="bg-primary hover:bg-primary-700 text-white px-8 py-6 text-lg">
                Regístrate en 3 minutos
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Plataforma de inversión Finsmart"
                width={700}
                height={600}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <InvestmentBenefits />

      {/* How It Works Section */}
      <InvestmentProcess />

      {/* Investment Calculator */}
      <InvestmentCalculator />

      {/* FAQ Section */}
      <InvestmentFAQ />

      {/* Certifications Section */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-4">Empresa participante de Cavali</p>
              <Image
                src="/placeholder.svg?height=80&width=200"
                alt="Logo Cavali"
                width={200}
                height={80}
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">Miembros de la Asociación Fintech Perú</p>
              <Image
                src="/placeholder.svg?height=80&width=200"
                alt="Logo Fintech Perú"
                width={200}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="text-sm text-gray-600">
              <p>
                Finsmart está inscrito en la relación de empresas inscritas en el Registro de empresas de factoring no
                comprendidas en el ámbito de la Ley General del Sistema Financiero y del Sistema de Seguros y Orgánica
                de la Superintendencia de Banca y Seguros (SBS).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comienza a invertir hoy mismo</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Únete a más de 18,000 inversionistas que ya confían en Finsmart para hacer crecer su dinero.
          </p>
          <Button className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-6">Regístrate gratis</Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

