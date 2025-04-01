import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para optimizar el flujo de caja de tu empresa?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Únete a más de 5,000 empresas que ya confían en Finsmart para convertir sus facturas en efectivo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/en-construccion">
            <Button className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-6">Regístrate gratis</Button>
          </Link>
          <Link href="/en-construccion">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-primary-800 text-lg px-8 py-6"
            >
              Solicitar demostración
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

