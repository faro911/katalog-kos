import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { formatRupiah, buatLinkWa } from '../data/kostData';

export default function RoomComparison({ kost }) {
  const specs = [
    { label: 'Luas Kamar', deluxe: '14 m² (3.5 x 4m)', premiere: '18 m² (4 x 4.5m)', penthouse: '25 m² (5 x 5m)' },
    { label: 'Tipe Ranjang', deluxe: 'Queen (160 x 200 cm)', premiere: 'King (180 x 200 cm)', penthouse: 'King Hotel Bintang 5' },
    { label: 'Smart TV Digital', deluxe: '32 Inch LED', premiere: '43 Inch 4K UHD', penthouse: '50 Inch 4K + Soundbar' },
    { label: 'Kulkas Pribadi', deluxe: true, premiere: true, penthouse: '2 Pintu Jumbo' },
    { label: 'KM Dalam + Water Heater', deluxe: true, premiere: 'Shower Box Mewah', penthouse: 'Rain Shower Marmer' },
    { label: 'Sofa Santai / Lounge', deluxe: false, premiere: true, penthouse: 'Living Room Space' },
    { label: 'Workstation Meja Kerja', deluxe: true, premiere: 'Meja Eksekutif Luas', penthouse: 'Meja Direktur & Mesh' },
    { label: 'Balkon / City View', deluxe: 'Jendela Sirkulasi', premiere: 'City View Brumbungan', penthouse: 'Balkon Luar Pribadi' },
    { label: 'Parkir Mobil + Free Valet', deluxe: true, premiere: true, penthouse: 'Prioritas Slot Depan' },
    { label: 'Keamanan 24 Jam & RFID', deluxe: true, premiere: true, penthouse: true },
    { label: 'Tarif Sewa Bulanan', deluxe: formatRupiah(2500000), premiere: formatRupiah(2850000), penthouse: formatRupiah(3300000) },
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
            Pilih unit yang paling pas untuk kebutuhan ruang, privasi, dan kenyamanan mobilitas harian Anda.
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
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block">
                    Best Seller
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Deluxe Executive
                  </span>
                  <span className="text-sm font-bold text-slate-300 block mt-1">
                    Rp 2.500.000 <span className="text-xs font-normal text-slate-400">/bln</span>
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-center min-w-[220px] bg-amber-500/10 border-x border-amber-500/20">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-1">
                    Paling Direkomendasikan
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Premiere Suite
                  </span>
                  <span className="text-sm font-bold text-amber-400 block mt-1">
                    Rp 2.850.000 <span className="text-xs font-normal text-slate-400">/bln</span>
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-center min-w-[200px]">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                    Exclusive Living
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Royal Penthouse
                  </span>
                  <span className="text-sm font-bold text-slate-300 block mt-1">
                    Rp 3.300.000 <span className="text-xs font-normal text-slate-400">/bln</span>
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
                  
                  {/* Deluxe */}
                  <td className="p-4 sm:p-5 text-center text-slate-300">
                    {typeof row.deluxe === 'boolean' ? (
                      row.deluxe ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold">{row.deluxe}</span>
                    )}
                  </td>

                  {/* Premiere (Highlighted Column) */}
                  <td className="p-4 sm:p-5 text-center text-white bg-amber-500/5 border-x border-amber-500/20 font-bold">
                    {typeof row.premiere === 'boolean' ? (
                      row.premiere ? (
                        <Check className="w-5 h-5 text-amber-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-amber-300 font-extrabold">{row.premiere}</span>
                    )}
                  </td>

                  {/* Penthouse */}
                  <td className="p-4 sm:p-5 text-center text-slate-300">
                    {typeof row.penthouse === 'boolean' ? (
                      row.penthouse ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold">{row.penthouse}</span>
                    )}
                  </td>
                </tr>
              ))}

              {/* Action Buttons Row */}
              <tr className="bg-slate-900 border-t border-slate-800">
                <td className="p-4 sm:p-5 font-bold text-slate-400">Aksi Booking</td>
                <td className="p-4 sm:p-5 text-center">
                  <a
                    href={buatLinkWa(kost.whatsapp, kost.nama, 'Deluxe Executive Room')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
                  >
                    <span>Pilih Deluxe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5 text-center bg-amber-500/10 border-x border-amber-500/20">
                  <a
                    href={buatLinkWa(kost.whatsapp, kost.nama, 'Premiere Suite Room')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-300 transition-all"
                  >
                    <span>Pilih Premiere</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <a
                    href={buatLinkWa(kost.whatsapp, kost.nama, 'Royal Penthouse Suite')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs font-bold transition-all border border-slate-700"
                  >
                    <span>Waiting List</span>
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
