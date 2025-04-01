import { BarChart3, Shield, Clock, Globe, Zap, PieChart } from "lucide-react"

export default function InvestmentBenefits() {
  const benefits = [
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Alta rentabilidad",
      description: "Obtén retornos de hasta 18% anual, muy por encima de las alternativas tradicionales de inversión.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Inversión segura",
      description: "Todas las facturas están respaldadas por empresas verificadas y con buen historial crediticio.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Plazos flexibles",
      description: "Elige entre inversiones de corto plazo, desde 30 hasta 120 días, según tus necesidades.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Inversión en soles y dólares",
      description: "Diversifica tu portafolio invirtiendo en ambas monedas según tu estrategia.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "100% digital",
      description: "Invierte desde cualquier lugar y en cualquier momento a través de nuestra plataforma digital.",
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Diversificación",
      description: "Distribuye tu inversión en múltiples facturas para optimizar tu rendimiento y reducir riesgos.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Beneficios de invertir en Finsmart</h2>
          <p className="section-description">
            Descubre por qué más de 18,000 inversionistas confían en nosotros para hacer crecer su dinero.
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

