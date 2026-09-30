import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  DollarSign, 
  Clock, 
  Users, 
  Compass, 
  MessageSquare, 
  Sparkles, 
  Send, 
  BarChart3,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface EverythingConnectedProps {
  onNavigate: (route: string) => void;
}

export const EverythingConnectedSection: React.FC<EverythingConnectedProps> = ({ onNavigate }) => {
  const modules = [
    { title: 'Financeiro', desc: 'Receitas, despesas e fluxo de caixa', icon: DollarSign, color: 'text-emerald-400' },
    { title: 'Agenda', desc: 'Reuniões, eventos e tarefas do dia', icon: Clock, color: 'text-blue-400' },
    { title: 'CRM', desc: 'Funil e histórico unificado por cliente', icon: Users, color: 'text-cyan-400' },
    { title: 'Prospecção', desc: 'Busca ativa de empresas na web', icon: Compass, color: 'text-sky-400' },
    { title: 'Campanhas', desc: 'Disparos no WhatsApp e E-mail', icon: Send, color: 'text-teal-400' },
    { title: 'Inbox', desc: 'Mensagens com IA e handoff humano', icon: MessageSquare, color: 'text-indigo-400' },
    { title: 'Treinamento IA', desc: 'Memória persistente da sua marca', icon: Sparkles, color: 'text-cyan-300' },
    { title: 'Relatórios', desc: 'Taxas de conversão e métricas reais', icon: BarChart3, color: 'text-violet-400' },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-t border-slate-800/60 bg-[#05070e]">
      {/* Central Super Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[500px] bg-gradient-to-tr from-cyan-500/12 via-blue-600/10 to-indigo-600/6 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionHeading
          kicker="Ecossistema Unificado"
          title="Tudo conectado no SAVYRON."
          subtitle="Um sistema. Uma operação. Mais controle."
        />

        {/* Dynamic Convergence Visualization */}
        <div className="relative max-w-4xl mx-auto mt-12 p-8 sm:p-12 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl">
          {/* Central Logo Core */}
          <div className="mb-10 inline-flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-cyan-400/20 blur-xl animate-pulse" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-600 flex items-center justify-center shadow-2xl">
                <span className="font-display font-extrabold text-2xl text-slate-950">S</span>
              </div>
            </div>
            <h3 className="mt-4 font-display font-bold text-2xl text-white">
              SAVYRON
            </h3>
            <p className="text-xs text-cyan-300 font-mono mt-1">
              O centro nervoso da sua operação comercial
            </p>
          </div>

          {/* Module Nodes Grid converging towards center */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <Icon className={`w-4 h-4 ${mod.color}`} />
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {mod.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Sincronização instantânea entre módulos sem delay
            </span>
            <button
              onClick={() => onNavigate('/signup')}
              className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <span>Experimentar SAVYRON</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
