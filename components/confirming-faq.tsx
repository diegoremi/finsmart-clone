import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ConfirmingFAQ() {
  const faqs = [
    {
      question: "¿Qué es el confirming?",
      answer:
        "El confirming es un servicio financiero que permite a las empresas gestionar los pagos a sus proveedores, ofreciéndoles la posibilidad de cobrar sus facturas de forma anticipada si así lo desean.",
    },
    {
      question: "¿Cuáles son los requisitos para acceder al confirming?",
      answer:
        "Tu empresa debe estar formalmente constituida, tener al menos 1 año de operaciones, contar con estados financieros actualizados y tener un buen historial crediticio.",
    },
    {
      question: "¿Mis proveedores están obligados a cobrar anticipadamente?",
      answer:
        "No, el cobro anticipado es completamente opcional para tus proveedores. Ellos pueden decidir si quieren cobrar antes del vencimiento o esperar hasta la fecha de pago acordada.",
    },
    {
      question: "¿Cuánto tiempo toma implementar el confirming en mi empresa?",
      answer:
        "Una vez completado el registro y la evaluación, el servicio puede estar operativo en aproximadamente 5 días hábiles.",
    },
    {
      question: "¿Qué beneficios obtienen mis proveedores?",
      answer:
        "Tus proveedores obtienen la posibilidad de cobrar anticipadamente sus facturas con tasas competitivas, mejoran su flujo de caja y reducen su riesgo de impago, ya que Finsmart garantiza el pago.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre el confirming y nuestros servicios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-800">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

