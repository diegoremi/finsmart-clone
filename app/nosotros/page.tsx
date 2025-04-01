import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import StatsSection from "@/components/stats-section"
import Footer from "@/components/footer"
import TeamSection from "@/components/team-section"
import ValuesSection from "@/components/values-section"

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-6">
            Soluciones financieras 100% online para tu negocio y tus finanzas personales
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Desde conseguir financiamiento para tu empresa hasta rentabilizar tu dinero a través de la inversión,
            Finsmart te ayuda a lograr tus objetivos financieros.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/financiamiento">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-6 text-lg min-w-[180px]"
              >
                Empresa
              </Button>
            </Link>
            <Link href="/inversiones">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-6 text-lg min-w-[180px]"
              >
                Inversionista
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Mission and Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-600 mb-6">
                Democratizar el acceso a servicios financieros en Perú, ofreciendo soluciones innovadoras que permitan a
                empresas e inversionistas alcanzar sus objetivos financieros de manera eficiente y segura.
              </p>
              <p className="text-lg text-gray-600">
                Buscamos transformar la manera en que las empresas gestionan su flujo de caja y los inversionistas
                diversifican su portafolio, a través de una plataforma 100% digital y accesible.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Misión de Finsmart"
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Visión de Finsmart"
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ser la plataforma fintech líder en Perú y Latinoamérica, reconocida por su innovación, transparencia y
                compromiso con el desarrollo económico de la región.
              </p>
              <p className="text-lg text-gray-600">
                Aspiramos a crear un ecosistema financiero inclusivo donde empresas de todos los tamaños puedan acceder
                a capital de trabajo y los inversionistas puedan diversificar sus inversiones con seguridad y
                rentabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <TeamSection />

      {/* History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestra Historia</h2>
            <p className="section-description">
              Desde nuestros inicios en 2018, hemos crecido constantemente para convertirnos en un referente del sector
              fintech en Perú.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="flex mb-8">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-1 h-full bg-primary"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
                <div className="font-bold text-primary mb-1">2018</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fundación de Finsmart</h3>
                <p className="text-gray-600">
                  Finsmart nace con la misión de transformar el acceso a servicios financieros en Perú, enfocándose
                  inicialmente en soluciones de factoring digital.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex mb-8">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-1 h-full bg-primary"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
                <div className="font-bold text-primary mb-1">2019</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Primera ronda de inversión</h3>
                <p className="text-gray-600">
                  Cerramos nuestra primera ronda de inversión y expandimos nuestro equipo para mejorar la plataforma y
                  ampliar nuestra base de clientes.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex mb-8">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-1 h-full bg-primary"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
                <div className="font-bold text-primary mb-1">2020</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Lanzamiento de la plataforma para inversionistas
                </h3>
                <p className="text-gray-600">
                  Ampliamos nuestros servicios con el lanzamiento de nuestra plataforma para inversionistas, permitiendo
                  a personas naturales invertir en facturas negociables.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
                <div className="font-bold text-primary mb-1">2022 - Presente</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expansión y nuevos servicios</h3>
                <p className="text-gray-600">
                  Continuamos creciendo y expandiendo nuestra oferta de servicios, incluyendo confirming y otras
                  soluciones financieras innovadoras para empresas e inversionistas.
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

