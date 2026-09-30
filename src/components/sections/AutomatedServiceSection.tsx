import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Bot, 
  User, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Tag, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

interface AutomatedServiceSectionProps {
  onNavigate: (route: string) => void;
}

export const AutomatedServiceSection: React.FC<AutomatedServiceSectionProps> = ({ onNavigate }) => {
  const [operatorMode, setOperatorMode] = useState<'ia' | 'humano'>('ia');

  return (
    <section id="atendimento" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] bg-teal-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Atendimento Híbrido"
          title="Enquanto você cuida do negócio, a IA pode cuidar das conversas."
          subtitle="Respostas ágeis no WhatsApp para qualificar o interesse de forma consultiva, com transição imediata para atendente humano (Handoff) sempre que necessário."
        />

        {/* Status badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-cyan-400" />
            Classificação: "Interessado"
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-300 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            Follow-up programado em 24h
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-300 flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-amber-400" />
            Takeover humano em 1 clique
          </span>
        </div>

        {/* WhatsApp-Style Interactive Experience */}
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl overflow-hidden">
          {/* Header of Conversation */}
          <div className="p-4 sm:p-5 bg-[#070b16] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                CL
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Carlos L. — Tech Solutions B2B
                </h4>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>Online via WhatsApp Comercial</span>
                </div>
              </div>
            </div>

            {/* Operator Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setOperatorMode('ia')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  operatorMode === 'ia'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>🤖 Modo IA</span>
              </button>
              <button
                onClick={() => setOperatorMode('humano')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  operatorMode === 'humano'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>👤 Humano Assumiu</span>
              </button>
            </div>
          </div>

          {/* Conversation stream */}
          <div className="p-5 sm:p-8 bg-[#090e1c]/90 space-y-4 text-xs sm:text-sm">
            {/* Lead msg 1 */}
            <div className="flex flex-col items-start">
              <div className="max-w-[85%] sm:max-w-[70%] p-3.5 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-100 shadow-sm">
                Olá, gostaria de saber mais sobre a solução de vocês para organizar nossa equipe comercial.
              </div>
              <span className="text-[10px] text-slate-500 mt-1 pl-1 font-mono">14:10 · Carlos</span>
            </div>

            {/* Response by IA or Human */}
            <div className="flex flex-col items-end">
              <div className="max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl rounded-tr-sm bg-gradient-to-br from-cyan-950/80 to-blue-950/80 border border-cyan-500/30 text-cyan-50 shadow-md">
                {operatorMode === 'ia' ? (
                  <div>
                    Olá Carlos! O SAVYRON unifica sua prospecção de clientes, controle de finanças, agenda de reuniões e atendimento em uma única plataforma, permitindo que sua equipe ganhe tempo e não perca nenhum lead. Você busca organizar mais a prospecção ou o atendimento hoje?
                  </div>
                ) : (
                  <div>
                    Boa tarde Carlos! Aqui é a Marina do atendimento da SAVYRON. Vi seu interesse e posso te mostrar uma demonstração rápida de 10 minutos hoje às 16h para ver na prática com seus dados. O que acha?
                  </div>
                )}
              </div>
              <span className="text-[10px] text-cyan-400 mt-1 pr-1 flex items-center gap-1 font-mono">
                {operatorMode === 'ia' ? (
                  <>
                    <Sparkles className="w-3 h-3 text-cyan-400" /> Resposta gerada com o contexto treinado
                  </>
                ) : (
                  <>
                    <User className="w-3 h-3 text-amber-400" /> Atendente humano no comando
                  </>
                )}
              </span>
            </div>

            {/* Lead reply 2 */}
            <div className="flex flex-col items-start">
              <div className="max-w-[85%] sm:max-w-[70%] p-3.5 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-100 shadow-sm">
                Excelente! Queremos organizar tanto os novos leads quanto o follow-up para não esquecer ninguém.
              </div>
              <span className="text-[10px] text-slate-500 mt-1 pl-1 font-mono">14:12 · Carlos</span>
            </div>

            {/* Automated Tagging Indicator */}
            <div className="my-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SAVYRON identificou alta intenção de compra e registrou no CRM.</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400">Status atualizado</span>
            </div>
          </div>

          {/* Footer of conversation */}
          <div className="p-4 sm:p-5 bg-[#070b16] border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Alternância suave sem desconectar o cliente ou perder a conversa.
            </span>
            <button
              onClick={() => onNavigate('/inbox')}
              className="px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Ver Inbox Real</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
