
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        
        {/* Statistics Banner */}
        <div className="bg-brand-navy py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h4 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Performance</h4>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase font-serif">Kinerja Nyata Seluruh Negeri</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-dark border border-white/10 rounded-[2.5rem] p-16 text-center group hover:border-brand-gold/50 transition-all">
                <div className="text-7xl font-black text-brand-gold mb-4 font-serif italic">120+</div>
                <div className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px]">Proyek Selesai</div>
              </div>
              
              <div className="glass-dark border border-white/10 rounded-[2.5rem] p-16 text-center group hover:border-brand-gold/50 transition-all">
                <div className="text-7xl font-black text-brand-gold mb-4 font-serif italic">34</div>
                <div className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px]">Provinsi Terlayani</div>
              </div>
              
              <div className="glass-dark border border-white/10 rounded-[2.5rem] p-16 text-center group hover:border-brand-gold/50 transition-all">
                <div className="text-7xl font-black text-brand-gold mb-4 font-serif italic">100%</div>
                <div className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px]">Presisi & Dedikasi</div>
              </div>
            </div>
          </div>
        </div>

        <Portfolio />
        <Workflow />
        <Gallery />
        <AIConsultant />
        <Contact />

        {/* CTA Section */}
        <section className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-16 h-1 bg-brand-gold mx-auto mb-10"></div>
            <h3 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 uppercase font-serif italic leading-tight">
              Transform Your Vision <br /> into <span className="text-brand-gold">Geospatial Reality.</span>
            </h3>
            <p className="text-slate-500 mb-12 text-xl leading-relaxed font-light">
              Hubungi tim teknis kami untuk solusi pemetaan dan konsultasi infrastruktur yang presisi.
            </p>
            <a href="mailto:info@tamahaurjaya.com" className="inline-block bg-brand-navy text-white px-16 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-navy/90 transition-all shadow-2xl shadow-brand-navy/30">
              Mulai Konsultasi Strategis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
