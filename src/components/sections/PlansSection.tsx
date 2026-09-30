import React, { useState } from 'react';
import { plansData } from '../../data/mockData';
import { ScrollReveal } from '../common/ScrollReveal';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  CreditCard,
  Users,
  Send
} from 'lucide-react';

interface PlansSectionProps {
  onNavigate: (route: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onNavigate }) => {
  const [comparisonOpen, setComparisonOpen] = useState(false);

  const flowSteps = [
    'organizar',
    'prospectar',
    'atender',
    'vender',
    'controlar o dinheiro',
    'organizar o tempo',
    'ensinar a IA',
    'escalar'
  ];

  return (
    <section 
      id="planos" 
      className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60 bg-[#05070e]"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[550px] bg-cyan-600/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Narrative Transition Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-14 text-center max-w-3xl mx-auto">
            {/* Narrative Step Flow */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 text-[11px] sm:text-xs font-mono text-cyan-300">
              {flowSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800/80 text-slate-300">
                    {step}
                  </span>
                  {idx < flowSteps.length - 1 && (
                    <span className="text-cyan-500/70">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 font-mono">
                Nível Operacional
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Agora que você entendeu tudo que pode fazer dentro da SAVYRON, escolha o nível de operação adequado para o seu negócio.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
              Sem contratos de fidelidade. Todos os planos contam com acesso imediato e cancelamento simplificado a qualquer momento.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pricing Cards with Convergence Animations (Left, Center, Right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-14">
          {/* Card 1: Starter (Enters from Left) */}
          <ScrollReveal direction="left" delay={0} className="h-full">
            <div className="group h-full relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between glass-panel border-slate-800/80 bg-slate-950/80 shadow-lg premium-card-hover">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {plansData[0].name}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 min-h-[44px] leading-relaxed mb-6">
                  {plansData[0].positioning}
                </p>

                <div className="pb-6 mb-6 border-b border-slate-800/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-slate-400 font-mono">R$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                      {plansData[0].price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/mês</span>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>{plansData[0].condition}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border mb-6 space-y-2.5 text-xs bg-slate-900/60 border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      Limite de leads:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[0].limits.leadsMonth}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-sky-400" />
                      Campanhas:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[0].limits.campaigns}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-indigo-400" />
                      Equipe:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[0].limits.users}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                    Recursos inclusos no plano:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plansData[0].features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate(`/signup?plano=${plansData[0].id}`)}
                  className="card-cta-btn w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] bg-slate-900 group-hover:bg-slate-800 text-white border border-slate-700 group-hover:border-slate-600"
                >
                  <span>{plansData[0].ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Profissional (Enters from Center with prominence) */}
          <ScrollReveal direction="center" delay={140} className="h-full">
            <div className="group h-full relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between glass-panel border-cyan-400/60 shadow-[0_0_40px_rgba(56,189,248,0.22)] hover:shadow-[0_0_55px_rgba(56,189,248,0.35)] bg-[#080e22]/95 ring-1 ring-cyan-400/30 premium-card-hover">
              {plansData[1].badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)] whitespace-nowrap">
                  {plansData[1].badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white text-cyan-300">
                    {plansData[1].name}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 min-h-[44px] leading-relaxed mb-6">
                  {plansData[1].positioning}
                </p>

                <div className="pb-6 mb-6 border-b border-slate-800/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-slate-400 font-mono">R$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-300 tracking-tight tabular-nums">
                      {plansData[1].price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/mês</span>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>{plansData[1].condition}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border mb-6 space-y-2.5 text-xs bg-cyan-950/20 border-cyan-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      Limite de leads:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[1].limits.leadsMonth}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-sky-400" />
                      Campanhas:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[1].limits.campaigns}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-indigo-400" />
                      Equipe:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[1].limits.users}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                    Recursos inclusos no plano:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plansData[1].features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate(`/signup?plano=${plansData[1].id}`)}
                  className="card-cta-btn w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-extrabold shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)]"
                >
                  <span>{plansData[1].ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Escala (Enters from Right) */}
          <ScrollReveal direction="right" delay={280} className="h-full">
            <div className="group h-full relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between glass-panel border-indigo-500/40 shadow-[0_0_35px_rgba(99,102,241,0.18)] hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] bg-gradient-to-b from-[#080d22]/95 to-slate-950/95 hover:border-indigo-400/60 premium-card-hover overflow-hidden">
              <div className="absolute inset-0 rounded-3xl cyber-grid opacity-15 pointer-events-none [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {plansData[2].name}
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    Alta Vazão
                  </span>
                </div>

                <p className="text-xs text-slate-400 min-h-[44px] leading-relaxed mb-6">
                  {plansData[2].positioning}
                </p>

                <div className="pb-6 mb-6 border-b border-slate-800/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-slate-400 font-mono">R$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                      {plansData[2].price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/mês</span>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>{plansData[2].condition}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border mb-6 space-y-2.5 text-xs bg-indigo-950/20 border-indigo-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      Limite de leads:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[2].limits.leadsMonth}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-sky-400" />
                      Campanhas:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[2].limits.campaigns}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-indigo-400" />
                      Equipe:
                    </span>
                    <span className="font-mono text-white font-semibold">{plansData[2].limits.users}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                    Recursos inclusos no plano:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plansData[2].features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-indigo-400" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 pt-2">
                <button
                  onClick={() => onNavigate(`/signup?plano=${plansData[2].id}`)}
                  className="card-cta-btn w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25"
                >
                  <span>{plansData[2].ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Optional Expandable Comparison Section */}
        <ScrollReveal direction="up" delay={100}>
          <div className="max-w-4xl mx-auto rounded-3xl glass-panel border border-slate-800 p-5 sm:p-7 mb-8">
            <button
              onClick={() => setComparisonOpen(!comparisonOpen)}
              className="w-full flex items-center justify-between text-sm sm:text-base font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Comparação Direta de Limites e Capacidades</span>
              </span>
              {comparisonOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-cyan-400" />}
            </button>

            {comparisonOpen && (
              <div className="mt-6 pt-6 border-t border-slate-800/80 animate-in fade-in duration-200">
                {/* Desktop Table View */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        <th className="pb-3 font-semibold">Parâmetro</th>
                        <th className="pb-3 font-semibold text-center">Starter</th>
                        <th className="pb-3 font-semibold text-center text-cyan-300">Profissional</th>
                        <th className="pb-3 font-semibold text-center text-indigo-300">Escala</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-3 font-medium">Preço Mensal</td>
                        <td className="py-3 text-center font-mono font-bold text-white">R$ 127/mês</td>
                        <td className="py-3 text-center font-mono font-bold text-cyan-300">R$ 247/mês</td>
                        <td className="py-3 text-center font-mono font-bold text-indigo-300">R$ 497/mês</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Condição Contratual</td>
                        <td className="py-3 text-center text-emerald-400">Sem fidelidade</td>
                        <td className="py-3 text-center text-emerald-400">Sem fidelidade</td>
                        <td className="py-3 text-center text-emerald-400">Sem fidelidade</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Limite de Leads</td>
                        <td className="py-3 text-center font-mono">500 leads/mês</td>
                        <td className="py-3 text-center font-mono text-cyan-300 font-semibold">2.500 leads/mês</td>
                        <td className="py-3 text-center font-mono text-indigo-300 font-semibold">10.000+ leads/mês</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Campanhas Ativas</td>
                        <td className="py-3 text-center font-mono">3 campanhas</td>
                        <td className="py-3 text-center font-mono text-cyan-300 font-semibold">Ilimitadas</td>
                        <td className="py-3 text-center font-mono text-indigo-300 font-semibold">Ilimitadas com alta vazão</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Membros da Equipe</td>
                        <td className="py-3 text-center font-mono">1 usuário</td>
                        <td className="py-3 text-center font-mono text-cyan-300 font-semibold">Até 5 usuários</td>
                        <td className="py-3 text-center font-mono text-indigo-300 font-semibold">Usuários ilimitados</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Extração de Grupos WhatsApp</td>
                        <td className="py-3 text-center text-slate-500">—</td>
                        <td className="py-3 text-center text-emerald-400 font-semibold">Incluído</td>
                        <td className="py-3 text-center text-emerald-400 font-semibold">Incluído</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Atendimento IA 24/7 + Handoff</td>
                        <td className="py-3 text-center text-slate-500">—</td>
                        <td className="py-3 text-center text-emerald-400 font-semibold">Incluído</td>
                        <td className="py-3 text-center text-emerald-400 font-semibold">Múltiplas instâncias</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Gateways de Pagamento</td>
                        <td className="py-3 text-center font-mono text-slate-400">Padrão</td>
                        <td className="py-3 text-center font-mono text-cyan-300">Stripe, Cakto, AbacatePay</td>
                        <td className="py-3 text-center font-mono text-indigo-300">Stripe, Cakto, AbacatePay + Webhook</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile Block View */}
                <div className="sm:hidden space-y-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <div className="font-bold text-white text-sm">Starter — R$ 127/mês</div>
                    <div className="text-slate-400">500 leads/mês · 3 campanhas ativas · 1 usuário</div>
                    <div className="text-emerald-400 text-[11px]">Sem fidelidade contratual</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
                    <div className="font-bold text-cyan-300 text-sm">Profissional — R$ 247/mês (Mais Escolhido)</div>
                    <div className="text-slate-300">2.500 leads/mês · Campanhas ilimitadas · Até 5 usuários</div>
                    <div className="text-emerald-400 text-[11px]">Extração de grupos e atendimento IA inclusos</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/30 space-y-1.5">
                    <div className="font-bold text-indigo-300 text-sm">Escala — R$ 497/mês (Máxima Performance)</div>
                    <div className="text-slate-300">10.000+ leads/mês · Alta vazão · Usuários ilimitados</div>
                    <div className="text-emerald-400 text-[11px]">Multi-instâncias WhatsApp e onboarding guiado</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Gateways & Security Info */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
              Gateways suportados: Stripe, Cakto e AbacatePay
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Todos os planos: Sem fidelidade contratual
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
