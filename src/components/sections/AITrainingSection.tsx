import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { sampleTrainingConversation } from '../../data/mockData';
import { 
  Bot, 
  User, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  BrainCircuit, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  BookOpen
} from 'lucide-react';

interface AITrainingSectionProps {
  onNavigate: (route: string) => void;
}

export const AITrainingSection: React.FC<AITrainingSectionProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState(sampleTrainingConversation);
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const presets = [
    {
      label: 'Política de Desconto',
      prompt: 'Nunca conceda desconto sem antes verificar o volume de leads do cliente.'
    },
    {
      label: 'Tempo de Garantia',
      prompt: 'Explique que todos os planos contam com período de adaptação e suporte guiado.'
    },
    {
      label: 'Tom de Voz',
      prompt: 'Use sempre um tom profissional, cordial, direto e evite gírias desnecessárias.'
    }
  ];

  const handleSendPrompt = (text: string) => {
    if (!text.trim()) return;

    const userMsg = {
      id: `usr-${Date.now()}`,
      autor: 'usuario' as const,
      conteudo: text
    };

    setMessages(prev => [...prev, userMsg]);
    setCustomInput('');
    setIsTyping(true);

    setTimeout(() => {
      const iaMsg = {
        id: `ia-${Date.now()}`,
        autor: 'ia' as const,
        conteudo: 'Entendido perfeitamente. Atualizei a memória operacional da sua empresa com essa instrução.',
        chipsGerados: [
          { tipo: 'Regra' as const, texto: `Diretriz: ${text.slice(0, 38)}...` },
          { tipo: 'Conhecimento' as const, texto: 'Memória persistente atualizada' }
        ]
      };
      setMessages(prev => [...prev, iaMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <section id="inteligencia" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-cyan-500/8 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Treinamento Sem Código"
          title="Você não precisa aprender a programar para ensinar sua IA."
          subtitle="Converse com a IA. Explique sua empresa. Corrija. Oriente. Ensine."
        />

        {/* 3 Status indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm">
          <div className="px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Memória atualizada ✓</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Conhecimento estruturado ✓</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>Comportamento contextualizado ✓</span>
          </div>
        </div>

        {/* Interactive Training Simulator Card */}
        <div className="rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl overflow-hidden max-w-4xl mx-auto">
          {/* Header */}
          <div className="p-4 sm:p-6 bg-[#070b16] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Chat de Treinamento da Empresa</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    /settings/treinar-ia
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  A conversa do proprietário com a IA é convertida automaticamente em memória de longo prazo.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/settings/treinar-ia')}
              className="hidden sm:flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium"
            >
              <span>Abrir tela real</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div className="px-4 sm:px-6 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-400 shrink-0 text-[11px]">Exemplos rápidos:</span>
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={() => handleSendPrompt(p.prompt)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 whitespace-nowrap text-[11px] transition-colors"
              >
                + {p.label}
              </button>
            ))}
          </div>

          {/* Chat Messages Log */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[420px] overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 text-xs sm:text-sm ${
                  msg.autor === 'usuario' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.autor === 'ia' && (
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3.5 sm:p-4 rounded-2xl ${
                    msg.autor === 'usuario'
                      ? 'bg-slate-800/90 text-white rounded-tr-sm border border-slate-700'
                      : 'bg-gradient-to-br from-cyan-950/40 to-slate-900/90 text-slate-200 rounded-tl-sm border border-cyan-500/25'
                  }`}
                >
                  <div className="leading-relaxed">
                    {msg.conteudo}
                  </div>

                  {/* Structured Memory Chips extracted */}
                  {msg.chipsGerados && (
                    <div className="mt-3 pt-2.5 border-t border-cyan-500/20 flex flex-wrap gap-1.5">
                      {msg.chipsGerados.map((chip, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60"
                        >
                          <span className="font-bold">{chip.tipo}:</span> {chip.texto}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {msg.autor === 'usuario' && (
                  <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center text-xs text-cyan-400">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <span>SAVYRON IA estruturando novo conhecimento...</span>
              </div>
            )}
          </div>

          {/* Interactive Chat Input */}
          <div className="p-4 sm:p-6 bg-[#070b16] border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendPrompt(customInput);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Escreva uma regra, exemplo ou diretriz para a IA..."
                className="flex-1 px-4 py-3 text-xs sm:text-sm bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-[0.98] shadow-md"
              >
                <span>Ensinar</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
