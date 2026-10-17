import React, { useState, useEffect } from 'react';
import { buatLinkWa } from '../data/kostData';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ kost }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/25 group-hover:scale-105 group-hover:shadow-rose-500/40 transition-all duration-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-lg sm:text-xl leading-tight tracking-tight group-hover:text-rose-600 transition-colors">
                  {kost.namaPendek || kost.nama}
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200/60">
                  Eksklusif
                </span>
              </div>
              <p className="text-xs font-semibold text-rose-600/90 tracking-wide">
                Khusus Putri Semarang Barat
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#keunggulan" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              Keunggulan
            </a>
            <a href="#kamar" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              Pilihan Kamar
            </a>
            <a href="#fasilitas" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              Fasilitas Bersama
            </a>
            <a href="#lokasi" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              Lokasi & Akses
            </a>
            <a href="#ulasan" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
              Ulasan & FAQ
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Sisa {kost.stats?.kamarTersedia || 3} Kamar</span>
            </div>

            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white font-semibold text-sm active:scale-95 shadow-md shadow-rose-600/20 hover:shadow-rose-600/30 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Tanya Kamar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
              aria-label="Chat WhatsApp Pengelola"
            >
              <MessageCircle className="w-5 h-5 fill-rose-600 text-transparent" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Status Unit
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full text-emerald-700 bg-emerald-50 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sisa {kost.stats?.kamarTersedia || 3} Kamar Kosong
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            >
              Keunggulan Kos
            </a>
            <a
              href="#kamar"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            >
              Pilihan Kamar & Biaya
            </a>
            <a
              href="#fasilitas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            >
              Fasilitas Bersama
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            >
              Lokasi & Akses Sekitar
            </a>
            <a
              href="#ulasan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            >
              Ulasan Penghuni & FAQ
            </a>
          </div>

          <a
            href={buatLinkWa(kost.whatsapp, kost.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 text-white font-bold text-sm shadow-md shadow-rose-600/25 active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat WhatsApp Pengelola</span>
          </a>
        </div>
      )}
    </header>
  );
}
