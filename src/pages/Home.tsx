import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ArrowRight, 
  ShoppingCart
} from 'lucide-react';
import { motion } from 'motion/react';

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1gAYQxzS402H6RVQgw6OTbESgmNu7hVemNk0YxJy7b9k9Gy1g52icDRPSNUwql9FlL8SPVTJqVY3Sch_PxQvWDdr8rqU1pLXhudlvk0ooTV7VuTnqHQOVc-ctjPQ0eINQiD6Yx-KCCmZqxmYBYtsHQNh0uO8GW0U6Y_ldnHMnEC38XkP-fLdAnoZsS1oDoAvEJTsqpIcOyDbzJd-bjAmkqY-5N9bhnU54pPRTjU-tIsuUHV1lkbpifbiVKVlvwyI354nyre0ZjoD",
  compressor: "https://lh3.googleusercontent.com/aida-public/AB6AXuADe3rcm0hgqHUDtpaA7UkTW7iNS0HPZi-k60nizxTD8-OYteHYWr1Sj_DETogv93pl-GYfBcuHfwZ9ZqPyvs3taaW10noqM22dRb7sbpa5urSIuawtxsjUNfpywuX-crP69KZny-Cg_zLgz6x0Z6GKMzAqtGOlEdx2XO_FOmQPee4xq3uEFCXzmzPbf-iUN0IjJeFK_knPdMnQi3htvoeDCedtnMfMrEdnSwBzjQ6KJZX_TYXSGlgYJj5kdRg09qL2WO8DqWdo87rs",
  filter: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqOVVH-mdUu8UJAmP0EugvaDOAG7rS2zRDVSr2ROk5R-awUYP9hslHJcz50yFRZweyyK3d7u9mP5NWsoNW-qQzyaeNiEAXkR26BlCZbnnVFFqM9uW7MI5bh6b6dXehKtWixyl8tBbjD6xgAhKzC2uqsSkxygoLpbZTF82JGg4XCNPOmzPrBuTXzNGgI0D6cGJNtflrr4mdVsw3tgjoEx-16LygxhrKGCy1dv8Z_9gxFjPi-f2e9mjiQIvuMrf2p9Iz0cElMuHGWSf_",
  radiator: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRXFhxqwIHE_KoY1OqWXpQIKfYBmSxkMOYqGbY9U-WoKcGTv7-g_ucwtHqRE1tJDYo4ujtDrOLIecZRwMJSDuT-1BTy4r7bOUIW3IJIny5PRkPS09Fbj3ja47a2o2Xuaxgr1uhigAPSIdCKSpmp3tdMIOyRnuQqZJP7eTVKtNk4LEv49AYF8E6otyklrhGEQZjmu_UAlHL9vFyyxkqmxwwfdf99Lx44uKspgUptleJsybkQVgfWIIvAgRWjkEAZKyEwtsOAsOGN0_-",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9SUDpjbviq_43Trtyd68ARK8MguVpiCFckxWxCSwW2QAkFym2ZUUyAXVi6uckgBaaGf0xvS-1sATg0RVIk5n1R90eL6MUPX943UImG4rQ7e_A8EgjjHDpZL1QUftSVvMHbudL5yxFZyJCwF967hRnlo48tZ_RZJVy0fW890ngICgwwbZpj8hIhqJFsHVdhSbovDvbTtb03R4V6fyZdgdMBXqTgkVfdsoSVO9lPFNiMGuba5Nf_ohNTISjbamNPcW58kY8z0O-zkk"
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.4) 100%), url("${IMAGES.hero}")` 
          }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-20 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Líder Regional</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight font-display">
              Especialistas em <span className="text-primary">Peças e Ferramentas</span> para Ar-Condicionado Automotivo
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal max-w-xl leading-relaxed">
              Referência em qualidade e procedência em Ribeirão Preto desde 2016. Atendimento técnico especializado para profissionais e entusiastas.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="tel:+551641411420"
                className="flex items-center gap-3 bg-primary text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 group"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
              <a 
                href="https://wa.me/5516974014990"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl shadow-green-500/20"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Rua+Holanda+67+Vila+Mariana+Ribeirão+Preto+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                <MapPin className="w-5 h-5" />
                Localização
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produtos" className="py-24 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Catálogo Online</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-display">Produtos em Destaque</h3>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-2 group hover:text-primary-dark transition-colors">
            Ver catálogo completo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <ProductCard 
            image={IMAGES.compressor}
            category="Climatização"
            title="Compressor Sanden"
            description="Original Sanden para máxima performance e eficiência energética no seu veículo."
            badge="Novo"
            badgeColor="bg-primary"
          />
          <ProductCard 
            image={IMAGES.filter}
            category="Filtragem"
            title="Filtro Secador"
            description="Filtragem de alta capacidade para sistemas de refrigeração automotiva pesada e leve."
          />
          <ProductCard 
            image={IMAGES.radiator}
            category="Arrefecimento"
            title="Radiador Automotivo"
            description="Durabilidade garantida com tecnologia de ponta para arrefecimento do motor."
            badge="Destaque"
            badgeColor="bg-red-500"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-40"
          style={{ backgroundImage: `url("${IMAGES.map}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8f5] via-transparent to-[#f8f8f5]/50 pointer-events-none" />
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200 flex flex-col items-center gap-4 max-w-md text-center border border-slate-100"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-2xl text-slate-900 font-display">Venha nos visitar</h4>
            <p className="text-slate-500 leading-relaxed">
              Rua Holanda 67, Vila Mariana - Ribeirão Preto, SP. O polo regional das melhores peças automotivas.
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Rua+Holanda+67+Vila+Mariana+Ribeirão+Preto+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all uppercase text-sm tracking-widest"
            >
              Abrir no Google Maps
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ image, category, title, description, badge, badgeColor }: { 
  image: string, 
  category: string, 
  title: string, 
  description: string,
  badge?: string,
  badgeColor?: string
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {badge && (
          <div className="absolute top-6 left-6">
            <span className={`${badgeColor} text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg`}>
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="p-8">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{category}</p>
        <h4 className="text-2xl font-bold mb-3 text-slate-900 font-display">{title}</h4>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-xl">Consulte-nos</span>
          <button className="w-12 h-12 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
