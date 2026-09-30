import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  Bot, 
  Send, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (route: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'geral' | 'financeiro' | 'crm'>('geral');

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow and subtle orbital lines */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Intro Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-medium text-cyan-200">
              Plataforma Unificada de Inteligência Comercial
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Versão 2026</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
            Seu negócio pode trabalhar muito mais{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              organizado.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Prospecte clientes, organize suas finanças, controle sua agenda, acompanhe seus clientes e ensine uma IA a trabalhar do jeito da sua empresa.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/signup')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <span>Começar agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#operacao"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/40 backdrop-blur-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Ver como funciona</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Sem cartão de crédito inicial
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Ambiente operacional isolado
            </span>
          </div>
        </div>

        {/* Central Dashboard & Floating Satellites Stage */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          {/* Subtle Ambient Backing Glow behind the central frame */}
          <div className="absolute inset-4 -bottom-6 bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl -z-10 rounded-3xl" />

          {/* Floating Live Indicator Cards Around Dashboard (Responsive layout) */}
          <div className="hidden lg:block">
            {/* Card Left 1: +127 novos leads */}
            <div className="absolute -left-12 top-10 z-20 animate-bounce [animation-duration:6s] p-3 rounded-xl glass-panel border border-cyan-500/30 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tabular-nums">+127 novos leads</div>
                <div className="text-[10px] text-slate-400">Prospecção web ativa</div>
              </div>
            </div>

            {/* Card Left 2: R$ 8.450 em receitas */}
            <div className="absolute -left-16 bottom-20 z-20 animate-bounce [animation-duration:7s] [animation-delay:1s] p-3 rounded-xl glass-panel border border-emerald-500/30 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-300 tabular-nums">R$ 8.450 em receitas</div>
                <div className="text-[10px] text-slate-400">Registrado hoje</div>
              </div>
            </div>

            {/* Card Left 3: 3 tarefas para hoje */}
            <div className="absolute -left-6 top-1/2 z-20 animate-bounce [animation-duration:5.5s] [animation-delay:2s] p-2.5 rounded-xl glass-panel-subtle border border-blue-500/20 shadow-lg flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-medium text-slate-200">3 tarefas para hoje</span>
            </div>

            {/* Card Right 1: IA treinada ✓ */}
            <div className="absolute -right-12 top-8 z-20 animate-bounce [animation-duration:6.5s] [animation-delay:1.5s] p-3 rounded-xl glass-panel border border-cyan-400/40 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-300">IA treinada ✓</div>
                <div className="text-[10px] text-slate-400">Memória da sua empresa</div>
              </div>
            </div>

            {/* Card Right 2: 12 clientes em atendimento */}
            <div className="absolute -right-14 top-1/2 z-20 animate-bounce [animation-duration:7.2s] [animation-delay:0.5s] p-3 rounded-xl glass-panel border border-indigo-500/30 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-100 tabular-nums">12 em atendimento</div>
                <div className="text-[10px] text-slate-400">Inbox com IA & Humano</div>
              </div>
            </div>

            {/* Card Right 3: Campanha ativa & Follow-up */}
            <div className="absolute -right-8 bottom-16 z-20 animate-bounce [animation-duration:5.8s] [animation-delay:2.5s] p-3 rounded-xl glass-panel-subtle border border-sky-500/30 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-200">Campanha ativa</div>
                <div className="text-[10px] text-cyan-400">Follow-up automático</div>
              </div>
            </div>
          </div>

          {/* Central Main Dashboard Window */}
          <div className="relative rounded-2xl border border-cyan-500/30 bg-[#090d1a]/90 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Window Header Bar */}
            <div className="px-4 sm:px-6 py-3.5 border-b border-slate-800/80 bg-[#070b16] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block" />
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-slate-400 pl-2">
                  app.savyron.com · centro-operacional
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab('geral')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    activeTab === 'geral' 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Visão Geral
                </button>
                <button
                  onClick={() => setActiveTab('financeiro')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    activeTab === 'financeiro' 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Financeiro
                </button>
                <button
                  onClick={() => setActiveTab('crm')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    activeTab === 'crm' 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  CRM & IA
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Stat Summary Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center justify-between">
                    <span>Receitas do Mês</span>
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-base sm:text-xl font-bold font-mono text-white tabular-nums">
                    R$ 18.420
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Realizado</span>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center justify-between">
                    <span>Leads Qualificados</span>
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-base sm:text-xl font-bold font-mono text-white tabular-nums">
                    127
                  </div>
                  <div className="text-[10px] text-cyan-400 mt-1">
                    Via Web & Grupos
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center justify-between">
                    <span>Conversas Ativas</span>
                    <Bot className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div className="text-base sm:text-xl font-bold font-mono text-white tabular-nums">
                    12
                  </div>
                  <div className="text-[10px] text-indigo-300 mt-1">
                    IA operando com contexto
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center justify-between">
                    <span>Próximo Compromisso</span>
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-base sm:text-xl font-bold font-mono text-white tabular-nums">
                    11:30
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 truncate">
                    Follow-up comercial
                  </div>
                </div>
              </div>

              {/* Main Content Pane depending on tab */}
              {activeTab === 'geral' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Pipeline View (8 cols) */}
                  <div className="md:col-span-8 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-200">
                        Fluxo Comercial em Tempo Real
                      </span>
                      <span className="text-[11px] text-cyan-400 font-mono">
                        Atividade contínua
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="font-medium text-slate-200">Apex Distribuidora Logística</span>
                          <span className="hidden sm:inline text-slate-400">·</span>
                          <span className="hidden sm:inline text-slate-400">R$ 4.500 previsto</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                          Negociação
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          <span className="font-medium text-slate-200">Kronos Automação</span>
                          <span className="hidden sm:inline text-slate-400">·</span>
                          <span className="hidden sm:inline text-slate-400">IA respondeu dúvida de preço</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-950 text-blue-300 border border-blue-800/50">
                          Interessado
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-sky-400" />
                          <span className="font-medium text-slate-200">Grupo Delta</span>
                          <span className="hidden sm:inline text-slate-400">·</span>
                          <span className="hidden sm:inline text-slate-400">Lead extraído de grupo</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-950 text-indigo-300 border border-indigo-800/50">
                          Enriquecido
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AI Status Mini Panel (4 cols) */}
                  <div className="md:col-span-4 p-4 rounded-xl bg-gradient-to-b from-cyan-950/20 to-slate-900/60 border border-cyan-500/20 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Treinamento da IA</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Regras de tom, política de preço e produtos internalizados via chat do proprietário.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 mt-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span>Memória Operacional</span>
                        <span className="text-cyan-400 font-mono">Ativa</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-[88%]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'financeiro' && (
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Demonstrativo Financeiro do Mês</span>
                    <span className="text-emerald-400 font-mono">Saldo: R$ 11.080</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-2">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Realizado</span>
                      <span className="text-white font-bold font-mono">R$ 18.420</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Despesas</span>
                      <span className="text-rose-400 font-bold font-mono">R$ 7.340</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Projeção Líquida</span>
                      <span className="text-cyan-400 font-bold font-mono">R$ 15.600</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'crm' && (
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Atendimento Inteligente & CRM</span>
                    <span className="text-cyan-400 text-[11px]">Handoff Humano Disponível</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-200">Rodrigo Medeiros (Apex)</div>
                      <div className="text-slate-400 text-[11px]">"Podemos fechar o plano anual com 2 usuários?"</div>
                    </div>
                    <span className="text-cyan-300 font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                      Alta Intenção
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
