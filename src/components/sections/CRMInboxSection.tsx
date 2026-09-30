import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { crmContacts } from '../../data/mockData';
import { 
  Users, 
  Bot, 
  User, 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  Tag, 
  Clock, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface CRMInboxSectionProps {
  onNavigate: (route: string) => void;
}

export const CRMInboxSection: React.FC<CRMInboxSectionProps> = ({ onNavigate }) => {
  const [selectedContactId, setSelectedContactId] = useState<string>(crmContacts[0].id);
  const [takeoverActive, setTakeoverActive] = useState<boolean>(false);

  const activeContact = crmContacts.find(c => c.id === selectedContactId) || crmContacts[0];

  const stages = [
    { key: 'novo_lead', label: 'Novo Lead', count: 14 },
    { key: 'em_atendimento', label: 'Em Atendimento', count: 8 },
    { key: 'interessado', label: 'Interessado', count: 5 },
    { key: 'negociacao', label: 'Negociação', count: 3 },
    { key: 'cliente', label: 'Cliente Fechado', count: 12 },
  ];

  return (
    <section id="crm" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            kicker="Gestão de Relacionamento"
            title="Não perca mais o histórico de cada cliente."
            subtitle="Do primeiro contato ao contrato assinado. Tenha visualização clara de funil, inbox unificado, notas internas e grau de interesse identificado pela IA."
          />
        </ScrollReveal>

        {/* 5 Funnel Stages Bar with Stagger */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {stages.map((stg, idx) => (
            <ScrollReveal key={stg.key} direction="up" delay={idx * 60} className="h-full">
              <div 
                className={`p-3.5 rounded-xl glass-panel border transition-all h-full premium-card-hover ${
                  activeContact.etapa === stg.key
                    ? 'border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                    : 'border-slate-800/80 bg-slate-950/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{stg.label}</span>
                  <span className="font-mono text-cyan-300 font-semibold">{stg.count}</span>
                </div>
                <div className="w-full h-1 rounded-full bg-slate-800 mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-cyan-400"
                    style={{ width: `${(stg.count / 15) * 100}%` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Realistic CRM & Inbox Unified Workspace Demo */}
        <ScrollReveal direction="scale" delay={120}>
          <div className="rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          {/* Column 1: Conversations & Leads List (4 cols) */}
          <div className="lg:col-span-4 bg-[#070b16] border-b lg:border-b-0 lg:border-r border-slate-800 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Inbox Unificado
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {crmContacts.length} ativas
                </span>
              </div>

              <div className="space-y-2">
                {crmContacts.map((contact) => {
                  const isSelected = contact.id === selectedContactId;
                  return (
                    <div
                      key={contact.id}
                      onClick={() => setSelectedContactId(contact.id)}
                      className={`p-3 rounded-xl cursor-pointer border transition-all ${
                        isSelected
                          ? 'bg-slate-900 border-cyan-400/60 shadow-md ring-1 ring-cyan-400/30'
                          : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-white truncate mr-2">
                          {contact.nome}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono shrink-0">
                          {contact.hora}
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-400 truncate mb-2">
                        {contact.ultimaMensagem}
                      </div>

                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-400">{contact.empresa}</span>
                        <span className={`px-1.5 py-0.5 rounded font-mono ${
                          contact.intencao === 'Alta'
                            ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}>
                          {contact.intencao} Intenção
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => onNavigate('/clientes')}
              className="mt-4 w-full py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Abrir CRM em /clientes</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Column 2: Live Conversation Stream (5 cols) */}
          <div className="lg:col-span-5 bg-[#090e1c]/80 p-5 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
            <div>
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {activeContact.nome}
                  </h4>
                  <span className="text-xs text-slate-400">
                    {activeContact.empresa} · Canal {activeContact.canal}
                  </span>
                </div>

                {/* IA vs Humano Mode Toggle */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setTakeoverActive(false)}
                    className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
                      !takeoverActive 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold' 
                        : 'text-slate-400'
                    }`}
                  >
                    <Bot className="w-3 h-3" />
                    <span>IA</span>
                  </button>
                  <button
                    onClick={() => setTakeoverActive(true)}
                    className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
                      takeoverActive 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold' 
                        : 'text-slate-400'
                    }`}
                  >
                    <User className="w-3 h-3" />
                    <span>Humano</span>
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3 text-xs">
                {/* Client message */}
                <div className="flex flex-col items-start">
                  <div className="max-w-[85%] p-3 rounded-2xl rounded-tl-sm bg-slate-800/90 text-slate-200">
                    {activeContact.ultimaMensagem}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 pl-1">
                    {activeContact.hora} · Cliente
                  </span>
                </div>

                {/* System / IA Response */}
                <div className="flex flex-col items-end">
                  <div className="max-w-[85%] p-3 rounded-2xl rounded-tr-sm bg-gradient-to-r from-cyan-950 to-blue-950 text-cyan-100 border border-cyan-800/50">
                    {!takeoverActive ? (
                      <div>
                        Olá {activeContact.nome}! Sim, podemos estruturar o plano com 2 acessos adicionais para sua equipe comercial com ativação imediata. Posso gerar o link de confirmação?
                      </div>
                    ) : (
                      <div>
                        [Atendimento Humano Assumido]: Perfeito Rodrigo, sou do suporte comercial e já estou ajustando sua fatura com as 2 licenças adicionais.
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-cyan-400 mt-1 pr-1 flex items-center gap-1">
                    {!takeoverActive ? (
                      <>
                        <Sparkles className="w-3 h-3" /> Resposta da IA com base no treinamento
                      </>
                    ) : (
                      <>
                        <User className="w-3 h-3 text-amber-400" /> Operador Humano no controle
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Input */}
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950 border border-slate-800">
                <input
                  type="text"
                  readOnly
                  value="Digite uma mensagem ou deixe a IA responder..."
                  className="bg-transparent text-xs text-slate-400 w-full focus:outline-none cursor-default"
                />
                <button 
                  onClick={() => setTakeoverActive(!takeoverActive)}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                >
                  {takeoverActive ? 'Voltar para IA' : 'Assumir Chat'}
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Lead Details & Internal Notes (3 cols) */}
          <div className="lg:col-span-3 bg-[#070b16] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                Ficha de Negócio
              </span>
              <h4 className="text-sm font-bold text-white mb-4">
                Painel Lateral da Conversa
              </h4>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px] mb-1">Etapa Atual</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {activeContact.etapa.replace('_', ' ')}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] mb-1">Valor Estimado</span>
                  <span className="font-mono text-sm font-bold text-emerald-400">
                    R$ {activeContact.valorEstimado?.toLocaleString('pt-BR') || 'A definir'}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] mb-1">Intenção Identificada</span>
                  <span className="text-cyan-300 font-medium">
                    {activeContact.intencao} Intenção de Fechamento
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-300 font-semibold mb-1">
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Notas Internas</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {activeContact.notasInternas}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Histórico sincronizado na nuvem</span>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
