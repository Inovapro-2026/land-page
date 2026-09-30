import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#03050b] text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md">
                <span className="font-display font-extrabold text-xs text-slate-950">S</span>
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                SAVYRON
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Plataforma integrada de inteligência comercial, prospecção, CRM, finanças, agenda e atendimento com IA treinada para a realidade da sua empresa.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ambiente seguro com criptografia e isolamento de dados.</span>
            </div>
          </div>

          {/* Column 1: Produto */}
          <div>
            <h3 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Módulos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#operacao" className="hover:text-cyan-300 transition-colors">
                  Visão Operacional
                </a>
              </li>
              <li>
                <a href="#financeiro" className="hover:text-cyan-300 transition-colors">
                  Financeiro & Projeção
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-cyan-300 transition-colors">
                  Agenda Comercial
                </a>
              </li>
              <li>
                <a href="#prospeccao" className="hover:text-cyan-300 transition-colors">
                  Prospecção Web
                </a>
              </li>
              <li>
                <a href="#crm" className="hover:text-cyan-300 transition-colors">
                  CRM & Funil
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Inteligência & Campanhas */}
          <div>
            <h3 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Automação
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#inteligencia" className="hover:text-cyan-300 transition-colors">
                  Treinamento da IA
                </a>
              </li>
              <li>
                <a href="#atendimento" className="hover:text-cyan-300 transition-colors">
                  Atendimento & Handoff
                </a>
              </li>
              <li>
                <a href="#campanhas" className="hover:text-cyan-300 transition-colors">
                  Campanhas Multicanal
                </a>
              </li>
              <li>
                <a href="#relatorios" className="hover:text-cyan-300 transition-colors">
                  Relatórios Analíticos
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/settings/treinar-ia')} 
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1 text-left"
                >
                  <span>Chat Treinar IA</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Acesso & Planos */}
          <div>
            <h3 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Acesso
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#planos" className="hover:text-cyan-300 transition-colors">
                  Planos & Valores
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('/login')} className="hover:text-cyan-300 transition-colors text-left">
                  Entrar na Conta
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/signup')} className="hover:text-cyan-300 transition-colors text-left text-cyan-400 font-medium">
                  Criar Conta
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/suporte')} className="hover:text-cyan-300 transition-colors text-left">
                  Central de Suporte
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} SAVYRON Technologies. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacidade & Proteção de Dados</span>
            <span>·</span>
            <span>Termos de Uso</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-cyan-400/80">
              <Sparkles className="w-3 h-3" />
              SaaS Comercial 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
