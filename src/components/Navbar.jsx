import React, { useState } from 'react';
import { buatLinkWa } from '../data/kostData';
import { Home, MessageCircle, Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar({ kost }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRose = kost.temaWarna === 'rose';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105 ${
              isRose 
                ? 'bg-gradient-to-tr from-rose-600 to-pink-500 shadow-rose-500/20' 
                : 'bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-emerald-500/20'
            }`}>
              <Home className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg leading-tight block tracking-tight">
                {kost.nama}
              </span>
              <span className={`text-xs font-semibold tracking-wide uppercase ${
                isRose ? 'text-rose-600' : 'text-emerald-600'
              }`}>
                {kost.tipe}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#kamar" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pilihan Kamar
            </a>
            <a href="#fasilitas" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Fasilitas Bersama
            </a>
            <a href="#lokasi" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Lokasi & Peraturan
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold border ${
              isRose 
                ? 'bg-rose-50 text-rose-700 border-rose-200' 
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${
                isRose ? 'bg-rose-500' : 'bg-emerald-500'
              }`}></span>
              Sisa {kost.stats.kamarTersedia} Kamar
            </span>
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium text-sm active:scale-95 shadow-md transition-all ${
                isRose 
                  ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/20' 
                  : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Pengelola</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg ${
                isRose ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
              }`}
              aria-label="Chat WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              isRose ? 'text-rose-700 bg-rose-50' : 'text-emerald-700 bg-emerald-50'
            }`}>
              Sisa {kost.stats.kamarTersedia} Kamar Tersedia
            </span>
          </div>
          <a
            href="#kamar"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Pilihan Kamar
          </a>
          <a
            href="#fasilitas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Fasilitas Bersama
          </a>
          <a
            href="#lokasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Lokasi & Peraturan
          </a>
          <a
            href={buatLinkWa(kost.whatsapp, kost.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-medium text-sm shadow-md ${
              isRose ? 'bg-rose-600' : 'bg-emerald-600'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            Chat WhatsApp Pengelola
          </a>
        </div>
      )}
    </header>
  );
}
