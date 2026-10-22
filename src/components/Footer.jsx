import React from 'react';
import { buatLinkWa } from '../data/kostData';
import { MessageCircle, MapPin, ExternalLink, ShieldCheck, Building2 } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer({ kost }) {
  return (
    <footer id="kontak" className="bg-black text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 font-black">
                <Building2 className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="font-black text-white text-lg sm:text-xl block leading-tight">
                  {kost.nama}
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-amber-400">
                  {kost.tipe}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {kost.tagline}. Pilihan hunian eksklusif bergaya serviced residence hotel bintang di kawasan paling strategis pusat Kota Semarang.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{kost.alamat}</span>
              </div>
              
              <div className="pt-1">
                <a
                  href={kost.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  <span>Buka Titik Lokasi di Google Maps</span>
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
              <li><a href="#" className="hover:text-amber-400 transition-colors">Beranda Utama</a></li>
              <li><a href="#keunggulan" className="hover:text-amber-400 transition-colors">Keunggulan Eksklusif</a></li>
              <li><a href="#kamar" className="hover:text-amber-400 transition-colors">Pilihan Tipe Kamar</a></li>
              <li><a href="#komparasi" className="hover:text-amber-400 transition-colors">Tabel Komparasi Kamar</a></li>
              <li><a href="#fasilitas" className="hover:text-amber-400 transition-colors">Fasilitas Hotel & Parkir</a></li>
              <li><a href="#lokasi" className="hover:text-amber-400 transition-colors">Lokasi & Akses Sekitar</a></li>
              <li><a href="#ulasan" className="hover:text-amber-400 transition-colors">Ulasan Penghuni & FAQ</a></li>
            </ul>
          </div>

          {/* WhatsApp CTA & Direct Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider">
              Kontak Pengelola & Survei
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ingin menanyakan ketersediaan kamar kosong terbaru atau mengatur jadwal survei unit di Jl. Brumbungan No. 78?
            </p>
            
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm active:scale-95 shadow-xl shadow-amber-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Chat WhatsApp Pengelola</span>
            </a>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>One-Gate System & Security Guard 24 Jam</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {kost.nama}. Seluruh hak cipta dilindungi.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Website Katalog Resmi Serviced Residence Semarang</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
