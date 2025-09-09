import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, MapPin, Phone, Clock } from "lucide-react";
export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/552799792612?text=Olá! Gostaria de agendar um horário.", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://instagram.com/karol.sobrancelhas2", "_blank");
  };
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Sua transformação começa aqui
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Agende agora e descubra a melhor versão do seu olhar!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="elegant" onClick={handleWhatsAppClick} className="text-lg px-8 py-6 h-auto">
              <MessageCircle className="w-5 h-5" />
              Agendar no WhatsApp
            </Button>
            
            <Button size="lg" variant="outline-rose" onClick={handleInstagramClick} className="text-lg px-8 py-6 h-auto border-background/20 text-background hover:bg-background/10">
              <Instagram className="w-5 h-5" />
              Seguir no Instagram
            </Button>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-background mb-2">Localização</h3>
            <p className="text-background/80">
              Rua das Flores, 123<br />
              Vila Madalena, São Paulo - SP
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-background mb-2">Contato</h3>
            <p className="text-background/80">
              (27) 99799-2612<br />
              karollyne.cardoso.sobrancelha@gmail.com
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-background mb-2">Horário</h3>
            <p className="text-background/80">
              Segunda à Sexta: 9h às 18h<br />
              Sábado: 9h às 15h
            </p>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="text-center mb-8">
          <h3 className="font-semibold text-background mb-4">Siga-nos nas redes sociais</h3>
          <div className="flex justify-center gap-4">
            <button onClick={handleInstagramClick} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </button>
            <button onClick={handleWhatsAppClick} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Karollyne Cardoso - Designer de Sobrancelhas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
}