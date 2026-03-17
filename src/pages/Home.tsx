import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ArrowRight, 
  ShoppingCart,
  CheckCircle2,
  Search,
  Truck,
  Star,
  Quote,
  Lightbulb,
  Wrench,
  Thermometer,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1gAYQxzS402H6RVQgw6OTbESgmNu7hVemNk0YxJy7b9k9Gy1g52icDRPSNUwql9FlL8SPVTJqVY3Sch_PxQvWDdr8rqU1pLXhudlvk0ooTV7VuTnqHQOVc-ctjPQ0eINQiD6Yx-KCCmZqxmYBYtsHQNh0uO8GW0U6Y_ldnHMnEC38XkP-fLdAnoZsS1oDoAvEJTsqpIcOyDbzJd-bjAmkqY-5N9bhnU54pPRTjU-tIsuUHV1lkbpifbiVKVlvwyI354nyre0ZjoD",
  compressor: "https://m.media-amazon.com/images/I/71-x9B-o7qL._AC_SL1500_.jpg", // High quality Sanden 7V16 compressor image
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

      {/* Marcas Parceiras */}
      <section className="py-8 bg-primary border-y border-primary-dark/20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-7xl mb-4">
          <p className="text-center text-slate-900/80 text-sm font-bold uppercase tracking-[0.3em]">Trabalhamos com as melhores marcas</p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24 md:gap-32 py-2">
            {['SANDEN', 'DENSO', 'DELPHI', 'MAHLE', 'MAGNETI MARELLI', 'VALEO'].map((brand, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter font-display">
                {brand}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {['SANDEN', 'DENSO', 'DELPHI', 'MAHLE', 'MAGNETI MARELLI', 'VALEO'].map((brand, i) => (
              <span key={`dup-${i}`} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter font-display">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produtos" className="py-24 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Catálogo Online</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-display">Produtos em Destaque</h3>
          </div>
          <Link to="/categorias" className="text-primary font-bold flex items-center gap-2 group hover:text-primary-dark transition-colors">
            Ver catálogo completo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
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

      {/* Como Comprar */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Simples e Rápido</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white font-display">Como adquirir suas peças</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "1. Escolha a Peça",
                desc: "Navegue pelo nosso catálogo ou nos informe o modelo e ano do seu veículo."
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "2. Chame no WhatsApp",
                desc: "Nossa equipe técnica confirma a compatibilidade e passa o orçamento na hora."
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "3. Receba na Oficina",
                desc: "Entrega rápida em Ribeirão e região ou envio imediato para todo o Brasil."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-500">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-white px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Confiança</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">O que dizem nossos parceiros</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ricardo Silva",
              role: "Dono da Auto Ar Ribeirão",
              text: "A Kleber é nossa parceira há anos. A precisão técnica deles na hora de indicar a peça certa nos economiza muito tempo e evita retornos."
            },
            {
              name: "Marcos Oliveira",
              role: "Mecânico Especialista",
              text: "As ferramentas que comprei lá são de primeira linha. O atendimento do Kleber é diferenciado, ele entende do que está vendendo."
            },
            {
              name: "André Santos",
              role: "Oficina Premium RP",
              text: "Entrega super rápida! Quando surge um carro importado com problema no ar, sei que posso contar com eles para as peças mais difíceis."
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <h5 className="font-bold text-slate-900">{testimonial.name}</h5>
                <p className="text-slate-400 text-xs uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dicas Técnicas */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Conhecimento</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">Dicas Técnicas Rápidas</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Mais do que vender peças, queremos que seu serviço seja impecável. Confira algumas orientações fundamentais para o sucesso da manutenção.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: <Thermometer className="w-5 h-5" />,
                    title: "Carga de Gás Precisa",
                    desc: "Sempre utilize balança. Cargas excessivas ou insuficientes reduzem drasticamente a vida útil do compressor."
                  },
                  {
                    icon: <Wrench className="w-5 h-5" />,
                    title: "Limpeza do Sistema (Flushing)",
                    desc: "Nunca instale um compressor novo sem antes realizar a limpeza completa do sistema para remover limalhas."
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5" />,
                    title: "Óleo Correto (PAG/POE)",
                    desc: "A viscosidade do óleo é vital. Consulte sempre a especificação do fabricante para evitar travamentos."
                  }
                ].map((tip, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
                    <div className="text-primary shrink-0">{tip.icon}</div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-1">{tip.title}</h5>
                      <p className="text-slate-500 text-sm">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Oficina Mecânica" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-3xl shadow-xl hidden md:block">
                <Lightbulb className="w-10 h-10 text-slate-900 mb-4" />
                <p className="text-slate-900 font-bold text-xl leading-tight">Expertise que<br />faz a diferença.</p>
              </div>
            </div>
          </div>
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
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
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
