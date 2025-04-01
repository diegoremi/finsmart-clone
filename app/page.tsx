import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Convierte tus facturas por cobrar en efectivo
            </h1>
            <p className="text-lg md:max-w-md">
              Con Finsmart puedes adelantar tus facturas por cobrar de manera rápida. Lo hacemos simple y 100% digital.
            </p>
            <Button className="bg-primary hover:bg-primary-600 text-white px-8 py-6 rounded-md text-lg">
              Conoce más
            </Button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Persona con teléfono y dinero"
              width={500}
              height={500}
              className="rounded-full bg-primary-100"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}

