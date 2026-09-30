import React from 'react';

export const BackgroundAura: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep dark canvas background */}
      <div className="absolute inset-0 bg-[#05070f] dark:bg-[#04060d]" />

      {/* Cybernetic grid overlay with soft mask */}
      <div 
        className="absolute inset-0 cyber-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" 
      />

      {/* Primary Cyan Glow Aura - Center Top */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] md:w-[1100px] md:h-[650px] rounded-full bg-gradient-to-b from-cyan-500/12 via-sky-600/8 to-transparent blur-[120px] pointer-events-none transform-gpu" 
      />

      {/* Secondary Indigo Glow Aura - Middle Right */}
      <div 
        className="absolute top-[38%] right-[-10%] w-[500px] h-[600px] rounded-full bg-gradient-to-b from-indigo-600/8 via-blue-500/6 to-transparent blur-[140px] pointer-events-none transform-gpu" 
      />

      {/* Tertiary Blue Glow Aura - Lower Left */}
      <div 
        className="absolute top-[68%] left-[-10%] w-[550px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-600/8 via-blue-700/6 to-transparent blur-[130px] pointer-events-none transform-gpu" 
      />

      {/* Ambient noise / micro dust texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.06]" />
    </div>
  );
};
