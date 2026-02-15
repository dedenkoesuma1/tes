
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact-section" className="py-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16">
          <h4 className="text-brand-gold font-black uppercase tracking-[0.2em] text-[10px] mb-4">Informasi Kantor</h4>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy font-serif mb-6 uppercase">Mari Berkolaborasi</h2>
          <div className="w-16 h-1 bg-brand-gold mb-8"></div>
          <p className="text-slate-500 max-w-2xl text-lg font-light leading-relaxed">
            Siap membantu instansi pemerintah maupun swasta dalam solusi geospasial yang akurat.
          </p>
        </div>

        {/* Contact Info List */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-12">
            {/* Lokasi */}
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-[#1e3a2b] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-brand-navy mb-2 uppercase tracking-tight">Lokasi Kantor</h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Jl. Haur Jaya V No. 1A, RT.01/RW.07,<br />
                  Kel. Kebon Pedes, Kec. Tanah Sereal<br />
                  Kota Bogor, Jawa Barat 16162
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-[#1e3a2b] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-brand-navy mb-2 uppercase tracking-tight">Email Resmi</h4>
                <div className="text-slate-500 leading-relaxed font-medium">
                  <p className="hover:text-brand-gold transition-colors cursor-pointer">info@tamahaurjaya.com</p>
                  <p className="hover:text-brand-gold transition-colors cursor-pointer">support@tamahaurjaya.com</p>
                </div>
              </div>
            </div>

            {/* Telepon */}
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-[#1e3a2b] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-brand-navy mb-2 uppercase tracking-tight">Telepon / WhatsApp</h4>
                <div className="text-slate-500 leading-relaxed font-medium">
                  <p>+62 21 5555 8888</p>
                  <p>+62 812 3456 7890 (WA)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
             <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 bg-brand-gold/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-10 bg-brand-navy/5 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Office interior" 
                  className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl"
                />
             </div>
          </div>
        </div>

        {/* Map Card */}
        <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden group">
          <div className="mb-8 flex justify-between items-center">
            <h4 className="text-xl font-black text-brand-navy uppercase tracking-widest">Temukan Kami di Peta</h4>
            <div className="flex space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
            </div>
          </div>
          <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5413165242557!2d106.7933979!3d-6.5806495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5cc35e6e3c5%3A0x7d079943899f8c61!2sJl.%20Haur%20Jaya%20V%2C%20Kb.%20Pedes%2C%20Kec.%20Tanah%20Sereal%2C%20Kota%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
