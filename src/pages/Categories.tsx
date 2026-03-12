import { 
  Wind, 
  Thermometer, 
  Wrench, 
  Search, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  {
    icon: Wind,
    title: "Ar Condicionado Automotivo",
    description: "Compressores, condensadores, evaporadores, filtros secadores, válvulas de expansão e mangueiras.",
    items: ["Compressores", "Condensadores", "Evaporadores", "Filtros", "Válvulas"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADe3rcm0hgqHUDtpaA7UkTW7iNS0HPZi-k60nizxTD8-OYteHYWr1Sj_DETogv93pl-GYfBcuHfwZ9ZqPyvs3taaW10noqM22dRb7sbpa5urSIuawtxsjUNfpywuX-crP69KZny-Cg_zLgz6x0Z6GKMzAqtGOlEdx2XO_FOmQPee4xq3uEFCXzmzPbf-iUN0IjJeFK_knPdMnQi3htvoeDCedtnMfMrEdnSwBzjQ6KJZX_TYXSGlgYJj5kdRg09qL2WO8DqWdo87rs"
  },
  {
    icon: Thermometer,
    title: "Sistema de Arrefecimento",
    description: "Radiadores, reservatórios, aditivos, bombas d'água e mangueiras de alta pressão.",
    items: ["Radiadores", "Reservatórios", "Aditivos", "Bombas d'Água", "Mangueiras"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRXFhxqwIHE_KoY1OqWXpQIKfYBmSxkMOYqGbY9U-WoKcGTv7-g_ucwtHqRE1tJDYo4ujtDrOLIecZRwMJSDuT-1BTy4r7bOUIW3IJIny5PRkPS09Fbj3ja47a2o2Xuaxgr1uhigAPSIdCKSpmp3tdMIOyRnuQqZJP7eTVKtNk4LEv49AYF8E6otyklrhGEQZjmu_UAlHL9vFyyxkqmxwwfdf99Lx44uKspgUptleJsybkQVgfWIIvAgRWjkEAZKyEwtsOAsOGN0_-"
  },
  {
    icon: Wrench,
    title: "Ferramentas Profissionais",
    description: "Manômetros, bombas de vácuo, extratores e ferramentas específicas para manutenção de sistemas de AC.",
    items: ["Manômetros", "Bombas de Vácuo", "Extratores", "Detectores de Vazamento", "Chaves Especiais"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1gAYQxzS402H6RVQgw6OTbESgmNu7hVemNk0YxJy7b9k9Gy1g52icDRPSNUwql9FlL8SPVTJqVY3Sch_PxQvWDdr8rqU1pLXhudlvk0ooTV7VuTnqHQOVc-ctjPQ0eINQiD6Yx-KCCmZqxmYBYtsHQNh0uO8GW0U6Y_ldnHMnEC38XkP-fLdAnoZsS1oDoAvEJTsqpIcOyDbzJd-bjAmkqY-5N9bhnU54pPRTjU-tIsuUHV1lkbpifbiVKVlvwyI354nyre0ZjoD"
  }
];

export default function Categories() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            Categorias de <span className="text-primary">Peças</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Encontre exatamente o que sua oficina precisa. Trabalhamos com as melhores marcas do mercado para garantir a satisfação do seu cliente.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 -mt-12">
        <div className="grid grid-cols-1 gap-12">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden" />
              </div>
              
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <cat.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">{cat.title}</h2>
                </div>
                
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {cat.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {cat.items.map((item, i) => (
                    <span key={i} className="bg-slate-50 text-slate-500 px-4 py-2 rounded-lg text-sm font-medium border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group">
                    Ver todos os produtos
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="https://wa.me/5516974014990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                    Consultar Disponibilidade
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Search Help Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mt-24">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 font-display">Não encontrou o que procurava?</h3>
              <p className="text-slate-400 text-lg">
                Temos um estoque vasto e recebemos novidades semanalmente. Entre em contato e nossa equipe técnica ajudará você a encontrar a peça exata.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a 
                href="https://wa.me/5516974014990"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-slate-900 px-10 py-5 rounded-2xl font-bold text-center hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
              >
                Falar com Especialista
              </a>
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                <Search className="w-4 h-4" />
                <span>Busca personalizada por chassi</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
