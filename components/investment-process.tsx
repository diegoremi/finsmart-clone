import { ArrowRight } from "lucide-react"

export default function InvestmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Regístrate",
      description: "Crea tu cuenta en menos de 3 minutos y completa tu perfil de inversionista.",
    },
    {
      number: "02",
      title: "Fondea tu cuenta",
      description: "Transfiere el monto que deseas invertir a tu cuenta Finsmart.",
    },
    {
      number: "03",
      title: "Elige tus inversiones",
      description: "Selecciona las facturas en las que deseas invertir según tus preferencias.",
    },
    {
      number: "04",
      title: "Recibe tus ganancias",
      description: "Al vencimiento de las facturas, recibe tu capital más los intereses generados.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">¿Cómo funciona?</h2>
          <p className="section-description">
            Invertir en facturas nunca ha sido tan fácil. Sigue estos simples pasos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 h-full">
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

