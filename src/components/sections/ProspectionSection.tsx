import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { prospectionLeads } from '../../data/mockData';
import { 
  Search, 
  Globe, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Database,
  Filter,
  Layers,
  Building
} from 'lucide-react';

interface ProspectionSectionProps {
  onNavigate: (route: string) => void;
}

export const ProspectionSection: React.FC<ProspectionSectionProps> = ({ onNavigate }) => {
  const [selectedLead, setSelectedLead] = useState<string>(prospectionLeads[0].id);

  const activeLead = prospectionLeads.find(l => l.id === selectedLead) || prospectionLeads[0];

  const pipelineSteps = [
    { title: 'Busca Ativa', desc: 'Fontes web & cadastrais' },
    { title: 'Empresas Encontradas', desc: 'Identificação por nicho/cidade' },
    { title: 'Enriquecimento', desc: 'Telefone, site e decisão' },
    { title: 'Lead Qualificado', desc: 'Pronto para CRM & abordagem' }
  ];

  return (
    <section id="prospeccao" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-cyan-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            kicker="Inteligência de Mercado"
            title="Enquanto você trabalha, encontre novos clientes."
            subtitle="O SAVYRON ajuda você a encontrar potenciais clientes na web e organizar esses contatos para sua operação comercial."
          />
        </ScrollReveal>

        {/* 5 Side-entering Feature Cards with Stagger and Directions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          <ScrollReveal direction="left" delay={0} className="h-full">
            <div className="h-full p-3.5 rounded-xl glass-panel border border-slate-800 flex flex-col justify-between premium-card-hover">
              <span className="text-[10px] font-mono uppercase text-cyan-400">Etapa 01</span>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Empresa encontrada</div>
              <div className="text-[10px] text-slate-400 mt-1">Varredura automática</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={70} className="h-full">
            <div className="h-full p-3.5 rounded-xl glass-panel border border-slate-800 flex flex-col justify-between premium-card-hover">
              <span className="text-[10px] font-mono uppercase text-sky-400">Etapa 02</span>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Telefone identificado</div>
              <div className="text-[10px] text-slate-400 mt-1">Contato direto via WhatsApp</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={140} className="h-full">
            <div className="h-full p-3.5 rounded-xl glass-panel border border-slate-800 flex flex-col justify-between premium-card-hover">
              <span className="text-[10px] font-mono uppercase text-blue-400">Etapa 03</span>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Site encontrado</div>
              <div className="text-[10px] text-slate-400 mt-1">Validação de atividade</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={210} className="h-full">
            <div className="h-full p-3.5 rounded-xl glass-panel border border-slate-800 flex flex-col justify-between premium-card-hover">
              <span className="text-[10px] font-mono uppercase text-teal-400">Etapa 04</span>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Lead qualificado</div>
              <div className="text-[10px] text-slate-400 mt-1">Segmento compatível</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={280} className="h-full col-span-2 sm:col-span-1">
            <div className="h-full p-3.5 rounded-xl glass-panel border border-cyan-500/30 bg-cyan-950/20 flex flex-col justify-between premium-card-hover">
              <span className="text-[10px] font-mono uppercase text-cyan-300">Etapa 05</span>
              <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-1">Adicionado ao CRM</div>
              <div className="text-[10px] text-slate-400 mt-1">Pronto para campanha</div>
            </div>
          </ScrollReveal>
        </div>

        {/* Live Interactive Prospection Console Demo */}
        <ScrollReveal direction="scale" delay={120}>
          <div className="rounded-3xl glass-panel border border-cyan-500/25 shadow-2xl overflow-hidden">
          {/* Header Bar with Real Search Sources */}
          <div className="p-5 sm:p-6 bg-[#070b16] border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Radar Comercial · Motores Integrados
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                Prospecção Web Multi-Origem (Firecrawl, OSM/Overpass & Apify)
              </h3>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 mr-1">Fontes:</span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                Firecrawl
              </span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                Overpass/OSM
              </span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                Apify
              </span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                Importação Manual
              </span>
            </div>
          </div>

          {/* Body: Leads Stream + Selected Lead Inspector */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Leads Table / Cards (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Leads Identificados Recentemente</span>
                <span className="font-mono">Clique para inspecionar</span>
              </div>

              {prospectionLeads.map((lead) => {
                const isSelected = selectedLead === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-slate-900/90 border-cyan-400/60 shadow-[0_0_15px_rgba(56,189,248,0.15)] ring-1 ring-cyan-400/40'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-sm text-white flex items-center gap-2">
                          <Building className="w-4 h-4 text-cyan-400" />
                          <span>{lead.empresa}</span>
                        </div>
                        <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                          <span>{lead.segmento}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {lead.localidade}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 shrink-0">
                        {lead.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Lead Inspector Preview Card (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Ficha Enriquecida
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Fonte: {activeLead.fonte}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">
                  {activeLead.empresa}
                </h4>
                <div className="text-xs text-slate-400 mb-6">
                  {activeLead.segmento} · {activeLead.localidade}
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" /> Telefone comercial:
                    </span>
                    <span className="font-mono text-white font-medium">
                      {activeLead.telefone}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" /> Website:
                    </span>
                    <span className="font-mono text-cyan-300">
                      {activeLead.site}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-indigo-400" /> Status no Pipeline:
                    </span>
                    <span className="font-mono text-emerald-400">
                      Enviado ao CRM
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/prospect')}
                className="mt-6 w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <span>Iniciar Varredura em /prospect</span>
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
