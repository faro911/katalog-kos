import React, { useState } from 'react';
import { buatLinkWa } from '../data/kostData';
import { 
  Star, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  MessageSquareCheck, 
  Sparkles, 
  Wifi, 
  Clock, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export default function Hero({ kost }) {
  // Array foto untuk interactive gallery preview di hero
  const heroImages = [
    {
      url: kost.kamar?.[0]?.gambarUtama || "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
      title: "Kamar Tipe A - Deluxe Smart",
      label: "Full AC & Smart TV"
    },
    {
      url: kost.kamar?.[1]?.gambarUtama || "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
      title: "Kamar Tipe B - Executive Suite",
      label: "Lebih Luas & Kulkas Pribadi"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
      title: "Kamar Mandi Dalam Bersih",
      label: "Water Heater Air Hangat"
    },
    {
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",
      title: "Dapur Bersama Lengkap",
      label: "Dispenser RO & Kompor Gas"
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-rose-50/70 via-white to-slate-50/50">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 blur-3xl -z-10 pointer-events-none bg-gradient-to-tr from-rose-200/40 via-pink-100/30 to-amber-100/20" />
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-rose-300/15 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-orange-200/15 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Trust Signals & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-rose-200 shadow-2xs text-xs font-bold text-rose-700">
                <Sparkles className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>Kost Putri Eksklusif Semarang</span>
              </span>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-2xs text-xs font-semibold text-slate-700">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-extrabold text-slate-900">{kost.rating || 4.9}</span>
                <span className="text-slate-400">•</span>
                <span>{kost.totalUlasan || 38} Ulasan</span>
              </div>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Unit Siap Huni
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Hunian Putri Eksklusif, Tenang, & Modern Dekat{' '}
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                Sam Poo Kong & RS Kariadi
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Didesain khusus untuk mahasiswi, dokter muda / koas RS Kariadi, dan karyawati yang menginginkan kenyamanan istirahat maksimal, lingkungan bersih, kamar mandi dalam dengan water heater, Smart TV, dan keamanan CCTV 24 jam.
            </p>

            {/* Quick Strategic Distance Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-rose-600" />
                <span>2 Mnt ke Sam Poo Kong</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-rose-600" />
                <span>5 Mnt ke RS Kariadi</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-rose-600" />
                <span>3 Mnt ke PT Phapros</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <Wifi className="w-3.5 h-3.5 text-rose-600" />
                <span>Wi-Fi 100 Mbps Dedicated</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#kamar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 hover:from-rose-700 hover:to-pink-600 text-white font-bold text-base shadow-lg shadow-rose-600/30 hover:shadow-rose-600/40 active:scale-98 transition-all duration-200"
              >
                <span>Lihat Kamar & Biaya</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={buatLinkWa(kost.whatsapp, kost.nama)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200/90 shadow-xs hover:border-slate-300 active:scale-98 transition-all duration-200"
              >
                <MessageSquareCheck className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                <span>Jadwalkan Survei Kamar</span>
              </a>

              <a
                href={kost.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl text-slate-600 hover:text-slate-900 text-xs font-semibold hover:bg-slate-100/70 transition-all"
                title="Buka titik lokasi di Google Maps"
              >
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>Petunjuk Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Address Pill */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span className="line-clamp-1">{kost.alamat}</span>
            </div>

          </div>

          {/* Right Column: Interactive Room Photo Showcase with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-5/4 bg-slate-900 group">
                <img
                  src={heroImages[activeImageIndex].url}
                  alt={heroImages[activeImageIndex].title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Caption at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-rose-300 tracking-wide uppercase">
                        {heroImages[activeImageIndex].label}
                      </p>
                      <h3 className="text-base font-extrabold text-white">
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CCTV 24 Jam & Gerbang Terkunci</span>
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
                        ? 'border-rose-600 scale-102 shadow-md ring-2 ring-rose-200' 
                        : 'border-white opacity-70 hover:opacity-100 hover:border-slate-300'
                    }`}
                  >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Floating Badge 1: Starting Price Tag */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
                  Rp
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Mulai Sewa Bulanan</p>
                  <p className="text-sm font-black text-slate-900">
                    1.95 Juta <span className="text-xs font-medium text-slate-500">/bulan</span>
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Key Amenities */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Water Heater & AC</p>
                  <p className="text-[11px] text-slate-500 font-medium">Free Wi-Fi 100 Mbps & Dapur</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust & Feature Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-black text-slate-900">4.9 / 5.0</p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Rating Kepuasan Penghuni</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-black text-rose-600">Sisa {kost.stats?.kamarTersedia || 3} Unit</p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Kamar Kosong Siap Dihuni</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-black text-slate-900">100 Mbps</p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Wi-Fi Fiber Dedicated</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-black text-slate-900">2 - 5 Mnt</p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Ke Sam Poo Kong & RS Kariadi</p>
          </div>
        </div>

      </div>
    </section>
  );
}
