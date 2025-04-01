import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Regístrate",
      description: "Crea tu cuenta en menos de 5 minutos y completa tu perfil empresarial.",
    },
    {
      number: "02",
      title: "Sube tus facturas",
      description: "Selecciona las facturas que deseas adelantar y súbelas a nuestra plataforma.",
    },
    {
      number: "03",
      title: "Recibe una oferta",
      description: "Nuestro sistema evaluará tus facturas y te presentará una oferta competitiva.",
    },
    {
      number: "04",
      title: "Recibe tu dinero",
      description: "Acepta la oferta y recibe el dinero en tu cuenta bancaria en menos de 48 horas.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">¿Cómo funciona?</h2>
          <p className="section-description">
            Convertir tus facturas en efectivo nunca ha sido tan fácil. Sigue estos simples pasos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="text-3xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

