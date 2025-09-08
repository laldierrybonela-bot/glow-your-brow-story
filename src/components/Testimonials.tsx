import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    initials: "M.S.",
    text: "Simplesmente perfeito! Karollyne transformou completamente minhas sobrancelhas. O resultado ficou muito natural e exatamente como eu queria.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Beatriz",
    initials: "A.B.",
    text: "Profissional incrível! Ambiente super limpo e acolhedor. Recomendo para todas as amigas. Não dói nada e o resultado é maravilhoso!",
    rating: 5
  },
  {
    id: 3,
    name: "Carla Santos",
    initials: "C.S.",
    text: "Minha autoestima mudou completamente! Agora acordo com as sobrancelhas perfeitas todos os dias. Melhor investimento que já fiz.",
    rating: 5
  },
  {
    id: 4,
    name: "Juliana Lima",
    initials: "J.L.",
    text: "Karollyne é uma artista! Entendeu exatamente o que eu queria e superou minhas expectativas. Atendimento nota 10!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-rose">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossas clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Centenas de mulheres já transformaram sua autoestima conosco
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cliente verificada
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-gold-400 font-semibold">★★★★★</span>
            {" "}Avaliação média de 4.9/5 com mais de 200 clientes atendidas
          </p>
        </div>
      </div>
    </section>
  );
}