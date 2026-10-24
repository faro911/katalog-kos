import React from 'react';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { formatRupiah, buatLinkWa } from '../data/kostData';

export default function RoomComparison({ kost }) {
  const specs = [
    { label: 'Luas Kamar', tipec: '12 m² (3 x 4m)', tipeb: '14 m² (3.5 x 4m)', tipea: '20 m² (4 x 5m)' },
    { label: 'Tipe Ranjang', tipec: 'Single Bed (120x200)', tipeb: 'Queen Bed (140x200)', tipea: 'Queen Bed (160x200)' },
    { label: 'AC Pendingin Ruangan', tipec: true, tipeb: true, tipea: 'AC Daikin Inverter' },
    { label: 'Smart TV Layar Datar', tipec: false, tipeb: true, tipea: true },
    { label: 'Kulkas Pribadi di Kamar', tipec: false, tipeb: false, tipea: true },
    { label: 'Kamar Mandi Dalam', tipec: true, tipeb: true, tipea: true },
    { label: 'Water Heater (Air Hangat)', tipec: false, tipeb: false, tipea: true },
    { label: 'Kloset Duduk & Shower', tipec: true, tipeb: true, tipea: true },
    { label: 'Meja Belajar / Kerja', tipec: 'Minimalis', tipeb: 'Meja + Kursi', tipea: 'Workstation Luas' },
    { label: 'Lemari Pakaian', tipec: 'Standar', tipeb: '2 Pintu', tipea: 'Besar + Cermin' },
    { label: 'Slot Parkir / Carport', tipec: 'Motor & Mobil', tipeb: 'Motor & Mobil', tipea: 'Prioritas Carport VVIP' },
    { label: 'Akses Keluar Masuk 24 Jam', tipec: true, tipeb: true, tipea: true },
    { label: 'Tarif Sewa Bulanan', tipec: formatRupiah(2600000), tipeb: formatRupiah(2850000), tipea: formatRupiah(3650000) },
  ];

  return (
    <section id="komparasi" className="py-16 md:py-20 bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Tabel Perbandingan Transparan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Bandingkan Fasilitas Antar Tipe Kamar
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Pilih tipe kamar yang paling sesuai dengan kebutuhan ruang, privasi, dan kenyamanan Anda selama di Semarang.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900">
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-slate-400 min-w-[180px]">
                  Fasilitas & Spesifikasi
                </th>
                <th className="p-4 sm:p-5 text-center min-w-[200px]">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                    Paling Terjangkau
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Tipe C (Superior)
                  </span>
                  <span className="text-sm font-bold text-slate-300 block mt-1">
                    Rp 2.600.000 <span className="text-xs font-normal text-slate-400">/bln</span>
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-center min-w-[220px] bg-amber-500/10 border-x border-amber-500/20">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-1">
                    Best Seller / Terpopuler
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Tipe B (Deluxe)
                  </span>
                  <span className="text-sm font-bold text-amber-400 block mt-1">
                    Rp 2.850.000 <span className="text-xs font-normal text-slate-400">/bln</span>
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-center min-w-[200px]">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block">
                    Paling Mewah & Luas
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Tipe A (Suite VVIP)
                  </span>
                  <span className="text-sm font-bold text-slate-300 block mt-1">
                    Rp 3.650.000 <span className="text-xs font-normal text-slate-400">/bln</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {specs.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-300">
                    {row.label}
                  </td>
                  
                  {/* Tipe C */}
                  <td className="p-4 sm:p-5 text-center text-slate-300">
                    {typeof row.tipec === 'boolean' ? (
                      row.tipec ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold">{row.tipec}</span>
                    )}
                  </td>

                  {/* Tipe B (Highlighted Column) */}
                  <td className="p-4 sm:p-5 text-center text-white bg-amber-500/5 border-x border-amber-500/20 font-bold">
                    {typeof row.tipeb === 'boolean' ? (
                      row.tipeb ? (
                        <Check className="w-5 h-5 text-amber-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-amber-300 font-extrabold">{row.tipeb}</span>
                    )}
                  </td>

                  {/* Tipe A */}
                  <td className="p-4 sm:p-5 text-center text-slate-300">
                    {typeof row.tipea === 'boolean' ? (
                      row.tipea ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-white">{row.tipea}</span>
                    )}
                  </td>
                </tr>
              ))}

              {/* Action Buttons Row */}
              <tr className="bg-slate-900 border-t border-slate-800">
                <td className="p-4 sm:p-5 font-bold text-slate-400">Aksi Booking</td>
                <td className="p-4 sm:p-5 text-center">
                  <a
                    href={buatLinkWa(kost?.whatsapp, kost?.nama, 'Tipe C - Superior Standard')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
                  >
                    <span>Pilih Tipe C</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5 text-center bg-amber-500/10 border-x border-amber-500/20">
                  <a
                    href={buatLinkWa(kost?.whatsapp, kost?.nama, 'Tipe B - Deluxe Room')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-300 transition-all"
                  >
                    <span>Pilih Tipe B</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <a
                    href={buatLinkWa(kost?.whatsapp, kost?.nama, 'Tipe A - Suite VVIP')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
                  >
                    <span>Pilih Tipe A</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
