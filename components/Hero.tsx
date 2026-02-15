
import React, { useState, useEffect } from 'react';
import { ChevronRight, Target, ArrowDown } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1541888941257-234032f28148?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920"
];

const Hero: React.FC = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(p => (p + 1) % HERO_IMAGES.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 animate-slow-pan opacity-40 scale-105"
          style={{ backgroundImage: `url('${HERO_IMAGES[idx]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/60 to-brand-navy z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10">
              <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Engineering Precision</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-white font-serif">
              Elevating <br />
              <span className="text-gradient-gold italic">Modern Infrastructure</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
              PT. Terra Aditama Marcapada delivers integrated technical consultancy where <span className="text-white font-semibold">vision meets precision</span>. We transform complex challenges into sustainable architectural and engineering landmarks.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <a href="#about" className="group relative px-10 py-5 bg-brand-gold overflow-hidden rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center transition-all hover:shadow-[0_0_30px_rgba(194,154,91,0.4)]">
                <span className="relative z-10 flex items-center text-white">
                  Jelajahi Solusi <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#services" className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center transition-all backdrop-blur-md">
                Layanan Kami
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-gold/20 rounded-[3rem] blur-2xl group-hover:bg-brand-gold/30 transition-all"></div>
              <div className="relative bg-brand-navy-light/50 border border-white/10 p-8 rounded-[3rem] backdrop-blur-2xl">
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl font-black text-brand-gold mb-1">120+</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Global Projects</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-brand-gold mb-1">100%</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Client Satisfaction</div>
                  </div>
                  <div className="pt-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-brand-gold/40 flex items-center justify-center text-[10px] font-bold text-white">S{i < 3 ? '2' : '1'}</div>
                      ))}
                    </div>
                    <div className="mt-2 text-[10px] text-white/40 font-bold uppercase tracking-widest">Top-Tier Experts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;