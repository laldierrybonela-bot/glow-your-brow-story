import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Dói fazer micropigmentação?",
    answer: "O procedimento é praticamente indolor. Utilizamos anestésico tópico de alta qualidade que garante total conforto durante toda a sessão. A maioria das clientes relata apenas uma leve sensação de pressão."
  },
  {
    question: "Quanto tempo dura a micropigmentação?",
    answer: "Em média de 12 a 18 meses, dependendo do tipo de pele, cuidados pós-procedimento e exposição solar. Peles oleosas tendem a desbotar um pouco mais rápido, enquanto peles secas mantêm o pigmento por mais tempo."
  },
  {
    question: "Preciso de retoque?",
    answer: "Sim, após 30 a 45 dias é indicado um retoque para fixar melhor o pigmento e fazer ajustes finais. Este retoque está incluso no valor do procedimento e é fundamental para o resultado final perfeito."
  },
  {
    question: "É seguro fazer micropigmentação?",
    answer: "Absolutamente! Seguimos todos os protocolos de biossegurança, utilizamos materiais descartáveis e esterilizados, e o ambiente é higienizado seguindo normas da Anvisa. Todos os pigmentos são aprovados e de alta qualidade."
  },
  {
    question: "Qual o tempo de cicatrização?",
    answer: "A cicatrização completa ocorre entre 7 a 14 dias. Nos primeiros dias pode haver leve inchaço e descamação, que é completamente normal. Fornecemos orientações completas de cuidados pós-procedimento."
  },
  {
    question: "Como é feita a escolha da cor?",
    answer: "A cor é escolhida de acordo com seu tom de pele, cor dos cabelos e preferência pessoal. Faço uma análise detalhada do seu rosto e sempre testo a cor antes de iniciar o procedimento para garantir o resultado perfeito."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Esclarecemos todas as suas dúvidas sobre micropigmentação
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-0 shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12 p-6 bg-card rounded-2xl shadow-soft">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <p className="text-primary font-medium">
              Estamos aqui para ajudar você a tomar a melhor decisão 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}