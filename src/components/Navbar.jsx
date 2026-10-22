import React, { useState, useEffect } from 'react';
import { buatLinkWa } from '../data/kostData';
import { MessageCircle, Menu, X, Building2 } from 'lucide-react';

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
        ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-black/20 border-b border-slate-800/90 py-3' 
        : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 group-hover:shadow-amber-500/40 transition-all duration-300 font-black">
              <Building2 className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-lg sm:text-xl leading-tight tracking-tight group-hover:text-amber-400 transition-colors">
                  {kost.namaPendek || 'BS Residence'}
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Exclusive Kost
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-400 tracking-wide flex items-center gap-1.5 mt-0.5">
                <span>Semarang Tengah</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400/90">3 Mnt Simpang Lima</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#keunggulan" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Keunggulan
            </a>
            <a href="#kamar" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Pilihan Kamar
            </a>
            <a href="#komparasi" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Komparasi
            </a>
            <a href="#fasilitas" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Fasilitas Hotel
            </a>
            <a href="#lokasi" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Lokasi & Rute
            </a>
            <a href="#ulasan" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Ulasan & FAQ
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3.5">
            <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Sisa {kost.stats?.kamarTersedia || 4} Kamar</span>
            </div>

            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-sm active:scale-95 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Tanya Kamar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
              aria-label="Chat WhatsApp Pengelola"
            >
              <MessageCircle className="w-5 h-5 fill-amber-400 text-transparent" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-3.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Status Unit Kosong
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full text-emerald-400 bg-emerald-950/70 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sisa {kost.stats?.kamarTersedia || 4} Kamar Siap Huni
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Keunggulan Kos
            </a>
            <a
              href="#kamar"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Pilihan Kamar & Biaya
            </a>
            <a
              href="#komparasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Tabel Komparasi Kamar
            </a>
            <a
              href="#fasilitas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Fasilitas Hotel & Parkir
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Lokasi & Akses Sekitar
            </a>
            <a
              href="#ulasan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Ulasan Penghuni & FAQ
            </a>
          </div>

          <a
            href={buatLinkWa(kost.whatsapp, kost.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Chat WhatsApp Pengelola</span>
          </a>
        </div>
      )}
    </header>
  );
}
