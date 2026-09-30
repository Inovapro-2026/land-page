import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { Building, Settings, BrainCircuit, Rocket, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (route: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Cadastre sua empresa',
      desc: 'Crie sua conta em segundos e acesse o centro unificado de operações da SAVYRON.',
      icon: Building,
    },
    {
      num: '02',
      title: 'Configure sua operação',
      desc: 'Conecte seus canais de WhatsApp e e-mail, importe contatos existentes ou inicie do zero.',
      icon: Settings,
    },
    {
      num: '03',
      title: 'Ensine sua IA',
      desc: 'Converse naturalmente com a IA em /settings/treinar-ia para que ela aprenda seus produtos e tom.',
      icon: BrainCircuit,
    },
    {
      num: '04',
      title: 'Comece a organizar e prospectar',
      desc: 'Execute varreduras web, agende campanhas, controle finanças e deixe a IA qualificar leads.',
      icon: Rocket,
    },
  ];

  return (
    <section id="como-funciona" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            kicker="Metodologia & Implantação"
            title="Quatro etapas simples para colocar a casa em ordem."
            subtitle="Sem processos de onboarding arrastados de semanas. Em poucos minutos sua empresa já possui inteligência e organização operando."
          />
        </ScrollReveal>

        {/* 4 Steps Path */}
        <div className="relative mt-12">
          {/* Luminous Connector Line behind steps (desktop horizontal) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-[2px] bg-gradient-to-r from-cyan-500/40 via-sky-400 to-blue-600/40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <ScrollReveal key={st.num} direction="up" delay={idx * 80} className="h-full">
                  <div
                    className="h-full p-6 rounded-3xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 bg-slate-950/80 shadow-xl flex flex-col justify-between group transition-all premium-card-hover"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display font-extrabold text-2xl text-cyan-400 font-mono">
                          {st.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-white mb-2">
                        {st.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] text-cyan-400/80 flex items-center gap-1">
                      <span>Etapa rápida e intuitiva</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal direction="up" delay={180}>
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/signup')}
              className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-all active:scale-95"
            >
              <span>Iniciar no Passo 01 Gratuitamente</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
