import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';
import { CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';

export const PriceValueSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-800/60 bg-[#060814]/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="up" delay={0}>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
            Racional de Eficiência
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Quanto custa organizar sua operação?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Substitua o custo de assinar cinco ferramentas isoladas e o desgaste de perder dados entre planilhas por uma plataforma centralizada e inteligente.
          </p>
        </ScrollReveal>

        {/* 3 Pillars of Rational Value (Left, Center, Right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <ScrollReveal direction="left" delay={0} className="h-full">
            <div className="h-full p-6 rounded-3xl glass-panel border border-slate-800/80 bg-slate-950/60 flex flex-col justify-between premium-card-hover">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Menos ferramentas.
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Centralize CRM, prospecção web, disparo de campanhas, agenda e finanças sem pagar licenças fragmentadas.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="center" delay={140} className="h-full">
            <div className="h-full p-6 rounded-3xl glass-panel border border-slate-800/80 bg-slate-950/60 flex flex-col justify-between premium-card-hover">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Menos retrabalho.
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Elimine a cópia manual de contatos e a digitação repetida de relatórios. O lead prospectado já entra no funil.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={280} className="h-full">
            <div className="h-full p-6 rounded-3xl glass-panel border border-slate-800/80 bg-slate-950/60 flex flex-col justify-between premium-card-hover">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Mais controle.
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Saiba exatamente quem foi atendido, quanto tem a receber e como sua IA está conduzindo cada conversa comercial.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
