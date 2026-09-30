import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { 
  Users2, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  UserPlus, 
  Sparkles, 
  Send,
  AlertTriangle,
  Layers,
  PhoneCall
} from 'lucide-react';

interface WhatsAppGroupsSectionProps {
  onNavigate: (route: string) => void;
}

export const WhatsAppGroupsSection: React.FC<WhatsAppGroupsSectionProps> = ({ onNavigate }) => {
  const [extractedCount, setExtractedCount] = useState(48);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60 bg-[#060913]/60">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            kicker="Diferencial Operacional"
            title="Transforme oportunidades espalhadas em leads organizados."
            subtitle="Encontre potenciais contatos em grupos do WhatsApp e transforme essas informações em leads para sua operação."
          />

          {/* Vital Rule Badge: Extração ≠ Envio */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="font-semibold uppercase tracking-wider font-mono">
                Segurança & Boas Práticas: Extração ≠ Envio
              </span>
              <span className="text-amber-500/60">·</span>
              <span className="text-amber-200/90 text-xs">
                A extração nunca envia mensagens para o grupo.
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Visual Pipeline of WhatsApp Extraction */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="rounded-3xl glass-panel border border-cyan-500/25 shadow-2xl p-6 sm:p-10">
            {/* Step-by-step visual progression bar */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10 text-center">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 block">Passo 1</span>
                <div className="text-xs font-bold text-white mt-1">Grupo WhatsApp</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 block">Passo 2</span>
                <div className="text-xs font-bold text-white mt-1">Processando</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 block">Passo 3</span>
                <div className="text-xs font-bold text-white mt-1">Leads Encontrados</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 block">Passo 4</span>
                <div className="text-xs font-bold text-white mt-1">Enriquecimento</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 block">Passo 5</span>
                <div className="text-xs font-bold text-white mt-1">CRM Organizado</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 block">Passo 6</span>
                <div className="text-xs font-bold text-cyan-300 mt-1">Campanha 1-a-1</div>
              </div>
            </div>

            {/* Interactive Simulation Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Simulated Group Container (6 cols) */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 premium-card-hover">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Grupo: Empresários & Fornecedores SP
                      </h4>
                      <span className="text-xs text-slate-400">
                        238 participantes presentes
                      </span>
                    </div>
                  </div>

                  <span className="px-2 py-1 text-[10px] font-mono rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Conectado
                  </span>
                </div>

                {/* Extraction Progress Box */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Varredura de perfis públicos:</span>
                    <span className="font-mono text-cyan-400 font-semibold">{extractedCount} contatos mapeados</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 w-[65%]" />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1.5 mt-4">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">1. Extrai números e nomes válidos</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">2. Normaliza formato DDI + DDD</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">3. Remove duplicidades com sua base</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Leads flowing into CRM (6 cols) */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 to-slate-950/80 border border-cyan-500/30 premium-card-hover">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                    Destino dos Dados
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  Leads transferidos diretamente para o CRM
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Os contatos extraídos entram na sua base de clientes com tag de origem, permitindo que você inicie campanhas individuais ou passe para atendimento sem violar políticas de privacidade.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <UserPlus className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-white font-medium">Marcio Santana</span>
                      <span className="text-slate-400">· +55 11 99120-****</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">No CRM</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <UserPlus className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-white font-medium">Luciana Ribeiro</span>
                      <span className="text-slate-400">· +55 11 98402-****</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">No CRM</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('/prospect')}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Conhecer Extração de Grupos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

