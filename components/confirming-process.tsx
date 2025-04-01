import { ArrowRight } from "lucide-react"

export default function ConfirmingProcess() {
  const steps = [
    {
      number: "01",
      title: "Regístrate",
      description: "Crea tu cuenta en menos de 5 minutos y completa tu perfil empresarial.",
    },
    {
      number: "02",
      title: "Carga tus pagos",
      description: "Sube la información de las facturas que deseas pagar a tus proveedores.",
    },
    {
      number: "03",
      title: "Notifica a tus proveedores",
      description: "Tus proveedores recibirán una notificación con la opción de cobrar anticipadamente.",
    },
    {
      number: "04",
      title: "Gestiona tus pagos",
      description: "Controla y monitorea todos tus pagos desde nuestra plataforma digital.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">¿Cómo funciona?</h2>
          <p className="section-description">
            Optimizar la gestión de pagos a tus proveedores nunca ha sido tan fácil. Sigue estos simples pasos:
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

