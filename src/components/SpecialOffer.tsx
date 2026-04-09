import { Button } from "@/components/ui/button";
import { Gift, MessageCircle } from "lucide-react";
export default function SpecialOffer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5527988121512?text=Olá! Quero aproveitar a oferta especial de micropigmentação com retoque grátis!", "_blank");
  };
  return <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Gift className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-medium">Nossos Serviços</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Agende hoje seu Procedimento</h2>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-elegant">
          {/* Lista de serviços */}
          <ul className="text-xl md:text-2xl text-primary-foreground font-semibold mb-6 space-y-2">
              <li>✨ Micropigmentação</li>
              <li>✨ Design simples</li> 
              <li>✨ Design com Henna</li>
              <li>✨ Brow Lamination</li>
              <li>✨ Cílios Look Francês</li>
              <li>✨ Spa dos Lábios</li>
              <li>✨ Buço</li> 
          </ul>

          {/* OFERTA ESPECIAL */}
          <div className="bg-gold-100/10 border-l-4 border-gold-200 pl-4 py-4 rounded-lg mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gold-200 mb-2">
              🌟 OFERTA ESPECIAL
            </h3>
            <p className="text-primary-foreground/90 text-lg">
            <span className="font-bold">✨ MICROPIGMENTAÇÃO</span>{' '}
            <span className="text-2xl font-bold text-gold-200">    R$ 500,00</span>
            </p>
          </div>
          {/* Benefícios */}
          <ul className="text-primary-foreground/90 text-base md:text-lg space-y-2 mb-2">
              <li>✨ Retoque após 30 dias incluso</li>
              <li>✨ Duração média de 1 ano</li>
              <li>✨ Acompanhamento pós-procedimento</li>
          </ul>
        </div>
          
          <Button size="lg" variant="elegant" onClick={handleWhatsAppClick} className="text-lg px-8 py-6 h-auto mb-4">
            <MessageCircle className="w-5 h-5" />
            Quero agendar meu horário agora
          </Button>
          
          <p className="text-primary-foreground/80 text-sm">
            💎 Vagas limitadas • Promoção válida até o final do mês
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gold-200/20 rounded-full blur-2xl" />
    </section>;
}