"use client";

import React from 'react';
import { 
  ChevronRight, Mail, Phone, ExternalLink, Target, Award, Users, Instagram, Globe, Zap, Heart
} from 'lucide-react';

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function REStudiosWebsite() {
  const SOCIAL_URL = "https://www.instagram.com/restudiosusm/?hl=en";

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLinkIcon = (url: string) => {
    if (url.includes('instagram.com')) return <Instagram size={14} />;
    if (url.includes('tiktok.com')) return <TikTokIcon size={14} />;
    if (url.includes('behance.net') || url.includes('portfolio')) return <Globe size={14} />;
    return <ExternalLink size={14} />;
  };

  const team = [
    { id: "LDR_01", name: "Bobskieee", role: "Producer", link: "https://www.tiktok.com/@bobskieee_" },
    { id: "LDR_02", name: "Aly", role: "Assistant Producer", link: "https://www.instagram.com/c.est___lavie/" },
    { id: "CRT_01", name: "Far", role: "Director", link: "https://www.behance.net/farizasad" },
    { id: "CRT_02", name: "Clement", role: "Scriptwriter", link: "https://www.instagram.com/cclementea/" },
    { id: "CRT_03", name: "Tara", role: "Storyboardist", link: "https://www.instagram.com/tara.trisha/" },
    { id: "TCH_01", name: "Choy", role: "Director of Photography", link: "https://www.instagram.com/ptraa_choyy/" },
    { id: "TCH_02", name: "Meyyo", role: "1st AC / Main Editor", link: "https://www.instagram.com/shrulaimnnn/" },
    { id: "TCH_03", name: "Altamis", role: "VFX Artist", link: "https://www.instagram.com/altam3ys/" },
    { id: "TCH_04", name: "Apokalep", role: "Sound Designer", link: "https://www.instagram.com/apokalep/" },
    { id: "TCH_05", name: "Mamat", role: "Sound Assistant", link: "https://www.instagram.com/_arifhz/" },
    { id: "ART_01", name: "Leo", role: "Make Up Artist", link: "https://www.instagram.com/vlleo11/" },
    { id: "ART_02", name: "Buja", role: "Lighting", link: "https://www.instagram.com/amzarzhri/" },
    { id: "ART_03", name: "Yen", role: "Gaffer", link: "https://www.instagram.com/fazreen_izran/" },
    { id: "ART_04", name: "Heng", role: "Props Master", link: "https://www.instagram.com/zehengwong/" },
    { id: "ART_05", name: "Anissa", role: "Graphic Designer", link: "https://www.behance.net/anissakamal" },
    { id: "MKT_01", name: "Fahim", role: "Social Media Manager", link: "https://www.instagram.com/fhkimii/" },
    { id: "OPS_01", name: "Padil", role: "Special Task", link: "https://www.instagram.com/seventwootwo11/" },
    { id: "OPS_02", name: "Kojek", role: "Special Task", link: "https://www.instagram.com/qjackzz_/" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2] font-mono selection:bg-[#FF0000] selection:text-white overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="z-[100] flex justify-between items-center p-4 md:p-6 lg:px-12 border-b border-white/5 bg-[#0A0A0A]/90 backdrop-blur-xl sticky top-0">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src="/asset/RE LOGO-01.svg" alt="RE Logo" className="w-6 h-6 md:w-8 md:h-8 object-contain transition-transform group-hover:rotate-12" />
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-black tracking-tighter leading-none">RE<span className="text-[#FF0000]">:</span>STUDIOS</span>
            <span className="text-[6px] md:text-[8px] tracking-[0.4em] opacity-40 uppercase">USM Collective</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          {['about', 'impact', 'team', 'tiers', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => scrollToSection(e, item)} 
              className={`relative py-1 transition-colors hover:text-[#FF0000] group ${item === 'contact' ? 'text-[#FF0000]' : ''}`}
            >
              {item === 'about' ? 'Identity' : item === 'team' ? 'Portfolio' : item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 md:px-16 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-black leading-[0.85] tracking-tighter uppercase mb-6 md:mb-8">
              TOTAL <br className="hidden sm:block" /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>DOMINATION</span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-xs md:text-base text-white/50 leading-relaxed mb-8 md:mb-10 uppercase tracking-widest px-4 lg:px-0">
              A high-output cinematic studio redefining the student film narrative for FFAM 2026.
            </p>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-flex bg-[#FF0000] text-white px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-xs font-black items-center gap-4 hover:bg-white hover:text-black transition-all">
              INITIATE PARTNERSHIP
              <ChevronRight size={16} />
            </a>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end scale-75 md:scale-100">
            <div className="flex items-baseline">
              <span className="text-[8rem] md:text-[18rem] font-black tracking-tighter leading-none select-none">RE</span>
              <span className="text-[8rem] md:text-[18rem] font-black text-[#FF0000] leading-none animate-[blink_1s_step-end_infinite] select-none">:</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" className="relative z-10 p-8 md:p-24 border-y border-white/5 scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[25vw] font-black leading-none uppercase">IDENTITY</span>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <Users className="text-[#FF0000] w-6 h-6 md:w-8 md:h-8" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Who_We_Are</h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-xl text-white/80 leading-snug font-bold uppercase tracking-tight">
              RE: Studios is a multidisciplinary creative collective based in <span className="text-[#FF0000]">Universiti Sains Malaysia (USM)</span>. 
            </p>
            <p className="text-xs md:text-base text-white/50 leading-relaxed uppercase tracking-widest">
              We are redefining the "student film" narrative by operating as a high-output studio. Our team comprises specialists—Narrative Filmmakers, Commercial Directors, Audio Engineers, and VFX Artists—working in professional unison. We don't just make films; we build cinematic benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & GOAL */}
      <section id="mission" className="relative z-10 p-8 md:p-20 bg-[#0F0F0F] border-b border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
          
          <div>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <Target className="text-[#FF0000] w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">The_Goal</h2>
            </div>
            <p className="text-white/40 leading-relaxed uppercase text-[11px] md:text-sm tracking-widest">
              <span className="text-white font-bold block mb-2 text-xs md:text-base">Creative Fulfillment.</span> 
              To rediscover the pure fun of filmmaking. Our priority is to create a piece of work that deeply satisfies the artistic desires of our entire team. We are making this for us first.
            </p>
          </div>
          <div className="md:pl-16">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <Award className="text-[#FF0000] w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">The_Mission</h2>
            </div>
            <p className="text-white/40 leading-relaxed uppercase text-[11px] md:text-sm tracking-widest">
              <span className="text-white font-bold block mb-2 text-xs md:text-base">Defying the Odds.</span> 
              To prove that vision outweighs budget. Despite our youth and limited resources, we are here to compete toe-to-toe with those in more established positions. We aim to show that raw talent and passion can outshine privilege.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIENCE IMPACT & VISIBILITY - FULL REVERTED TEXT */}
      <section id="impact" className="p-8 md:p-20 bg-[#0A0A0A] border-b border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-4 text-center md:text-left">
              / Impact<span className="text-[#FF0000]">&</span>Visibility
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {/* Industry Eye */}
            <div className="p-8 md:p-10 bg-[#0F0F0F] flex flex-col h-full border border-white/5">
              <span className="text-[#FF0000] text-[9px] font-black uppercase tracking-[0.3em] mb-4">// The Industry Eye</span>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4">Evaluating the Next Breakout</h3>
              <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-wide mb-8 flex-grow">
                With legendary judges like Ghaz Abu Bakar and Sein Qudsi, your brand is associated with the high-caliber talent these giants scout for.
              </p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[8px] text-white/30 uppercase tracking-widest block mb-1">Direct visibility to:</span>
                <span className="text-xs font-bold text-white uppercase italic">Malaysian Film Industry Titans</span>
              </div>
            </div>

            {/* National Stage */}
            <div className="p-8 md:p-10 bg-[#0F0F0F] flex flex-col h-full border border-white/5">
              <span className="text-[#FF0000] text-[9px] font-black uppercase tracking-[0.3em] mb-4">// A National Stage</span>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4">Beyond the Classroom</h3>
              <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-wide mb-8 flex-grow">
                We are moving to the Grand Finals, showcasing your brand to a live audience of creative pioneers and student leaders from all 13 states.
              </p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[8px] text-white/30 uppercase tracking-widest block mb-1">Reach:</span>
                <span className="text-xs font-bold text-white uppercase italic">20+ IPT National Delegations</span>
              </div>
            </div>

            {/* IPT Legacy */}
            <div className="p-8 md:p-10 bg-[#0F0F0F] flex flex-col h-full border border-white/5">
              <span className="text-[#FF0000] text-[9px] font-black uppercase tracking-[0.3em] mb-4">// The IPT Legacy</span>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4">The Battle for USM</h3>
              <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-wide mb-8 flex-grow">
                FFAM is the "World Cup" of student cinema. You are fueling the team determined to bring the Grand Champion Trophy back to our campus.
              </p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[8px] text-white/30 uppercase tracking-widest block mb-1">Audience:</span>
                <span className="text-xs font-bold text-white uppercase italic">15,000+ Captive USM Students</span>
              </div>
            </div>

            {/* Youth Connection */}
            <div className="p-8 md:p-10 bg-[#0F0F0F] flex flex-col h-full border border-white/5">
              <span className="text-[#FF0000] text-[9px] font-black uppercase tracking-[0.3em] mb-4">// Youth Connection</span>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4">Cultural Heartbeat</h3>
              <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-wide mb-8 flex-grow">
                We are tapping into the heartbeat of the Malaysian youth film movement, connecting you directly to Gen Z trendsetters.
              </p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[8px] text-white/30 uppercase tracking-widest block mb-1">Impressions:</span>
                <span className="text-xs font-bold text-white uppercase italic">50,000+ Multi-Channel Reach</span>
              </div>
            </div>

            {/* Long-Tail Value */}
            <div className="p-8 md:p-10 bg-[#0F0F0F] flex flex-col h-full border border-white/5">
              <span className="text-[#FF0000] text-[9px] font-black uppercase tracking-[0.3em] mb-4">// Long-Tail Value</span>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4">A Permanent Asset</h3>
              <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-wide mb-8 flex-grow">
                Unlike temporary banners, this film lives forever. Your brand remains in the credits for all future screenings and festivals.
              </p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[8px] text-white/30 uppercase tracking-widest block mb-1">Lifespan:</span>
                <span className="text-xs font-bold text-white uppercase italic">Unlimited Residual Exposure</span>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-8 md:p-10 bg-[#FF0000] flex flex-col justify-center items-center text-center group">
              <h3 className="text-2xl font-black text-white uppercase italic mb-6">READY TO PARTNER?</h3>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-flex bg-black text-white px-8 py-4 text-[10px] font-black items-center gap-3 hover:bg-white hover:text-black transition-all">
                SECURE SLOT <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UNIT REGISTRY */}
      <section id="team" className="p-8 md:p-16 border-b border-white/10 bg-[#0A0A0A] scroll-mt-20">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">/ Unit_Registry</h2>
            <p className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.3em] mt-1">Full Personnel // FFAM 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {team.map((member) => (
            <a key={member.id} href={member.link} target="_blank" rel="noopener noreferrer" className="group relative bg-white/[0.03] border border-white/5 p-3 md:p-4 hover:bg-white/[0.07] hover:border-[#FF0000]/50 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2 md:mb-3">
                <span className="text-[7px] md:text-[8px] text-[#FF0000] font-bold tracking-widest">{member.id}</span>
                <div className="text-white/40 group-hover:text-[#FF0000] transition-colors scale-75 md:scale-100">
                  {getLinkIcon(member.link)}
                </div>
              </div>
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-tighter group-hover:text-[#FF0000] transition-colors truncate">
                {member.name}
              </h3>
              <p className="text-[7px] md:text-[8px] uppercase tracking-[0.1em] text-white/40 truncate">
                {member.role}
              </p>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#FF0000] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </section>

      {/* SPONSORSHIP TIERS */}
      <section id="tiers" className="p-8 md:p-20 border-b border-white/10 scroll-mt-20 bg-[#0A0A0A]">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">/ Support_Framework</h2>
          <p className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-[0.3em] mt-2">Investment Levels for FFAM 2026</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {/* Silver */}
          <div className="p-8 md:p-10 bg-[#0A0A0A] relative flex flex-col h-full border-t border-white/5">
            <Heart className="text-[#FF0000] mb-4" size={20} />
            <h3 className="text-base md:text-lg font-black uppercase mb-1">Silver Partner (Contributor)</h3>
            <div className="text-xl md:text-2xl font-black text-[#FF0000] mb-6 md:mb-8 italic">RM300 (or In-Kind)</div>
            <ul className="space-y-3 md:space-y-4 flex-grow">
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Special Thanks (End Credits)</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Logo on 'Special Thanks' List</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Social Media Shout-outs</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Social Media Story Mention</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/60 leading-relaxed pt-2 font-bold"><span className="text-[#FF0000] font-bold">//</span> Availability: Multiple</li>
            </ul>
          </div>

          {/* Gold */}
          <div className="p-8 md:p-10 bg-[#0A0A0A] relative flex flex-col h-full border-t-4 border-[#FF0000]">
            <Zap className="text-[#FF0000] mb-4" size={20} />
            <h3 className="text-base md:text-lg font-black uppercase mb-1">Gold Partner (Official Supporter)</h3>
            <div className="text-xl md:text-2xl font-black text-[#FF0000] mb-6 md:mb-8 italic">RM 500 (or In-Kind)</div>
            <ul className="space-y-3 md:space-y-4 flex-grow">
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Official Partner (End Credits)</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Passive Integration: Background signage/props</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Logo on 'Special Thanks' List</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Social Media Shout-outs</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed font-bold"><span className="text-[#FF0000] font-bold">//</span> Social Media Story Mention</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Logo on Poster & Banners</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Social Media Collaboration</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/60 leading-relaxed pt-2 font-bold"><span className="text-[#FF0000] font-bold">//</span> Availability: Multiple</li>
            </ul>
          </div>

          {/* Platinum */}
          <div className="p-8 md:p-10 bg-[#0A0A0A] relative flex flex-col h-full border-t border-white/5">
            <Award className="text-[#FF0000] mb-4" size={20} />
            <h3 className="text-base md:text-lg font-black uppercase mb-1">Platinum Partner (Exclusive)</h3>
            <div className="text-xl md:text-2xl font-black text-[#FF0000] mb-6 md:mb-8 italic">RM 1,000</div>
            <ul className="space-y-3 md:space-y-4 flex-grow">
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Title Rights: 'Powered by...' (Opening & End Credits)</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Active Placement: Active part of the story/plot</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Logo on 'Special Thanks' List</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Social Media Shout-outs</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed font-bold"><span className="text-[#FF0000] font-bold">//</span> Social Media Story Mention</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Logo on Poster & Banners</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> Social Media Collaboration</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 leading-relaxed"><span className="text-[#FF0000] font-bold">//</span> 30s Promotional video</li>
              <li className="flex gap-3 text-[8px] md:text-[9px] uppercase tracking-widest text-white/60 leading-relaxed pt-2 font-bold"><span className="text-[#FF0000] font-bold">//</span> Availability: Strictly Limited to 1</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative p-8 md:p-24 bg-[#FF0000] text-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
              READY TO <br className="hidden sm:block" />PARTNER?
            </h2>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-80">Establish Connection for FFAM 2026</p>
          </div>
          <div className="w-full md:w-auto bg-black p-6 md:p-12 space-y-6 md:space-y-8 border border-white/20 shadow-2xl">
            <div className="space-y-1">
              <label className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/30">Lead Producer</label>
              <a href="tel:+60104284995" className="flex items-center gap-3 md:gap-4 text-lg md:text-2xl font-black hover:text-[#FF0000] transition-colors">
                <Phone size={18} className="text-[#FF0000]" /> +60 10428 4995
              </a>
            </div>
            <div className="space-y-1">
              <label className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/30">Official Email</label>
              <a href="mailto:restudiomanagement@gmail.com" className="flex items-center gap-3 md:gap-4 text-sm md:text-xl font-black hover:text-[#FF0000] transition-colors break-all">
                <Mail size={18} className="text-[#FF0000]" /> restudiomanagement@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-8 md:p-12 text-center flex flex-col items-center gap-4">
        <a href={SOCIAL_URL} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#FF0000] transition-all flex items-center gap-2 text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-2">
          <Instagram size={14} /> IG: @RESTUDIOSUSM
        </a>
        <div className="text-[6px] md:text-[8px] opacity-20 uppercase tracking-[0.5em]">
          RE: STUDIOS // USM // FFAM 2026
        </div>
      </footer>

      <style jsx global>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}