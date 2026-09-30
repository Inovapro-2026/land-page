import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Operação', href: '#operacao' },
    { label: 'Financeiro', href: '#financeiro' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Prospecção', href: '#prospeccao' },
    { label: 'Inteligência', href: '#inteligencia' },
    { label: 'Planos', href: '#planos' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#05070f]/80 dark:bg-[#05070f]/85 backdrop-blur-md border-b border-cyan-500/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single Brand Wordmark */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
            aria-label="SAVYRON Início"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.7)] transition-all">
              <span className="font-display font-extrabold text-sm text-slate-950 tracking-tighter">S</span>
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
              SAVYRON
            </span>
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors whitespace-nowrap relative py-1 focus-visible:outline-none focus-visible:text-cyan-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Login button */}
            <button
              onClick={() => onNavigate('/login')}
              className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/70 border border-slate-700/60 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Entrar
            </button>

            {/* Signup CTA */}
            <button
              onClick={() => onNavigate('/signup')}
              className="relative group px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span>Começar agora</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 px-4 glass-panel rounded-2xl border border-cyan-500/20 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 rounded-lg hover:bg-slate-800/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-[1px] bg-slate-800/80 my-2" />
              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('/login');
                  }}
                  className="w-full py-2.5 text-center text-sm font-medium text-slate-300 hover:text-white rounded-lg border border-slate-700/60 hover:bg-slate-800/50"
                >
                  Entrar na conta
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('/signup');
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md"
                >
                  Criar conta gratuita
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
