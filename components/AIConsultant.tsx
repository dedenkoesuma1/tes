
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, MessageSquare, Sparkles } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', text: 'Selamat datang. Saya adalah asisten cerdas Terra. Bagaimana saya dapat membantu strategi infrastruktur Anda hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    const response = await getChatResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-32 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-2 text-brand-gold">
               <Sparkles size={16} />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Next-Gen Support</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-brand-navy leading-tight uppercase font-serif">
              Terra <span className="text-gradient-gold italic">Intelligence.</span>
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              Teknologi tidak hanya mendukung pekerjaan kami, tapi juga mempercepat kolaborasi Anda. Gunakan asisten AI kami untuk konsultasi awal yang instan dan akurat.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="text-brand-gold font-black text-2xl mb-1">0.1s</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Response Time</div>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="text-brand-gold font-black text-2xl mb-1">24/7</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Availability</div>
               </div>
            </div>
          </div>

          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-10 bg-brand-gold/10 rounded-full blur-[100px]"></div>
            
            <div className="relative bg-brand-navy rounded-[3rem] shadow-[0_40px_100px_rgba(15,23,42,0.3)] flex flex-col h-[650px] overflow-hidden border border-white/5">
              <div className="p-8 border-b border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-tr from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                    <Bot className="text-brand-navy w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-xs uppercase tracking-widest">Terra Consultant</h4>
                    <div className="flex items-center space-x-1 mt-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">System Online</span>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex max-w-[90%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
                      {msg.role === 'assistant' && (
                        <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                          <Bot className="text-brand-gold w-5 h-5" />
                        </div>
                      )}
                      <div className={`p-6 rounded-[2rem] text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-brand-gold text-white rounded-tr-none shadow-lg' 
                          : 'bg-white/5 text-white/90 rounded-tl-none border border-white/10'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-4 max-w-[90%]">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <Bot className="text-brand-gold w-5 h-5 animate-pulse" />
                      </div>
                      <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center space-x-3">
                        <Loader2 className="w-4 h-4 animate-spin text-brand-gold" />
                        <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Synthesizing...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSend} className="p-8 border-t border-white/5 bg-white/5 backdrop-blur-xl flex gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e