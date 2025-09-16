import { Button } from "@/components/ui/button";
import { Award, Users, Clock } from "lucide-react";

export default function About() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5527988121512?text=Olá! Gostaria de conhecer mais sobre seus serviços.", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a Profissional
            </h2>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed mb-4">
                Sou <span className="text-primary font-semibold">Karollyne Cardoso</span>. Tenho 31 anos, sou mãe, esposa e especialista em sobrancelhas. Minha jornada começou em 2021, quando, incentivada pela minha sogra, realizei meu primeiro curso. Na época, trabalhava CLT durante a semana e atendia aos sábados no salão dela. Foi nesse período que descobri minha verdadeira paixão: realçar a beleza e autoestima através do olhar.
                Em 2023, após a maternidade, decidi me dedicar totalmente à área, buscando a liberdade de agenda e a realização pessoal que só esse trabalho poderia me oferecer. Já em 2024, concluí minha formação como micropigmentadora, ampliando ainda mais minhas técnicas e resultados.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoje, sou referência no bairro onde atuo, reconhecida pelo cuidado, pelo olhar detalhista e pelo desejo constante de entregar um trabalho diferenciado a cada cliente que confia em mim. Conciliando maternidade e profissão, sigo diariamente fazendo o que amo: transformar sobrancelhas e elevar autoestima.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-rose rounded-xl">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">Certificada</p>
                <p className="text-sm text-muted-foreground">Cursos especializados</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-rose rounded-xl">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">200+ Clientes</p>
                <p className="text-sm text-muted-foreground">Satisfeitas</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-rose rounded-xl">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">2+ Anos</p>
                <p className="text-sm text-muted-foreground">De experiência</p>
              </div>
            </div>
            
            <Button 
              variant="elegant" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              Conhecer mais sobre os serviços
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="/lovable-uploads/d8a056a1-a551-49d1-81c3-f26f8df46fb9.png"
                alt="Karollyne Cardoso - Designer de Sobrancelhas"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-8 -left-8 w-32 h-32 bg-rose-200 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold-200 rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}