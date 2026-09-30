import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { BackgroundAura } from './components/common/BackgroundAura';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { RouteModal } from './components/common/RouteModal';

// Interactive Showcase Sections
import { HeroSection } from './components/sections/HeroSection';
import { ConvergenceSection } from './components/sections/ConvergenceSection';
import { FinanceSection } from './components/sections/FinanceSection';
import { AgendaSection } from './components/sections/AgendaSection';
import { ProspectionSection } from './components/sections/ProspectionSection';
import { WhatsAppGroupsSection } from './components/sections/WhatsAppGroupsSection';
import { CRMInboxSection } from './components/sections/CRMInboxSection';
import { AITrainingSection } from './components/sections/AITrainingSection';
import { AILayersSection } from './components/sections/AILayersSection';
import { AutomatedServiceSection } from './components/sections/AutomatedServiceSection';
import { CampaignsSection } from './components/sections/CampaignsSection';
import { ReportsSection } from './components/sections/ReportsSection';
import { EverythingConnectedSection } from './components/sections/EverythingConnectedSection';
import { RotatingCardsSection } from './components/sections/RotatingCardsSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { PlansSection } from './components/sections/PlansSection';
import { PriceValueSection } from './components/sections/PriceValueSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

export default function App() {
  const [activeModalRoute, setActiveModalRoute] = useState<string | null>(null);

  useEffect(() => {
    // Initial sync with browser URL if deep-linked to /login, /signup, etc.
    const currentPath = window.location.pathname;
    if (currentPath && currentPath !== '/' && currentPath !== '/vitrine') {
      setActiveModalRoute(currentPath);
    }
  }, []);

  const handleNavigate = (route: string) => {
    setActiveModalRoute(route);
  };

  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Real-time scroll indicator on top */}
      <ScrollProgressBar />

      {/* Atmospheric cyber background glow & grid */}
      <BackgroundAura />

      {/* Fixed top navigation bar conforming to Top Bar Contract */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main landing page storytelling flow */}
      <main className="relative z-10">
        {/* 1. Hero Section: First Impression with Central Dashboard & Orbiting Cards */}
        <HeroSection onNavigate={handleNavigate} />

        {/* 2. Convergence Section: 8 modules converging to SAVYRON */}
        <ConvergenceSection onNavigate={handleNavigate} />

        {/* 3. Finance Section: Realizado vs Planejado, Projeção, Cockpit, Entrou/Saiu */}
        <FinanceSection onNavigate={handleNavigate} />

        {/* 4. Agenda Section: Visual Timeline, 09:00 to 18:00, Lembretes */}
        <AgendaSection onNavigate={handleNavigate} />

        {/* 5. Prospection Section: Multi-engine web search (Firecrawl, OSM, Apify) */}
        <ProspectionSection onNavigate={handleNavigate} />

        {/* 6. WhatsApp Groups Section: Extração ≠ Envio, Contact conversion */}
        <WhatsAppGroupsSection onNavigate={handleNavigate} />

        {/* 7. CRM & Inbox Section: 5 funnel stages, AI intention tags, Human handoff */}
        <CRMInboxSection onNavigate={handleNavigate} />

        {/* 8. AI Training Section: Chat in /settings/treinar-ia generating structured memory */}
        <AITrainingSection onNavigate={handleNavigate} />

        {/* 9. AI Layers Section: Conhecimento, Contexto, Memória; 5-step flow */}
        <AILayersSection />

        {/* 10. Automated Service Section: WhatsApp conversation, Instant response, Handoff */}
        <AutomatedServiceSection onNavigate={handleNavigate} />

        {/* 11. Multichannel Campaigns: WhatsApp & E-mail, "Prospecção Setembro", 1.250 leads */}
        <CampaignsSection onNavigate={handleNavigate} />

        {/* 12. Reports Section: Taxa de resposta, interesse, conversão, opt-out */}
        <ReportsSection onNavigate={handleNavigate} />

        {/* 13. Everything Connected Section: "Tudo conectado no SAVYRON" */}
        <EverythingConnectedSection onNavigate={handleNavigate} />

        {/* 14. 3D Rotating Cards Section: 8 core pillars with pause-on-hover */}
        <RotatingCardsSection />

        {/* 15. How It Works Section: 4 sequential milestones (01 to 04) */}
        <HowItWorksSection onNavigate={handleNavigate} />

        {/* 16. Plans Section: Starter, Profissional, Escala; Monthly/Yearly; Gateways */}
        <PlansSection onNavigate={handleNavigate} />

        {/* 17. Price + Value Section: "Quanto custa organizar sua operação?" */}
        <PriceValueSection />

        {/* 18. Final High-Conversion CTA Section */}
        <FinalCTASection onNavigate={handleNavigate} />
      </main>

      {/* Quiet, authentic Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Simulated Route Navigator Modal for real application links */}
      <RouteModal
        route={activeModalRoute}
        onClose={() => setActiveModalRoute(null)}
      />
    </div>
  );
}
