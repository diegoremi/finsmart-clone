import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      position: "CEO, Distribuidora Pacífico",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Finsmart nos ha permitido mejorar nuestro flujo de caja de manera significativa. El proceso es rápido y la plataforma es muy fácil de usar.",
      stars: 5,
    },
    {
      id: 2,
      name: "María Fernández",
      position: "CFO, Textiles Andinos",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Gracias a Finsmart hemos podido financiar nuestro crecimiento sin endeudarnos. Las tasas son muy competitivas y el servicio es excelente.",
      stars: 5,
    },
    {
      id: 3,
      name: "Jorge Mendoza",
      position: "Gerente Financiero, Grupo Constructor",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Llevamos más de un año trabajando con Finsmart y estamos muy satisfechos. Han sido un aliado clave para nuestra expansión.",
      stars: 4,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-description">Miles de empresas confían en Finsmart para optimizar su flujo de caja.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

