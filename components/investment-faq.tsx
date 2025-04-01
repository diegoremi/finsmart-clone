import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function InvestmentFAQ() {
  const faqs = [
    {
      question: "¿Qué es la inversión en facturas?",
      answer:
        "La inversión en facturas, también conocida como factoring para inversionistas, es un modelo de inversión donde puedes financiar facturas de empresas a cambio de un rendimiento. Básicamente, adelantas el pago de facturas a empresas que necesitan liquidez y, cuando la factura se cobra, recibes tu capital más los intereses generados.",
    },
    {
      question: "¿Cuál es el monto mínimo para invertir?",
      answer:
        "El monto mínimo para invertir en Finsmart es de S/ 1,000 o $ 300, dependiendo de la moneda que elijas. Puedes aumentar tu inversión en incrementos de S/ 100 o $ 30.",
    },
    {
      question: "¿Cuál es la rentabilidad que puedo obtener?",
      answer:
        "La rentabilidad anual puede llegar hasta el 18% en soles y 12% en dólares, dependiendo del plazo y el riesgo de las facturas en las que inviertas. Cada oportunidad de inversión muestra claramente la tasa de retorno esperada.",
    },
    {
      question: "¿Cómo se garantiza mi inversión?",
      answer:
        "Todas las facturas en nuestra plataforma pasan por un riguroso proceso de evaluación. Además, contamos con un fondo de garantía que cubre posibles impagos. También realizamos un análisis crediticio exhaustivo de las empresas pagadoras para minimizar el riesgo.",
    },
    {
      question: "¿Puedo retirar mi dinero antes del vencimiento?",
      answer:
        "Una vez que has invertido en una factura, tu dinero está comprometido hasta el vencimiento de la misma. Sin embargo, ofrecemos plazos desde 30 días, lo que te permite planificar tus inversiones según tus necesidades de liquidez.",
    },
    {
      question: "¿Qué documentos necesito para registrarme como inversionista?",
      answer:
        "Para personas naturales: DNI, comprobante de domicilio y datos de tu cuenta bancaria. Para personas jurídicas: RUC, ficha RUC, vigencia de poderes, DNI del representante legal y datos de la cuenta bancaria de la empresa.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre la inversión en facturas.
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

