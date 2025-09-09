import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "/lovable-uploads/10537da8-a009-4590-912c-5229a65403d9.png";

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/27998992612?text=Olá! Gostaria de agendar um horário para design de sobrancelhas.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sobrancelhas perfeitas - Design profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Sobrancelhas Perfeitas,{" "}
            <span className="text-primary">Realce Natural</span>{" "}
            da Sua Beleza
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Atendimento personalizado para mulheres que desejam autoestima elevada e um olhar marcante.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="whatsapp"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 h-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar agora no WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-40 blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold-200 rounded-full opacity-30 blur-2xl animate-pulse" />
    </section>
  );
}