import { Building2, Users, DollarSign } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Desde 2018 hemos logrado:</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Companies Stat */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center card-hover">
            <div className="flex justify-center mb-4">
              <Building2 className="h-12 w-12 text-primary-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800">+5.2K</h3>
            <p className="text-gray-600 mt-2">Empresas registradas</p>
          </div>

          {/* Invoices Stat */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center card-hover">
            <div className="flex justify-center mb-4">
              <DollarSign className="h-12 w-12 text-primary-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800">S/ 1000M</h3>
            <p className="text-gray-600 mt-2">Monto de facturas negociadas</p>
          </div>

          {/* Investors Stat */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center card-hover">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800">+18.3K</h3>
            <p className="text-gray-600 mt-2">Inversionistas registrados</p>
          </div>
        </div>
      </div>
    </section>
  )
}

