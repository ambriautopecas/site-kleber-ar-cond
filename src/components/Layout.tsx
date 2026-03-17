import { 
  Settings, 
  Search, 
  Menu, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Instagram, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Categorias', path: '/categorias' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/sobre#contato' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900 border-b border-white/5 px-4 md:px-8 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="text-primary">
                <Settings className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-white text-lg md:text-xl font-bold leading-tight tracking-tight uppercase font-display">Kleber</h2>
                <span className="text-primary text-[10px] font-medium tracking-widest uppercase">Peças e Ferramentas</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className={`text-sm transition-all relative py-2 ${
                      isActive 
                        ? 'text-primary font-bold' 
                        : 'text-white/80 hover:text-primary font-medium'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center bg-white/10 rounded-lg px-3 py-2 border border-white/10 focus-within:border-primary/50 transition-all">
              <Search className="text-white/40 w-4 h-4 mr-2" />
              <input 
                type="text" 
                placeholder="Buscar peças..." 
                className="bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-white/30 w-32 md:w-48"
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-slate-900 lg:hidden flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/5">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                  <Settings className="text-primary w-8 h-8" />
                  <div className="flex flex-col text-left">
                    <h2 className="text-white text-lg font-bold leading-tight uppercase font-display">Kleber</h2>
                    <span className="text-primary text-[8px] font-medium tracking-widest uppercase">Peças e Ferramentas</span>
                  </div>
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center p-8 gap-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      className={`text-3xl font-bold transition-all font-display flex items-center gap-4 ${
                        location.pathname === item.path ? 'text-primary' : 'text-white hover:text-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {location.pathname === item.path && (
                        <motion.div 
                          layoutId="mobile-nav-indicator"
                          className="w-1.5 h-8 bg-primary rounded-full"
                        />
                      )}
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-8 border-t border-white/5 bg-white/5">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 text-slate-400">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+551641411420" className="text-sm">(16) 4141-1420</a>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                    <a href="https://wa.me/5516974014990" className="text-sm">(16) 97401-4990</a>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href="https://www.instagram.com/kleberpecaseferramentasauto/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <Settings className="text-primary w-10 h-10" />
                <div className="flex flex-col">
                  <h2 className="text-white text-xl font-bold leading-tight uppercase font-display">Kleber</h2>
                  <span className="text-primary text-[10px] font-medium tracking-widest uppercase">Peças e Ferramentas</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Desde 2016 entregando excelência em componentes para ar-condicionado automotivo. Sua oficina merece o melhor em ferramentas e reposição.
              </p>
            </div>

            <div>
              <h5 className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-8">Links Rápidos</h5>
              <ul className="flex flex-col gap-4 text-sm text-slate-400">
                <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li><Link to="/categorias" className="hover:text-primary transition-colors">Nossos Produtos</Link></li>
                <li><Link to="/galeria" className="hover:text-primary transition-colors">Galeria de Serviços</Link></li>
                <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre a Empresa</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-8">Contato</h5>
              <ul className="flex flex-col gap-6 text-sm text-slate-400">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:+551641411420" className="hover:text-primary transition-colors">(16) 4141-1420</a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <a href="https://wa.me/5516974014990" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(16) 97401-4990</a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Holanda+67+Vila+Mariana+Ribeirão+Preto+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Rua Holanda 67, Vila Mariana<br />Ribeirão Preto, SP
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-8">Redes Sociais</h5>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/kleberpecaseferramentasauto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium">
            <p>© 2024 Kleber Peças e Ferramentas. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5516974014990"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center hover:brightness-110 transition-all"
      >
        <MessageSquare className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}
