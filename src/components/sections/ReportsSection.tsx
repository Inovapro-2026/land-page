import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight,
  PieChart,
  Activity,
  Calendar
} from 'lucide-react';

interface ReportsSectionProps {
  onNavigate: (route: string) => void;
}

export const ReportsSection: React.FC<ReportsSectionProps> = ({ onNavigate }) => {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <section id="relatorios" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Métricas & Visão Executiva"
          title="Pare de trabalhar no escuro."
          subtitle="Taxa de resposta, interesse de compra, conversão e controle de opt-out em gráficos limpos e fáceis de interpretar, sem precisar de planilhas complexas."
        />

        {/* Realistic Reports Cockpit */}
        <div className="rounded-3xl glass-panel border border-cyan-500/25 shadow-2xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                Inteligência Analítica
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Relatório Operacional de Desempenho
              </h3>
            </div>

            {/* Time Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setPeriod('7d')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  period === '7d' 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                7 Dias
              </button>
              <button
                onClick={() => setPeriod('30d')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  period === '30d' 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                30 Dias
              </button>
              <button
                onClick={() => setPeriod('90d')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  period === '90d' 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Trimestre
              </button>
            </div>
          </div>

          {/* 4 Stat Boxes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Taxa de Resposta</span>
              <div className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                24.8%
              </div>
              <span className="text-[10px] text-cyan-300/80 mt-1 block">
                +4.2% vs. período anterior
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Índice de Interesse</span>
              <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                18.2%
              </div>
              <span className="text-[10px] text-emerald-400/80 mt-1 block">
                Identificado pela IA
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Conversão em Negócio</span>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">
                8.4%
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                Lead → Proposta Fechada
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Controle de Opt-Out</span>
              <div className="text-2xl font-bold font-mono text-slate-300 tabular-nums">
                0.8%
              </div>
              <span className="text-[10px] text-emerald-400 mt-1 block">
                Dentro do padrão seguro
              </span>
            </div>
          </div>

          {/* Graphical Representation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Chart Left (8 cols) */}
            <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-white">
                  Envios vs. Interessados Acumulados
                </h4>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Disparos
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Interessados
                  </span>
                </div>
              </div>

              {/* Bar/Line Graphic simulation */}
              <div className="h-48 w-full relative flex items-end justify-between pt-6 px-4">
                <div className="absolute inset-x-0 top-1/4 border-b border-slate-800/80 border-dashed" />
                <div className="absolute inset-x-0 top-2/4 border-b border-slate-800/80 border-dashed" />
                <div className="absolute inset-x-0 top-3/4 border-b border-slate-800/80 border-dashed" />

                {[
                  { dia: 'Seg', disparos: 55, interesse: 35 },
                  { dia: 'Ter', disparos: 75, interesse: 50 },
                  { dia: 'Qua', disparos: 90, interesse: 68 },
                  { dia: 'Qui', disparos: 82, interesse: 60 },
                  { dia: 'Sex', disparos: 98, interesse: 80 },
                  { dia: 'Sáb', disparos: 40, interesse: 28 },
                ].map((item) => (
                  <div key={item.dia} className="flex flex-col items-center gap-2 z-10">
                    <div className="flex items-end gap-1.5 h-36">
                      <div 
                        className="w-4 sm:w-6 bg-sky-500/80 rounded-t-md transition-all duration-300"
                        style={{ height: `${item.disparos}%` }} 
                      />
                      <div 
                        className="w-4 sm:w-6 bg-emerald-400 rounded-t-md transition-all duration-300"
                        style={{ height: `${item.interesse}%` }} 
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">{item.dia}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Breakdown Right (4 cols) */}
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">
                  Origem dos Melhores Retornos
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Prospecção Web Local</span>
                      <span className="font-mono text-cyan-400">46%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-cyan-400 w-[46%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Grupos do WhatsApp</span>
                      <span className="font-mono text-emerald-400">32%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-emerald-400 w-[32%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Indicação & Reativação</span>
                      <span className="font-mono text-indigo-400">22%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-indigo-400 w-[22%]" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/relatorios')}
                className="mt-6 w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white border border-slate-700/80 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Acessar Relatórios Detalhados</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
