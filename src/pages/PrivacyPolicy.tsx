import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
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
            Política de <span className="text-primary">Privacidade</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Transparência e segurança no tratamento dos seus dados.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 prose prose-slate max-w-none"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 m-0">Compromisso com sua Privacidade</h2>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            Na <strong>Kleber Peças e Ferramentas</strong>, a privacidade e a segurança dos nossos clientes são prioridades fundamentais. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações que você nos fornece ao utilizar nosso site e nossos serviços.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">1. Coleta de Informações</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Coletamos informações que você nos fornece voluntariamente, tais como:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li>Nome e informações de contato (como e-mail e telefone) quando você entra em contato conosco via WhatsApp ou telefone.</li>
            <li>Informações sobre o seu veículo para fins de identificação da peça correta.</li>
            <li>Dados de navegação básicos coletados automaticamente para melhorar a experiência no site.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">2. Uso das Informações</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            As informações coletadas são utilizadas exclusivamente para:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li>Responder às suas solicitações de orçamento e dúvidas técnicas.</li>
            <li>Processar pedidos e garantir a entrega correta de produtos.</li>
            <li>Melhorar continuamente nossos serviços e a usabilidade do nosso site.</li>
            <li>Cumprir obrigações legais e fiscais.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">3. Proteção de Dados</h3>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6 flex gap-4 items-start">
            <Lock className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-slate-600 text-sm m-0">
              Implementamos medidas de segurança técnicas e administrativas para proteger seus dados contra acesso não autorizado, perda ou alteração. Seus dados são tratados com sigilo absoluto e não são vendidos a terceiros.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">4. Seus Direitos</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li>Confirmar a existência de tratamento de seus dados.</li>
            <li>Acessar seus dados pessoais.</li>
            <li>Corrigir dados incompletos ou inexatos.</li>
            <li>Solicitar a exclusão de seus dados de nossa base de contatos.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">5. Cookies</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Utilizamos cookies apenas para melhorar a funcionalidade do site e entender como os visitantes interagem com nossas páginas. Você pode desativar os cookies nas configurações do seu navegador a qualquer momento.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">6. Contato</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco através do e-mail: <span className="text-primary font-medium">contato@kleberpecas.com.br</span> ou pelo telefone <span className="text-primary font-medium">(16) 4141-1420</span>.
          </p>

          <div className="pt-10 border-t border-slate-100 text-slate-400 text-sm italic">
            Última atualização: 12 de Março de 2026.
          </div>
        </motion.div>
      </section>
    </div>
  );
}
