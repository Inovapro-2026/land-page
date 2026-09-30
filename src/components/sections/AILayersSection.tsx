import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { 
  BookOpen, 
  Compass, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  User, 
  Bot, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export const AILayersSection: React.FC = () => {
  const steps = [
    { label: 'Você ensina', role: 'Você compartilha suas regras e documentos' },
    { label: 'IA entende', role: 'Interpretação semântica com precisão' },
    { label: 'IA organiza', role: 'Estruturação em memória e regras' },
    { label: 'IA aplica', role: 'Execução consistente nas mensagens' },
    { label: 'Cliente atendido', role: 'Atendimento humanizado e contextual' },
  ];

  const layers = [
    {
      title: 'Conhecimento',
      desc: 'Catálogo de serviços, tabelas de preço, manuais, garantias e documentação técnica da sua operação.',
      icon: BookOpen,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      bgColor: 'bg-cyan-950/20',
      direction: 'left' as const
    },
    {
      title: 'Contexto',
      desc: 'Definição do perfil do cliente, momento da abordagem, objetivo da conversa e tom de voz da marca.',
      icon: Compass,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-950/20',
      direction: 'center' as const
    },
    {
      title: 'Memória',
      desc: 'Histórico persistente entre atendimentos, preferências conhecidas do lead e regras consolidadas.',
      icon: Database,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      bgColor: 'bg-indigo-950/20',
      direction: 'right' as const
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-800/60 bg-[#060913]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            kicker="Arquitetura de Inteligência"
            title="A IA aprende sua empresa com transparência e controle."
            subtitle="A IA não precisa adivinhar o que você faz. Você fornece o contexto, as regras e o conhecimento, e a plataforma cuida da orquestração técnica."
          />
        </ScrollReveal>

        {/* 5 Sequential Operational Flow Nodes */}
        <div className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {steps.map((step, idx) => (
              <ScrollReveal key={step.label} direction="up" delay={idx * 60} className="h-full">
                <div 
                  className="p-4 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between relative h-full premium-card-hover"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400">
                      0{idx + 1}
                    </span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="hidden md:block w-3.5 h-3.5 text-slate-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {step.label}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {step.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3 Core Structural Layers (Left, Center, Right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <ScrollReveal 
                key={layer.title} 
                direction={layer.direction} 
                delay={idx * 120} 
                className="h-full"
              >
                <div
                  className={`h-full p-6 sm:p-8 rounded-3xl glass-panel border ${layer.borderColor} ${layer.bgColor} shadow-xl flex flex-col justify-between premium-card-hover`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                      <Icon className={`w-6 h-6 ${layer.color}`} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                      Camada Operacional
                    </span>
                    <h3 className="text-xl font-bold font-display text-white mb-3">
                      {layer.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Configurado diretamente no painel</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
