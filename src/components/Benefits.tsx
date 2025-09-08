import { Heart, Shield, Sparkles, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Naturalidade",
    description: "Resultado suave e elegante que realça sua beleza natural"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Técnicas modernas e materiais de qualidade premium"
  },
  {
    icon: Sparkles,
    title: "Conforto",
    description: "Ambiente acolhedor e atendimento exclusivo"
  },
  {
    icon: CheckCircle,
    title: "Resultado Garantido",
    description: "Satisfação comprovada por centenas de clientes"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher nosso estúdio?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiência, qualidade e resultados que transformam seu olhar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-rose rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}