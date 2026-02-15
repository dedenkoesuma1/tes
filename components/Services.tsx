
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Expertise</h4>
            <h3 className="text-4xl md:text-6xl font-black text-brand-navy leading-tight uppercase font-serif">
              Technical <br /> <span className="text-slate-400">Mastery.</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
            Menghadirkan solusi teknik terintegrasi dengan standar kualitas tertinggi untuk setiap sektor pembangunan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`group relative overflow-hidden rounded-[2.5rem] p-10 transition-all duration-500 hover-lift ${
                idx === 0 || idx === 3 ? 'md:col-span-2 bg-brand-navy text-white' : 'bg-slate-50 border border-slate-100'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                idx === 0 || idx === 3 ? 'bg-brand-gold/20 text-brand-gold' : 'bg-brand-navy text-white group-hover:bg-brand-gold group-hover:scale-110'
              }`}>
                {React.cloneElement(service.icon as React.ReactElement, { className: 'w-6 h-6' })}
              </div>
              
              <h4 className={`text-2xl font-black uppercase mb-4 ${
                idx === 0 || idx === 3 ? 'text-white' : 'text-brand-navy'
              }`}>{service.title}</h4>
              
              <p className={`text-sm leading-relaxed mb-10 ${
                idx === 0 || idx === 3 ? 'text-white/60' : 'text-slate-500'
              }`}>
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className={`text-[10px] font-black uppercase tracking-widest ${
                   idx === 0 || idx === 3 ? 'text-brand-gold' : 'text-brand-navy'
                }`}>Explore Detail</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                   idx === 0 || idx === 3 ? 'border-white/20 text-white group-hover:bg-brand-gold group-hover:border-brand-gold' : 'border-slate-200 text-brand-navy group-hover:bg-brand-navy group-hover:text-white'
                }`}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="text-8xl font-black font-serif italic">{idx + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;