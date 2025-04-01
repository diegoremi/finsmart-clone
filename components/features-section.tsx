import { Shield, Clock, CreditCard, BarChart } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">¿Por qué elegir Finsmart?</h2>
          <p className="section-description">
            Ofrecemos soluciones financieras innovadoras que te permiten optimizar tu flujo de caja y hacer crecer tu
            negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 card-hover">
            <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rápido y eficiente</h3>
            <p className="text-gray-600">
              Recibe el pago de tus facturas en menos de 48 horas, sin trámites complicados.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 card-hover">
            <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">100% seguro</h3>
            <p className="text-gray-600">
              Plataforma con altos estándares de seguridad y procesos regulados por la SBS.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 card-hover">
            <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <CreditCard className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital y sin papeleos</h3>
            <p className="text-gray-600">
              Proceso 100% digital, sin necesidad de visitar oficinas o imprimir documentos.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 card-hover">
            <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BarChart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tasas competitivas</h3>
            <p className="text-gray-600">Mejores tasas del mercado, adaptadas a tu perfil y necesidades específicas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

