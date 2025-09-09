import { Button } from "@/components/ui/button";
import { Gift, MessageCircle } from "lucide-react";
export default function SpecialOffer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Quero aproveitar a oferta especial de micropigmentação com retoque grátis!", "_blank");
  };
  return <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Gift className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-medium">Oferta Especial</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Agende hoje sua Micropigmentação</h2>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-elegant">
            <p className="text-xl md:text-2xl text-primary-foreground font-semibold mb-4">
              Ganhe 1 sessão de retoque <span className="text-gold-200">GRÁTIS!
            </span>
            </p>
            <p className="text-primary-foreground/90 mb-6">
              Investimento completo por apenas <span className="text-2xl font-bold text-gold-200">R$ 600</span>
            </p>
            <ul className="text-primary-foreground/90 space-y-2 mb-6">
              <li>✨ Micropigmentação completa</li>
              <li>✨ Retoque após 30 dias incluso</li>
              <li>✨ Acompanhamento pós-procedimento</li>
              <li>✨ Garantia de satisfação</li>
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