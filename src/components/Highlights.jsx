import React from 'react';
import { ShieldCheck, Sparkles, MapPin, Utensils, CheckCircle2 } from 'lucide-react';

export default function Highlights() {
  const items = [
    {
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      title: 'Aman & Khusus Putri',
      desc: 'Akses gerbang tertutup, pengawasan CCTV 24 jam di lorong & parkiran. Lingkungan tenang, bebas orang luar, dan aman bagi mahasiswi.'
    },
    {
      icon: Sparkles,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-700',
      title: 'Kamar Mandi Dalam + Water Heater',
      desc: 'Setiap kamar dilengkapi kamar mandi dalam bersih, kloset duduk, shower, serta pemanas air (water heater) hangat untuk kenyamanan istirahat.'
    },
    {
      icon: MapPin,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      title: 'Lokasi Super Strategis',
      desc: 'Hanya 2 menit dari Klenteng Sam Poo Kong, 3 menit PT Phapros & Kimia Farma Simongan, serta 5 menit menuju RSUP Dr. Kariadi Semarang.'
    },
    {
      icon: Utensils,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      title: 'Fasilitas Bersama Siap Pakai',
      desc: 'Dapur bersama kompor gas, dispenser air minum galon RO gratis, kulkas penyimpanan, mesin cuci gratis, dan area jemur terlindung hujan.'
    }
  ];

  return (
    <section id="keunggulan" className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenyamanan Nomor Satu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Kenapa Memilih Kost Smart Brilian?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Kombinasi hunian modern berfasilitas hotel dan kenyamanan layaknya rumah sendiri di area Simongan, Semarang Barat.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group relative p-6 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="mt-5 font-extrabold text-slate-900 text-lg leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/50 flex items-center gap-1.5 text-xs font-bold text-rose-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Terverifikasi Pengelola</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
