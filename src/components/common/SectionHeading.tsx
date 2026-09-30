import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  badgeColor?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = 'center',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${alignment === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {kicker && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400/90 font-mono">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};
