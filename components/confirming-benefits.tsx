import { Clock, Users, CreditCard, BarChart3, FileText, Zap } from "lucide-react"

export default function ConfirmingBenefits() {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Extiende tus plazos de pago",
      description: "Mejora tu flujo de caja extendiendo los plazos de pago a tus proveedores sin afectar su liquidez.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Fortalece relaciones",
      description: "Mejora la relación con tus proveedores ofreciéndoles la posibilidad de cobrar anticipadamente.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Optimiza capital de trabajo",
      description: "Libera capital de trabajo para invertir en el crecimiento de tu negocio.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Mejora indicadores financieros",
      description: "Optimiza tus ratios de liquidez y solvencia sin afectar tu capacidad de endeudamiento.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Simplifica la gestión",
      description: "Centraliza y automatiza el proceso de pago a proveedores, reduciendo cargas administrativas.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Proceso 100% digital",
      description: "Gestiona todo el proceso desde nuestra plataforma, sin papeleos ni trámites presenciales.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Beneficios del confirming</h2>
          <p className="section-description">
            Descubre cómo el confirming puede ayudar a tu empresa a optimizar su cadena de pagos.
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

