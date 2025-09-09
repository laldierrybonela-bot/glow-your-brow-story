import beforeAfter1 from "@/assets/Combo-completo.mp4";
import beforeAfter2 from "@/assets/Micro1.mp4";
import beforeAfter3 from "@/assets/Micro2.mp4";
\Combo-completo.mp4
\Micro1.mp4
\Micro2.mp4

const galleryImages = [
  {
    id: 1,
    src: beforeAfter1,
    alt: "Antes e depois - Micropigmentação 1"
  },
  {
    id: 2,
    src: beforeAfter2,
    alt: "Antes e depois - Micropigmentação 2"
  },
  {
    id: 3,
    src: beforeAfter3,
    alt: "Antes e depois - Micropigmentação 3"
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja a transformação real das nossas clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados impressionantes que falam por si só
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">
                    Antes e Depois
                  </p>
                  <p className="text-white/80 text-sm">
                    Micropigmentação natural
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ver mais resultados? Siga nosso Instagram!
          </p>
          <a 
            href="https://instagram.com/karol.sobrancelhas2" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            @karol.sobrancelhas2
            <span className="text-gold-400">✨</span>
          </a>
        </div>
      </div>
    </section>
  );
}