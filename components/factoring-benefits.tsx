import { Clock, Shield, CreditCard, BarChart3, FileText, Zap } from "lucide-react"

export default function FactoringBenefits() {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Liquidez inmediata",
      description: "Recibe el pago de tus facturas en menos de 48 horas, sin esperar al vencimiento.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Reduce el riesgo",
      description: "Transfiere el riesgo de impago a Finsmart y mejora la gestión de tu cartera de clientes.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Sin endeudamiento",
      description: "Obtén financiamiento sin incrementar tu nivel de endeudamiento en el sistema financiero.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Mejora tus indicadores",
      description: "Optimiza tus ratios financieros y mejora la imagen de tu empresa frente a bancos y proveedores.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Proceso 100% digital",
      description: "Gestiona todo el proceso desde nuestra plataforma, sin papeleos ni trámites presenciales.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Tasas competitivas",
      description: "Accede a tasas más competitivas que las ofrecidas por la banca tradicional.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Beneficios del factoring</h2>
          <p className="section-description">
            Descubre cómo el factoring puede ayudar a tu empresa a mejorar su flujo de caja y crecer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

