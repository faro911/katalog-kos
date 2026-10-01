import React from 'react';
import { buatLinkWa } from '../data/kostData';
import { Home, MessageCircle, MapPin } from 'lucide-react';

export default function Footer({ kost }) {
  const isRose = kost?.temaWarna === 'rose';

  return (
    <footer id="kontak" className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md ${
                isRose ? 'bg-rose-600' : 'bg-emerald-500'
              }`}>
                <Home className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-white text-lg block leading-tight">
                  {kost.nama}
                </span>
                <span className={`text-xs font-semibold tracking-wide uppercase ${
                  isRose ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  {kost.tipe}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
              {kost.tagline}. Pilihan hunian nyaman dan strategis di area kampus dan perkantoran.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <MapPin className={`w-4 h-4 shrink-0 ${isRose ? 'text-rose-400' : 'text-emerald-400'}`} />
              <span>{kost.alamat}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Beranda Utama</a></li>
              <li><a href="#kamar" className="hover:text-white transition-colors">Daftar Pilihan Kamar</a></li>
              <li><a href="#fasilitas" className="hover:text-white transition-colors">Fasilitas Bersama</a></li>
              <li><a href="#lokasi" className="hover:text-white transition-colors">Akses & Lokasi</a></li>
            </ul>
          </div>

          {/* WhatsApp CTA (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Kontak Pengelola
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Ada pertanyaan seputar kamar kosong atau ingin atur jadwal survei?
            </p>
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-xs active:scale-95 shadow-md transition-all ${
                isRose 
                  ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20' 
                  : 'bg-emerald-500 text-gray-950 hover:bg-emerald-400'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp Pengelola</span>
            </a>
          </div>

        </div>

        {/* Bottom Credits & Developer Branding */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {kost.nama}. Seluruh hak cipta dilindungi.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Sistem Katalog Digital UMKM Kos</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
