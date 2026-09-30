import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { financialMetrics, financialEntries } from '../../data/mockData';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  PieChart, 
  CheckCircle2, 
  Clock,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

interface FinanceSectionProps {
  onNavigate: (route: string) => void;
}

export const FinanceSection: React.FC<FinanceSectionProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'realizado' | 'planejado'>('todos');

  const filteredEntries = financialEntries.filter(entry => {
    if (activeFilter === 'todos') return true;
    return entry.status === activeFilter;
  });

  return (
    <section id="financeiro" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            kicker="Gestão Financeira"
            title="Entenda para onde seu dinheiro está indo."
            subtitle="Registre receitas e despesas, organize categorias e acompanhe o que já aconteceu e o que está planejado."
          />
        </ScrollReveal>

        {/* 3 Core Value Cards entering from sides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Card A: Entrou (Enters from Left) */}
          <ScrollReveal direction="left" delay={0} className="h-full">
            <div className="h-full p-6 rounded-2xl glass-panel border border-emerald-500/20 shadow-lg relative overflow-hidden group hover:border-emerald-500/40 transition-all premium-card-hover">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Recebimentos
                </span>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Você sabe quanto entrou.
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Discriminação de cada contrato, serviço e venda com data exata e status de liquidação.
              </p>
            </div>
          </ScrollReveal>

          {/* Card B: Saiu (Enters from Center / Up) */}
          <ScrollReveal direction="up" delay={120} className="h-full">
            <div className="h-full p-6 rounded-2xl glass-panel border border-rose-500/20 shadow-lg relative overflow-hidden group hover:border-rose-500/40 transition-all premium-card-hover">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400">
                  Despesas
                </span>
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
                  <TrendingDown className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Você sabe quanto saiu.
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custos operacionais categorizados para identificar desperdícios e preservar margem de lucro.
              </p>
            </div>
          </ScrollReveal>

          {/* Card C: Planejado (Enters from Right) */}
          <ScrollReveal direction="right" delay={240} className="h-full">
            <div className="h-full p-6 rounded-2xl glass-panel border border-cyan-500/20 shadow-lg relative overflow-hidden group hover:border-cyan-500/40 transition-all premium-card-hover">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Previsibilidade
                </span>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Você sabe o que está planejado.
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Projeção de fluxo de caixa futuro considerando renovações e contas a vencer.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Realistic Financial Cockpit Interface Demo */}
        <ScrollReveal direction="scale" delay={150}>
          <div className="rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="p-5 sm:p-6 bg-[#080c18] border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Módulo Financeiro · SAVYRON
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                  Dados Demonstrativos
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-white mt-1">
                Painel Consolidado de Fluxo de Caixa
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setActiveFilter('todos')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === 'todos'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveFilter('realizado')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === 'realizado'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Realizado
              </button>
              <button
                onClick={() => setActiveFilter('planejado')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === 'planejado'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Planejado
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* 3 Main Metric Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-emerald-500/20">
                <span className="text-xs text-slate-400 block mb-1">Receitas Realizadas</span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                  R$ {financialMetrics.receitas.toLocaleString('pt-BR')}
                </div>
                <div className="text-[11px] text-emerald-400/80 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Entrada confirmada no período</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-rose-500/20">
                <span className="text-xs text-slate-400 block mb-1">Despesas Realizadas</span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-rose-400 tabular-nums">
                  R$ {financialMetrics.despesas.toLocaleString('pt-BR')}
                </div>
                <div className="text-[11px] text-rose-400/80 mt-2 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Custos e tributos quitados</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-slate-900/70">
                <span className="text-xs text-slate-400 block mb-1">Saldo Atual em Caixa</span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-300 tabular-nums">
                  R$ {financialMetrics.saldo.toLocaleString('pt-BR')}
                </div>
                <div className="text-[11px] text-cyan-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Projeção prevista: R$ {financialMetrics.projecaoSaldo.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>

            {/* Projection Chart & Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Animated SVG Chart Column (7 cols) */}
              <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Curva de Projeção vs. Realizado
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      Comparativo de evolução semanal
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" /> Realizado
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" /> Projeção
                    </span>
                  </div>
                </div>

                {/* SVG Visual Graph */}
                <div className="h-44 w-full relative flex items-end justify-between pt-6 px-2">
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-x-0 top-1/4 border-b border-slate-800/80 border-dashed" />
                  <div className="absolute inset-x-0 top-2/4 border-b border-slate-800/80 border-dashed" />
                  <div className="absolute inset-x-0 top-3/4 border-b border-slate-800/80 border-dashed" />

                  {/* Bars representation */}
                  <div className="flex-1 flex flex-col items-center gap-2 z-10">
                    <div className="w-8 sm:w-12 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md h-[40%] transition-all hover:opacity-90" />
                    <span className="text-[10px] text-slate-400 font-mono">Sem 1</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2 z-10">
                    <div className="w-8 sm:w-12 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md h-[65%] transition-all hover:opacity-90" />
                    <span className="text-[10px] text-slate-400 font-mono">Sem 2</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2 z-10">
                    <div className="w-8 sm:w-12 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md h-[85%] transition-all hover:opacity-90" />
                    <span className="text-[10px] text-slate-400 font-mono">Sem 3</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2 z-10">
                    <div className="w-8 sm:w-12 bg-gradient-to-t from-cyan-600/70 to-cyan-400/80 border border-cyan-400/50 border-dashed rounded-t-md h-[95%] transition-all hover:opacity-90" />
                    <span className="text-[10px] text-cyan-300 font-mono">Sem 4 (Proj.)</span>
                  </div>
                </div>
              </div>

              {/* Transactions Stream (5 cols) */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-white">
                      Lançamentos Recentes
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {filteredEntries.length} itens
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {filteredEntries.map((entry) => (
                      <div 
                        key={entry.id} 
                        className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs"
                      >
                        <div className="truncate mr-2">
                          <div className="font-medium text-slate-200 truncate">
                            {entry.descricao}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {entry.categoria} · {entry.data}
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className={`font-mono font-bold ${entry.tipo === 'receita' ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {entry.tipo === 'receita' ? '+' : '-'} R$ {entry.valor.toLocaleString('pt-BR')}
                          </div>
                          <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-mono ${
                            entry.status === 'realizado' 
                              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40' 
                              : 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                          }`}>
                            {entry.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('/financeiro')}
                  className="mt-4 w-full py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explorar Módulo Financeiro Completo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
