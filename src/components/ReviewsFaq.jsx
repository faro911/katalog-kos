import React, { useState } from 'react';
import { Star, MessageCircle, ChevronDown, HelpCircle } from 'lucide-react';
import { buatLinkWa } from '../data/kostData';

export default function ReviewsFaq({ kost }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const ulasan = kost.ulasanPenghuni || [];
  const faq = kost.faq || [];

  return (
    <section id="ulasan" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Testimonials Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/60">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Pengalaman Nyata Penghuni</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Apa Kata Mereka Tentang Smart Brilian?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Ulasan jujur dari mahasiswi, dokter muda, dan karyawati yang telah merasakan kenyamanan tinggal di Kost Smart Brilian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ulasan.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-rose-200 hover:bg-white hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {item.waktu}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{item.teks}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white font-black text-sm flex items-center justify-center shrink-0">
                    {item.nama.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                      {item.nama}
                    </h4>
                    <p className="text-[11px] font-semibold text-rose-600 mt-0.5">
                      {item.profesi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-8 border-t border-slate-100">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/60">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pertanyaan yang Sering Diajukan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Tanya Jawab Seputar Kos
            </h2>
            <p className="text-sm text-slate-600">
              Informasi lengkap seputar mekanisme sewa, fasilitas, dan ketentuan kost.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-rose-200 shadow-md shadow-rose-500/5' 
                      : 'bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-extrabold text-sm sm:text-base text-slate-900">
                      {item.tanya}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-rose-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.jawab}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Box inside FAQ */}
          <div className="max-w-3xl mx-auto mt-10 p-6 rounded-3xl bg-gradient-to-r from-rose-600 to-pink-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-rose-600/20">
            <div>
              <h4 className="font-extrabold text-base">Masih punya pertanyaan lain?</h4>
              <p className="text-xs text-rose-100 mt-0.5">
                Pengelola kami siap merespons pertanyaan Anda dengan cepat & ramah melalui WhatsApp.
              </p>
            </div>
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-rose-600 font-extrabold text-xs shrink-0 shadow-md hover:bg-rose-50 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-rose-600 text-transparent" />
              <span>Hubungi Pengelola</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
