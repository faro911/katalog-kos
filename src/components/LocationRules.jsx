import React, { useState } from 'react';
import {
  MapPin,
  Compass,
  FileCheck2,
  ExternalLink,
  GraduationCap,
  Train,
  ShoppingBag,
  UtensilsCrossed,
  HeartPulse,
  School,
  Building2,
  Plane,
  ShieldAlert,
  Copy,
  Check
} from 'lucide-react';

const iconLocationMap = {
  GraduationCap,
  Train,
  ShoppingBag,
  UtensilsCrossed,
  HeartPulse,
  Compass,
  School,
  Building2,
  Plane
};

export default function LocationRules({ kost }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    if (kost.alamat) {
      navigator.clipboard.writeText(kost.alamat);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Lokasi & Destinasi Sekitar (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/60 mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Aksesibilitas & Keunggulan Lokasi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Lokasi Strategis di Semarang Barat
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Hanya selangkah menuju destinasi ikonik Sam Poo Kong dan fasilitas medis utama RSUP Dr. Kariadi. Sangat strategis untuk mahasiswi, dokter muda / koas, dan karyawati.
              </p>
            </div>

            {/* List of nearby destinations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(kost.lokasiTerdekat || []).map((item, index) => {
                const IconComponent = iconLocationMap[item.icon] || MapPin;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:border-rose-200 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-1 block">
                          {item.nama}
                        </span>
                        {item.kategori && (
                          <span className="text-[10px] text-slate-400 font-medium">
                            {item.kategori}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg text-rose-700 bg-rose-50 shrink-0 ml-2">
                      {item.jarak}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Google Maps Interactive Embed Card */}
            <div className="p-5 sm:p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">Alamat Lengkap Kos</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5 max-w-lg">{kost.alamat}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Tersalin!' : 'Salin Alamat'}</span>
                  </button>

                  <a
                    href={kost.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 active:scale-95 transition-all"
                  >
                    <span>Buka Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Responsive Embedded Map */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
                <iframe
                  title="Peta Lokasi Kost Putri Eksklusif Smart Brilian"
                  src={kost.googleMapsEmbedUrl || "https://maps.google.com/maps?q=-6.996413,110.4001106&hl=id&z=16&output=embed"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Peraturan Kos (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/60 mb-3">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Ketertiban Bersama</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Tata Tertib & Peraturan Kos
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Dibuat untuk menjaga ketenangan belajar, kenyamanan istirahat, serta privasi dan rasa aman seluruh penghuni putri.
              </p>
            </div>

            {/* Rules Container Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Komitmen Kenyamanan Bersama:
                </h4>
              </div>

              <ul className="space-y-3.5">
                {(kost.peraturan || []).map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {rule}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-100 bg-rose-50/50 p-4 rounded-2xl">
                <p className="text-xs text-rose-800 font-semibold leading-relaxed">
                  💡 Seluruh penghuni dan tamu wajib mematuhi norma kesopanan dan saling menghargai kenyamanan sesama penghuni kos.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
