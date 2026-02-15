
import React from 'react';
import { Target, Users2, Award, ShieldCheck, Zap, Microscope, Landmark, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const disciplines = [
    "Survey dan Pemetaan",
    "Perencanaan Umum",
    "Studi Kelayakan",
    "Pengembangan Wilayah & Perkotaan",
    "Perancangan Teknik",
    "Pengawasan Teknik",
    "Penelitian dan Pengembangan"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/20 mb-6">
            <Landmark size={16} className="text-brand-gold" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">Profil Perusahaan</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-[1.1] uppercase max-w-4xl">
            Solusi Strategis di Era <span className="text-brand-gold">Pembangunan Modern</span>
          </h2>
        </div>

        {/* Philosophy Block - Column 1 & 2 */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 space-y-8">
            <div className="relative">
              <span className="absolute -left-8 top-0 text-7xl font-serif text-brand-gold/20 opacity-50">"</span>
              <p className="text-2xl md:text-3xl font-bold text-brand-navy leading-snug italic relative z-10">
                Dalam era pembangunan yang ditandai dengan perubahan cepat dan kompleks, tidak ada ruang untuk kesalahan dalam berpikir maupun bertindak.
              </p>
            </div>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                <strong className="text-brand-navy">PT. Terra Aditama Marcapada</strong> hadir sebagai solusi profesional yang didukung oleh teknologi canggih dan inovasi berkelanjutan. Perusahaan ini berkomitmen menjadi mitra strategis dalam melaksanakan proyek konsultansi teknik terintegrasi, dengan prinsip kecepatan, ketepatan, dan keandalan untuk memenuhi kebutuhan sektor pemerintah maupun swasta.
              </p>
              <p>
                Didukung oleh tenaga ahli terkemuka dari berbagai disiplin ilmu, kami mengandalkan profesional lulusan S2 dan S1 yang memiliki pengalaman mendalam. Sinergi antara keahlian senior yang matang dan semangat inovatif tenaga muda menghasilkan solusi terbaik dan efektif untuk setiap tantangan yang dihadapi.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-brand-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h4 className="text-brand-gold font-black uppercase tracking-widest text-sm mb-8 flex items-center">
                <Target className="mr-3" size={18} /> Bidang Keahlian Kami
              </h4>
              <ul className="space-y-4">
                {disciplines.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 group cursor-default">
                    <div className="w-2 h-2 rounded-full bg-brand-gold group-hover:scale-150 transition-transform"></div>
                    <span className="font-bold text-sm uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-brand-gold/20 flex items-center justify-center text-[10px] font-bold">S{i < 3 ? '2' : '1'}</div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expert-Led Teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment & Synergy Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between">
            <div className="mb-12">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                <ShieldCheck className="text-brand-gold" size={32} />
              </div>
              <h4 className="text-2xl font-black text-brand-navy uppercase mb-4">Kualitas & Integritas</h4>
              <p className="text-slate-600 leading-relaxed">
                Komitmen kami adalah menjaga kualitas dan integritas melalui sistem penyelesaian teknik serta administrasi yang profesional. Setiap proyek diselesaikan secara maksimal dengan hasil yang tepat guna dan memberikan nilai tambah bagi para pemangku kepentingan.
              </p>
            </div>
            <div className="flex items-center text-brand-gold font-black uppercase tracking-widest text-xs">
              Value Addition <ChevronRight size={14} className="ml-2" />
            </div>
          </div>

          <div className="bg-brand-gold p-12 rounded-[2.5rem] text-white flex flex-col justify-between shadow-xl shadow-brand-gold/20">
            <div className="mb-12">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-black uppercase mb-4">Inovasi Berkelanjutan</h4>
              <p className="text-white/90 leading-relaxed">
                Dengan fondasi keilmuan yang kuat dan semangat untuk terus belajar serta berinovasi, PT. Terra Aditama Marcapada bertekad menjadi mitra terpercaya yang menghadirkan solusi terbaik dalam menghadapi tantangan pembangunan di era modern ini.
              </p>
            </div>
            <div className="flex items-center font-black uppercase tracking-widest text-xs">
              Future Ready <ChevronRight size={14} className="ml-2" />
            </div>
          </div>
        </div>

        {/* Footer of About Section */}
        <div className="border-t border-slate-100 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="text-center">
             <div className="text-brand-navy font-black text-3xl mb-1 uppercase tracking-tighter">Sinergi</div>
             <div className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em]">Senior & Muda</div>
           </div>
           <div className="text-center">
             <div className="text-brand-navy font-black text-3xl mb-1 uppercase tracking-tighter">Kecepatan</div>
             <div className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em]">Respon Taktis</div>
           </div>
           <div className="text-center">
             <div className="text-brand-navy font-black text-3xl mb-1 uppercase tracking-tighter">Ketepatan</div>
             <div className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em]">Presisi Teknik</div>
           </div>
           <div className="text-center">
             <div className="text-brand-navy font-black text-3xl mb-1 uppercase tracking-tighter">Keandalan</div>
             <div className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em]">Mitra Strategis</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
