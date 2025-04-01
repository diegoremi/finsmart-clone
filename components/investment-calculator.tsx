"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InvestmentCalculator() {
  const [amount, setAmount] = useState(10000)
  const [term, setTerm] = useState(90)
  const [currency, setCurrency] = useState("PEN")

  // Calculate returns based on inputs
  const calculateReturn = () => {
    // Simple calculation for demonstration
    // In a real app, this would be more complex based on actual rates
    const annualRate = currency === "PEN" ? 0.18 : 0.12 // 18% for PEN, 12% for USD
    const dailyRate = annualRate / 365
    const returnAmount = amount * (1 + dailyRate * term)
    const interest = returnAmount - amount

    return {
      total: returnAmount.toFixed(2),
      interest: interest.toFixed(2),
    }
  }

  const returns = calculateReturn()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Calcula tu inversión</h2>
          <p className="section-description">Simula cuánto podrías ganar invirtiendo en facturas con Finsmart.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <Tabs defaultValue="PEN" onValueChange={(value) => setCurrency(value)}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="PEN">Soles (S/)</TabsTrigger>
              <TabsTrigger value="USD">Dólares ($)</TabsTrigger>
            </TabsList>

            <TabsContent value="PEN" className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monto a invertir: S/ {amount.toLocaleString()}
                </label>
                <Slider
                  value={[amount]}
                  min={1000}
                  max={100000}
                  step={1000}
                  onValueChange={(value) => setAmount(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>S/ 1,000</span>
                  <span>S/ 100,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plazo de inversión: {term} días</label>
                <Slider
                  value={[term]}
                  min={30}
                  max={120}
                  step={15}
                  onValueChange={(value) => setTerm(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>30 días</span>
                  <span>120 días</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="USD" className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monto a invertir: $ {amount.toLocaleString()}
                </label>
                <Slider
                  value={[amount]}
                  min={1000}
                  max={100000}
                  step={1000}
                  onValueChange={(value) => setAmount(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$ 1,000</span>
                  <span>$ 100,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plazo de inversión: {term} días</label>
                <Slider
                  value={[term]}
                  min={30}
                  max={120}
                  step={15}
                  onValueChange={(value) => setTerm(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>30 días</span>
                  <span>120 días</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Resultados estimados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <p className="text-gray-600 mb-1">Intereses generados</p>
                <p className="text-2xl font-bold text-primary">
                  {currency === "PEN" ? "S/ " : "$ "}
                  {returns.interest}
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <p className="text-gray-600 mb-1">Monto total al vencimiento</p>
                <p className="text-2xl font-bold text-primary">
                  {currency === "PEN" ? "S/ " : "$ "}
                  {returns.total}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-primary hover:bg-primary-700 text-white px-8 py-6 text-lg">
              Comienza a invertir
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

