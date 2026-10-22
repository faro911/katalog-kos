import React, { useState } from 'react';
import { buatLinkWa } from '../data/kostData';
import { 
  Star, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  MessageSquareCheck, 
  Sparkles, 
  Clock, 
  ExternalLink,
  Car
} from 'lucide-react';

export default function Hero({ kost }) {
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      title: "Deluxe Executive Room",
      label: "Full AC, Kulkas Pribadi, Smart TV"
    },
    {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
      title: "Premiere Suite Room (Extra Luas)",
      label: "King Bed, City View, Sofa Santai"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      title: "Kamar Mandi Dalam Mewah",
      label: "Water Heater Ariston & Shower Box"
    },
    {
      url: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop",
      title: "Parkir Mobil Indoor & Security 24H",
      label: "Aman, Luas & Free Valet Service"
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      
      {/* Decorative Gold & Amber Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 blur-3xl -z-10 pointer-events-none bg-gradient-to-tr from-amber-500/15 via-yellow-500/10 to-indigo-500/10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Trust Signals & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Boutique Serviced Residence</span>
              </span>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-300">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-extrabold text-white">{kost.rating || 4.9}</span>
                <span className="text-slate-500">•</span>
                <span>{kost.totalUlasan || 46} Ulasan Terverifikasi</span>
              </div>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Unit Siap Huni
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.14]">
              Hunian Eksklusif Mewah di Jantung Kota Semarang —{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                3 Mnt ke Simpang Lima & RS Telogorejo
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dirancang dengan standar hotel berbintang bagi eksekutif muda, dokter spesialis, profesional, dan pasutri sah. Menawarkan parkir mobil indoor dengan layanan <strong className="text-amber-400">Free Valet</strong>, keamanan security 24 jam, kamar fully furnished dengan kulkas pribadi, water heater, Smart TV 4K, dan Wi-Fi 150 Mbps.
            </p>

            {/* Quick Strategic Distance Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>3 Mnt ke Simpang Lima</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>2 Mnt ke RS Telogorejo</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                <span>Parkir Mobil + Free Valet</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Security Guard 24 Jam</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#kamar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-98 transition-all duration-200"
              >
                <span>Lihat Kamar & Biaya</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href={buatLinkWa(kost.whatsapp, kost.nama)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 hover:border-slate-600 active:scale-98 transition-all duration-200"
              >
                <MessageSquareCheck className="w-5 h-5 text-emerald-400" />
                <span>Jadwalkan Survei Kamar</span>
              </a>

              <a
                href={kost.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl text-slate-400 hover:text-white text-xs font-semibold hover:bg-slate-800/60 transition-all"
                title="Buka titik lokasi di Google Maps"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Petunjuk Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Address Pill */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="line-clamp-1">{kost.alamat}</span>
            </div>

          </div>

          {/* Right Column: Interactive Room Photo Showcase with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/80 aspect-4/3 sm:aspect-5/4 bg-slate-950 group">
                <img
                  src={heroImages[activeImageIndex].url}
                  alt={heroImages[activeImageIndex].title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                {/* Caption at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-amber-400 tracking-wide uppercase">
                        {heroImages[activeImageIndex].label}
                      </p>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        {heroImages[activeImageIndex].title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      {activeImageIndex + 1} / {heroImages.length}
                    </span>
                  </div>
                </div>

                {/* Floating Top-Left Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md text-white text-xs font-bold border border-slate-700 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Security 24 Jam & One Gate System</span>
                  </span>
                </div>
              </div>

              {/* Photo Selector Thumbnail Strip */}
              <div className="mt-3.5 grid grid-cols-4 gap-2.5">
                {heroImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-4/3 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-amber-400 scale-102 shadow-lg ring-2 ring-amber-400/40' 
                        : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                    }`}
                  >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Floating Badge 1: Starting Price Tag */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-sm">
                  Rp
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Tarif Sewa Bulanan</p>
                  <p className="text-sm font-black text-amber-400">
                    2.5 Juta <span className="text-xs font-medium text-slate-400">/bulan</span>
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Key Amenities */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Parkir Mobil + Free Valet</p>
                  <p className="text-[11px] text-slate-400 font-medium">Kulkas Pribadi & Water Heater</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust & Feature Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-inner">
            <p className="text-2xl sm:text-3xl font-black text-white">4.9 / 5.0</p>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">Rating Kepuasan Penghuni</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-inner">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">Sisa {kost.stats?.kamarTersedia || 4} Unit</p>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">Kamar Kosong Siap Dihuni</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-inner">
            <p className="text-2xl sm:text-3xl font-black text-white">150 Mbps</p>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">Wi-Fi Fiber Dedicated</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-inner">
            <p className="text-2xl sm:text-3xl font-black text-white">2 - 3 Mnt</p>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">Ke Simpang Lima & RS Telogorejo</p>
          </div>
        </div>

      </div>
    </section>
  );
}
