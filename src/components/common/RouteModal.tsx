import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building, Mail, Lock } from 'lucide-react';

interface RouteModalProps {
  route: string | null;
  onClose: () => void;
}

export const RouteModal: React.FC<RouteModalProps> = ({ route, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!route) return null;

  const isLogin = route.includes('/login');
  const isSignup = route.includes('/signup');
  const isTreinarIA = route.includes('/settings/treinar-ia');
  const isPlano = route.includes('/settings/plano');
  const isSuporte = route.includes('/suporte');

  const getRouteTitle = () => {
    if (isLogin) return 'Acessar Conta SAVYRON';
    if (isSignup) return 'Criar Conta Gratuita no SAVYRON';
    if (isTreinarIA) return 'Chat de Treinamento da IA';
    if (isPlano) return 'Gerenciamento de Assinatura';
    if (isSuporte) return 'Central de Suporte SAVYRON';
    return `Módulo SAVYRON: ${route.replace('/', '')}`;
  };

  const getRouteSubtitle = () => {
    if (isLogin) return 'Entre com suas credenciais para gerenciar sua operação comercial.';
    if (isSignup) return 'Inicie seu período de teste sem burocracia e com a IA pronta para aprender.';
    if (isTreinarIA) return 'Ambiente direto em /settings/treinar-ia onde sua conversa vira memória estruturada.';
    if (isPlano) return 'Consulte seus limites atuais e faça upgrade com Stripe, Cakto ou AbacatePay.';
    if (isSuporte) return 'Nossa equipe técnica e canais diretos estão à disposição da sua empresa.';
    return 'Acesso ao ambiente restrito da plataforma SAVYRON.';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_50px_rgba(14,165,233,0.25)] text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
              Ambiente SAVYRON · {route}
            </span>
            <h3 id="modal-title" className="text-xl font-bold font-display text-white">
              {getRouteTitle()}
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 mb-6">
          {getRouteSubtitle()}
        </p>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-semibold text-white">
              {isSignup ? 'Conta configurada com sucesso!' : 'Acesso validado!'}
            </h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Carregando seu ambiente seguro SAVYRON...
            </p>
          </div>
        ) : isLogin || isSignup ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nome da Empresa
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Ex: Prime Engenharia B2B"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900/80 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                E-mail Profissional
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@suaempresa.com.br"
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900/80 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Senha de Acesso
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900/80 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Criptografia 256-bit
              </span>
              {isLogin && (
                <a href="#recuperar" className="text-cyan-400 hover:underline">
                  Esqueceu a senha?
                </a>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <span>{isSignup ? 'Criar minha conta e começar' : 'Acessar painel comercial'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="text-xs text-slate-300 leading-relaxed">
                Você solicitou o módulo <span className="text-cyan-300 font-mono font-semibold">{route}</span>. 
                Todos os dados e parâmetros da sua conta são sincronizados de forma unificada no banco operacional.
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={onClose}
                className="flex-1 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Voltar à Vitrine
              </button>
              <button
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(() => {
                    setSubmitted(false);
                    onClose();
                  }, 1200);
                }}
                className="flex-1 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow transition-colors"
              >
                Prosseguir no App
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
