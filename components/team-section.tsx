import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Carlos Martínez",
      position: "CEO & Co-Fundador",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ana Rodríguez",
      position: "COO & Co-Fundadora",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Miguel Torres",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Laura Sánchez",
      position: "Directora de Finanzas",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contamos con un equipo de profesionales apasionados por la tecnología y las finanzas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

