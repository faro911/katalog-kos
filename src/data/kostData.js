/**
 * DATABASE KOS - BS RESIDENCE EXCLUSIVE KOST SEMARANG
 * Target saat ini: Single Property Catalog (Per-kos saja)
 * Lokasi: Jl. Brumbungan No. 78, Semarang Tengah
 * Google Maps: https://maps.app.goo.gl/KZCnJdgmm5ov8Hf18
 * Kontak WhatsApp Pengelola: 0853-2527-4567 (6285325274567)
 */

export const databaseKos = {
  // PROPERTI UTAMA: BS RESIDENCE EXCLUSIVE KOST
  bsresidence: {
    id: 'bsresidence',
    status: 'AKTIF',
    nama: 'BS Residence Exclusive Kost',
    namaPendek: 'BS Residence',
    tipe: 'Kost & Serviced Residence Eksklusif (Campur)',
    targetPenghuni: 'Eksekutif Muda, Dokter, Karyawan Profesional, & Pasutri Sah',
    tagline: 'Boutique Residence Mewah & Modern di Jantung Kota Semarang — 3 Menit ke Simpang Lima & RS Telogorejo',
    deskripsi: 'BS Residence menghadirkan konsep hunian eksklusif bergaya boutique hotel bintang di kawasan paling strategis Semarang Tengah. Dilengkapi fasilitas premium parkir mobil luas dengan layanan free valet, keamanan security & CCTV 24 jam, kamar fully furnished mewah dengan kulkas pribadi, water heater, Smart TV, serta Wi-Fi fiber optic berkecepatan tinggi.',
    temaWarna: 'amber-slate', // Luxury Modern Theme: Slate Obsidian & Champagne Gold
    rating: 4.9,
    totalUlasan: 46,
    
    whatsapp: '6285325274567',
    alamat: 'Jl. Brumbungan No. 78, Kel. Brumbungan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50135',
    googleMapsUrl: 'https://maps.app.goo.gl/KZCnJdgmm5ov8Hf18',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=-6.9832496,110.4263105&hl=id&z=16&output=embed',

    stats: {
      totalKamar: 24,
      kamarTersedia: 4,
      jarakPusat: '3 Menit ke Simpang Lima & RS Telogorejo',
      kecepatanWifi: '150 Mbps Fiber Optic',
      parkir: 'Parkir Mobil & Motor + Free Valet Service',
      keamanan: 'Security Guard & CCTV 24 Jam',
    },

    keunggulan: [
      {
        judul: 'Lokasi Super Prime Jantung Kota',
        deskripsi: 'Terletak di Brumbungan, Semarang Tengah. Hanya 3 menit ke Simpang Lima, Tentrem Mall, RS Telogorejo, dan pusat bisnis utama tanpa macet.',
        icon: 'MapPin',
        badge: 'Prime Location'
      },
      {
        judul: 'Parkir Mobil Luas & Free Valet',
        deskripsi: 'Fasilitas langka di pusat kota Semarang: area parkir mobil indoor yang luas, aman, dan didukung layanan valet parking gratis dari security.',
        icon: 'Car',
        badge: 'Fasilitas Langka'
      },
      {
        judul: 'Keamanan 24 Jam & Smart Access',
        deskripsi: 'Penjagaan security guard 24 jam nonstop, gerbang one-gate system, kartu akses RFID mandiri, serta pantauan CCTV di setiap lantai.',
        icon: 'ShieldCheck',
        badge: '100% Aman'
      },
      {
        judul: 'Kamar Hotel-Grade Fully Furnished',
        deskripsi: 'Setiap kamar dilengkapi kulkas pribadi, AC Daikin dingin, Smart TV layar lebar, springbed orthopedic, dan KM dalam water heater air hangat.',
        icon: 'Sparkles',
        badge: 'Full Facilities'
      },
    ],

    fasilitasUmum: [
      { 
        nama: 'Parkir Mobil Luas & Free Valet', 
        kategori: 'Parkir & Mobilitas',
        icon: 'Car', 
        desc: 'Parkir indoor aman dan terlindung di dalam gedung dengan dukungan bantuan valet parking petugas keamanan' 
      },
      { 
        nama: 'Security Guard 24 Jam & One Gate System', 
        kategori: 'Keamanan',
        icon: 'ShieldCheck', 
        desc: 'Petugas keamanan bertugas 24 jam penuh di gerbang masuk demi privasi dan keamanan maksimal seluruh penghuni' 
      },
      { 
        nama: 'Smart Card Access & Full CCTV Coverage', 
        kategori: 'Keamanan',
        icon: 'Key', 
        desc: 'Akses pintu utama menggunakan kartu RFID mandiri serta kamera pengawas CCTV di area parkir, lorong, dan lobby' 
      },
      { 
        nama: 'Wi-Fi Fiber High Speed 150 Mbps', 
        kategori: 'Konektivitas',
        icon: 'Wifi', 
        desc: 'Jaringan internet fiber optic berkecepatan tinggi dengan access point di tiap lantai untuk WFH, meeting online, & hiburan' 
      },
      { 
        nama: 'Lobby & Receptionist Bersama', 
        kategori: 'Kenyamanan',
        icon: 'Building2', 
        desc: 'Ruang tunggu tamu ber-AC yang elegan dan modern untuk menyambut tamu, rekan bisnis, atau keluarga dengan nyaman' 
      },
      { 
        nama: 'Dapur & Pantry Bersama Modern', 
        kategori: 'Kuliner',
        icon: 'Utensils', 
        desc: 'Dilengkapi kompor gas modern, kitchen sink, microwave, dan dispenser air minum galon RO gratis siap minum' 
      },
      { 
        nama: 'Mesin Cuci Bersama & Area Laundry', 
        kategori: 'Layanan',
        icon: 'Shirt', 
        desc: 'Fasilitas mesin cuci otomatis bersama serta opsi layanan laundry express terdekat di sekitar gedung kos' 
      },
      { 
        nama: 'Housekeeping & Kebersihan Rutin', 
        kategori: 'Layanan',
        icon: 'CheckCircle2', 
        desc: 'Petugas kebersihan membersihkan koridor, lobby, pantry, dan area parkir secara terjadwal setiap hari' 
      },
      { 
        nama: 'Kamar Mandi Dalam Water Heater', 
        kategori: 'Kenyamanan',
        icon: 'Droplets', 
        desc: 'Water heater pemanas air di seluruh unit kamar mandi dalam, dilengkapi shower berkualitas dan kloset duduk Toto' 
      },
      { 
        nama: 'Kulkas Pribadi di Setiap Kamar', 
        kategori: 'Kenyamanan',
        icon: 'Coffee', 
        desc: 'Setiap kamar memiliki lemari es/kulkas pribadi untuk menyimpan makanan dan minuman dingin tanpa perlu berbagi' 
      },
    ],

    kamar: [
      {
        id: 'deluxe-executive',
        nama: 'Deluxe Executive Room',
        tipeKamar: 'Tipe Deluxe',
        kategori: 'deluxe',
        tipeKm: 'KM Dalam + Water Heater',
        ukuran: '3.5 x 4 Meter (14 m²)',
        hargaBulan: 2500000,
        hargaTahun: 27500000,
        status: 'Tersedia',
        sisaKamar: 2,
        badgePromo: 'Best Seller',
        tipeKasur: 'Queen Bed (160 x 200 cm)',
        kapasitas: '1 - 2 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'AC Daikin / Panasonic Inverter Hemat Daya & Hening',
          'Kulkas Pribadi 1 Pintu di Dalam Kamar',
          'Smart TV 32 Inch LED (YouTube, Netflix Ready)',
          'Kasur Springbed Queen Size (160x200 cm) + Bantal Hotel Grade',
          'Kamar Mandi Dalam dengan Water Heater Ariston (Air Hangat)',
          'Shower Tekanan Kencang, Kloset Duduk Toto & Wastafel Kaca',
          'Meja Kerja Minimalis Ergonomis + Kursi Busa Nyaman',
          'Lemari Pakaian 2 Pintu Sliding dengan Cermin Panjang',
          'Jendela Sirkulasi Udara Alami + Gorden Blackout Mewah',
          'Listrik Sistem Token Mandiri per Kamar',
        ],
        biayaLain: 'Sewa bulanan sudah termasuk air bersih, Wi-Fi 150 Mbps, parkir motor/mobil, iuran sampah, dan keamanan. Listrik sistem token mandiri sesuai pemakaian.',
      },
      {
        id: 'premiere-suite',
        nama: 'Premiere Suite Room (Extra Luas)',
        tipeKamar: 'Tipe Premiere',
        kategori: 'premiere',
        tipeKm: 'KM Dalam + Water Heater',
        ukuran: '4 x 4.5 Meter (18 m²)',
        hargaBulan: 2850000,
        hargaTahun: 31000000,
        status: 'Tersedia',
        sisaKamar: 2,
        badgePromo: 'Rekomendasi Eksekutif',
        tipeKasur: 'King Bed (180 x 200 cm)',
        kapasitas: '1 - 2 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Ruang Kamar Lebih Luas & Plafon Tinggi (18 m²)',
          'AC 1 PK Daikin Dingin Maksimal',
          'Kulkas Pribadi 1 Pintu Standar Hotel',
          'Smart TV 43 Inch 4K Digital dengan Saluran Lengkap',
          'Kasur Springbed King Size (180x200 cm) Mewah',
          'Kamar Mandi Dalam Mewah + Water Heater + Kaca Shower Box',
          'Sofa Santai / Lounge Chair + Meja Kopi Sudut',
          'Workstation Meja Kerja Eksekutif Luas + Lampu Belajar',
          'Lemari Pakaian Besar 3 Pintu + Cermin Full-Length',
          'Jendela Kaca Lebar Menghadap City View Brumbungan',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk fasilitas parkir mobil gratis (free valet), Wi-Fi 150 Mbps, air bersih, dan pemakaian pantry bersama. Listrik token mandiri.',
      },
      {
        id: 'royal-penthouse',
        nama: 'Royal Penthouse Suite',
        tipeKamar: 'Tipe Penthouse',
        kategori: 'penthouse',
        tipeKm: 'KM Dalam Mewah + Water Heater',
        ukuran: '5 x 5 Meter (25 m²)',
        hargaBulan: 3300000,
        hargaTahun: 36000000,
        status: 'Penuh Terisi',
        sisaKamar: 0,
        badgePromo: 'Waiting List',
        tipeKasur: 'King Bed Hotel Bintang 5',
        kapasitas: '1 - 2 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Unit Terluas (25 m²) dengan Living Space Semi-Private',
          'AC 1.5 PK Inverter dengan Pengaturan Suhu Otomatis',
          'Kulkas 2 Pintu Pribadi di Dalam Kamar',
          'Smart TV 50 Inch Ultra HD 4K + Soundbar',
          'Pantry Basah Mini & Microwave Pribadi di Kamar',
          'Kamar Mandi Marmer Mewah + Water Heater & Rain Shower',
          'Meja Kerja Direktur & Kursi Ergonomis Mesh',
          'Walk-in Wardrobe / Lemari Custom Dinding Penuh',
          'Balkon Luar Pribadi dengan Pemandangan Kota',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Fasilitas terlengkap all-in (kecuali token listrik). Tersedia slot parkir mobil prioritas di dalam gerbang.',
      },
    ],

    lokasiTerdekat: [
      { 
        nama: 'Kawasan Simpang Lima Semarang (Pusat Kota)', 
        jarak: '3 Menit (1.2 km)', 
        icon: 'Compass', 
        kategori: 'Pusat Kota & Landmark',
        highlight: 'Jantung Kota' 
      },
      { 
        nama: 'RS Telogorejo Semarang (SMC)', 
        jarak: '2 Menit (800 m)', 
        icon: 'HeartPulse', 
        kategori: 'Rumah Sakit & Kesehatan',
        highlight: 'Ideal untuk Nakes / Pasien' 
      },
      { 
        nama: 'Mall Ciputra & Plaza Simpang Lima', 
        jarak: '3 Menit (1.3 km)', 
        icon: 'ShoppingBag', 
        kategori: 'Mall & Belanja',
        highlight: 'Belanja & Bioskop' 
      },
      { 
        nama: 'Tentrem Mall & Hotel Semarang (Gajah Mada)', 
        jarak: '3 Menit (1.1 km)', 
        icon: 'Building2', 
        kategori: 'Mall & Lifestyle',
        highlight: 'Modern Lifestyle Mall' 
      },
      { 
        nama: 'Superindo Brumbungan / Gajah Mada', 
        jarak: '1 Menit (300 m)', 
        icon: 'ShoppingBag', 
        kategori: 'Kebutuhan Harian',
        highlight: 'Bisa Jalan Kaki' 
      },
      { 
        nama: 'Kawasan Kuliner Pecinan & Gajah Mada', 
        jarak: '2 Menit (500 m)', 
        icon: 'UtensilsCrossed', 
        kategori: 'Sentra Kuliner',
        highlight: 'Pusat Kuliner Favorit' 
      },
      { 
        nama: 'Pollux Mall Paragon & DP Mall Pemuda', 
        jarak: '5 Menit (2.2 km)', 
        icon: 'ShoppingBag', 
        kategori: 'Mall & Perbelanjaan',
        highlight: 'Pusat Bisnis Pemuda' 
      },
      { 
        nama: 'Stasiun Kereta Api Tawang & Poncol', 
        jarak: '7 Menit (2.8 km)', 
        icon: 'Train', 
        kategori: 'Transportasi Antarkota',
        highlight: 'Akses Kereta Cepat' 
      },
      { 
        nama: 'Bandara Internasional Jenderal Ahmad Yani', 
        jarak: '15 Menit (8.5 km)', 
        icon: 'Plane', 
        kategori: 'Bandara',
        highlight: 'Akses Penerbangan' 
      },
    ],

    ulasanPenghuni: [
      {
        nama: 'dr. Hendra Wicaksono, Sp.PD',
        profesi: 'Dokter Spesialis RS Telogorejo',
        rating: 5,
        teks: 'Sangat terbantu tinggal di BS Residence. Lokasinya hanya 2 menit ke RS Telogorejo, jadi saat ada panggilan darurat malam hari sangat cepat sampai. Parkir mobilnya aman dan ada security yang sigap membantu parkir/valet. Kamar hening, AC dingin, dan kasurnya nyaman sekali untuk istirahat.',
        waktu: '2 minggu lalu'
      },
      {
        nama: 'Natasya Priscilla',
        profesi: 'Relationship Manager Perbankan di Simpang Lima',
        rating: 5,
        teks: 'Konsepnya benar-benar seperti serviced residence hotel bintang. Kamarnya bersih, ada kulkas pribadi di dalam kamar, Smart TV 4K, dan internetnya super cepat untuk kerja remote. Security 24 jam membuat saya merasa sangat aman pulang kerja malam.',
        waktu: '1 bulan lalu'
      },
      {
        nama: 'Kevin & Stephanie',
        profesi: 'Pasangan Suami Istri / Pengusaha',
        rating: 5,
        teks: 'Cari kos campur/pasutri eksklusif di Semarang tengah yang parkir mobilnya lega itu susah banget, tapi di BS Residence parkirannya luas dan indoor. Dekat ke Tentrem Mall dan kulineran Pecinan. Pengelolanya juga ramah dan profesional.',
        waktu: '2 bulan lalu'
      }
    ],

    faq: [
      {
        tanya: 'Apakah BS Residence menerima penghuni putra, putri, atau pasutri?',
        jawab: 'Ya, BS Residence adalah kost eksklusif campur yang menerima penghuni pria, wanita, maupun pasangan suami istri sah (dengan melampirkan fotokopi buku nikah/KTP). Lingkungan sangat tertib, kondusif, dan didominasi karyawan profesional, dokter, dan eksekutif muda.'
      },
      {
        tanya: 'Bagaimana dengan fasilitas parkir mobil dan motor?',
        jawab: 'Tersedia area parkir mobil dan motor beratap di dalam area gedung yang terpantau CCTV dan dijaga security 24 jam. Kami juga menyediakan layanan free valet parking dari petugas keamanan kami saat area parkir sedang padat.'
      },
      {
        tanya: 'Apakah biaya sewa bulanan sudah termasuk air dan Wi-Fi?',
        jawab: 'Ya! Biaya sewa bulanan sudah mencakup Wi-Fi fiber optic 150 Mbps, pasokan air bersih PDAM jernih, pemakaian dapur bersama/microwave, dispenser air minum galon RO gratis, kebersihan koridor harian, dan keamanan 24 jam. Listrik kamar menggunakan sistem token PLN mandiri sehingga Anda leluasa mengatur pemakaian sendiri.'
      },
      {
        tanya: 'Bagaimana cara menjadwalkan survei kamar di BS Residence?',
        jawab: 'Anda dapat langsung mengklik tombol WhatsApp di website ini untuk terhubung dengan pengelola. Kami siap menyambut kedatangan Anda untuk survei fisik atau mengirimkan video walk-through unit kamar yang masih tersedia.'
      },
      {
        tanya: 'Berapa deposit sewa dan bagaimana sistem pembayarannya?',
        jawab: 'Pembayaran sewa dapat dilakukan secara bulanan atau tahunan (tersedia diskon khusus untuk pembayaran tahunan di muka). Untuk rincian deposit jaminan kamar, dapat dikonfirmasikan langsung melalui WhatsApp pengelola saat reservasi.'
      }
    ],

    peraturan: [
      'Menjaga ketenangan dan privasi sesama penghuni, terutama pada jam istirahat malam (pukul 22.00 - 06.00 WIB).',
      'Tamu diperkenankan berkunjung di Lobby / Ruang Tamu lantai 1. Untuk kunjungan ke dalam kamar harap mengonfirmasi ke petugas keamanan.',
      'Dilarang keras merokok di dalam kamar ber-AC dan area koridor tertutup (tersedia designated smoking area outdoor).',
      'Dilarang membawa hewan peliharaan, senjata tajam, miras, serta barang-barang terlarang/narkoba.',
      'Wajib membawa dan menggunakan kartu akses RFID mandiri untuk keluar masuk gedung utama.',
      'Pembayaran sewa bulanan dilakukan tepat waktu pada awal periode sewa setiap bulannya.',
    ],
  }
};

