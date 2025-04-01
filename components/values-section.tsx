import { Shield, Lightbulb, Users, BarChart3 } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Confianza",
      description:
        "Construimos relaciones basadas en la transparencia y la seguridad, protegiendo los intereses de nuestros clientes e inversionistas.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovación",
      description:
        "Buscamos constantemente nuevas formas de mejorar nuestros servicios y procesos, aprovechando la tecnología para crear soluciones eficientes.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Inclusión",
      description:
        "Trabajamos para democratizar el acceso a servicios financieros, eliminando barreras y creando oportunidades para todos.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Excelencia",
      description:
        "Nos esforzamos por ofrecer el mejor servicio posible, con altos estándares de calidad en cada interacción y proceso.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestros Valores</h2>
          <p className="section-description">Estos principios guían nuestras decisiones y acciones cada día.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

