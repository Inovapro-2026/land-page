import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, LogIn } from 'lucide-react';

interface FinalCTASectionProps {
  onNavigate: (route: string) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#03050a] border-t border-slate-800/80">
      {/* Gigantic Central Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-cyan-500/18 via-sky-600/12 to-blue-700/8 blur-[160px] pointer-events-none rounded-full" />

      {/* Cyber Grid Masked Ring */}
      <div className="absolute inset-0 cyber-grid opacity-20 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_75%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Pronto para modernizar sua operação</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
          Seu próximo cliente pode começar{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            aqui.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Organize sua operação. Encontre oportunidades. Ensine sua IA. Tenha mais controle do seu negócio.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/signup')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:shadow-[0_0_50px_rgba(56,189,248,0.7)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <span>Começar agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('/login')}
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 flex items-center justify-center gap-2 transition-all"
          >
            <LogIn className="w-4 h-4 text-cyan-400" />
            <span>Entrar na minha conta</span>
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            Ativação rápida
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Isolamento de dados e segurança
          </span>
          <span>·</span>
          <span>Suporte técnico contínuo</span>
        </div>
      </div>
    </section>
  );
};