// Aliases agar URL atau slug lama tetap aman dan kompatibel
databaseKos.smartbrilian = databaseKos.bsresidence;
databaseKos.smart = databaseKos.bsresidence;
databaseKos['bs-residence'] = databaseKos.bsresidence;
databaseKos.kosa = databaseKos.bsresidence;
databaseKos.kosb = databaseKos.bsresidence;
databaseKos.hanida = databaseKos.bsresidence;

/**
 * HELPER: Mendapatkan kos aktif
 * Menargetkan per-kos saja (Single Property Catalog):
 * Selalu mengembalikan BS Residence Exclusive Kost sebagai properti utama default.
 */
export function getActiveKost(customPath = null) {
  const defaultKost = databaseKos.bsresidence;

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const paramSlug = urlParams.get('kos');
    if (paramSlug && databaseKos[paramSlug.toLowerCase()]) {
      return databaseKos[paramSlug.toLowerCase()];
    }

    const rawPath = customPath !== null ? customPath : window.location.pathname;
    const pathSlug = rawPath.replace(/^\/+|\/+$/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (pathSlug && databaseKos[pathSlug]) {
      return databaseKos[pathSlug];
    }
  }

  return defaultKost;
}

export function checkIfCurrentPathRejected() {
  return null;
}

export function getActiveKostsList() {
  return [databaseKos.bsresidence];
}

// Format Rupiah Helper
export const formatRupiah = (angka) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
};

// WhatsApp Link Generator dengan format pesan profesional & ramah
export const buatLinkWa = (nomor, namaKos, namaKamar = '') => {
  const cleanNomor = nomor.replace(/[^0-9]/g, '');
  let pesan = '';
  if (namaKamar) {
    pesan = `Halo Pengelola ${namaKos}, saya melihat katalog website untuk unit *${namaKamar}*. Apakah masih tersedia kamar kosong dan boleh saya jadwalkan survei lokasi minggu ini? Terima kasih!`;
  } else {
    pesan = `Halo Pengelola ${namaKos}, saya tertarik ingin menanyakan info ketersediaan kamar kosong dan survei lokasi di Jl. Brumbungan No. 78. Boleh dibantu infonya? Terima kasih!`;
  }
  return `https://wa.me/${cleanNomor}?text=${encodeURIComponent(pesan)}`;
};