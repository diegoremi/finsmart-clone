import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FactoringFAQ() {
  const faqs = [
    {
      question: "¿Qué es el factoring?",
      answer:
        "El factoring es un servicio financiero que permite a las empresas vender sus facturas por cobrar a un tercero (factor) a cambio de recibir liquidez inmediata, sin tener que esperar al vencimiento de dichas facturas.",
    },
    {
      question: "¿Qué tipos de facturas puedo adelantar?",
      answer:
        "Puedes adelantar facturas comerciales emitidas a empresas formales con buen historial crediticio. Las facturas deben estar vigentes, no vencidas, y tener un plazo de pago entre 30 y 120 días.",
    },
    {
      question: "¿Cuánto tiempo toma recibir el dinero?",
      answer:
        "Una vez aprobada la operación, recibirás el dinero en tu cuenta bancaria en un plazo máximo de 48 horas hábiles.",
    },
    {
      question: "¿Cuál es la tasa de descuento?",
      answer:
        "La tasa de descuento varía según el perfil de riesgo de tu empresa y del pagador de la factura. En general, nuestras tasas son más competitivas que las ofrecidas por la banca tradicional.",
    },
    {
      question: "¿Qué documentos necesito para registrarme?",
      answer:
        "Necesitarás tu RUC, DNI del representante legal, estados financieros recientes, y documentos que acrediten la existencia de la empresa (ficha RUC, vigencia de poderes, etc.).",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre el factoring y nuestros servicios.
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

