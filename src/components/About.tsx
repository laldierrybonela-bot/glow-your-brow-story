import { Button } from "@/components/ui/button";
import { Award, Users, Clock } from "lucide-react";

export default function About() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5527997992612?text=Olá! Gostaria de conhecer mais sobre seus serviços.", "_blank");
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
                Sou <span className="text-primary font-semibold">Karollyne Cardoso</span>, especialista em design e micropigmentação de sobrancelhas. Já ajudei centenas de mulheres a se sentirem mais confiantes e seguras com técnicas modernas, seguras e naturais.
              </p>
              
              <p className="text-lg leading-relaxed">
                Minha missão é valorizar a sua beleza de forma única e personalizada, sempre respeitando o formato do seu rosto e suas características naturais.
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
                <p className="font-semibold text-foreground">3+ Anos</p>
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