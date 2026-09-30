import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { 
  DollarSign, 
  Clock, 
  Users, 
  Compass, 
  MessageSquare, 
  Sparkles, 
  Send, 
  BarChart3,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ConvergenceSectionProps {
  onNavigate: (route: string) => void;
}

export const ConvergenceSection: React.FC<ConvergenceSectionProps> = ({ onNavigate }) => {
  const [selectedNode, setSelectedNode] = useState<string>('dinheiro');

  const nodes = [
    {
      id: 'dinheiro',
      label: 'Dinheiro',
      role: 'Finanças & Projeções',
      icon: DollarSign,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      detail: 'Receitas, despesas, valores realizados versus planejados e projeção de caixa para os próximos meses.',
      route: '/financeiro'
    },
    {
      id: 'tempo',
      label: 'Tempo',
      role: 'Agenda & Compromissos',
      icon: Clock,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/30',
      detail: 'Linha do tempo diária com reuniões de fechamento, lembretes de follow-up e organização de tarefas comerciais.',
      route: '/agenda'
    },
    {
      id: 'clientes',
      label: 'Clientes',
      role: 'CRM & Funil Unificado',
      icon: Users,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/30',
      detail: 'Do primeiro contato ao pós-venda: histórico completo, grau de interesse, notas internas e gestão de negócios.',
      route: '/clientes'
    },
    {
      id: 'prospeccao',
      label: 'Prospecção',
      role: 'Busca Web & Extração',
      icon: Compass,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10 border-sky-500/30',
      detail: 'Localização de empresas na internet via fontes estruturadas e extração organizada de grupos sem spam.',
      route: '/prospect'
    },
    {
      id: 'atendimento',
      label: 'Atendimento',
      role: 'IA 24/7 & Handoff Humano',
      icon: MessageSquare,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10 border-teal-500/30',
      detail: 'Respostas imediatas no WhatsApp com detecção de intenção e passagem suave de bastão para atendente humano.',
      route: '/inbox'
    },
    {
      id: 'ia',
      label: 'IA Treinada',
      role: 'Memória da sua Empresa',
      icon: Sparkles,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10 border-indigo-500/30',
      detail: 'Aprende conversando com você: regras de preço, conduta, produtos e diretrizes para falar como sua marca.',
      route: '/settings/treinar-ia'
    },
    {
      id: 'campanhas',
      label: 'Campanhas',
      role: 'WhatsApp & E-mail',
      icon: Send,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/30',
      detail: 'Disparo de sequências com controle de ritmo, rastreamento de respostas e qualificação automática de interessados.',
      route: '/campaigns'
    },
    {
      id: 'relatorios',
      label: 'Relatórios',
      role: 'Visão Sem Achismos',
      icon: BarChart3,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10 border-violet-500/30',
      detail: 'Taxas de conversão, índice de resposta, opt-out e métricas de desempenho em tempo real sem complexidade.',
      route: '/relatorios'
    }
  ];

  const activeNodeData = nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <section id="operacao" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0}>
          <SectionHeading
            kicker="Centralização Operacional"
            title="Pare de administrar seu negócio em vários lugares."
            subtitle="Clientes em uma ferramenta. Finanças em outra. Agenda em outra. Conversas no WhatsApp. Leads espalhados. E a IA sem contexto. O SAVYRON reúne essa operação em uma única plataforma."
          />
        </ScrollReveal>

        {/* Convergence Interactive Diagram Container */}
        <div className="relative mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center Interactive Hub (8 cols - enters from Left) */}
          <ScrollReveal direction="left" delay={50} className="lg:col-span-8 h-full">
            <div className="h-full relative p-6 sm:p-10 rounded-3xl glass-panel border border-cyan-500/20 shadow-2xl overflow-hidden">
              {/* Ambient Radial Mesh behind the hub */}
              <div className="absolute inset-0 bg-radial-gradient from-cyan-900/10 via-transparent to-transparent pointer-events-none" />

              {/* Central SAVYRON Core Badge */}
              <div className="relative z-10 flex flex-col items-center justify-center py-6 text-center">
                <div className="relative">
                  {/* Luminous Pulsing Ring */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-25 blur-lg animate-pulse" />
                  <div className="relative px-6 py-3 rounded-xl bg-slate-950 border border-cyan-400/50 shadow-2xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-display font-extrabold text-slate-950 text-base">
                      S
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold font-display tracking-wider text-white">
                        SAVYRON CORE
                      </div>
                      <div className="text-[10px] text-cyan-300 font-mono">
                        Operação Comercial Integrada
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400 max-w-md">
                  Clique nos módulos ao redor para ver como todos convergem para o mesmo motor:
                </p>
              </div>

              {/* Grid of the 8 Convergent Nodes */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
                {nodes.map((node) => {
                  const isSelected = selectedNode === node.id;
                  const IconComponent = node.icon;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className={`relative p-3.5 rounded-xl text-left transition-all duration-200 group flex flex-col justify-between border ${
                        isSelected
                          ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] scale-[1.02]'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${node.bgColor}`}>
                          <IconComponent className={`w-4 h-4 ${node.color}`} />
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        )}
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-white">
                          {node.label}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {node.role}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Live Explanation Card (4 cols - enters from Right) */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-4 h-full">
            <div className="h-full p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/30 flex flex-col justify-between shadow-2xl min-h-[360px] premium-card-hover">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2.5 rounded-xl ${activeNodeData.bgColor}`}>
                    <activeNodeData.icon className={`w-5 h-5 ${activeNodeData.color}`} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                      Módulo Sincronizado
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {activeNodeData.label}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-medium text-cyan-300 mb-2">
                  {activeNodeData.role}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeNodeData.detail}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Sem duplicidade de digitação</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>A IA acessa o contexto deste módulo</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate(activeNodeData.route)}
                className="mt-6 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/40 flex items-center justify-center gap-2 transition-all group"
              >
                <span>Acessar {activeNodeData.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
