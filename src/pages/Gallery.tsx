import { 
  Search, 
  Filter, 
  MessageSquare, 
  Maximize2,
  ShoppingCart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    category: "Ar Condicionado",
    title: "Compressor Sanden 7H15",
    image: "https://http2.mlstatic.com/D_NQ_NP_761160-MLBU761160807_052024-O.jpg",
    description: "Ideal para sistemas de refrigeração pesada."
  },
  {
    id: 2,
    category: "Arrefecimento",
    title: "Radiador de Alumínio",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRXFhxqwIHE_KoY1OqWXpQIKfYBmSxkMOYqGbY9U-WoKcGTv7-g_ucwtHqRE1tJDYo4ujtDrOLIecZRwMJSDuT-1BTy4r7bOUIW3IJIny5PRkPS09Fbj3ja47a2o2Xuaxgr1uhigAPSIdCKSpmp3tdMIOyRnuQqZJP7eTVKtNk4LEv49AYF8E6otyklrhGEQZjmu_UAlHL9vFyyxkqmxwwfdf99Lx44uKspgUptleJsybkQVgfWIIvAgRWjkEAZKyEwtsOAsOGN0_-",
    description: "Alta dissipação térmica para motores modernos."
  },
  {
    id: 3,
    category: "Ferramentas",
    title: "Manômetro Digital",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1gAYQxzS402H6RVQgw6OTbESgmNu7hVemNk0YxJy7b9k9Gy1g52icDRPSNUwql9FlL8SPVTJqVY3Sch_PxQvWDdr8rqU1pLXhudlvk0ooTV7VuTnqHQOVc-ctjPQ0eINQiD6Yx-KCCmZqxmYBYtsHQNh0uO8GW0U6Y_ldnHMnEC38XkP-fLdAnoZsS1oDoAvEJTsqpIcOyDbzJd-bjAmkqY-5N9bhnU54pPRTjU-tIsuUHV1lkbpifbiVKVlvwyI354nyre0ZjoD",
    description: "Precisão absoluta na medição de pressão de gás."
  },
  {
    id: 4,
    category: "Ar Condicionado",
    title: "Filtro Secador Universal",
    image: "https://http2.mlstatic.com/D_NQ_NP_623257-MLB42792134844_072020-O.jpg",
    description: "Compatível com diversos modelos de veículos."
  },
  // Adding more mock items to fill the gallery
  {
    id: 5,
    category: "Ferramentas",
    title: "Bomba de Vácuo 7CFM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1gAYQxzS402H6RVQgw6OTbESgmNu7hVemNk0YxJy7b9k9Gy1g52icDRPSNUwql9FlL8SPVTJqVY3Sch_PxQvWDdr8rqU1pLXhudlvk0ooTV7VuTnqHQOVc-ctjPQ0eINQiD6Yx-KCCmZqxmYBYtsHQNh0uO8GW0U6Y_ldnHMnEC38XkP-fLdAnoZsS1oDoAvEJTsqpIcOyDbzJd-bjAmkqY-5N9bhnU54pPRTjU-tIsuUHV1lkbpifbiVKVlvwyI354nyre0ZjoD",
    description: "Potência e durabilidade para vácuo profundo."
  },
  {
    id: 6,
    category: "Arrefecimento",
    title: "Aditivo Concentrado",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRXFhxqwIHE_KoY1OqWXpQIKfYBmSxkMOYqGbY9U-WoKcGTv7-g_ucwtHqRE1tJDYo4ujtDrOLIecZRwMJSDuT-1BTy4r7bOUIW3IJIny5PRkPS09Fbj3ja47a2o2Xuaxgr1uhigAPSIdCKSpmp3tdMIOyRnuQqZJP7eTVKtNk4LEv49AYF8E6otyklrhGEQZjmu_UAlHL9vFyyxkqmxwwfdf99Lx44uKspgUptleJsybkQVgfWIIvAgRWjkEAZKyEwtsOAsOGN0_-",
    description: "Proteção total contra corrosão e fervura."
  }
];

const categories = ["Tudo", "Ar Condicionado", "Arrefecimento", "Ferramentas"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tudo");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "Tudo" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 pt-32 pb-24 px-4 md:px-8 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 font-display">Nossa Galeria de <span className="text-primary">Produtos</span></h1>
              <p className="text-slate-400 text-lg">Explore nosso catálogo completo de peças e ferramentas. Qualidade garantida para sua oficina.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Pesquisar na galeria..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white w-full md:w-80 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 py-16">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-slate-400 mr-4 font-bold uppercase text-xs tracking-widest">
            <Filter className="w-4 h-4" />
            Filtrar:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat 
                ? 'bg-primary border-primary text-slate-900 shadow-lg shadow-primary/20' 
                : 'bg-white border-slate-200 text-slate-500 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/${product.title}/800/800`;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-primary transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                    <a 
                      href="https://wa.me/5516974014990"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:brightness-110 transition-all"
                    >
                      <MessageSquare className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{product.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-slate-400 text-xs font-medium">Sob consulta</span>
                    <button className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Consultar no WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhum produto encontrado</h3>
            <p className="text-slate-500">Tente ajustar seus filtros ou termo de pesquisa.</p>
          </div>
        )}
      </section>
    </div>
  );
}
