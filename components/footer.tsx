import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-10 w-36">
                <Image
                  src="/placeholder.svg?height=40&width=150"
                  alt="Finsmart Logo"
                  width={150}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm mt-6">
              Finsmart es una plataforma fintech que permite a las empresas convertir sus facturas por cobrar en
              efectivo de manera rápida y 100% digital.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="/en-construccion" className="text-gray-300 hover:text-primary-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="/en-construccion" className="text-gray-300 hover:text-primary-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="/en-construccion" className="text-gray-300 hover:text-primary-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="/en-construccion" className="text-gray-300 hover:text-primary-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-primary-300 text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/financiamiento/factoring" className="text-gray-300 hover:text-primary-300 text-sm">
                  Factoring
                </Link>
              </li>
              <li>
                <Link href="/financiamiento/confirming" className="text-gray-300 hover:text-primary-300 text-sm">
                  Confirming
                </Link>
              </li>
              <li>
                <Link href="/inversiones" className="text-gray-300 hover:text-primary-300 text-sm">
                  Inversiones
                </Link>
              </li>
              <li>
                <Link href="/en-construccion" className="text-gray-300 hover:text-primary-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/en-construccion" className="text-gray-300 hover:text-primary-300 text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300 text-sm">contacto@finsmart.pe</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300 text-sm">+51 (01) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300 text-sm">Av. El Derby 055, Santiago de Surco, Lima, Perú</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mantente informado</h3>
            <p className="text-gray-300 text-sm mb-4">
              Suscríbete a nuestro newsletter para recibir noticias y actualizaciones.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600 text-white py-2 px-4 rounded-md text-sm transition duration-200"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Finsmart. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/en-construccion" className="text-gray-400 hover:text-primary-300 text-sm">
                Términos y Condiciones
              </Link>
              <Link href="/en-construccion" className="text-gray-400 hover:text-primary-300 text-sm">
                Política de Privacidad
              </Link>
              <Link href="/en-construccion" className="text-gray-400 hover:text-primary-300 text-sm">
                Libro de Reclamaciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

