import React, { useState } from 'react';
import { 
  History, 
  Target, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageSquare,
  Clock,
  Send
} from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAx1gAYQxzS402H6RVQgw6OTbESgmNu7hVemNk0YxJy7b9k9Gy1g52icDRPSNUwql9FlL8SPVTJqVY3Sch_PxQvWDdr8rqU1pLXhudlvk0ooTV7VuTnqHQOVc-ctjPQ0eINQiD6Yx-KCCmZqxmYBYtsHQNh0uO8GW0U6Y_ldnHMnEC38XkP-fLdAnoZsS1oDoAvEJTsqpIcOyDbzJd-bjAmkqY-5N9bhnU54pPRTjU-tIsuUHV1lkbpifbiVKVlvwyI354nyre0ZjoD")` 
          }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6 font-display"
          >
            Sobre <span className="text-primary">Nós</span>
          </motion.h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] mb-4">Nossa História</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-display leading-tight">
              Excelência em Climatização Automotiva desde 2016
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                A Kleber Peças e Ferramentas nasceu da necessidade de oferecer ao mercado de Ribeirão Preto e região um atendimento técnico e especializado em sistemas de ar-condicionado automotivo.
              </p>
              <p>
                Ao longo dos anos, expandimos nosso portfólio para incluir ferramentas profissionais de alta precisão e componentes de arrefecimento, tornando-nos o parceiro estratégico das principais oficinas mecânicas da cidade.
              </p>
              <p>
                Nosso compromisso é com a procedência e a durabilidade de cada item que sai de nossa loja.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <History className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-900">8+ Anos</h4>
              <p className="text-slate-500 text-sm">De experiência no mercado regional</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-900">1000+</h4>
              <p className="text-slate-500 text-sm">Oficinas parceiras atendidas</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-900">Qualidade</h4>
              <p className="text-slate-500 text-sm">Peças originais e certificadas</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-900">Pronta Entrega</h4>
              <p className="text-slate-500 text-sm">Vasto estoque para retirada imediata</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-slate-50 px-4 md:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] mb-4">Dúvidas?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Envie sua Mensagem</h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Mensagem</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-primary text-slate-900 hover:bg-primary-dark shadow-xl shadow-primary/20'
                }`}
              >
                {status === 'sending' ? (
                  <div className="w-6 h-6 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    Enviado com Sucesso!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* For Workshops Section */}
      <section className="bg-slate-900 py-24 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] mb-4">Para Oficinas</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white font-display">O Suporte que seu Negócio Precisa</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Suporte Técnico",
                desc: "Nossa equipe não apenas vende, mas entende do sistema. Auxiliamos na identificação da peça correta."
              },
              {
                title: "Estoque Amplo",
                desc: "Evite deixar o carro do seu cliente parado. Temos a maior variedade de compressores e filtros da região."
              },
              {
                title: "Preços Competitivos",
                desc: "Condições especiais para profissionais da área e faturamento para empresas parceiras."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-slate-900 mb-6 font-bold text-xl">
                  0{i + 1}
                </div>
                <h4 className="text-white text-2xl font-bold mb-4 font-display">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white px-4 md:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Perguntas Frequentes</h3>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Quais são os sinais de que o compressor do ar-condicionado está falhando?",
                a: "Os sinais mais comuns incluem ruídos estranhos ao ligar o ar, o sistema não esfriar adequadamente, cheiro de queimado vindo das saídas de ar ou vazamentos visíveis de óleo ao redor do compressor."
              },
              {
                q: "Com que frequência devo trocar o filtro secador?",
                a: "Recomendamos a troca do filtro secador sempre que o sistema for aberto para manutenção ou a cada 2 anos, pois ele acumula umidade e impurezas que podem danificar o compressor."
              },
              {
                q: "Vocês entregam peças e ferramentas para outras cidades?",
                a: "Sim! Atendemos Ribeirão Preto e região com entrega própria e enviamos para todo o Brasil através de transportadoras parceiras ou Correios."
              },
              {
                q: "As peças vendidas pela Kleber têm garantia?",
                a: "Sim, todas as nossas peças possuem garantia contra defeitos de fabricação, seguindo os prazos estabelecidos pelos fabricantes (geralmente de 3 a 6 meses)."
              },
              {
                q: "Como saber se a peça é compatível com o meu veículo?",
                a: "Nossa equipe técnica utiliza softwares avançados de catálogo. Basta nos informar o modelo, ano e, preferencialmente, o número do chassi para garantirmos a compatibilidade exata."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900 hover:bg-slate-100 transition-colors">
                  {item.q}
                  <span className="text-primary transition-transform group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-200/50">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contato" className="py-24 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] mb-4">Entre em Contato</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-display">Estamos prontos para atender você</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shrink-0 border border-slate-100">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-1">Endereço</h5>
                  <p className="text-slate-500">Rua Holanda 67, Vila Mariana<br />Ribeirão Preto - SP, 14075-340</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shrink-0 border border-slate-100">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-1">Telefones</h5>
                  <p className="text-slate-500">(16) 4141-1420 (Fixo)</p>
                  <p className="text-slate-500">(16) 97401-4990 (WhatsApp)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shrink-0 border border-slate-100">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-1">Horário de Funcionamento</h5>
                  <p className="text-slate-500">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-slate-500">Sábado: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/5516974014990"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:brightness-110 transition-all shadow-lg shadow-green-500/20"
              >
                <MessageSquare className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Rua+Holanda+67+Vila+Mariana+Ribeirão+Preto+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all"
              >
                <MapPin className="w-5 h-5" />
                Ver no Mapa
              </a>
            </div>
          </div>
          
          <div className="h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt9SUDpjbviq_43Trtyd68ARK8MguVpiCFckxWxCSwW2QAkFym2ZUUyAXVi6uckgBaaGf0xvS-1sATg0RVIk5n1R90eL6MUPX943UImG4rQ7e_A8EgjjHDpZL1QUftSVvMHbudL5yxFZyJCwF967hRnlo48tZ_RZJVy0fW890ngICgwwbZpj8hIhqJFsHVdhSbovDvbTtb03R4V6fyZdgdMBXqTgkVfdsoSVO9lPFNiMGuba5Nf_ohNTISjbamNPcW58kY8z0O-zkk" 
              alt="Localização Kleber Peças" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
