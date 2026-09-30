import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { rotatingCardsData } from '../../data/mockData';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';

export const RotatingCardsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingCardsData.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + rotatingCardsData.length) % rotatingCardsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % rotatingCardsData.length);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/60 bg-[#060814]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Capacidades Centrais"
          title="Uma nova dimensão de controle operacional."
          subtitle="Explore os oito pilares essenciais que transformam a rotina comercial e financeira da sua empresa."
        />

        {/* 3D Perspective Carousel Container */}
        <div 
          className="relative mt-8 py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls bar */}
          <div className="flex items-center justify-between mb-8 max-w-xl mx-auto px-4">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              aria-label="Card anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {rotatingCardsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex 
                      ? 'w-7 bg-cyan-400' 
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Ir para card ${idx + 1}`}
                />
              ))}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="ml-3 p-1.5 text-slate-400 hover:text-cyan-300 text-xs flex items-center gap-1 rounded bg-slate-900/60"
                aria-label={isPaused ? 'Continuar rotação automática' : 'Pausar rotação'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              aria-label="Próximo card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Stage */}
          <div className="relative min-h-[380px] flex items-center justify-center">
            {rotatingCardsData.map((card, idx) => {
              const diff = (idx - activeIndex + rotatingCardsData.length) % rotatingCardsData.length;
              const isCenter = diff === 0;
              const isRight = diff === 1;
              const isLeft = diff === rotatingCardsData.length - 1;

              // Hide other cards on desktop to preserve clean 3D focus
              let positionStyles = 'opacity-0 pointer-events-none scale-75 hidden';

              if (isCenter) {
                positionStyles = 'z-30 opacity-100 scale-100 translate-x-0 block shadow-[0_0_50px_rgba(56,189,248,0.25)] border-cyan-400/50';
              } else if (isRight) {
                positionStyles = 'z-10 opacity-40 scale-85 translate-x-[65%] hidden md:block border-slate-800';
              } else if (isLeft) {
                positionStyles = 'z-10 opacity-40 scale-85 -translate-x-[65%] hidden md:block border-slate-800';
              }

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`absolute w-full max-w-md p-6 sm:p-8 rounded-3xl glass-panel border transition-all duration-500 ease-out cursor-pointer ${positionStyles}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
                      {card.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      0{card.id} / 0{rotatingCardsData.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">Indicador Ativo</div>
                      <div className="text-sm font-bold font-mono text-cyan-300 mt-0.5">
                        {card.metric}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {card.submetric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
