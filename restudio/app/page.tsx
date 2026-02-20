"use client";

import React from 'react';
import { 
  ChevronRight, Mail, Phone, ExternalLink, Target, Rocket, Award
} from 'lucide-react';

export default function REProductionWebsite() {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const team = [
    { id: "LDR_01", name: "Bobskieee", role: "Producer", link: "https://www.tiktok.com/@bobskieee_" },
    { id: "LDR_02", name: "Assistant Producer", role: "Management", link: "#" },
    { id: "CRT_01", name: "Far", role: "Director", link: "#" },
    { id: "CRT_02", name: "Clement", role: "Scriptwriter", link: "#" },
    { id: "CRT_03", name: "Tara", role: "Storyboardist", link: "#" },
    { id: "TCH_01", name: "Choy", role: "Director of Photography", link: "#" },
    { id: "TCH_02", name: "Meyo", role: "1st AC / Main Editor", link: "#" },
    { id: "TCH_03", name: "Altamiz", role: "VFX Artist", link: "#" },
    { id: "TCH_04", name: "Apokalep", role: "Sound Designer", link: "#" },
    { id: "TCH_05", name: "Mamat", role: "Sound Recordist", link: "#" },
    { id: "ART_01", name: "Leo", role: "Make Up Artist", link: "#" },
    { id: "ART_02", name: "Buja", role: "Lighting", link: "#" },
    { id: "ART_03", name: "Yen", role: "Gaffer", link: "#" },
    { id: "ART_04", name: "Heng", role: "Props Master", link: "#" },
    { id: "ART_05", name: "Anissa", role: "Graphic Designer", link: "#" },
    { id: "MKT_01", name: "Fahim", role: "Social Media Manager", link: "#" },
    { id: "OPS_01", name: "Padil", role: "Special Task", link: "#" },
    { id: "OPS_02", name: "Kojek", role: "Special Task", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2] font-mono selection:bg-[#FF0000] selection:text-white">
      
      {/* HUD DECORATION */}
      <div className="fixed inset-0 pointer-events-none border-[1px] border-white/5 z-50 m-4 md:m-8" />

      {/* NAVIGATION */}
      <nav className="relative z-[60] flex justify-between items-center p-6 md:px-12 border-b border-white/5 bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0">
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-2xl font-black tracking-tighter leading-none">
            RE<span className="text-[#FF0000]">:</span>PRODUCTION
          </span>
          <span className="text-[8px] tracking-[0.4em] opacity-40 uppercase">USM Collective</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest">
          <a href="#mission" onClick={(e) => scrollToSection(e, 'mission')} className="hover:text-[#FF0000] transition-colors">Mission</a>
          <a href="#team" onClick={(e) => scrollToSection(e, 'team')} className="hover:text-[#FF0000] transition-colors">Registry</a>
          <a href="#tiers" onClick={(e) => scrollToSection(e, 'tiers')} className="hover:text-[#FF0000] transition-colors">Tiers</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#FF0000] transition-colors text-[#FF0000]">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 px-8 md:px-16 pt-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-6xl md:text-[8.5rem] font-black leading-[0.8] tracking-tighter uppercase mb-8">
              TOTAL <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>DOMINATION</span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-sm md:text-base text-white/50 leading-relaxed mb-10 uppercase tracking-widest">
              A high-output production house redefining the student film narrative for FFAM 2026.
            </p>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-flex bg-[#FF0000] text-white px-10 py-5 text-xs font-black items-center gap-4 hover:bg-white hover:text-black transition-all">
              INITIATE PARTNERSHIP
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <div className="flex items-baseline">
              <span className="text-[10rem] md:text-[18rem] font-black tracking-tighter leading-none select-none">RE</span>
              <span className="text-[10rem] md:text-[18rem] font-black text-[#FF0000] leading-none animate-[blink_1s_step-end_infinite] select-none">:</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & GOAL SECTION */}
      <section id="mission" className="relative z-10 p-8 md:p-20 bg-[#0F0F0F] border-y border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-[#FF0000]" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">The_Mission</h2>
            </div>
            <p className="text-white/60 leading-relaxed uppercase text-sm tracking-widest">
              To operate as a multidisciplinary creative collective that transcends the "student film" label. We aim to deliver high-fidelity cinematic experiences through professional unison, rigorous discipline, and artistic fearlessness.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Award className="text-[#FF0000]" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">The_Goal</h2>
            </div>
            <p className="text-white/60 leading-relaxed uppercase text-sm tracking-widest">
              Strategic positioning for FFAM 2026: Total Domination. Our objective is to secure the Overall Best Film award and sweep technical categories while empowering the next generation of Malaysian filmmakers.
            </p>
          </div>
        </div>
      </section>

      {/* UNIT REGISTRY */}
      <section id="team" className="p-8 md:p-16 border-b border-white/10 bg-[#0A0A0A] scroll-mt-20">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">/ Unit_Registry</h2>
            <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] mt-1">Full Production Personnel // FFAM 2026</p>
          </div>
          <div className="bg-[#FF0000]/10 border border-[#FF0000]/30 p-3">
            <p className="text-[10px] text-[#FF0000] font-black uppercase tracking-widest">
              [SYSTEM NOTE]: CLICK THE EXTERNAL LINK ON EACH CARD TO VIEW INDIVIDUAL PORTFOLIOS.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-white/[0.03] border border-white/5 p-4 hover:bg-white/[0.07] hover:border-[#FF0000]/50 transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[8px] text-[#FF0000] font-bold tracking-widest">{member.id}</span>
                {member.link !== "#" && (
                  <a href={member.link} target="_blank" rel="noopener noreferrer" title="View Portfolio" className="text-white/40 hover:text-[#FF0000] transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <h3 className="text-xs font-black uppercase tracking-tighter group-hover:text-[#FF0000] transition-colors truncate">
                {member.name}
              </h3>
              <p className="text-[8px] uppercase tracking-[0.1em] text-white/40 truncate">
                {member.role}
              </p>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#FF0000] group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* SPONSORSHIP TIERS */}
      <section id="tiers" className="p-8 md:p-20 border-b border-white/10 scroll-mt-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">/ Support_Framework</h2>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-2">Investment Levels for FFAM 2026</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          <TierCard 
            name="Silver Partner" 
            price="RM 300" 
            benefits={["Logo on 'Special Thanks' List", "Social Media Story Mention", "Special Thanks (End Credits)"]} 
          />
          <TierCard 
            name="Gold Partner" 
            price="RM 600" 
            highlight 
            benefits={["Official Partner (End Credits)", "Passive Background Signage/Props", "Logo on Poster & Banners", "Social Media Shout-outs"]} 
          />
          <TierCard 
            name="Platinum Partner" 
            price="RM 1,000" 
            benefits={["Exclusive Title Rights (Opening & End)", "Active Story/Plot Integration", "30s Commercial Brand Promo Video", "Limited to 1 Partner"]} 
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative p-8 md:p-24 bg-[#FF0000] text-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
              READY TO <br />PARTNER?
            </h2>
            <p className="text-xs font-black uppercase tracking-[0.3em] opacity-80">Establish Connection for FFAM 2026</p>
          </div>

          <div className="w-full md:w-auto bg-black p-8 md:p-12 space-y-8 border border-white/20 shadow-2xl">
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.4em] text-white/30">Lead Producer</label>
              <a href="tel:+60104284995" className="flex items-center gap-4 text-xl md:text-2xl font-black hover:text-[#FF0000] transition-colors">
                <Phone size={20} className="text-[#FF0000]" /> +60 10428 4995
              </a>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] uppercase tracking-[0.4em] text-white/30">Official Email</label>
              <a href="mailto:restudiomanagement@gmail.com" className="flex items-center gap-4 text-lg md:text-xl font-black hover:text-[#FF0000] transition-colors break-all">
                <Mail size={20} className="text-[#FF0000]" /> restudiomanagement@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-8 text-center text-[8px] opacity-20 uppercase tracking-[0.5em]">
        RE: PRODUCTION // USM // FFAM 2026
      </footer>

      <style jsx global>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

function TierCard({ name, price, benefits, highlight = false }: { name: string, price: string, benefits: string[], highlight?: boolean }) {
  return (
    <div className={`p-10 bg-[#0A0A0A] relative flex flex-col h-full ${highlight ? 'border-t-4 border-[#FF0000]' : ''}`}>
      <h3 className="text-lg font-black uppercase mb-1">{name}</h3>
      <div className="text-2xl font-black text-[#FF0000] mb-8 italic">{price}</div>
      <ul className="space-y-4 flex-grow">
        {benefits.map((b, i) => (
          <li key={i} className="flex gap-3 text-[9px] uppercase tracking-widest text-white/40 leading-relaxed">
            <span className="text-[#FF0000] shrink-0">//</span> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}