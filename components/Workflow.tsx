
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Workflow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Persiapan Strategis",
      desc: "Koordinasi teknis lintas departemen dan kalibrasi instrumen presisi tinggi."
    },
    {
      number: "02",
      title: "Akuisisi Data",
      desc: "Eksplorasi lapangan komprehensif menggunakan Drone LIDAR & GPS Geodetik."
    },
    {
      number: "03",
      title: "Analisis & Pengolahan",
      desc: "Transformasi data mentah menjadi wawasan digital melalui pemrosesan GIS."
    },
    {
      number: "04",
      title: "Penyajian Solusi",
      desc: "Penyusunan blueprint akhir dan laporan strategis untuk pengambilan keputusan."
    }
  ];

  return (
    <section className="py-32 bg-brand-navy relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#c29a5b_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h4 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4">Operational Excellence</h4>
          <h2 className="text-4xl md:text-6xl font-black text-white font-serif uppercase tracking-tight">
            Bagaimana Kami <br /> <span className="text-gradient-gold">Bekerja?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent -translate-y-12"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className="relative mb-10">
                  <div className="w-24 h-24 bg-brand-navy-light border border-white/10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-brand-gold group-hover:shadow-[0_0_40px_rgba(194,154,91,0.2)]">
                    <span className="text-3xl font-black text-brand-gold">{step.number}</span>
                  </div>
                  {/* Floating pulse element */}
                  <div className="absolute inset-0 rounded-full border border-brand-gold/50 animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-brand-gold animate-bounce">
                    <ArrowRight className="rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;