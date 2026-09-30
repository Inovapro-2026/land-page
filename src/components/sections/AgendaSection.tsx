import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { agendaEvents } from '../../data/mockData';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  Bell,
  ListTodo,
  UserCheck,
  ArrowRight
} from 'lucide-react';

interface AgendaSectionProps {
  onNavigate: (route: string) => void;
}

export const AgendaSection: React.FC<AgendaSectionProps> = ({ onNavigate }) => {
  const [selectedTab, setSelectedTab] = useState<'timeline' | 'lembretes'>('timeline');

  const reminders = [
    { id: 'rem-1', title: 'Enviar link de pagamento — Apex Logística', priority: 'Alta', time: '11:45' },
    { id: 'rem-2', title: 'Verificar resposta do Grupo Delta no WhatsApp', priority: 'Média', time: '15:00' },
    { id: 'rem-3', title: 'Revisar relatório de disparos de e-mail', priority: 'Normal', time: '17:15' },
  ];

  return (
    <section id="agenda" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            kicker="Gestão do Tempo"
            title="Seu tempo também precisa de organização."
            subtitle="Organize compromissos, eventos, lembretes e tarefas sem depender de várias ferramentas."
          />
        </ScrollReveal>

        {/* 4 Feature indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <ScrollReveal direction="left" delay={0} className="h-full">
            <div className="h-full p-4 rounded-xl glass-panel border border-slate-800/80 premium-card-hover">
              <span className="text-[11px] font-mono text-cyan-400 block mb-1">Status do Dia</span>
              <div className="text-sm sm:text-base font-bold text-white">Hoje</div>
              <div className="text-xs text-slate-400 mt-0.5">5 compromissos agendados</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={70} className="h-full">
            <div className="h-full p-4 rounded-xl glass-panel border border-cyan-500/30 bg-cyan-950/15 premium-card-hover">
              <span className="text-[11px] font-mono text-cyan-400 block mb-1">Foco Imediato</span>
              <div className="text-sm sm:text-base font-bold text-cyan-300">Próximo compromisso</div>
              <div className="text-xs text-slate-400 mt-0.5">11:30 · Follow-up de proposta</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={140} className="h-full">
            <div className="h-full p-4 rounded-xl glass-panel border border-slate-800/80 premium-card-hover">
              <span className="text-[11px] font-mono text-cyan-400 block mb-1">Produtividade</span>
              <div className="text-sm sm:text-base font-bold text-white">Lembretes</div>
              <div className="text-xs text-slate-400 mt-0.5">3 pendências priorizadas</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={210} className="h-full">
            <div className="h-full p-4 rounded-xl glass-panel border border-slate-800/80 premium-card-hover">
              <span className="text-[11px] font-mono text-cyan-400 block mb-1">Sincronização</span>
              <div className="text-sm sm:text-base font-bold text-white">Eventos & Reuniões</div>
              <div className="text-xs text-slate-400 mt-0.5">Integrado com CRM comercial</div>
            </div>
          </ScrollReveal>
        </div>

        {/* Main Interactive Agenda & Timeline Interface */}
        <ScrollReveal direction="scale" delay={120}>
          <div className="rounded-3xl glass-panel border border-cyan-500/25 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Calendar Mini-view & Quick Switch (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-[#070b16] border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Agenda Comercial</h3>
                  <span className="text-xs text-slate-400 font-mono">Quarta-feira, 29 Setembro</span>
                </div>
              </div>

              {/* View Selector */}
              <div className="flex gap-2 p-1 bg-slate-900/80 rounded-xl border border-slate-800 mb-6">
                <button
                  onClick={() => setSelectedTab('timeline')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    selectedTab === 'timeline'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline</span>
                </button>
                <button
                  onClick={() => setSelectedTab('lembretes')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    selectedTab === 'lembretes'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>Lembretes (3)</span>
                </button>
              </div>

              {/* Day Quick Summary */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                <div className="text-xs font-semibold text-slate-300">
                  Resumo Operacional de Hoje
                </div>
                <div className="text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between">
                    <span>1 Reunião realizada</span>
                    <span className="text-emerald-400 font-mono">09:00</span>
                  </div>
                  <div className="flex items-center justify-between text-cyan-300 font-medium">
                    <span>1 Follow-up em andamento</span>
                    <span className="font-mono">11:30</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>3 Atividades à tarde</span>
                    <span className="text-slate-500 font-mono">14:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/agenda')}
              className="mt-6 w-full py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center gap-2 transition-all"
            >
              <span>Abrir Agenda Completa</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Interactive Timeline Stream (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-[#090d1c]/80">
            {selectedTab === 'timeline' ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Linha do Tempo de Atividades
                  </h4>
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Tempo real
                  </span>
                </div>

                {/* Timeline items with luminous continuous path */}
                <div className="relative pl-6 space-y-5 before:content-[''] before:absolute before:left-2 before:top-3 before:bottom-3 before:w-[1.5px] before:bg-gradient-to-b before:from-emerald-400 via-cyan-400 to-slate-700">
                  {agendaEvents.map((evt) => {
                    const isCompleted = evt.status === 'concluido';
                    const isCurrent = evt.status === 'em_andamento';

                    return (
                      <div 
                        key={evt.id} 
                        className={`relative p-4 rounded-2xl border transition-all ${
                          isCurrent
                            ? 'bg-slate-900/90 border-cyan-400/60 shadow-[0_0_20px_rgba(56,189,248,0.15)] ring-1 ring-cyan-400/40'
                            : isCompleted
                            ? 'bg-slate-950/60 border-slate-800/80 opacity-75'
                            : 'bg-slate-950/40 border-slate-800/60 hover:border-slate-700'
                        }`}
                      >
                        {/* Node marker on the line */}
                        <div 
                          className={`absolute -left-[27px] top-5 w-3.5 h-3.5 rounded-full border-2 ${
                            isCompleted
                              ? 'bg-emerald-500 border-slate-950'
                              : isCurrent
                              ? 'bg-cyan-400 border-slate-950 ring-4 ring-cyan-400/30'
                              : 'bg-slate-800 border-slate-950'
                          }`} 
                        />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-cyan-300">
                              {evt.hora}
                            </span>
                            <span className="text-slate-600">·</span>
                            <span className="font-semibold text-sm text-white">
                              {evt.titulo}
                            </span>
                          </div>

                          <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded self-start sm:self-auto ${
                            isCompleted
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                              : isCurrent
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800 animate-pulse'
                              : 'bg-slate-900 text-slate-400 border border-slate-800'
                          }`}>
                            {isCompleted ? 'Concluído' : isCurrent ? 'Agora' : 'Previsto'}
                          </span>
                        </div>

                        <div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                          <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                          <span>{evt.participante}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white tracking-wide mb-3">
                  Tarefas & Lembretes Prioritários
                </h4>
                {reminders.map((rem) => (
                  <div key={rem.id} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-md border border-slate-700 flex items-center justify-center cursor-pointer hover:border-cyan-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 hover:text-cyan-400" />
                      </div>
                      <span className="text-xs font-medium text-slate-200">
                        {rem.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-cyan-400 font-mono">{rem.time}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-400 border border-slate-800">
                        {rem.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
