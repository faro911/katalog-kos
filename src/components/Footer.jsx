import React from 'react';
import { buatLinkWa } from '../data/kostData';
import { MessageCircle, MapPin, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer({ kost }) {
  return (
    <footer id="kontak" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/25">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-black text-white text-lg sm:text-xl block leading-tight">
                  {kost.nama}
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-rose-400">
                  {kost.tipe}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {kost.tagline}. Pilihan hunian ideal yang tenang, aman, dan berfasilitas lengkap untuk mahasiswi, dokter muda, dan karyawati di Semarang Barat.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{kost.alamat}</span>
              </div>
              
              <div className="pt-1">
                <a
                  href={kost.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-semibold transition-colors"
                >
                  <span>Lihat di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Beranda Utama</a></li>
              <li><a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan Kos</a></li>
              <li><a href="#kamar" className="hover:text-white transition-colors">Daftar Pilihan Kamar</a></li>
              <li><a href="#fasilitas" className="hover:text-white transition-colors">Fasilitas Bersama</a></li>
              <li><a href="#lokasi" className="hover:text-white transition-colors">Lokasi & Destinasi Sekitar</a></li>
              <li><a href="#ulasan" className="hover:text-white transition-colors">Ulasan Penghuni & FAQ</a></li>
            </ul>
          </div>

          {/* WhatsApp CTA & Direct Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider">
              Kontak & Reservasi
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ingin menanyakan ketersediaan kamar kosong terbaru atau mengatur jadwal survei lokasi?
            </p>
            
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs sm:text-sm active:scale-95 shadow-lg shadow-rose-600/25 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat WhatsApp Pengelola</span>
            </a>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Respon Cepat & Layanan Ramah</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {kost.nama}. Seluruh hak cipta dilindungi.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Website Katalog Resmi Kost Putri Eksklusif Semarang</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
