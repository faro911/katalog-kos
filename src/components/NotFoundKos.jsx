import React from 'react';
import { Building2, ArrowRight, ShieldCheck, SearchX, Ban } from 'lucide-react';
import { checkIfCurrentPathRejected, getActiveKostsList } from '../data/kostData';

export default function NotFoundKos() {
  const rejectedKos = checkIfCurrentPathRejected();
  const activeKosts = getActiveKostsList();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex flex-col justify-between text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      {/* Top Simple Brand Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold">
              <Building2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-gray-900 text-base tracking-tight">
              Katalog Properti Kos
            </span>
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            rejectedKos 
              ? 'bg-rose-100 text-rose-700' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {rejectedKos ? 'Status: Akses Dinonaktifkan' : 'Status: Menunggu Path Kos'}
          </span>
        </div>
      </header>

      {/* Main Hero Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xl shadow-gray-200/50 text-center space-y-6">
          
          {/* Visual Icon Badge */}
          <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm ${
            rejectedKos 
              ? 'bg-rose-50 border border-rose-200 text-rose-600' 
              : 'bg-amber-50 border border-amber-200 text-amber-600 animate-pulse'
          }`}>
            {rejectedKos ? <Ban className="w-8 h-8" /> : <SearchX className="w-8 h-8" />}
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {rejectedKos ? 'Katalog Tidak Tersedia' : 'Katalog Kos Tidak Ditemukan'}
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              {rejectedKos ? (
                <>
                  Mohon maaf, akses katalog digital untuk <span className="font-semibold text-gray-900">{rejectedKos.nama}</span> saat ini telah dinonaktifkan (Status: <span className="font-bold text-rose-600">DITOLAK</span>). Halaman ini tidak lagi dapat dibuka untuk umum.
                </>
              ) : (
                <>
                  Tautan yang Anda tuju belum menyertakan nama kos yang terdaftar. Pastikan membuka tautan dengan format <span className="font-semibold text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded">/nama-kos</span> yang diberikan oleh pengelola.
                </>
              )}
            </p>
          </div>

          {/* Available Demos Quick Links (HANYA PROPERTI AKTIF) */}
          <div className="pt-4 border-t border-gray-100 text-left space-y-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center">
              Pilihan Katalog yang Sedang Aktif:
            </p>

            {activeKosts.map((kos) => {
              const path = `/${kos.id}`;
              let badgeStyle = 'bg-amber-50/60 border-amber-200 hover:border-amber-300 hover:bg-amber-50 text-amber-900';
              let arrowColor = 'text-amber-700';

              if (kos.id === 'harley') {
                badgeStyle = 'bg-emerald-50/60 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50 text-emerald-800';
                arrowColor = 'text-emerald-700';
              } else if (kos.id === 'bubroto') {
                badgeStyle = 'bg-blue-50/60 border-blue-100 hover:border-blue-300 hover:bg-blue-50 text-blue-800';
                arrowColor = 'text-blue-700';
              } else if (kos.id === 'sunflower') {
                badgeStyle = 'bg-amber-50/60 border-amber-200 hover:border-amber-300 hover:bg-amber-50 text-amber-900';
                arrowColor = 'text-amber-700';
              } else if (kos.id === 'kost43') {
                badgeStyle = 'bg-rose-50/60 border-rose-200 hover:border-rose-300 hover:bg-rose-50 text-rose-800';
                arrowColor = 'text-rose-700';
              }

              return (
                <a
                  key={kos.id}
                  href={path}
                  className={`group flex items-center justify-between p-3.5 rounded-2xl border transition-all ${badgeStyle}`}
                >
                  <div>
                    <span className="text-xs font-bold block">
                      {kos.nama}
                    </span>
                    <span className="text-[11px] text-gray-500">
                      {kos.alamat.split(',')[0]} ({kos.tipe})
                    </span>
                  </div>
                  <span className={`w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-xs group-hover:translate-x-0.5 transition-transform ${arrowColor}`}>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Secure Trust Note */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Sistem Katalog Terverifikasi & Mandiri</span>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Platform Katalog Digital UMKM Kos
      </footer>
    </div>
  );
}
