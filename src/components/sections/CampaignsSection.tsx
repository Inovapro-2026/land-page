import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { campaignSample } from '../../data/mockData';
import { 
  Send, 
  Mail, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  BarChart2
} from 'lucide-react';

interface CampaignsSectionProps {
  onNavigate: (route: string) => void;
}

export const CampaignsSection: React.FC<CampaignsSectionProps> = ({ onNavigate }) => {
  const [activeChannel, setActiveChannel] = useState<'todos' | 'whatsapp' | 'email'>('todos');

  return (
    <section id="campanhas" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Automação Multicanal"
          title="Crie uma campanha. Organize os leads. Acompanhe o resultado."
          subtitle="Distribua sua abordagem comercial em canais estruturados (WhatsApp e E-mail) com controle de cadência, evitando bloqueios e monitorando retorno em tempo real."
        />

        {/* Channel Selection Demonstration: WhatsApp & E-mail */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1.5 p-1 bg-slate-900 rounded-2xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveChannel('todos')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeChannel === 'todos'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Canais Integrados (WhatsApp & E-mail)
            </button>
            <button
              onClick={() => setActiveChannel('whatsapp')}
              className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                activeChannel === 'whatsapp'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => setActiveChannel('email')}
              className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                activeChannel === 'email'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>E-mail</span>
            </button>
          </div>
        </div>

        {/* Realistic Campaign Cockpit Card */}
        <div className="rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Campanha em Execução
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-400">Canal: WhatsApp & E-mail</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {campaignSample.nome}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Progresso do lote:</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-sm font-semibold">
                34% Concluído
              </span>
            </div>
          </div>

          {/* 4 Core Campaign Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Total de Leads</span>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">
                {campaignSample.totalLeads.toLocaleString('pt-BR')}
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Filtrados no SAVYRON
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Mensagens Processadas</span>
              <div className="text-2xl font-bold font-mono text-sky-400 tabular-nums">
                {campaignSample.processados}
              </div>
              <span className="text-[11px] text-sky-400/80 mt-1 block">
                Cadência controlada
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Respostas Recebidas</span>
              <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                {campaignSample.respostas}
              </div>
              <span className="text-[11px] text-emerald-400/80 mt-1 block">
                20.5% taxa de resposta
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-slate-950/80">
              <span className="text-xs text-slate-400 block mb-1">Interessados Qualificados</span>
              <div className="text-2xl font-bold font-mono text-cyan-300 tabular-nums">
                {campaignSample.interessados}
              </div>
              <span className="text-[11px] text-cyan-400 mt-1 block">
                No funil para negociação
              </span>
            </div>
          </div>

          {/* Progress bar and notice */}
          <div className="space-y-2 mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Ritmo de disparo seguro com intervalos randômicos</span>
              <span className="font-mono text-cyan-400">425 / 1.250 leads</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 w-[34%]" />
            </div>
          </div>

          {/* Channel distribution breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Disparo via WhatsApp</h4>
                  <span className="text-xs text-slate-400">Alta taxa de abertura instantânea</span>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-400">
                850 leads
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Disparo via E-mail</h4>
                  <span className="text-xs text-slate-400">Apresentações corporativas & propostas</span>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold text-sky-400">
                400 leads
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/campaigns')}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white border border-slate-700/80 hover:border-cyan-400/50 inline-flex items-center gap-2 transition-all shadow-md"
            >
              <span>Gerenciar Campanhas em /campaigns</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
