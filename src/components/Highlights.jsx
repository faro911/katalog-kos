import React from 'react';
import { ShieldCheck, Sparkles, MapPin, Car, CheckCircle2 } from 'lucide-react';

const iconMap = {
  MapPin,
  Car,
  ShieldCheck,
  Sparkles
};

export default function Highlights({ kost }) {
  const defaultItems = [
    {
      icon: MapPin,
      color: 'from-amber-500 to-yellow-500',
      tag: 'Lokasi Super Prime',
      title: '3 Menit ke Simpang Lima',
      desc: 'Berlokasi di Singosari Pleburan, Semarang Selatan. Akses kilat ke Simpang Lima, UNDIP Pleburan, RS Roemani, dan pusat bisnis Jl. Pahlawan.'
    },
    {
      icon: Sparkles,
      color: 'from-amber-600 to-orange-500',
      tag: 'Fasilitas Langka',
      title: 'Unit dengan Private Kitchen',
      desc: 'Tipe kamar suite dilengkapi dapur pribadi, kompor, kitchen sink, dan meja makan langsung di dalam kamar untuk privasi memasak mandiri.'
    },
    {
      icon: Car,
      color: 'from-emerald-500 to-teal-500',
      tag: 'Parkir Nyaman',
      title: 'Parkir Mobil & Motor Indoor Aman',
      desc: 'Area parkir mobil dan motor beratap di dalam pagar gedung yang luas dan aman, dilengkapi pantauan kamera CCTV 24 jam nonstop.'
    },
    {
      icon: ShieldCheck,
      color: 'from-blue-500 to-indigo-500',
      tag: 'Kebebasan & Aman',
      title: 'Akses Keluar Masuk Bebas 24 Jam',
      desc: 'Penghuni memegang akses mandiri 24 jam penuh tanpa jam malam kaku, memberikan fleksibilitas bagi mobilitas kerja profesional dan dokter.'
    }
  ];

  const items = (kost?.keunggulan && kost.keunggulan.length > 0)
    ? kost.keunggulan.map((k, i) => ({
        icon: iconMap[k.icon] || Sparkles,
        color: i === 0 ? 'from-amber-500 to-yellow-500' : i === 1 ? 'from-emerald-500 to-teal-500' : i === 2 ? 'from-blue-500 to-indigo-500' : 'from-amber-600 to-orange-500',
        tag: k.badge || 'Keunggulan',
        title: k.judul,
        desc: k.deskripsi
      }))
    : defaultItems;

  const namaKos = kost?.namaPendek || "D'resident Suite 5";

  return (
    <section id="keunggulan" className="py-16 md:py-20 bg-slate-950 border-t border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Kenyamanan Eksklusif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Kenapa Memilih {namaKos}?
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Kombinasi hunian modern, lingkungan tenang, fasilitas lengkap, dan aksesibilitas terbaik di Semarang.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group relative p-6 rounded-3xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-slate-950" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                      {item.tag}
                    </span>
                  </div>
                  
                  <h3 className="mt-5 font-black text-white text-lg leading-snug group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Fasilitas Terverifikasi</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
