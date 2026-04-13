import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  ArrowRight,
  Instagram,
  MapPin,
  X,
  ChevronRight
} from 'lucide-react';

// --- Constants & Data ---
const EXPERT = {
  name: "Dr. Will Ferreira",
  title: "Especialista em Lentes em Resina e Porcelana",
  city: "Osasco - São Paulo",
  whatsapp: "https://api.whatsapp.com/send/?phone=5511983393054&text&type=phone_number&app_absent=0&utm_source=ig",
  instagram: "https://www.instagram.com/dr.wiill/",
  heroImage: "https://i.imgur.com/3xgekcs.png",
  expertPhoto: "https://i.imgur.com/0vDEf3d.jpeg",
  results: [
    "https://i.imgur.com/ru7RurN.jpeg",
    "https://i.imgur.com/3u5G0y4.jpeg",
    "https://i.imgur.com/3JwMzKa.jpeg",
    "https://i.imgur.com/9PsglW9.jpeg"
  ]
};

const TRUST_CARDS = [
  {
    title: "Avaliação Honesta",
    description: "Diagnóstico preciso focado no que você realmente precisa para um sorriso perfeito.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Atendimento Direto",
    description: "Sem burocracia. Conversa clara e humanizada do início ao fim do seu tratamento.",
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    title: "Foco no Resultado",
    description: "Excelência estética com materiais de alta performance (Resina e Porcelana).",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos para garantir segurança e durabilidade no seu sorriso.",
    icon: <Star className="w-6 h-6" />
  }
];

const STEPS = [
  {
    number: "01",
    title: "WhatsApp",
    description: "Clique no botão e fale diretamente com minha equipe para tirar dúvidas."
  },
  {
    number: "02",
    title: "Agendamento",
    description: "Escolha o melhor dia e horário para sua primeira consulta gratuita."
  },
  {
    number: "03",
    title: "Avaliação",
    description: "Vire ao consultório para uma análise detalhada e personalizada do seu caso."
  }
];

// --- Components ---

const WhatsAppButton = ({ className = "", children }: { className?: string, children: ReactNode }) => (
  <motion.a
    href={EXPERT.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-green-500/20 transition-all ${className}`}
  >
    <MessageCircle className="w-6 h-6 fill-current" />
    {children}
  </motion.a>
);

const SectionTitle = ({ children, subtitle }: { children: ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center px-4">
    {subtitle && (
      <span className="text-premium-accent uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl text-premium-ink leading-tight">
      {children}
    </h2>
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-premium-accent selection:text-white">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Resultado"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-premium-ink">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT.heroImage} 
            alt={EXPERT.name}
            className="w-full h-full object-cover object-top opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-ink via-premium-ink/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-premium-accent uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
              {EXPERT.city}
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[0.9] font-serif">
              Eu sou <span className="text-premium-accent italic">{EXPERT.name}</span>, especialista em sorrisos.
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
              Transformo vidas através da estética dental avançada. Recupere sua autoestima com um sorriso natural e marcante.
            </p>
            
            <div className="flex flex-col gap-4">
              <WhatsAppButton>
                Agendar primeira consulta gratuita
              </WhatsAppButton>
              <p className="text-white/50 text-sm text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-premium-accent" />
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-premium-accent/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
              <img 
                src={EXPERT.expertPhoto} 
                alt="Dr. Will Ferreira"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-premium-accent uppercase tracking-widest text-xs font-bold mb-4 block">Autoridade Pessoal</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Mais que um dentista, um arquiteto de <span className="italic">autoestima</span>.
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Olá, eu sou o Dr. Will Ferreira. Minha missão é entregar não apenas dentes brancos, mas harmonia facial e confiança.
                </p>
                <p>
                  Acredito que cada sorriso é único. Por isso, meu trabalho é focado na personalização extrema, utilizando as melhores técnicas em resina e porcelana do mercado.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Especialista em Lentes de Contato Dental",
                    "Foco em Naturalidade e Durabilidade",
                    "Atendimento Personalizado em Osasco",
                    "Mais de 500 sorrisos transformados"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-premium-ink font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-premium-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 bg-premium-bg">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionTitle subtitle="Transformações">Resultados Reais</SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EXPERT.results.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-premium-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur p-3 rounded-full">
                    <Sparkles className="w-6 h-6 text-premium-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-400 text-sm italic">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionTitle subtitle="Diferenciais">Por que confiar em mim?</SectionTitle>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 hover:border-premium-accent/30 hover:shadow-xl hover:shadow-premium-accent/5 transition-all group bg-premium-bg/30"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-premium-accent mb-6 shadow-sm group-hover:bg-premium-accent group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-premium-ink text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-premium-accent/10 blur-[100px] rounded-full -mr-32 -mt-32" />
        <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl mb-6 leading-tight">
            Sua jornada para o sorriso dos sonhos começa com uma <span className="text-premium-accent italic">conversa gratuita</span>.
          </h2>
          <p className="text-white/60 mb-10 text-lg font-light">
            Sem letras miúdas. Uma avaliação honesta para entender como posso te ajudar.
          </p>
          <WhatsAppButton className="mx-auto inline-flex">
            Quero minha consulta gratuita
          </WhatsAppButton>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle subtitle="O Processo">Como funciona a primeira consulta</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gray-100 -z-10" />
            
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-premium-bg border-4 border-white shadow-lg flex items-center justify-center mx-auto mb-6 text-premium-accent font-serif text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-2xl bg-premium-accent/5 border border-premium-accent/10 text-center">
            <p className="text-premium-ink font-medium flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-premium-accent" />
              Reforçamos: Primeira consulta gratuita e sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 bg-premium-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-8 leading-[1.1]">
              Não deixe seu novo sorriso para <span className="italic">amanhã</span>.
            </h2>
            <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto font-light">
              O Dr. Will Ferreira está pronto para transformar sua estética dental com o que há de mais moderno em Osasco.
            </p>
            <WhatsAppButton className="mx-auto inline-flex text-lg px-12 py-5">
              Agendar agora via WhatsApp
            </WhatsAppButton>
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm">Vagas limitadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm">Avaliação VIP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif mb-1">{EXPERT.name}</h3>
              <p className="text-gray-400 text-sm tracking-widest uppercase">{EXPERT.title}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-xs mt-2">
                <MapPin className="w-3 h-3" />
                {EXPERT.city}
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href={EXPERT.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-premium-bg flex items-center justify-center text-premium-ink hover:bg-premium-accent hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={EXPERT.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-premium-bg flex items-center justify-center text-premium-ink hover:bg-premium-accent hover:text-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-50 text-center text-gray-300 text-[10px] uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating Sticky CTA for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <a
          href={EXPERT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/40 animate-bounce"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </motion.div>
    </div>
  );
}
